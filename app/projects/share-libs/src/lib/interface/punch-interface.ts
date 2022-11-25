/**
 * 出勤紀錄
 */
export interface Attendance {
  id: number;
  // 打卡日
  date: Date;
  // 上班打卡時間
  start?: Date;
  // 下班打卡時間
  end?: Date;
  // 補登原因
  reason?: string;
}
