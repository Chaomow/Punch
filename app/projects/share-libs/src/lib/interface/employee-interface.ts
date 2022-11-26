import { Account } from '@libs/interface/config-interface';

/**
 * 員工
 */
export interface Employee extends Account {
  // 員編
  userId?: string;
  // 部門
  dept?: string;
  // 姓名
  name?: string;
  // 英文姓名
  engName?: string;
  // 職稱
  level?: string;
  // 時段群組
  group?: string;
}
