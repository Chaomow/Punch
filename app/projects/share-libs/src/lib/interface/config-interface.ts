/**
 * 上下班時間
 */
export interface WorkingPeriod {
  name: string;
  work: string;
  offwork: string;
}

/**
 * 國定假日
 */
export interface Holiday {
  title: string;
  dates: Date[];
}

/**
 * 角色
 */
export interface Role {
  id: string;
  level: 'admin' | 'employee';
}
