// maintenance-feedback.js - related functions for maintenance feedback page

// Use window object to avoid redeclaration errors
window.allFeedbacks = window.allFeedbacks || [];
window.currentTab = window.currentTab || 'feedbacks';
window.currentStatusFilter = window.currentStatusFilter || 'all';

async function loadFeedbacks() {
  showLoading();
  try {
    const result = await callGoogleSheets('readAll', 'feedback');
    if (result.success) {
      window.allFeedbacks = result.data
        .map(mapGSToFeedback)
        .filter(f => f.__backendId);
      renderFeedbacks();
    }
  } catch (error) {
    console.error('Error loading feedbacks:', error);
    showToast('خطا در بارگذاری داده‌ها', '❌');
  } finally {
    hideLoading();
  }
}

function switchTab(tab) {
  window.currentTab = tab;

  document.getElementById('tab-feedbacks').className = tab === 'feedbacks'
    ? 'tab-active px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300'
    : 'bg-gray-700 px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-gray-600';

  document.getElementById('tab-suggestions').className = tab === 'suggestions'
    ? 'tab-active px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300'
    : 'bg-gray-700 px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-gray-600';

  renderFeedbacks();
}

function setStatusFilter(status) {
  window.currentStatusFilter = status;

  const filterMap = {
    'all': 'status-filter-all',
    'نیاز به تعمیر دارد': 'status-filter-needs-repair',
    'تعمیر شد': 'status-filter-repaired',
    'تعمیر نمیشود': 'status-filter-cannot-repair'
  };

  Object.values(filterMap).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.classList.remove('active');
  });

  const activeBtn = document.getElementById(filterMap[status] || 'status-filter-all');
  if (activeBtn) activeBtn.classList.add('active');

  renderFeedbacks();
}

