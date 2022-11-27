import { RoleKey } from '@libs/enum/config-enum';

/**
 * 帳號密碼
 */
export interface Account {
  userId?: string;
  password?: string;
}

/**
 * 登入資訊
 */
export interface LoginInfo {
  userId: string;
  name?: string;
  role?: RoleKey.ADMIN | RoleKey.EMPLOYEE | undefined;
  loginTime?: Date;
}

/**
 * 國定假日
 */
export interface Holiday {
  title: string;
  dates: Date[];
}
