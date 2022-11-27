/**
 * 打卡
 */
export enum PunchType {
  work = '上班',
  offwork = '下班',
  dayoff = '請假',
}
export enum PunchTypeKey {
  WORK = 'work',
  OFFWORK = 'offwork',
  DAYOFF = 'dayoff',
}

/**cd
 * 補登原因
 */
export enum PunchReason {
  forget = '忘記打卡',
  errand = '出差/受訓',
  meeting = '會議',
  change = '調整',
  other = '其他',
}
export enum PunchReasonKey {
  FORGET = 'forget',
  ERRAND = 'errand',
  MEETING = 'meeting',
  CHANGE = 'change',
  OTHER = 'other',
}
