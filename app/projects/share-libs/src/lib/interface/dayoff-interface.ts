/**
 * 請假紀錄
 */
export interface Dayoff {
  // 員編
  employeeId?: string;
  // 請假日
  date: Date;
  // 建立時間
  create?: Date;
}
