/**
 * API 管理
 */
export enum ApiManager {
  // 管理者
  getAdmins = '/assets/data/user/admins.json',
  // 員工
  getEmployees = '/assets/data/user/employees.json',
  newEmployee = '/assets/data/test/success.json',
  saveEmployee = '/assets/data/test/success.json',
  deleteEmployee = '/assets/data/test/success.json',
  // 打卡
  getPunchRecords = '/assets/data/punch/records.json',
  punchOnWork = '/assets/data/test/success.json',
  punchOffWork = '/assets/data/test/success.json',
  // 系統參數
  getWorkingPeriods = '/assets/data/config/periods.json',
  getHolidays = '/assets/data/config/holidays.json',
  // 測試
  testSuccess = '/assets/data/test/success.json',
  testError = '/assets/data/test/error.json',
}
