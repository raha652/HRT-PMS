// Language Translations System
// Supports: Persian (fa), English (en), Pashto (ps)

const translations = {
  fa: {
    // General
    lang_name: 'فارسی',
    lang_native: 'فارسی',
    loading: 'در حال بارگذاری...',
    save: 'ذخیره',
    cancel: 'انصراف',
    confirm: 'تأیید',
    delete: 'حذف',
    edit: 'ویرایش',
    add: 'افزودن',
    search: 'جستجو',
    close: 'بستن',
    submit: 'ثبت',
    yes: 'بله',
    no: 'خیر',
    all: 'همه',
    none: 'هیچکدام',
    select: 'انتخاب کنید',
    status: 'وضعیت',
    date: 'تاریخ',
    time: 'زمان',
    name: 'نام',
    department: 'دیپارتمنت',
    departments: 'دیپارتمنت‌ها',
    color: 'رنگ',
    plate: 'پلاک',
    
    // Header & Navigation
    dashboard_title: 'سیستم مدیریت موتور سکیل ها',
    company_name: 'پارکینگ هرات',
    notifications: 'اعلانات',
    profile_settings: 'تنظیمات پروفایل',
    logout: 'خروج',
    change_theme: 'تغییر تم',
    select_language: 'انتخاب زبان',
    
    // Stats
    total_motorcycles: 'کل موتور سکیل‌ها',
    total_employees: 'کل کارمندان',
    active_requests: 'درخواست‌های فعال',
    in_use: 'در حال استفاده',
    online: 'آنلاین',
    
    // Menu Cards
    requests: 'درخواستی‌ها',
    view_active_requests: 'مشاهده درخواست‌های فعال',
    maintenance: 'تعمیرات',
    maintenance_desc: 'مشکلات و مبلایل موتور سکیل‌ها',
    management: 'مدیریت',
    management_desc: 'مدیریت موتور سکیل‌ها، کارمندان و تاریخچه',
    new_request: 'درخواست دادن',
    new_request_desc: 'درخواست و وضعیت موتور سکیل',
    
    // Authentication
    authentication: 'احراز هویت',
    enter_password: 'برای دسترسی به این بخش، رمز عبور را وارد کنید',
    password: 'رمز عبور',
    enter_your_password: 'رمز عبور را وارد کنید',
    wrong_password: 'رمز عبور اشتباه است',
    
    // Request Modal
    new_request_title: 'درخواست جدید',
    select_department: 'دیپارتمنت را انتخاب کنید',
    select_employee: 'کارمند را انتخاب کنید',
    select_motorcycle: 'موتور سکیل را انتخاب کنید',
    first_select_department: 'ابتدا دیپارتمنت را انتخاب کنید',
    search_departments: 'جستجو در دیپارتمنت‌ها...',
    search_employees: 'جستجو در کارمندان...',
    search_motorcycles: 'جستجو در موتور سکیل‌ها...',
    register_request: 'ثبت درخواست',
    
    // Motorcycle Modal
    add_motorcycle: 'افزودن موتور سکیل جدید',
    edit_motorcycle: 'ویرایش موتور سکیل',
    motorcycle_name: 'نام موتور سکیل',
    example_name: 'مثال: لمر',
    motorcycle_color: 'رنگ',
    example_color: 'مثال: آبی',
    motorcycle_plate: 'پلاک',
    example_plate: 'مثال: TS-01',
    motorcycle_department: 'دیپارتمنت',
    example_department: 'مثال: پاور',
    motorcycle_id: 'آیدی',
    chassis_number: 'نمبر شاسی',
    engine_number: 'نمبر انجین',
    gps: 'جی پی اس',
    gps_status: 'وضعیت جی پی اس',
    has_gps: 'دارد',
    no_gps: 'ندارد',
    document_type: 'نوعیت اسناد',
    license_number: 'نمبر جواز سیر',
    motorcycle_status: 'وضعیت موتور سکیل',
    healthy: 'سالم',
    broken: 'خراب',
    missing: 'مفقود',
    motorcycle_photo: 'عکس موتور سکیل',
    motorcycle_photo_optional: 'عکس موتور سکیل (اختیاری)',
    motorcycle_documents: 'اسناد موتور سکیل',
    motorcycle_documents_optional: 'اسناد موتور سکیل (اختیاری)',
    travel_permit: 'جواز سیر',
    full_documents: 'اسناد صد فی صد',
    active_gps: 'فعال',
    inactive_gps: 'غیر فعال',
    example_motorcycle_name: 'مثال: لمر',
    example_id: 'مثال: TRN_01',
    example_license: 'مثال: 12345',
    example_chassis: 'مثال: CHS-001',
    example_engine: 'مثال: ENG-001',
    motorcycle_specs: 'مشخصات موتور سیکلت',
    show_documents: 'نمایش اسناد',
    old_documents_exist: 'اسناد قبلی موجود است - فایل جدید برای جایگزینی انتخاب کنید',
    
    // Employee Modal
    add_employee: 'افزودن کارمند جدید',
    employee_name: 'نام و نام خانوادگی',
    employee_id: 'آیدی',
    employee_fingerprint: 'شناسه اثر انگشت',
    example_employee_name: 'مثال: شهاب حمیدی',
    example_fingerprint: 'مثال: SH001',
    
    // Request Status
    pending: 'در انتظار',
    active: 'در حال استفاده',
    completed: 'تکمیل شده',
    deleted: 'حذف شده',
    exit: 'خروج',
    entry: 'ورود',
    exit_time: 'ساعت خروج',
    entry_time: 'ساعت ورود',
    usage_time: 'مدت زمان استفاده',
    requester: 'درخواست کننده',
    unknown: 'نامشخص',
    available_in_parking: 'موجود در پارکینگ',
    waiting_for_exit: 'در انتظار خروج',
    waiting_for_delivery: 'در انتظار تحویل',
    
    // Messages
    motorcycle_in_use: 'این موتور سکیل در حال استفاده است و قابل حذف نیست',
    employee_has_requests: 'این کارمند درخواست فعال دارد و قابل حذف نیست',
    request_submitted: 'درخواست با موفقیت ثبت شد',
    request_error: 'خطا در ثبت درخواست',
    motorcycle_added: 'موتور سکیل با موفقیت اضافه شد',
    motorcycle_error: 'خطا در افزودن موتور سکیل',
    motorcycle_deleted: 'موتور سکیل با موفقیت حذف شد',
    employee_added: 'کارمند با موفقیت اضافه شد',
    employee_error: 'خطا در افزودن کارمند',
    employee_deleted: 'کارمند با موفقیت حذف شد',
    data_sync_error: 'خطا در همگام‌سازی داده‌ها',
    no_permission: 'شما دسترسی به این بخش ندارید',
    no_motorcycles_found: 'هیچ موتور سکیلی ثبت نشده است',
    no_employees_found: 'هیچ کارمندی ثبت نشده است',
    no_requests_found: 'هیچ موتور سکیلی درخواست نشده است',
    all_motorcycles_available: 'تمام موتور سکیل‌ها در دسترس هستند',
    no_history_found: 'هیچ تاریخچه‌ای با فیلترهای انتخابی وجود ندارد',
    fill_all_fields: 'لطفاً همه فیلدها را پر کنید',
    
    // Management
    motorcycles_management: 'مدیریت موتور سکیل‌ها',
    employees_management: 'مدیریت کارمندان',
    history: 'تاریخچه',
    accounts: 'اکانت‌ها',
    motorcycle_status_page: 'وضعیت موتور سکیل‌ها',
    back_to_requests: 'بازگشت به درخواستی',
    all_motorcycle_status: 'وضعیت تمام موتورسیکل‌ها',
    search_motorcycle_dept: 'جستجو نام موتور یا دیپارتمنت...',
    motorcycles_displayed: 'موتورسیکل نمایش داده شده',
    fuel_expenses: 'مصرف تیل',
    usage_amount: 'میزان استفاده',
    
    // Fuel
    fuel_type: 'نوع تیل',
    fuel_amount: 'مقدار تیل',
    kilometer: 'کیلومتر',
    total_distance: 'میزان طی مسیر',
    fuel_report: 'گزارش تیل',
    fuel_reports: 'گزارش‌های تیل',
    fuel_date: 'تاریخ افزودن تیل',
    reporter_name: 'نام کارمند',
    liters: 'لیتر',
    
    // Usage
    total_usage: 'مجموعه استفاده',
    sort_by: 'مرتب بر اساس',
    most_usage: 'بیشترین استفاده',
    least_usage: 'کمترین استفاده',
    time_interval: 'انتروال زمانی',
    day: 'روز',
    week: 'هفته',
    month: 'ماه',
    year: 'سال',
    custom: 'سفارشی',
    custom_days: 'روز سفارشی',
    enter_days: 'لطفاً عددی بالاتر از 1 وارد کنید',
    
    // Filter
    filter: 'فیلتر',
    filter_by_status: 'فیلتر بر اساس وضعیت:',
    filter_by_department: 'فیلتر بر اساس دیپارتمنت:',
    
    // Account
    username: 'نام کاربری',
    full_name: 'نام و نام خانوادگی',
    position: 'موقعیت شغلی',
    role: 'نقش',
    admin: 'ادمین',
    user: 'کاربر',
    add_account: 'افزودن اکانت',
    edit_account: 'ویرایش اکانت',
    account_added: 'اکانت با موفقیت اضافه شد',
    account_updated: 'اکانت با موفقیت به‌روزرسانی شد',
    duplicate_username: 'نام کاربری تکراری است',
    show_maintenance: 'نمایش تعمیرات',
    show_notifications: 'نمایش اعلانات',
    displays: 'نمایش‌ها',
    
    // History
    search_history: 'جستجو در تاریخچه...',
    from_date: 'از تاریخ',
    to_date: 'تا تاریخ',
    
    // Motorcycle Details
    motorcycle_details: 'مشخصات موتور سیکلت',
    
    // Footer
    developed_by: 'توسعه‌دهنده',
    current_date: 'تاریخ:',
    
    // Requests Page
    requests_page_title: 'درخواستی‌ها - سیستم مدیریت موتور سکیل ها',
    request_menu_title: 'منوی درخواست - سیستم مدیریت موتور سکیل ها',
    request_menu: 'منوی درخواست',
    back_home: 'بازگشت به صفحه اصلی',
    back_dashboard: 'بازگشت به داشبورد',
    request_motorcycle: 'درخواست موتور سکیل',
    request_motorcycle_desc: 'ثبت درخواست جدید برای استفاده از موتور سکیل',
    motorcycle_status: 'وضعیت موتور سکیل',
    motorcycle_status_desc: 'مشاهده وضعیت تمام موتور سکیل‌ها',
    feedback_suggestions: 'نظریات و پیشنهادات',
    feedback_suggestions_desc: 'ثبت نظر، انتقاد یا پیشنهاد در مورد موتور سکیل‌ها',
    feedback_page_title: 'نظریات و پیشنهادات - سیستم مدیریت موتور سکیل ها',
    feedback_title: 'نظریات و پیشنهادات',
    back_to_request_menu: 'بازگشت به منوی درخواست',
    select_report_type: 'نوع گزارش را انتخاب کنید',
    suggestion: 'پیشنهاد',
    suggestion_desc: 'ایده یا پیشنهاد برای بهبود سیستم',
    opinion_issues: 'نظریه / مشکلات',
    opinion_issues_desc: 'ثبت مشکلات موتور سکیل ها',
    submit_new_report: 'ثبت گزارش جدید',
    feedback_content_label: 'متن پیشنهاد / نظریه',
    feedback_placeholder: 'لطفاً نظر خود را بنویسید...',
    submit_report: 'ثبت گزارش',
    success_message: 'پیام موفقیت',
    register_suggestion: 'ثبت پیشنهاد',
    register_opinion_issues: 'ثبت نظریه / مشکلات',
    suggestion_text: 'متن پیشنهاد',
    opinion_issues_text: 'متن نظریه یا مشکلات',
    select_motorcycle_feedback: '🏍️ موتور سکیل را انتخاب کنید',
    write_report_text: 'لطفاً متن گزارش را بنویسید',
    select_motorcycle_warning: 'لطفاً موتور سکیل را انتخاب کنید',
    report_registered: 'گزارش با موفقیت ثبت شد',
    report_error: 'خطا در ثبت گزارش در گوگل شیت',
    requested_motorcycles: 'موتور سکیل‌های درخواست داده شده',
    search_placeholder: 'جستجو بر اساس نام، دیپارتمنت، موتور سکیل و ...',
    
    // Management Page
    management_page_title: 'مدیریت - سیستم مدیریت موتور سکیل ها',
    management_panel: 'پنل مدیریت',
    back_dashboard: 'بازگشت به داشبورد',
    back_to_management: 'بازگشت به مدیریت',
    motorcycles: 'موتور سکیل‌ها',
    add_new_motorcycle: 'اضافه کردن موتور سکیل جدید',
    motorcycle_expenses: 'مصارف موتور سکیل ها',
    manage_expenses: 'مدیریت مصارف و استفاده',
    employees: 'کارمندان',
    add_new_employee: 'اضافه کردن کارمند جدید',
    entry_exit_report: 'گزارش ورود و خروج',
    create_account: 'ساخت اکانت',
    users_roles_management: 'مدیریت کاربران و نقش‌ها',
    management_page: 'صفحه مدیریت',
    
    // Accounts Page
    accounts_page_title: 'مدیریت اکانت‌ها - سیستم مدیریت موتور سکیل ها',
    accounts_management: 'مدیریت اکانت‌ها',
    accounts_list: 'لیست اکانت‌ها',
    add_new_account: 'افزودن اکانت جدید',
    search_accounts_placeholder: 'جستجو بر اساس نام، نام کاربری، نقش، موقعیت شغلی یا دیپارتمنت...',
    edit_account_title: 'ویرایش اکانت',
    
    // History Page
    history_page_title: 'تاریخچه - سیستم مدیریت موتور سکیل ها',
    history_management: 'مدیریت تاریخچه',
    search_history_placeholder: 'جستجو در تاریخچه...',
    
    // Employees Page  
    employees_page_title: 'مدیریت کارمندان - سیستم مدیریت موتور سکیل ها',
    employees_list: 'لیست کارمندان',
    search_employees_placeholder: 'جستجو بر اساس نام، آیدی یا دیپارتمنت...',
    
    // Motorcycles Page
    motorcycles_page_title: 'مدیریت موتور سکیل‌ها - سیستم مدیریت موتور سکیل ها',
    motorcycles_list: 'لیست موتور سکیل‌ها',
    search_motorcycles_placeholder: 'جستجو بر اساس نام، رنگ، پلاک یا دیپارتمنت...',
    
    // Fuel Consumption Page
    fuel_page_title: 'مصارف موتور سکیل - سیستم مدیریت موتور سکیل ها',
    fuel_consumption_title: 'مصارف موتور سکیل ها',
    fuel_management: 'مدیریت مصارف',
    fuel_list: 'لیست مصارف',
    fuel_expenses_desc: 'ثبت و مدیریت مصارف تیل',
    motorcycle_usage: 'میزان استفاده ی موتور سکیل',
    usage_report: 'گزارش میزان استفاده',
    
    // Usage Amount Page
    usage_amount_title: 'میزان استفاده موتور سکیل',
    search_usage_placeholder: 'جستجو بر اساس نام موتور سکیل، دیپارتمنت و ...',
    back_to_fuel: 'بازگشت',
    custom_days_title: 'انتخاب بازه زمانی سفارشی',
    custom_days_label: 'تعداد روزهای گذشته را وارد کنید:',
    custom_days_placeholder: 'مثلاً ۳۰',
    custom_days_hint: 'آمار استفاده در این تعداد روز اخیر نمایش داده خواهد شد',
    usage_history_title: 'تاریخچه استفاده موتورسیکلت',
    
    // Fuel Expenses Page
    fuel_expenses_title: 'مصارف تیل',
    fuel_expenses_header: 'مصارف تیل',
    fuel_list_title: 'لیست مصارف تیل',
    register_fuel_report: 'ثبت گزارش',
    search_fuel_placeholder: 'جستجو بر اساس نام موتور سکیل ...',
    fuel_reports_for_motorcycle: 'گزارش‌های تیل برای موتور',
    search_by_date: 'جستجو بر اساس تاریخ:',
    select_fuel_motorcycle: 'موتور سکیل را انتخاب کنید',
    fuel_type_label: 'نوعیت تیل',
    fuel_type_select: 'انتخاب کنید',
    petrol: 'پطرول',
    diesel: 'دیزل',
    fuel_amount_label: 'مقدار تیل',
    fuel_amount_placeholder: 'مثال: 5 لیتر',
    kilometer_label: 'میزان کیلومتر',
    kilometer_placeholder: 'مثال: 100 کیلومتر',
    fuel_date_label: 'تاریخ اضافه کردن تیل',
    submit_btn: 'ثبت',
    
    // Notifications
    no_notifications: 'اعلانی وجود ندارد',
    mark_all_read: 'علامت‌گذاری همه به عنوان خوانده شده',
    notifications_desc: 'مشاهده و ثبت اعلانات',
    register_new_notification: 'ثبت اعلان جدید',
    notification_title: 'عنوان اعلان',
    notification_title_placeholder: 'عنوان اعلان را وارد کنید',
    notification_message: 'متن اعلان',
    notification_message_placeholder: 'متن اعلان را وارد کنید',
    submit_notification: 'ثبت اعلان',
    notification_load_error: 'خطا در بارگذاری اعلانات',
    notification_success: 'اعلان با موفقیت ثبت شد',
    notification_error: 'خطا در ثبت اعلان',
    
    // Idle logout
    idle_logout_message: 'به دلیل عدم فعالیت، شما لاگ‌اوت شدید',
    
    // Shortcuts
    shortcuts: 'شورت‌کات‌ها',
    search_shortcut: 'جستجو',
    new_request_shortcut: 'درخواست جدید',
    close_modals: 'بستن مودال‌ها',
    help: 'راهنما',
    
    // Misc
    available: 'موجود',
    no_motorcycles_in_dept: 'هیچ موتور سکیلی در این دیپارتمنت یافت نشد',
    no_employees_in_dept: 'هیچ کارمندی در این دیپارتمنت یافت نشد',
    no_free_motorcycles: 'هیچ موتور سکیل آزادی در این دیپارتمنت موجود نیست',
    no_free_motorcycle_found: 'هیچ موتور سکیل آزادی یافت نشد',
    exit_registered: 'خروج با موفقیت ثبت شد',
    entry_registered: 'ورود با موفقیت ثبت شد',
    exit_error: 'خطا در ثبت خروج',
    entry_error: 'خطا در ثبت ورود',
    motorcycle_not_found: 'موتور سکیل یافت نشد',
    employee_not_found: 'کارمند یافت نشد',
    request_not_found: 'درخواست یافت نشد',
    upload_photo: 'در حال آپلود عکس...',
    upload_documents: 'در حال آپلود اسناد...',
    upload_error: 'خطا در آپلود',
    syncing: 'در حال همگام‌سازی...',
    
    // Maintenance access
    maintenance_access_message: 'برای دسترسی به تعمیرات، رمز عبور را وارد کنید',
    management_access_message: 'برای دسترسی به پنل مدیریت، رمز عبور را وارد کنید',
    motorcycle_access_message: 'برای افزودن موتور سکیل، رمز عبور مدیریت موتور سکیل‌ها را وارد کنید',
    employee_access_message: 'برای افزودن کارمند، رمز عبور مدیریت کارمندان را وارد کنید',
    
    // Max records
    max_records_reached: 'حداکثر تعداد رکوردها به پایان رسیده است',
    
    // Google Sheets sync
    sync_accounts_error: 'هشدار: همگام‌سازی اکانت‌ها با Google Sheets ناموفق بود',
    save_data_error: 'خطا در ذخیره داده‌ها',
    save_users_error: 'خطا در ذخیره کاربران',
    cannot_delete_admin: 'نمی‌توان اکانت شهاب حمیدی را حذف کرد',
    no_accounts_found: 'هیچ اکانتی با جستجوی شما یافت نشد',
    no_department_registered: 'هیچ دیپارتمنتی ثبت نشده است. ابتدا موتور سکیل اضافه کنید.',
    no_department_found: 'هیچ دیپارتمنتی یافت نشد',
    no_department_available: 'هیچ دیپارتمنتی موجود نیست',
    no_motorcycle_registered: 'هیچ موتور سکیلی ثبت نشده است',
    
    // Maintenance page
    maintenance_page_title: 'تعمیرات - سیستم مدیریت موتور سکیل ها',
    select_section: 'انتخاب بخش را انتخاب کنید',
    opinions: 'نظریات',
    opinions_desc: 'ثبت نظریات و پیشنهادات',
    motorcycle_oil: 'موبلایل موتور سکیل ها',
    motorcycle_oil_desc: 'مدیریت موبلایل موتور سکیل‌ها',
    
    // Maintenance Mobile page
    maintenance_mobile_title: 'موبلایل موتور سکیل‌ها - سیستم مدیریت موتور سکیل ها',
    mobile_title: 'موبلایل موتور سکیل‌ها',
    back_to_maintenance: 'بازگشت به تعمیرات',
    register_oil_report: 'ثبت گزارش موبلایل',
    oil_report_title: 'ثبت گزارش موبلایل',
    select_motorcycle_oil: 'موتور سکیل را انتخاب کنید',
    oil_amount_liters: 'مقدار موبلایل (لیتر)',
    oil_reports: 'گزارشات موبلایل',
    no_oil_reports: 'هیچ گزارشی ثبت نشده است',
    
    // Maintenance Feedback page
    maintenance_feedback_title: 'نظریات تعمیرات - سیستم مدیریت موتور سکیل ها',
    suggestions: 'پیشنهادات',
    needs_repair: 'نیاز به تعمیر دارد',
    repaired: 'تعمیر شد',
    cannot_repair: 'تعمیر نمیشود',
    under_review: 'در حال بررسی',
    items_count: 'مورد',
    no_feedbacks: 'هیچ نظری ثبت نشده است',
    no_suggestions: 'هیچ پیشنهادی ثبت نشده است',
    change_status: 'تغییر وضعیت',
    pin_item: 'سنجاق کردن',
    unpin_item: 'برداشتن سنجاق',
    delete_item: 'حذف',
    status_updated: 'وضعیت با موفقیت آپدیت شد',
    update_error: 'خطا در آپدیت وضعیت',
    pinned: 'سنجاق شد',
    unpinned: 'سنجاق برداشته شد',
    repair_time: 'زمان تعمیر',
    reply: 'پاسخ',
    write_reply: 'پاسخ خود را بنویسید...',
    reply_submitted: 'پاسخ با موفقیت ثبت شد',
    reply_error: 'خطا در ثبت پاسخ',
    
    // Direction
    dir: 'rtl',
    
    // Fuel report messages
    select_motorcycle_first: 'لطفاً یک موتور سکیل انتخاب کنید',
    fill_all_fields_fuel: 'لطفاً همه فیلدها را پر کنید',
    fuel_report_success: 'گزارش تیل با موفقیت ثبت شد',
    fuel_report_error: 'خطا در ثبت گزارش تیل',
    update_previous_report_error: 'خطا در به‌روزرسانی گزارش قبلی',
    no_fuel_reports: 'هیچ گزارشی برای این موتور ثبت نشده',
    select_motorcycle_fuel: 'موتور سکیل را انتخاب کنید',
    show_reports: 'نمایش گزارش‌ها',
    
    // Usage history
    usage_history: 'تاریخچه استفاده',
    no_usage_history: 'هیچ تاریخچه‌ای برای این موتورسیکلت وجود ندارد',
    
    // Online status
    online_status: 'آنلاین',
    
    // Profile
    photo: 'عکس',
    update_photo: 'به‌روزرسانی عکس',
    profile_photo: 'عکس پروفایل',
    edit_personal_info: 'ویرایش اطلاعات شخصی',
    edit_profile: 'ویرایش پروفایل',
    enter_full_name: 'نام و نام خانوادگی',
    enter_new_password: 'برای تغییر رمز، رمز جدید را وارد کنید',
    save_changes: 'ذخیره تغییرات',
    
    // Deleter
    deleted_by: 'حذف‌کننده'
  },
  
  en: {
    // General
    lang_name: 'English',
    lang_native: 'English',
    loading: 'Loading...',
    save: 'Save',
    cancel: 'Cancel',
    confirm: 'Confirm',
    delete: 'Delete',
    edit: 'Edit',
    add: 'Add',
    search: 'Search',
    close: 'Close',
    submit: 'Submit',
    yes: 'Yes',
    no: 'No',
    all: 'All',
    none: 'None',
    select: 'Select',
    status: 'Status',
    date: 'Date',
    time: 'Time',
    name: 'Name',
    department: 'Department',
    departments: 'Departments',
    color: 'Color',
    plate: 'Plate',
    
    // Header & Navigation
    dashboard_title: 'Motorcycle Management System',
    company_name: 'Herat Parking',
    notifications: 'Notifications',
    profile_settings: 'Profile Settings',
    logout: 'Logout',
    change_theme: 'Change Theme',
    select_language: 'Select Language',
    
    // Stats
    total_motorcycles: 'Total Motorcycles',
    total_employees: 'Total Employees',
    active_requests: 'Active Requests',
    in_use: 'In Use',
    online: 'Online',
    
    // Menu Cards
    requests: 'Requests',
    view_active_requests: 'View active requests',
    maintenance: 'Maintenance',
    maintenance_desc: 'Motorcycle issues and mobile',
    management: 'Management',
    management_desc: 'Manage motorcycles, employees and history',
    new_request: 'Make Request',
    new_request_desc: 'Request and motorcycle status',
    
    // Authentication
    authentication: 'Authentication',
    enter_password: 'Enter password to access this section',
    password: 'Password',
    enter_your_password: 'Enter your password',
    wrong_password: 'Wrong password',
    
    // Request Modal
    new_request_title: 'New Request',
    select_department: 'Select department',
    select_employee: 'Select employee',
    select_motorcycle: 'Select motorcycle',
    first_select_department: 'First select a department',
    search_departments: 'Search departments...',
    search_employees: 'Search employees...',
    search_motorcycles: 'Search motorcycles...',
    register_request: 'Submit Request',
    
    // Motorcycle Modal
    add_motorcycle: 'Add New Motorcycle',
    edit_motorcycle: 'Edit Motorcycle',
    motorcycle_name: 'Motorcycle Name',
    example_name: 'e.g.: Lamer',
    motorcycle_color: 'Color',
    example_color: 'e.g.: Blue',
    motorcycle_plate: 'Plate',
    example_plate: 'e.g.: TS-01',
    motorcycle_department: 'Department',
    example_department: 'e.g.: Power',
    motorcycle_id: 'ID',
    chassis_number: 'Chassis Number',
    engine_number: 'Engine Number',
    gps: 'GPS',
    gps_status: 'GPS Status',
    has_gps: 'Yes',
    no_gps: 'No',
    document_type: 'Document Type',
    license_number: 'License Number',
    motorcycle_status: 'Motorcycle Status',
    healthy: 'Healthy',
    broken: 'Broken',
    missing: 'Missing',
    motorcycle_photo: 'Motorcycle Photo',
    motorcycle_photo_optional: 'Motorcycle Photo (Optional)',
    motorcycle_documents: 'Motorcycle Documents',
    motorcycle_documents_optional: 'Motorcycle Documents (Optional)',
    travel_permit: 'Travel Permit',
    full_documents: '100% Documents',
    active_gps: 'Active',
    inactive_gps: 'Inactive',
    example_motorcycle_name: 'e.g.: Lamer',
    example_id: 'e.g.: TRN_01',
    example_license: 'e.g.: 12345',
    example_chassis: 'e.g.: CHS-001',
    example_engine: 'e.g.: ENG-001',
    motorcycle_specs: 'Motorcycle Specifications',
    show_documents: 'Show Documents',
    old_documents_exist: 'Old documents exist - Select new file to replace',
    
    // Employee Modal
    add_employee: 'Add New Employee',
    employee_name: 'Full Name',
    employee_id: 'ID',
    employee_fingerprint: 'Fingerprint ID',
    example_employee_name: 'e.g.: Shahab Hamidi',
    example_fingerprint: 'e.g.: SH001',
    
    // Request Status
    pending: 'Pending Delivery',
    active: 'In Use',
    completed: 'Completed',
    deleted: 'Deleted',
    exit: 'Exit',
    entry: 'Entry',
    exit_time: 'Exit Time',
    entry_time: 'Entry Time',
    usage_time: 'Usage Time',
    requester: 'Requester',
    unknown: 'Unknown',
    available_in_parking: 'Available in Parking',
    waiting_for_exit: 'Waiting for Exit',
    waiting_for_delivery: 'Waiting for Delivery',
    
    // Messages
    motorcycle_in_use: 'This motorcycle is in use and cannot be deleted',
    employee_has_requests: 'This employee has active requests and cannot be deleted',
    request_submitted: 'Request submitted successfully',
    request_error: 'Error submitting request',
    motorcycle_added: 'Motorcycle added successfully',
    motorcycle_error: 'Error adding motorcycle',
    motorcycle_deleted: 'Motorcycle deleted successfully',
    employee_added: 'Employee added successfully',
    employee_error: 'Error adding employee',
    employee_deleted: 'Employee deleted successfully',
    data_sync_error: 'Error syncing data',
    no_permission: 'You do not have permission to access this section',
    no_motorcycles_found: 'No motorcycles registered',
    no_employees_found: 'No employees registered',
    no_requests_found: 'No motorcycles requested',
    all_motorcycles_available: 'All motorcycles are available',
    no_history_found: 'No history found with selected filters',
    fill_all_fields: 'Please fill in all fields',
    
    // Management
    motorcycles_management: 'Motorcycles Management',
    employees_management: 'Employees Management',
    history: 'History',
    accounts: 'Accounts',
    motorcycle_status_page: 'Motorcycle Status',
    back_to_requests: 'Back to Requests',
    all_motorcycle_status: 'All Motorcycles Status',
    search_motorcycle_dept: 'Search motorcycle name or department...',
    motorcycles_displayed: 'motorcycles displayed',
    fuel_expenses: 'Fuel Expenses',
    usage_amount: 'Usage Amount',
    
    // Management Page
    management_page_title: 'Management - Motorcycle Management System',
    management_panel: 'Management Panel',
    back_dashboard: 'Back to Dashboard',
    motorcycles: 'Motorcycles',
    add_new_motorcycle: 'Add New Motorcycle',
    motorcycle_expenses: 'Motorcycle Expenses',
    manage_expenses: 'Manage Expenses and Usage',
    employees: 'Employees',
    add_new_employee: 'Add New Employee',
    entry_exit_report: 'Entry/Exit Report',
    create_account: 'Create Account',
    users_roles_management: 'Users and Roles Management',
    management_page: 'Management Page',
    back_to_management: 'Back to Management',
    
    // Accounts Page
    accounts_page_title: 'Accounts Management - Motorcycle Management System',
    accounts_management: 'Accounts Management',
    accounts_list: 'Accounts List',
    add_new_account: 'Add New Account',
    search_accounts_placeholder: 'Search by name, username, role, position or department...',
    edit_account_title: 'Edit Account',
    
    // History Page
    history_page_title: 'History - Motorcycle Management System',
    history_management: 'History Management',
    search_history_placeholder: 'Search history...',
    
    // Employees Page  
    employees_page_title: 'Employees Management - Motorcycle Management System',
    employees_list: 'Employees List',
    search_employees_placeholder: 'Search by name, ID or department...',
    
    // Motorcycles Page
    motorcycles_page_title: 'Motorcycles Management - Motorcycle Management System',
    motorcycles_list: 'Motorcycles List',
    search_motorcycles_placeholder: 'Search by name, color, plate or department...',
    
    // Fuel Consumption Page
    fuel_page_title: 'Fuel Consumption - Motorcycle Management System',
    fuel_consumption_title: 'Motorcycle Expenses',
    fuel_management: 'Fuel Management',
    fuel_list: 'Fuel List',
    fuel_expenses_desc: 'Register and manage fuel expenses',
    motorcycle_usage: 'Motorcycle Usage',
    usage_report: 'Usage Report',
    
    // Usage Amount Page
    usage_amount_title: 'Motorcycle Usage Amount',
    search_usage_placeholder: 'Search by motorcycle name, department...',
    back_to_fuel: 'Back',
    custom_days_title: 'Select Custom Time Range',
    custom_days_label: 'Enter number of past days:',
    custom_days_placeholder: 'e.g. 30',
    custom_days_hint: 'Usage statistics will be displayed for this number of recent days',
    usage_history_title: 'Motorcycle Usage History',
    
    // Fuel Expenses Page
    fuel_expenses_title: 'Fuel Expenses',
    fuel_expenses_header: 'Fuel Expenses',
    fuel_list_title: 'Fuel Expenses List',
    register_fuel_report: 'Register Report',
    search_fuel_placeholder: 'Search by motorcycle name...',
    fuel_reports_for_motorcycle: 'Fuel Reports for Motorcycle',
    search_by_date: 'Search by date:',
    select_fuel_motorcycle: 'Select Motorcycle',
    fuel_type_label: 'Fuel Type',
    fuel_type_select: 'Select',
    petrol: 'Petrol',
    diesel: 'Diesel',
    fuel_amount_label: 'Fuel Amount',
    fuel_amount_placeholder: 'e.g.: 5 liters',
    kilometer_label: 'Kilometer',
    kilometer_placeholder: 'e.g.: 100 km',
    fuel_date_label: 'Fuel Addition Date',
    submit_btn: 'Submit',
    
    // Fuel
    fuel_type: 'Fuel Type',
    fuel_amount: 'Fuel Amount',
    kilometer: 'Kilometer',
    total_distance: 'Total Distance',
    fuel_report: 'Fuel Report',
    fuel_reports: 'Fuel Reports',
    fuel_date: 'Fuel Addition Date',
    reporter_name: 'Employee Name',
    liters: 'Liters',
    
    // Usage
    total_usage: 'Total Usage',
    sort_by: 'Sort by',
    most_usage: 'Most Usage',
    least_usage: 'Least Usage',
    time_interval: 'Time Interval',
    day: 'Day',
    week: 'Week',
    month: 'Month',
    year: 'Year',
    custom: 'Custom',
    custom_days: 'Custom Days',
    enter_days: 'Please enter a number greater than 1',
    
    // Filter
    filter: 'Filter',
    filter_by_status: 'Filter by Status',
    filter_by_department: 'Filter by Department',
    
    // Account
    username: 'Username',
    full_name: 'Full Name',
    position: 'Position',
    role: 'Role',
    admin: 'Admin',
    user: 'User',
    add_account: 'Add Account',
    edit_account: 'Edit Account',
    account_added: 'Account added successfully',
    account_updated: 'Account updated successfully',
    duplicate_username: 'Username already exists',
    show_maintenance: 'Show Maintenance',
    show_notifications: 'Show Notifications',
    displays: 'Displays',
    
    // History
    search_history: 'Search history...',
    from_date: 'From Date',
    to_date: 'To Date',
    
    // Motorcycle Details
    motorcycle_details: 'Motorcycle Details',
    
    // Footer
    developed_by: 'Developed by',
    current_date: 'Date:',
    
    // Requests Page
    requests_page_title: 'Requests - Motorcycle Management System',
    request_menu_title: 'Request Menu - Motorcycle Management System',
    request_menu: 'Request Menu',
    back_home: 'Back to Home',
    back_dashboard: 'Back to Dashboard',
    request_motorcycle: 'Request Motorcycle',
    request_motorcycle_desc: 'Register a new request to use a motorcycle',
    motorcycle_status: 'Motorcycle Status',
    motorcycle_status_desc: 'View status of all motorcycles',
    feedback_suggestions: 'Feedback & Suggestions',
    feedback_suggestions_desc: 'Submit feedback, complaints or suggestions about motorcycles',
    feedback_page_title: 'Feedback & Suggestions - Motorcycle Management System',
    feedback_title: 'Feedback & Suggestions',
    back_to_request_menu: 'Back to Request Menu',
    select_report_type: 'Select report type',
    suggestion: 'Suggestion',
    suggestion_desc: 'Ideas or suggestions to improve the system',
    opinion_issues: 'Opinion / Issues',
    opinion_issues_desc: 'Report motorcycle issues',
    submit_new_report: 'Submit New Report',
    feedback_content_label: 'Suggestion / Opinion text',
    feedback_placeholder: 'Please write your opinion...',
    submit_report: 'Submit Report',
    success_message: 'Success message',
    register_suggestion: 'Submit Suggestion',
    register_opinion_issues: 'Submit Opinion / Issues',
    suggestion_text: 'Suggestion text',
    opinion_issues_text: 'Opinion or issues text',
    select_motorcycle_feedback: '🏍️ Select Motorcycle',
    write_report_text: 'Please write the report text',
    select_motorcycle_warning: 'Please select a motorcycle',
    report_registered: 'Report submitted successfully',
    report_error: 'Error submitting report to Google Sheets',
    requested_motorcycles: 'Requested Motorcycles',
    search_placeholder: 'Search by name, department, motorcycle...',
    
    // Notifications
    no_notifications: 'No notifications',
    mark_all_read: 'Mark all as read',
    notifications_desc: 'View and register notifications',
    register_new_notification: 'Register New Notification',
    notification_title: 'Notification Title',
    notification_title_placeholder: 'Enter notification title',
    notification_message: 'Notification Message',
    notification_message_placeholder: 'Enter notification message',
    submit_notification: 'Submit Notification',
    notification_load_error: 'Error loading notifications',
    notification_success: 'Notification submitted successfully',
    notification_error: 'Error submitting notification',
    
    // Idle logout
    idle_logout_message: 'You have been logged out due to inactivity',
    
    // Shortcuts
    shortcuts: 'Shortcuts',
    search_shortcut: 'Search',
    new_request_shortcut: 'New Request',
    close_modals: 'Close Modals',
    help: 'Help',
    
    // Misc
    available: 'Available',
    no_motorcycles_in_dept: 'No motorcycles found in this department',
    no_employees_in_dept: 'No employees found in this department',
    no_free_motorcycles: 'No free motorcycles available in this department',
    no_free_motorcycle_found: 'No free motorcycle found',
    exit_registered: 'Exit registered successfully',
    entry_registered: 'Entry registered successfully',
    exit_error: 'Error registering exit',
    entry_error: 'Error registering entry',
    motorcycle_not_found: 'Motorcycle not found',
    employee_not_found: 'Employee not found',
    request_not_found: 'Request not found',
    upload_photo: 'Uploading photo...',
    upload_documents: 'Uploading documents...',
    upload_error: 'Upload error',
    syncing: 'Syncing...',
    
    // Maintenance access
    maintenance_access_message: 'Enter password to access maintenance',
    management_access_message: 'Enter password to access management panel',
    motorcycle_access_message: 'Enter motorcycle management password to add motorcycle',
    employee_access_message: 'Enter employee management password to add employee',
    
    // Max records
    max_records_reached: 'Maximum number of records reached',
    
    // Google Sheets sync
    sync_accounts_error: 'Warning: Account sync with Google Sheets failed',
    save_data_error: 'Error saving data',
    save_users_error: 'Error saving users',
    cannot_delete_admin: 'Cannot delete Shahab Hamidi account',
    no_accounts_found: 'No accounts found matching your search',
    no_department_registered: 'No departments registered. Add a motorcycle first.',
    no_department_found: 'No department found',
    no_department_available: 'No department available',
    no_motorcycle_registered: 'No motorcycle registered',
    
    // Maintenance page
    maintenance_page_title: 'Maintenance - Motorcycle Management System',
    select_section: 'Select section',
    opinions: 'Opinions',
    opinions_desc: 'Register opinions and suggestions',
    motorcycle_oil: 'Motorcycle Oil',
    motorcycle_oil_desc: 'Manage motorcycle oil',
    
    // Maintenance Mobile page
    maintenance_mobile_title: 'Motorcycle Oil - Motorcycle Management System',
    mobile_title: 'Motorcycle Oil',
    back_to_maintenance: 'Back to Maintenance',
    register_oil_report: 'Register Oil Report',
    oil_report_title: 'Register Oil Report',
    select_motorcycle_oil: 'Select Motorcycle',
    oil_amount_liters: 'Oil Amount (Liters)',
    oil_reports: 'Oil Reports',
    no_oil_reports: 'No reports registered',
    
    // Maintenance Feedback page
    maintenance_feedback_title: 'Maintenance Feedback - Motorcycle Management System',
    suggestions: 'Suggestions',
    needs_repair: 'Needs Repair',
    repaired: 'Repaired',
    cannot_repair: 'Cannot Repair',
    under_review: 'Under Review',
    items_count: 'items',
    no_feedbacks: 'No feedbacks registered',
    no_suggestions: 'No suggestions registered',
    change_status: 'Change Status',
    pin_item: 'Pin',
    unpin_item: 'Unpin',
    delete_item: 'Delete',
    status_updated: 'Status updated successfully',
    update_error: 'Error updating status',
    pinned: 'Pinned',
    unpinned: 'Unpinned',
    repair_time: 'Repair Time',
    reply: 'Reply',
    write_reply: 'Write your reply...',
    reply_submitted: 'Reply submitted successfully',
    reply_error: 'Error submitting reply',
    
    // Direction
    dir: 'ltr',
    
    // Fuel report messages
    select_motorcycle_first: 'Please select a motorcycle first',
    fill_all_fields_fuel: 'Please fill in all fields',
    fuel_report_success: 'Fuel report submitted successfully',
    fuel_report_error: 'Error submitting fuel report',
    update_previous_report_error: 'Error updating previous report',
    no_fuel_reports: 'No reports registered for this motorcycle',
    select_motorcycle_fuel: 'Select Motorcycle',
    show_reports: 'Show Reports',
    
    // Usage history
    usage_history: 'Usage History',
    no_usage_history: 'No usage history for this motorcycle',
    
    // Online status
    online_status: 'Online',
    
    // Profile
    photo: 'Photo',
    update_photo: 'Update Photo',
    profile_photo: 'Profile Photo',
    edit_personal_info: 'Edit personal information',
    edit_profile: 'Edit Profile',
    enter_full_name: 'Enter full name',
    enter_new_password: 'Enter new password to change',
    save_changes: 'Save Changes',
    
    // Deleter
    deleted_by: 'Deleted By'
  },
  
  ps: {
    // General
    lang_name: 'Pashto',
    lang_native: 'پښتو',
    loading: 'لوډ کیږي...',
    save: 'خوندي کړئ',
    cancel: 'لغوه',
    confirm: 'تایید',
    delete: 'ړنګول',
    edit: 'سمول',
    add: 'زیاتول',
    search: 'لټون',
    close: 'بندول',
    submit: 'وړاندې کول',
    yes: 'هو',
    no: 'نه',
    all: 'ټول',
    none: 'هیڅ',
    select: 'غوره کړئ',
    status: 'وضعیت',
    date: 'نیټه',
    time: 'وخت',
    name: 'نوم',
    department: 'څانګه',
    departments: 'څانګې',
    color: 'رنګ',
    plate: 'پلیټ',
    
    // Header & Navigation
    dashboard_title: 'د موټرسایکل مدیریت سیسټم',
    company_name: 'هرات پارکینګ',
    notifications: 'اعلانونه',
    profile_settings: 'پروفایل تنظیمات',
    logout: 'وتل',
    change_theme: 'تیم بدلول',
    select_language: 'ژبه غوره کړئ',
    
    // Stats
    total_motorcycles: 'ټول موټرسایکلونه',
    total_employees: 'ټول کارکوونکي',
    active_requests: 'فعالې غوښتنې',
    in_use: 'په کار کې',
    online: 'آنلاین',
    
    // Menu Cards
    requests: 'غوښتنې',
    view_active_requests: 'فعالې غوښتنې وګورئ',
    maintenance: 'ترمیمونه',
    maintenance_desc: 'د موټرسایکل مسائل',
    management: 'مدیریت',
    management_desc: 'د موټرسایکلونو، کارکوونکو او تاریخ مدیریت',
    new_request: 'غوښتنه کول',
    new_request_desc: 'غوښتنه او د موټرسایکل وضعیت',
    
    // Authentication
    authentication: 'تصدیق',
    enter_password: 'د دې برخې ته د لاسرسي لپاره پټنوم داخل کړئ',
    password: 'پټنوم',
    enter_your_password: 'خپل پټنوم داخل کړئ',
    wrong_password: 'پټنوم غلط دی',
    
    // Request Modal
    new_request_title: 'نوې غوښتنه',
    select_department: 'څانګه غوره کړئ',
    select_employee: 'کارکوونکی غوره کړئ',
    select_motorcycle: 'موټرسایکل غوره کړئ',
    first_select_department: 'لومړی څانګه غوره کړئ',
    search_departments: 'په څانګو کې لټون...',
    search_employees: 'په کارکوونکو کې لټون...',
    search_motorcycles: 'په موټرسایکلونو کې لټون...',
    register_request: 'غوښتنه ثبت کړئ',
    
    // Motorcycle Modal
    add_motorcycle: 'نوی موټرسایکل اضافه کړئ',
    edit_motorcycle: 'موټرسایکل سمول',
    motorcycle_name: 'د موټرسایکل نوم',
    example_name: 'مثال: لمر',
    motorcycle_color: 'رنګ',
    example_color: 'مثال: نیله',
    motorcycle_plate: 'پلیټ',
    example_plate: 'مثال: TS-01',
    motorcycle_department: 'څانګه',
    example_department: 'مثال: پاور',
    motorcycle_id: 'ID',
    chassis_number: 'شاسی نمبر',
    engine_number: 'انجین نمبر',
    gps: 'جي پی ایس',
    gps_status: 'د جي پی ایس وضعیت',
    has_gps: 'لري',
    no_gps: 'نلري',
    document_type: 'د اسناد ډول',
    license_number: 'د جواز سیر نمبر',
    motorcycle_status: 'د موټرسایکل وضعیت',
    healthy: 'روغ',
    broken: 'خراب',
    missing: 'ورک',
    motorcycle_photo: 'د موټرسایکل عکس',
    motorcycle_photo_optional: 'د موټرسایکل عکس (اختیاري)',
    motorcycle_documents: 'د موټرسایکل اسناد',
    motorcycle_documents_optional: 'د موټرسایکل اسناد (اختیاري)',
    travel_permit: 'د سفر جواز',
    full_documents: 'سل فیصد اسناد',
    active_gps: 'فعال',
    inactive_gps: 'غیر فعال',
    example_motorcycle_name: 'مثال: لمر',
    example_id: 'مثال: TRN_01',
    example_license: 'مثال: 12345',
    example_chassis: 'مثال: CHS-001',
    example_engine: 'مثال: ENG-001',
    motorcycle_specs: 'د موټرسایکل مشخصات',
    show_documents: 'اسناد وښایاست',
    old_documents_exist: 'زړ اسناد شتون لري - د بدلولو لپاره نوی فایل غوره کړئ',
    
    // Employee Modal
    add_employee: 'نوی کارکوونکی اضافه کړئ',
    employee_name: 'کامل نوم',
    employee_id: 'ID',
    employee_fingerprint: 'د ګوت نښه پیژند',
    example_employee_name: 'مثال: شهاب حمیدي',
    example_fingerprint: 'مثال: SH001',
    
    // Request Status
    pending: 'د سپارلو په تمه',
    active: 'په کار کې',
    completed: 'بشپړ شو',
    deleted: 'ړنګ شو',
    exit: 'وتل',
    entry: 'ننوتل',
    exit_time: 'د وتلو وخت',
    entry_time: 'د ننوتلو وخت',
    usage_time: 'د کارولو وخت',
    requester: 'غوښتونکی',
    unknown: 'نامعلوم',
    available_in_parking: 'په پارکینګ کې شتون لري',
    waiting_for_exit: 'د وتلو په تمه',
    waiting_for_delivery: 'د سپارلو په تمه',
    
    // Messages
    motorcycle_in_use: 'دا موټرسایکل په کار کې دی او ړنګېدای نشي',
    employee_has_requests: 'د دې کارکوونکي فعالې غوښتنې شتون لري او ړنګېدای نشي',
    request_submitted: 'غوښتنه په بریالیتوب سره ثبت شوه',
    request_error: 'د غوښتنې په ثبت کې تیروتنه',
    motorcycle_added: 'موټرسایکل په بریالیتوب سره اضافه شو',
    motorcycle_error: 'د موټرسایکل په اضافه کولو کې تیروتنه',
    motorcycle_deleted: 'موټرسایکل په بریالیتوب سره ړنګ شو',
    employee_added: 'کارکوونکی په بریالیتوب سره اضافه شو',
    employee_error: 'د کارکوونکي په اضافه کولو کې تیروتنه',
    employee_deleted: 'کارکوونکی په بریالیتوب سره ړنګ شو',
    data_sync_error: 'د ډیټا په همغږي کولو کې تیروتنه',
    no_permission: 'تاسو د دې برخې ته لاسرسی نلرئ',
    no_motorcycles_found: 'هیڅ موټرسایکلونه ثبت شوي ندي',
    no_employees_found: 'هیڅ کارکوونکي ثبت شوي ندي',
    no_requests_found: 'هیڅ موټرسایکلونه غوښتل شوي ندي',
    all_motorcycles_available: 'ټول موټرسایکلونه شتون لري',
    no_history_found: 'د ټاکل شويو فیلټرونو سره هیڅ تاریخ نشته',
    fill_all_fields: 'مهرباني وکړئ ټول ډګرونه ډک کړئ',
    
    // Management
    motorcycles_management: 'د موټرسایکلونو مدیریت',
    employees_management: 'د کارکوونکو مدیریت',
    history: 'تاریخ',
    accounts: 'حسابونه',
    motorcycle_status_page: 'د موټرسایکل وضعیت',
    back_to_requests: 'غوښتنو ته راستنیدل',
    all_motorcycle_status: 'د ټولو موټرسایکلونو وضعیت',
    search_motorcycle_dept: 'د موټرسایکل نوم یا څانګه ولټوئ...',
    motorcycles_displayed: 'موټرسایکلونه ښودل شوي',
    fuel_expenses: 'د تیل لګښتونه',
    usage_amount: 'د کارولو اندازه',
    
    // Management Page
    management_page_title: 'مدیریت - د موټرسایکل مدیریت سیسټم',
    management_panel: 'د مدیریت پینل',
    back_dashboard: 'داشبورډ ته راستنیدل',
    motorcycles: 'موټرسایکلونه',
    add_new_motorcycle: 'نوی موټرسایکل اضافه کړئ',
    motorcycle_expenses: 'د موټرسایکل لګښتونه',
    manage_expenses: 'د لګښتونو او استعمال مدیریت',
    employees: 'کارکوونکي',
    add_new_employee: 'نوی کارکوونکی اضافه کړئ',
    entry_exit_report: 'د ننوتلو او وتلو راپور',
    create_account: 'حساب جوړول',
    users_roles_management: 'د کاروونکو او ونډو مدیریت',
    management_page: 'د مدیریت پاڼه',
    back_to_management: 'مدیریت ته راستنیدل',
    
    // Accounts Page
    accounts_page_title: 'د حسابونو مدیریت - د موټرسایکل مدیریت سیسټم',
    accounts_management: 'د حسابونو مدیریت',
    accounts_list: 'د حسابونو لړ',
    add_new_account: 'نوی حساب اضافه کړئ',
    search_accounts_placeholder: 'په نوم، کارن نوم، ونډه، دنده یا څانګه لټون...',
    edit_account_title: 'حساب سمول',
    
    // History Page
    history_page_title: 'تاریخ - د موټرسایکل مدیریت سیسټم',
    history_management: 'د تاریخ مدیریت',
    search_history_placeholder: 'په تاریخ کې لټون...',
    
    // Employees Page  
    employees_page_title: 'د کارکوونکو مدیریت - د موټرسایکل مدیریت سیسټم',
    employees_list: 'د کارکوونکو لړ',
    search_employees_placeholder: 'په نوم، پیژند یا څانګه لټون...',
    
    // Motorcycles Page
    motorcycles_page_title: 'د موټرسایکلونو مدیریت - د موټرسایکل مدیریت سیسټم',
    motorcycles_list: 'د موټرسایکلونو لړ',
    search_motorcycles_placeholder: 'په نوم، رنګ، پلیټ یا څانګه لټون...',
    
    // Fuel Consumption Page
    fuel_page_title: 'د موټرسایکل لګښتونه - د موټرسایکل مدیریت سیسټم',
    fuel_consumption_title: 'د موټرسایکل لګښتونه',
    fuel_management: 'د لګښتونو مدیریت',
    fuel_list: 'د لګښتونو لړ',
    fuel_expenses_desc: 'د تیل لګښتونو ثبت او مدیریت',
    motorcycle_usage: 'د موټرسایکل استعمال',
    usage_report: 'د استعمال راپور',
    
    // Usage Amount Page
    usage_amount_title: 'د موټرسایکل استعمال اندازه',
    search_usage_placeholder: 'د موټرسایکل نوم، څانګه ولټوئ...',
    back_to_fuel: 'شاته',
    custom_days_title: 'ځانګړی وختRange غوره کړئ',
    custom_days_label: 'تیر شویو ورځو شمیر داخل کړئ:',
    custom_days_placeholder: 'مثال ۳۰',
    custom_days_hint: 'د دې شمیر وروستیو ورځو لپاره استعمال احصایې ښودل کیږي',
    usage_history_title: 'د موټرسایکل استعمال تاریخ',
    
    // Fuel Expenses Page
    fuel_expenses_title: 'د تیل لګښتونه',
    fuel_expenses_header: 'د تیل لګښتونه',
    fuel_list_title: 'د تیل لګښتونو لړ',
    register_fuel_report: 'راپور ثبت کړئ',
    search_fuel_placeholder: 'د موټرسایکل نوم ولټوئ...',
    fuel_reports_for_motorcycle: 'د موټرسایکل لپاره د تیل راپورونه',
    search_by_date: 'په نیټه لټون:',
    select_fuel_motorcycle: 'موټرسایکل غوره کړئ',
    fuel_type_label: 'د تیل ډول',
    fuel_type_select: 'غوره کړئ',
    petrol: 'پیټرول',
    diesel: 'ډیزل',
    fuel_amount_label: 'د تیل اندازه',
    fuel_amount_placeholder: 'مثال: 5 لیټره',
    kilometer_label: 'کیلومتر',
    kilometer_placeholder: 'مثال: 100 کیلومتر',
    fuel_date_label: 'د تیل اضافه کولو نیټه',
    submit_btn: 'ثبت',
    
    // Fuel
    fuel_type: 'د تیل ډول',
    fuel_amount: 'د تیل اندازه',
    kilometer: 'کیلومتر',
    total_distance: 'ټوله واټن',
    fuel_report: 'د تیل راپور',
    fuel_reports: 'د تیل راپورونه',
    fuel_date: 'د تیل اضافه کولو نیټه',
    reporter_name: 'د کارکوونکي نوم',
    liters: 'لیټره',
    
    // Usage
    total_usage: 'ټول کارول',
    sort_by: 'ترتیب پر',
    most_usage: 'ترټولو ډیر کارول',
    least_usage: 'ترټولو لږ کارول',
    time_interval: 'وخت انټرول',
    day: 'ورځ',
    week: 'اونۍ',
    month: 'میاشت',
    year: 'کال',
    custom: 'خصوصي',
    custom_days: 'خصوصي ورځې',
    enter_days: 'مهرباني وکړئ د 1 څخه لوړ عدد داخل کړئ',
    
    // Filter
    filter: 'فلټر',
    filter_by_status: 'په وضعیت فلټر',
    filter_by_department: 'په څانګه فلټر',
    
    // Account
    username: 'کارن نوم',
    full_name: 'کامل نوم',
    position: 'دندې ځای',
    role: 'ونډه',
    admin: 'ادمین',
    user: 'کارن',
    add_account: 'حساب اضافه کړئ',
    edit_account: 'حساب سمول',
    account_added: 'حساب په بریالیتوب سره اضافه شو',
    account_updated: 'حساب په بریالیتوب سره تازه شو',
    duplicate_username: 'کارن نوم دمخه شتون لري',
    show_maintenance: 'ترمیمونه ښودل',
    show_notifications: 'اعلانونه ښودل',
    displays: 'ښودنه',
    
    // History
    search_history: 'په تاریخ کې لټون...',
    from_date: 'له نیټې',
    to_date: 'تر نیټې',
    
    // Motorcycle Details
    motorcycle_details: 'د موټرسایکل جزئیات',
    
    // Footer
    developed_by: 'تهړی',
    current_date: 'نیټه:',
    
    // Requests Page
    requests_page_title: 'غوښتنې - د موټرسایکل مدیریت سیسټم',
    request_menu_title: 'د غوښتنې مینو - د موټرسایکل مدیریت سیسټم',
    request_menu: 'د غوښتنې مینو',
    back_home: 'کور ته راستنیدل',
    back_dashboard: 'داشبورډ ته راستنیدل',
    request_motorcycle: 'د موټرسایکل غوښتنه',
    request_motorcycle_desc: 'د موټرسایکل کارولو لپاره نوې غوښتنه ثبت کړئ',
    motorcycle_status: 'د موټرسایکل وضعیت',
    motorcycle_status_desc: 'د ټولو موټرسایکلونو وضعیت وګورئ',
    feedback_suggestions: 'نظرونه او وړاندیزونه',
    feedback_suggestions_desc: 'د موټرسایکلونو په اړه نظر، انتقاد یا وړاندیز ثبت کړئ',
    feedback_page_title: 'نظرونه او وړاندیزونه - د موټرسایکل مدیریت سیسټم',
    feedback_title: 'نظرونه او وړاندیزونه',
    back_to_request_menu: 'د غوښتنې مینو ته راستنیدل',
    select_report_type: 'د راپور ډول غوره کړئ',
    suggestion: 'وړاندیز',
    suggestion_desc: 'د سیسټم د ښه کولو لپاره نظرونه یا وړاندیزونه',
    opinion_issues: 'نظر / مسائل',
    opinion_issues_desc: 'د موټرسایکل مسائل راپور کړئ',
    submit_new_report: 'نوی راپور وړاندې کړئ',
    feedback_content_label: 'وړاندیز / نظر متن',
    feedback_placeholder: 'مهرباني وکړئ خپل نظر ولیکئ...',
    submit_report: 'راپور وړاندې کړئ',
    success_message: 'بریالیتوب پیغام',
    register_suggestion: 'وړاندیز وړاندې کړئ',
    register_opinion_issues: 'نظر / مسائل وړاندې کړئ',
    suggestion_text: 'د وړاندیز متن',
    opinion_issues_text: 'د نظر یا مسائل متن',
    select_motorcycle_feedback: '🏍️ موټرسایکل غوره کړئ',
    write_report_text: 'مهرباني وکړئ د راپور متن ولیکئ',
    select_motorcycle_warning: 'مهرباني وکړئ موټرسایکل غوره کړئ',
    report_registered: 'راپور په بریالیتوب سره وړاندې شو',
    report_error: 'د ګوګل شیټس ته راپور وړاندې کولو کې تیروتنه',
    requested_motorcycles: 'غوښتل شوي موټرسایکلونه',
    search_placeholder: 'په نوم، څانګه، موټرسایکل لټون...',
    
    // Notifications
    no_notifications: 'هیڅ اعلانونه شتون نلري',
    mark_all_read: 'ټول لوست شوي وټاکئ',
    notifications_desc: 'اعلانونه وګورئ او ثبت یې کړئ',
    register_new_notification: 'نوی اعلان ثبت کړئ',
    notification_title: 'د اعلان عنوان',
    notification_title_placeholder: 'د اعلان عنوان داخل کړئ',
    notification_message: 'د اعلان متن',
    notification_message_placeholder: 'د اعلان متن داخل کړئ',
    submit_notification: 'اعلان ثبت کړئ',
    notification_load_error: 'د اعلانونو په لوډ کې تیروتنه',
    notification_success: 'اعلان په بریالیتوب سره ثبت شو',
    notification_error: 'د اعلان په ثبت کې تیروتنه',
    
    // Idle logout
    idle_logout_message: 'تاسو د غیرفعاليتوب له امله ووتل',
    
    // Shortcuts
    shortcuts: 'شارټ کټونه',
    search_shortcut: 'لټون',
    new_request_shortcut: 'نوې غوښتنه',
    close_modals: 'ماډلونه بندول',
    help: 'مرسته',
    
    // Misc
    available: 'شتون لري',
    no_motorcycles_in_dept: 'په دې څانګه کې هیڅ موټرسایکلونه ونه موندل شول',
    no_employees_in_dept: 'په دې څانګه کې هیڅ کارکوونکي ونه موندل شول',
    no_free_motorcycles: 'په دې څانګه کې هیڅ ازاد موټرسایکلونه شتون نلري',
    no_free_motorcycle_found: 'هیڅ ازاد موټرسایکل ونه موندل شو',
    exit_registered: 'وتل په بریالیتوب سره ثبت شول',
    entry_registered: 'ننوتل په بریالیتوب سره ثبت شول',
    exit_error: 'د وتلو په ثبت کې تیروتنه',
    entry_error: 'د ننوتلو په ثبت کې تیروتنه',
    motorcycle_not_found: 'موټرسایکل ونه موندل شو',
    employee_not_found: 'کارکوونکی ونه موندل شو',
    request_not_found: 'غوښتنه ونه موندل شوه',
    upload_photo: 'عکس پورته کیږي...',
    upload_documents: 'اسناد پورته کیږي...',
    upload_error: 'د پورته کولو تیروتنه',
    syncing: 'همغږي کیږي...',
    
    // Maintenance access
    maintenance_access_message: 'د ترمیمونه ته د لاسرسي لپاره پټنوم داخل کړئ',
    management_access_message: 'د مدیریت پینل ته د لاسرسي لپاره پټنوم داخل کړئ',
    motorcycle_access_message: 'د موټرسایکل اضافه کولو لپاره د موټرسایکل مدیریت پټنوم داخل کړئ',
    employee_access_message: 'د کارکوونکي اضافه کولو لپاره د کارکوونکو مدیریت پټنوم داخل کړئ',
    
    // Max records
    max_records_reached: 'د ریکارډونو اعظمي شمیر ته ورسید',
    
    // Google Sheets sync
    sync_accounts_error: 'ګواښ: د ګوګل شیټس سره د حساب همغږي نابریالیه وه',
    save_data_error: 'د ډیټا په خوندي کولو کې تیروتنه',
    save_users_error: 'د کاروونکو په خوندي کولو کې تیروتنه',
    cannot_delete_admin: 'د شهاب حمیدي حساب نشي ړنګولای',
    no_accounts_found: 'ستاسو په لټون کې هیڅ حسابونه ونه موندل شول',
    no_department_registered: 'هیڅ څانګې ثبت ندي. لومړی موټرسایکل اضافه کړئ.',
    no_department_found: 'هیڅ څانګه ونه موندل شوه',
    no_department_available: 'هیڅ څانګه شتون نلري',
    no_motorcycle_registered: 'هیڅ موټرسایکلونه ثبت ندي',
    
    // Maintenance page
    maintenance_page_title: 'ترمیمونه - د موټرسایکل مدیریت سیسټم',
    select_section: 'برخه غوره کړئ',
    opinions: 'نظرونه',
    opinions_desc: 'نظرونه او وړاندیزونه ثبت کړئ',
    motorcycle_oil: 'د موټرسایکل تیل',
    motorcycle_oil_desc: 'د موټرسایکل تیل مدیریت',
    
    // Maintenance Mobile page
    maintenance_mobile_title: 'د موټرسایکل تیل - د موټرسایکل مدیریت سیسټم',
    mobile_title: 'د موټرسایکل تیل',
    back_to_maintenance: 'ترمیمونه ته راستنیدل',
    register_oil_report: 'د تیل راپور ثبت کړئ',
    oil_report_title: 'د تیل راپور ثبت کړئ',
    select_motorcycle_oil: 'موټرسایکل غوره کړئ',
    oil_amount_liters: 'د تیل اندازه (لیټره)',
    oil_reports: 'د تیل راپورونه',
    no_oil_reports: 'هیڅ راپورونه ثبت ندي',
    
    // Maintenance Feedback page
    maintenance_feedback_title: 'د ترمیم نظرونه - د موټرسایکل مدیریت سیسټم',
    suggestions: 'وړاندیزونه',
    needs_repair: 'ترمیم ته اړتیا لري',
    repaired: 'ترمیم شو',
    cannot_repair: 'ترمیم کیدی نشي',
    under_review: 'په بیاکتنو کې',
    items_count: 'توکي',
    no_feedbacks: 'هیڅ نظرونه ثبت ندي',
    no_suggestions: 'هیڅ وړاندیزونه ثبت ندي',
    change_status: 'وضعیت بدلول',
    pin_item: 'پن کول',
    unpin_item: 'پن ایستل',
    delete_item: 'ړنګول',
    status_updated: 'وضعیت په بریالیتوب سره تازه شو',
    update_error: 'د وضعیت په تازه کولو کې تیروتنه',
    pinned: 'پن شو',
    unpinned: 'پن ایستل شو',
    repair_time: 'د ترمیم وخت',
    reply: 'ځواب',
    write_reply: 'خپل ځواب ولیکئ...',
    reply_submitted: 'ځواب په بریالیتوب سره ثبت شو',
    reply_error: 'د ځواب په ثبت کې تیروتنه',
    
    // Direction
    dir: 'rtl',
    
    // Fuel report messages
    select_motorcycle_first: 'مهرباني وکړئ لومړی موټرسایکل غوره کړئ',
    fill_all_fields_fuel: 'مهرباني وکړئ ټول ډګرونه ډک کړئ',
    fuel_report_success: 'د تیل راپور په بریالیتوب سره ثبت شو',
    fuel_report_error: 'د تیل راپور په ثبت کې تیروتنه',
    update_previous_report_error: 'د تیر راپور په تازه کولو کې تیروتنه',
    no_fuel_reports: 'د دې موټرسایکل لپاره هیڅ راپورونه ثبت ندي',
    select_motorcycle_fuel: 'موټرسایکل غوره کړئ',
    show_reports: 'راپورونه ښودل',
    
    // Usage history
    usage_history: 'د کارولو تاریخ',
    no_usage_history: 'د دې موټرسایکل لپاره هیڅ د کارولو تاریخ نشته',
    
    // Online status
    online_status: 'آنلاین',
    
    // Profile
    photo: 'عکس',
    update_photo: 'عکس تازه کول',
    profile_photo: 'پروفایل عکس',
    edit_personal_info: 'شخصي معلومات سمول',
    edit_profile: 'پروفایل سمول',
    enter_full_name: 'کامل نوم داخل کړئ',
    enter_new_password: 'د پټنوم بدلولو لپاره نوی پټنوم داخل کړئ',
    save_changes: 'بدلونونه خوندي کړئ',
    
    // Deleter
    deleted_by: 'ړنګونکی'
  }
};

