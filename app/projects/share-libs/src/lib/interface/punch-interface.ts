/**
 * 出勤紀錄
 */
export interface Attendance {
  id: number;
  // 員編
  employeeId?: string;
  // 打卡日
  date: Date;
  // Work上班 Offwork下班;
  type: 'Work' | 'Offwork';
  // 打卡時間
  time?: Date;
  // 建立時間
  create?: Date;
  // 調整時間
  modify?: Date;
  // 調整原因
  reason?: string;
}
