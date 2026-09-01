/**
 * 角色类型枚举（对应role_type字段的固定值）
 */
export enum RoleType {
  SYSTEM = 1,    // 系统角色
  CUSTOM = 2     // 自定义角色
}

/**
 * 数据权限范围枚举（对应data_scope字段的固定值）
 */
export enum DataScope {
  ALL = 1,                          // 全部数据
  CURRENT_DEPARTMENT = 2,           // 本部门数据
  CURRENT_AND_CHILD_DEPARTMENT = 3, // 本部门及子部门数据
  SELF = 4,                         // 仅本人数据
  CUSTOM = 5                        // 自定义数据
}

/**
 * 角色基础实体接口
 */
export interface Role {
  /** 角色ID */
  id: number;
  /** 角色名称 */
  role_name: string;
  /** 角色编码 */
  role_code: string;
  /** 角色描述 */
  description: string;
  /** 角色类型（关联枚举） */
  role_type: RoleType;
  /** 数据权限范围（关联枚举） */
  data_scope: DataScope;
  /** 状态：0-禁用，1-启用 */
  status: number;
  /** 是否系统内置角色 */
  is_system: number;
  /** 排序 */
  sort_order: number;
}

/**
 * 角色查询参数接口
 */
export interface RoleQueryParams {
  /** 角色ID（可选） */
  id?: number;
  /** 角色名称（模糊查询，可选） */
  role_name?: string;
  /** 角色编码（可选） */
  role_code?: string;
  /** 角色类型（可选，关联枚举） */
  role_type?: RoleType;
  /** 数据权限范围（可选，关联枚举） */
  data_scope?: DataScope;
  /** 状态（可选：0-禁用，1-启用） */
  status?: number;
  /** 是否系统内置角色（可选） */
  is_system?: number;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}

/**
 * 角色新增参数接口
 */
export interface RoleAddParams {
  /** 角色名称（必传） */
  role_name: string;
  /** 角色编码（必传） */
  role_code: string;
  /** 角色描述（可选） */
  description?: string;
  /** 角色类型（必传，关联枚举） */
  role_type: RoleType;
  /** 数据权限范围（必传，关联枚举） */
  data_scope: DataScope;
  /** 状态（可选，默认1-启用） */
  status?: number;
  /** 排序（可选，默认0） */
  sort_order?: number;
}

/**
 * 角色更新参数接口
 */
export interface RoleUpdateParams {
  /** 角色ID（必传，定位更新对象） */
  id: number;
  /** 角色名称（可选） */
  role_name?: string;
  /** 角色编码（可选） */
  role_code?: string;
  /** 角色描述（可选） */
  description?: string;
  /** 角色类型（可选，关联枚举） */
  role_type?: RoleType;
  /** 数据权限范围（可选，关联枚举） */
  data_scope?: DataScope;
  /** 状态（可选：0-禁用，1-启用） */
  status?: number;
  /** 排序（可选） */
  sort_order?: number;
}
