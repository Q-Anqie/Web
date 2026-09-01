/**
 * 用户状态枚举（对应status字段的固定值）
 */
export enum UserStatus {
  DISABLED = 0,  // 禁用
  NORMAL = 1,    // 正常
  UNACTIVATED = 2// 未激活
}

/**
 * 用户性别枚举（对应gender字段的固定值）
 */
export enum UserGender {
  UNKNOWN = 0, // 未知
  MALE = 1,    // 男
  FEMALE = 2   // 女
}

/**
 * 用户基础实体接口
 */
export interface User {
  /** 用户ID */
  id: string | bigint;
  /** 用户名 */
  username: string;
  /** 邮箱 */
  email: string;
  /** 手机号 */
  phone: string;
  /** 头像URL */
  avatar: string;
  /** 昵称 */
  nickname: string;
  /** 状态（关联枚举） */
  status: UserStatus;
  /** 注册时间 */
  register_time: string | Date;
  /** 注册IP */
  register_ip: string;
  /** 最后登录时间 */
  last_login_time: string | Date;
  /** 最后登录IP */
  last_login_ip: string;
  /** 邮箱是否验证 */
  is_email_verified: number;
  /** 手机是否验证 */
  is_phone_verified: number;
  /** 真实姓名 */
  real_name?: string;
  /** 性别（关联枚举） */
  gender?: UserGender;
  /** 生日 */
  birthday?: string | Date;
  /** 身份证号 */
  id_card?: string;
  /** 邀请码 */
  invite_code?: string;
}

/**
 * 用户查询参数接口
 */
export interface UserQueryParams {
  /** 用户ID（可选） */
  id?: string | bigint;
  /** 用户名（模糊查询，可选） */
  username?: string;
  /** 邮箱（可选） */
  email?: string;
  /** 手机号（可选） */
  phone?: string;
  /** 状态（可选，关联枚举） */
  status?: UserStatus;
  /** 性别（可选，关联枚举） */
  gender?: UserGender;
  /** 注册时间范围-开始（可选） */
  register_time_start?: string | Date;
  /** 注册时间范围-结束（可选） */
  register_time_end?: string | Date;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}

/**
 * 用户新增参数接口
 */
export interface UserAddParams {
  /** 用户名（必传） */
  username: string;
  /** 密码（必传） */
  password: string;
  /** 邮箱（必传） */
  email: string;
  /** 手机号（必传） */
  phone: string;
  /** 头像URL（可选） */
  avatar?: string;
  /** 昵称（可选） */
  nickname?: string;
  /** 状态（可选，默认1-正常） */
  status?: UserStatus;
  /** 真实姓名（可选） */
  real_name?: string;
  /** 性别（可选，关联枚举） */
  gender?: UserGender;
  /** 生日（可选） */
  birthday?: string | Date;
  /** 身份证号（可选） */
  id_card?: string;
  /** 邀请码（可选） */
  invite_code?: string;
}

/**
 * 用户更新参数接口
 */
export interface UserUpdateParams {
  /** 用户ID（必传，定位更新对象） */
  id: string | bigint;
  /** 邮箱（可选） */
  email?: string;
  /** 手机号（可选） */
  phone?: string;
  /** 头像URL（可选） */
  avatar?: string;
  /** 昵称（可选） */
  nickname?: string;
  /** 状态（可选，关联枚举） */
  status?: UserStatus;
  /** 真实姓名（可选） */
  real_name?: string;
  /** 性别（可选，关联枚举） */
  gender?: UserGender;
  /** 生日（可选） */
  birthday?: string | Date;
  /** 身份证号（可选） */
  id_card?: string;
}
