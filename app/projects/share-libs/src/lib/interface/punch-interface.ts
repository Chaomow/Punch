import { PunchTypeKey } from '@libs/enum/punch-enum';

/**
 * 出勤紀錄
 */
export interface Attendance {
  id: number;
  // 員編
  employeeId?: string;
  // 打卡日
  date: Date;
  // work上班 offwork下班;
  type: PunchTypeKey.WORK | PunchTypeKey.OFFWORK | string;
  // 打卡時間
  time?: Date;
  // 建立時間
  create?: Date;
  // 調整時間
  modify?: Date;
  // 調整原因
  reason?: string;
}