// Language System Functions
let currentLanguage = localStorage.getItem('language') || 'fa';

// Get translation by key
function t(key) {
  const lang = translations[currentLanguage];
  if (lang && lang[key]) {
    return lang[key];
  }
  // Fallback to Persian
  if (translations.fa[key]) {
    return translations.fa[key];
  }
  // Return key if not found
  return key;
}

// Set language
function setLanguage(lang) {
  if (!translations[lang]) {
    console.error('Language not supported:', lang);
    return;
  }
  
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Update direction
  const dir = translations[lang].dir || 'rtl';
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
  
  // Apply translations
  applyTranslations();
  
  // Dispatch language change event
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
  
  showToast(t('select_language') + ': ' + translations[lang].lang_native, '🌐');
}

// Toggle language dropdown
function toggleLanguageDropdown() {
  const dropdown = document.getElementById('language-dropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
  }
}

// Get current language
function getCurrentLanguage() {
  return currentLanguage;
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations() {
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = t(key);
    
    if (element.tagName === 'INPUT') {
      if (element.type === 'text' || element.type === 'password') {
        element.placeholder = translation;
      }
    } else {
      element.textContent = translation;
    }
  });
  
  // Update elements with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    element.placeholder = t(key);
  });
  
  // Update elements with data-i18n-title attribute
  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.getAttribute('data-i18n-title');
    element.title = t(key);
  });
  
  // Update page title if it has data-i18n attribute
  const titleElement = document.querySelector('title[data-i18n]');
  if (titleElement) {
    const titleKey = titleElement.getAttribute('data-i18n');
    titleElement.textContent = t(titleKey);
  }
  
  // Update direction
  const dir = t('dir') || 'rtl';
  document.documentElement.dir = dir;
  document.documentElement.lang = currentLanguage;
}

