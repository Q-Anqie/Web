/**
 * 权限类型枚举（对应permission_type字段的固定值）
 */
export enum PermissionType {
  MENU = 1,    // 菜单权限
  API = 2,     // API权限
  BUTTON = 3   // 按钮权限
}

/**
 * 是否菜单枚举（对应is_menu字段的固定值）
 */
export enum IsMenu {
  NO = 0,  // 否
  YES = 1  // 是
}

/**
 * 隐藏状态枚举（对应hidden字段的固定值）
 */
export enum Hidden {
  NO = 0,  // 否
  YES = 1  // 是
}

/**
 * API请求方法枚举（对应api_method字段的固定值）
 */
export enum ApiMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

/**
 * 权限状态枚举（对应status字段的固定值）
 */
export enum PermissionStatus {
  DISABLED = 0,  // 禁用
  NORMAL = 1     // 启用
}

/**
 * 是否系统内置权限枚举（对应is_system字段的固定值）
 */
export enum IsSystemPermission {
  NO = 0,  // 否
  YES = 1  // 是
}

/**
 * 权限基础实体接口
 */
export interface Permission {
  /** 权限ID */
  id: number;
  /** 权限名称 */
  permission_name: string;
  /** 权限编码（格式：模块:操作，如user:create） */
  permission_code: string;
  /** 权限类型（关联枚举） */
  permission_type: PermissionType;
  /** 父权限ID */
  parent_id: number;
  /** 关联菜单ID */
  menu_id: number;
  /** 路由路径（菜单类型时使用） */
  menu_path: string;
  /** 组件路径（菜单类型时使用） */
  menu_component: string;
  /** 菜单图标 */
  menu_icon: string;
  /** 菜单排序 */
  menu_order: number;
  /** 是否为菜单（关联枚举） */
  is_menu: IsMenu;
  /** 是否隐藏（关联枚举） */
  hidden: Hidden;
  /** 接口路径（API类型时使用） */
  api_path: string;
  /** API请求方法（关联枚举） */
  api_method: ApiMethod;
  /** 权限分组 */
  permission_group: string;
  /** 所属模块 */
  module: string;
  /** 操作类型（如create, read, update） */
  action: string;
  /** 权限描述 */
  description: string;
  /** 状态（关联枚举） */
  status: PermissionStatus;
  /** 是否系统内置权限（关联枚举） */
  is_system: IsSystemPermission;
  /** 排序 */
  sort_order: number;
}

/**
 * 权限查询参数接口
 */
export interface PermissionQueryParams {
  /** 权限ID（可选） */
  id?: number;
  /** 权限名称（模糊查询，可选） */
  permission_name?: string;
  /** 权限编码（可选） */
  permission_code?: string;
  /** 权限类型（可选，关联枚举） */
  permission_type?: PermissionType;
  /** 所属模块（可选） */
  module?: string;
  /** 状态（可选，关联枚举） */
  status?: PermissionStatus;
  /** 是否系统内置权限（可选，关联枚举） */
  is_system?: IsSystemPermission;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}

/**
 * 权限新增参数接口
 */
export interface PermissionAddParams {
  /** 权限名称（必传） */
  permission_name: string;
  /** 权限编码（必传，格式：模块:操作） */
  permission_code: string;
  /** 权限类型（必传，关联枚举） */
  permission_type: PermissionType;
  /** 父权限ID（可选） */
  parent_id?: number;
  /** 关联菜单ID（可选） */
  menu_id?: number;
  /** 路由路径（菜单类型时必传） */
  menu_path?: string;
  /** 组件路径（菜单类型时必传） */
  menu_component?: string;
  /** 菜单图标（可选） */
  menu_icon?: string;
  /** 菜单排序（可选，默认0） */
  menu_order?: number;
  /** 是否为菜单（必传，关联枚举） */
  is_menu: IsMenu;
  /** 是否隐藏（可选，关联枚举） */
  hidden?: Hidden;
  /** 接口路径（API类型时必传） */
  api_path?: string;
  /** API请求方法（API类型时必传，关联枚举） */
  api_method?: ApiMethod;
  /** 权限分组（可选） */
  permission_group?: string;
  /** 所属模块（必传） */
  module: string;
  /** 操作类型（必传，如create） */
  action: string;
  /** 权限描述（可选） */
  description?: string;
  /** 状态（可选，默认1-启用） */
  status?: PermissionStatus;
  /** 是否系统内置权限（可选，默认0-否） */
  is_system?: IsSystemPermission;
  /** 排序（可选，默认0） */
  sort_order?: number;
}

/**
 * 权限更新参数接口
 */
export interface PermissionUpdateParams {
  /** 权限ID（必传，定位更新对象） */
  id: number;
  /** 权限名称（可选） */
  permission_name?: string;
  /** 权限编码（可选，格式：模块:操作） */
  permission_code?: string;
  /** 权限类型（可选，关联枚举） */
  permission_type?: PermissionType;
  /** 父权限ID（可选） */
  parent_id?: number;
  /** 关联菜单ID（可选） */
  menu_id?: number;
  /** 路由路径（可选） */
  menu_path?: string;
  /** 组件路径（可选） */
  menu_component?: string;
  /** 菜单图标（可选） */
  menu_icon?: string;
  /** 菜单排序（可选） */
  menu_order?: number;
  /** 是否为菜单（可选，关联枚举） */
  is_menu?: IsMenu;
  /** 是否隐藏（可选，关联枚举） */
  hidden?: Hidden;
  /** 接口路径（可选） */
  api_path?: string;
  /** API请求方法（可选，关联枚举） */
  api_method?: ApiMethod;
  /** 权限分组（可选） */
  permission_group?: string;
  /** 所属模块（可选） */
  module?: string;
  /** 操作类型（可选） */
  action?: string;
  /** 权限描述（可选） */
  description?: string;
  /** 状态（可选，关联枚举） */
  status?: PermissionStatus;
  /** 排序（可选） */
  sort_order?: number;
}
