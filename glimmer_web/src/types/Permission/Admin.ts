/**
 * 管理员状态枚举（对应status字段的固定值）
 */
export enum AdminStatus {
  DISABLED = 0, // 禁用
  NORMAL = 1    // 正常
}

/**
 * 是否超级管理员枚举（对应is_super_admin字段的固定值）
 */
export enum IsSuperAdmin {
  NO = 0,  // 否
  YES = 1  // 是
}

/**
 * 管理员基础实体接口
 */
export interface Admin {
  /** 管理员ID */
  id: string | bigint;
  /** 登录账号 */
  username: string;
  /** 显示名称 */
  nickname: string;
  /** 手机号 */
  phone: string;
  /** 状态（关联枚举） */
  status: AdminStatus;
  /** 最后登录时间 */
  last_login_time: string | Date;
  /** 最后登录IP */
  last_login_ip: string;
  /** 密码最后修改时间 */
  password_changed_time: string | Date;
  /** 密码过期天数 */
  password_expire_days: number;
  /** 备注 */
  remark: string;
  /** 创建时间 */
  created_at: string | Date;
  /** 是否超级管理员（关联枚举） */
  is_super_admin: IsSuperAdmin;
  /** 创建人 */
  created_by: string | bigint;
  /** 更新人 */
  updated_by?: string | bigint;
}

/**
 * 管理员查询参数接口
 */
export interface AdminQueryParams {
  /** 管理员ID（可选） */
  id?: string | bigint;
  /** 登录账号（模糊查询，可选） */
  username?: string;
  /** 显示名称（模糊查询，可选） */
  nickname?: string;
  /** 手机号（可选） */
  phone?: string;
  /** 状态（可选，关联枚举） */
  status?: AdminStatus;
  /** 是否超级管理员（可选，关联枚举） */
  is_super_admin?: IsSuperAdmin;
  /** 最后登录时间范围-开始（可选） */
  last_login_time_start?: string | Date;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}

/**
 * 管理员新增参数接口
 */
export interface AdminAddParams {
  /** 登录账号（必传） */
  username: string;
  /** 密码（必传） */
  password: string;
  /** 手机号（必传） */
  phone: string;
  /** 显示名称（必传） */
  nickname: string;
  /** 状态（可选，默认1-正常） */
  status?: AdminStatus;
  /** 是否超级管理员（必传，关联枚举） */
  is_super_admin: IsSuperAdmin;
  /** 备注（可选） */
  remark?: string;
  /** 创建人（必传） */
  created_by: string | bigint;
}

/**
 * 管理员更新参数接口
 */
export interface AdminUpdateParams {
  /** 管理员ID（必传，定位更新对象） */
  id: string | bigint;
  /** 登录账号（可选） */
  username?: string;
  /** 密码（可选，需修改时传入） */
  password?: string;
  /** 手机号（可选） */
  phone?: string;
  /** 显示名称（可选） */
  nickname?: string;
  /** 状态（可选，关联枚举） */
  status?: AdminStatus;
  /** 是否超级管理员（可选，关联枚举） */
  is_super_admin?: IsSuperAdmin;
  /** 备注（可选） */
  remark?: string;
  /** 更新人（必传） */
  updated_by: string | bigint;
}