// Initialize language on page load
function initLanguage() {
  const savedLang = localStorage.getItem('language') || 'fa';
  currentLanguage = savedLang;
  
  const dir = translations[savedLang].dir || 'rtl';
  document.documentElement.lang = savedLang;
  document.documentElement.dir = dir;
  
  // Apply translations after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
  } else {
    applyTranslations();
  }
}

// Language dropdown HTML generator
function getLanguageDropdownHTML() {
  return `
    <div id="language-dropdown" class="absolute hidden z-50 w-48 bg-white rounded-lg shadow-lg top-12 left-0">
      <div class="py-2">
        <button onclick="setLanguage('fa'); toggleLanguageDropdown();" class="w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center gap-2 ${currentLanguage === 'fa' ? 'bg-gray-100 font-bold' : ''}">
          <span class="text-xl">🇦🇫</span>
          <span>فارسی</span>
          ${currentLanguage === 'fa' ? '<span class="mr-auto">✓</span>' : ''}
        </button>
        <button onclick="setLanguage('en'); toggleLanguageDropdown();" class="w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center gap-2 ${currentLanguage === 'en' ? 'bg-gray-100 font-bold' : ''}">
          <span class="text-xl">🇺🇸</span>
          <span>English</span>
          ${currentLanguage === 'en' ? '<span class="mr-auto">✓</span>' : ''}
        </button>
        <button onclick="setLanguage('ps'); toggleLanguageDropdown();" class="w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center gap-2 ${currentLanguage === 'ps' ? 'bg-gray-100 font-bold' : ''}">
          <span class="text-xl">🇦🇫</span>
          <span>پښتو</span>
          ${currentLanguage === 'ps' ? '<span class="mr-auto">✓</span>' : ''}
        </button>
      </div>
    </div>
  `;
}

// Close language dropdown when clicking outside
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('language-dropdown');
  const button = document.getElementById('language-toggle');
  
  if (dropdown && button && !button.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add('hidden');
  }
});

// Initialize language system after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  // DOM already loaded
  initLanguage();
}

// Re-apply translations when page is fully loaded
window.addEventListener('load', function() {
  applyTranslations();
});

// Refresh page when language changes (to update dynamic content)
window.addEventListener('languageChanged', function() {
  // Trigger a page refresh for dynamic content
  if (typeof updateCurrentPage === 'function') {
    updateCurrentPage();
  }
  
  // Re-render specific components based on current page
  const path = window.location.pathname;
  
  if (path.includes('requests') && typeof renderRequests === 'function') {
    // This will be handled by the page itself
  }
});