function formatDateDisplay(dateStr) {
  if (!dateStr) return '';
  if (dateStr.includes('T')) {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}/${month}/${day}`;
  }
  return dateStr;
}

function formatRepairTime(timeStr) {
  if (!timeStr) return '';
  if (timeStr.includes('T')) {
    const date = new Date(timeStr);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  }
  return timeStr;
}

function renderFeedbacks() {
  const container = document.getElementById('feedback-list');
  const reportType = window.currentTab === 'feedbacks' ? 'نظریه' : 'پیشنهاد';

  let filtered = window.allFeedbacks.filter(f => f.reportType === reportType);

  if (window.currentTab === 'feedbacks' && window.currentStatusFilter !== 'all') {
    filtered = filtered.filter(f => (f.repairStatus || 'نیاز به تعمیر دارد') === window.currentStatusFilter);
  }

  filtered.sort((a, b) => {
    const statusOrder = { 'نیاز به تعمیر دارد': 0, 'تعمیر نمیشود': 2, 'تعمیر شد': 3 };
    const statusA = statusOrder[a.repairStatus] ?? 1;
    const statusB = statusOrder[b.repairStatus] ?? 1;

    if (statusA !== statusB) return statusA - statusB;
    return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0);
  });

  document.getElementById('item-count').textContent = `${filtered.length} مورد`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-gray-400">
        <div class="text-6xl mb-4">${window.currentTab === 'feedbacks' ? '🗣️' : '💡'}</div>
        <p class="text-lg">هیچ ${window.currentTab === 'feedbacks' ? 'نظری' : 'پیشنهادی'} ثبت نشده است</p>
      </div>
    `;
    return;
  }

  const isFeedback = window.currentTab === 'feedbacks';

  container.innerHTML = filtered.map(item => {
    const statusClass = item.repairStatus === 'تعمیر شد' ? 'status-repaired'
      : item.repairStatus === 'تعمیر نمیشود' ? 'status-cannot-repair'
      : 'status-needs-repair';

    const pinnedClass = item.pinned ? 'pinned-item' : '';
    const dateDisplay = formatDateDisplay(item.date);

    return `
      <div class="dropdown p-5 ${pinnedClass}">
        <div class="flex items-start justify-between gap-4">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-3 flex-wrap">
              <span class="bg-gray-700 px-3 py-1 rounded text-sm">👤 ${item.fullName || 'نامشخص'}</span>
              <span class="bg-gray-700 px-3 py-1 rounded text-sm">🏭 ${item.department || 'نامشخص'}</span>
              ${dateDisplay ? `<span class="bg-gray-600 px-2 py-1 rounded text-xs">📅 ${dateDisplay}</span>` : ''}
              ${item.motorcycle ? `<span class="bg-blue-900/50 px-2 py-1 rounded text-sm">🏍️ ${item.motorcycle}</span>` : ''}
              ${item.motorcycleColor ? `<span class="bg-gray-700 px-2 py-1 rounded text-sm">🎨 ${item.motorcycleColor}</span>` : ''}
              ${item.motorcycleDepartment ? `<span class="bg-gray-700 px-2 py-1 rounded text-sm">🏭 ${item.motorcycleDepartment}</span>` : ''}
            </div>

            <p class="text-gray-200 text-base leading-relaxed">${item.content || ''}</p>
            ${item.repairDate ? `<p class="text-xs text-white mt-2">🔧 زمان تعمیر: ${formatDateDisplay(item.repairDate)} ${item.repairedBy ? `| 👤 ${item.repairedBy}` : ''}</p>` : ''}
          </div>

          ${isFeedback ? `
          <div class="flex flex-col gap-2">
            <div class="status-dropdown-wrapper" style="position: relative;">
              <button onclick="toggleStatusDropdown(event, '${item.__backendId}')" class="status-btn px-3 py-2 rounded text-sm font-semibold text-white ${statusClass}">
                ${item.repairStatus || 'نیاز به تعمیر'}
              </button>
              <div id="dropdown-${item.__backendId}" class="status-dropdown-menu" style="display: none; position: absolute; top: 100%; left: 0; background: linear-gradient(145deg, #1f2937 0%, #374151 100%); border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.6); z-index: 9999; min-width: 200px; border: 1px solid rgba(255, 255, 255, 0.2);">
                <div onclick="updateRepairStatus('${item.__backendId}', 'نیاز به تعمیر دارد')" style="padding: 14px 18px; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 14px; color: #fff; border-radius: 12px 12px 0 0;" onmouseover="this.style.background='rgba(220,38,38,0.5)'" onmouseout="this.style.background='transparent'">🔴 نیاز به تعمیر دارد</div>
                <div onclick="updateRepairStatus('${item.__backendId}', 'تعمیر نمیشود')" style="padding: 14px 18px; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 14px; color: #fff;" onmouseover="this.style.background='rgba(234,88,12,0.5)'" onmouseout="this.style.background='transparent'">🟠 تعمیر نمیشود</div>
                <div onclick="updateRepairStatus('${item.__backendId}', 'تعمیر شد')" style="padding: 14px 18px; cursor: pointer; font-size: 14px; color: #fff; border-radius: 0 0 12px 12px;" onmouseover="this.style.background='rgba(22,163,74,0.5)'" onmouseout="this.style.background='transparent'">🟢 تعمیر شد</div>
              </div>
            </div>

            <button onclick="togglePin('${item.__backendId}')" class="px-3 py-2 rounded text-sm ${item.pinned ? 'bg-yellow-500 text-black' : 'bg-gray-600 text-white'} hover:opacity-80">
               ${item.pinned ? '🔗' : '📌'}
            </button>
          </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function toggleStatusDropdown(e, id) {
  e.stopPropagation();
  const dropdown = document.getElementById(`dropdown-${id}`);

  // Hide all other dropdowns
  document.querySelectorAll('.status-dropdown-menu').forEach(d => {
    if (d.id !== `dropdown-${id}`) d.style.display = 'none';
  });

  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
}

async function updateRepairStatus(id, status) {
  const item = window.allFeedbacks.find(f => f.__backendId === id);
  if (!item) return;

  const now = new Date();
  const repairDate = status !== 'نیاز به تعمیر دارد'
    ? `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}` : '';

  const currentUser = window.currentUser || {};
  const repairedBy = status !== 'نیاز به تعمیر دارد' ? currentUser.fullName || 'نامشخص' : '';

  item.repairStatus = status;
  item.repairDate = repairDate;
  item.repairedBy = repairedBy;

  const gsData = mapFeedbackToGS(item);
  const result = await callGoogleSheets('update', 'feedback', gsData);

  if (result.success) {
    showToast('وضعیت با موفقیت آپدیت شد', '✅');
    renderFeedbacks();
  } else {
    showToast('خطا در آپدیت وضعیت', '❌');
  }
}

async function togglePin(id) {
  const item = window.allFeedbacks.find(f => f.__backendId === id);
  if (!item) return;

  item.pinned = !item.pinned;

  const gsData = mapFeedbackToGS(item);
  const result = await callGoogleSheets('update', 'feedback', gsData);

  if (result.success) {
    showToast(item.pinned ? 'پین شد' : 'پین برداشته شد', '📌');
    renderFeedbacks();
  } else {
    showToast('خطا در آپدیت', '❌');
  }
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.status-dropdown-wrapper') && !e.target.closest('.status-dropdown-menu')) {
    document.querySelectorAll('.status-dropdown-menu').forEach(d => {
      d.style.display = 'none';
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  updateDateTime();
  setStatusFilter('all');
  loadFeedbacks();
});