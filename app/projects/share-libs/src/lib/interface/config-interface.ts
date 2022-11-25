/**
 * 上下班時間
 */
export interface WorkingPeriod {
  group: string;
  start: string;
  end: string;
}

export interface Holiday {
  title: string;
  dates: Date[];
}
