/**
 * 仓库类型枚举（对应type字段）
 */
export enum WarehouseType {
  CENTER = 1,    // 中心仓
  REGIONAL = 2,  // 区域仓
  STORE = 3,     // 门店仓
  VIRTUAL = 4    // 虚拟仓
}

/**
 * 仓库状态枚举（对应status字段）
 */
export enum WarehouseStatus {
  DISABLED = 0,  // 停用
  ENABLED = 1    // 启用
}

/**
 * 仓库基础实体接口
 */
export interface Warehouse {
  /** 仓库ID */
  id: number;
  /** 仓库名称 */
  warehouse_name: string;
  /** 仓库编码 */
  warehouse_code: string;
  /** 仓库类型（关联枚举） */
  type: WarehouseType;
  /** 所在地区ID */
  area_id: number;
  /** 详细地址 */
  address: string;
  /** 联系人 */
  contact_person: string;
  /** 联系电话 */
  contact_phone: string;
  /** 仓库面积（㎡） */
  area_size: number;
  /** 仓库容量（m³） */
  capacity: number;
  /** 状态（关联枚举） */
  status: WarehouseStatus;
  /** 是否默认仓库（1-是，0-否） */
  is_default: number;
  /** 备注 */
  remark: string;
  /** 创建人 */
  created_by: string | bigint;
  /** 创建时间 */
  created_at: string | Date;
  /** 更新时间 */
  updated_at: string | Date;
}

/**
 * 仓库查询参数接口
 */
export interface WarehouseQueryParams {
  /** 仓库ID（可选） */
  id?: number;
  /** 仓库名称（模糊查询，可选） */
  warehouse_name?: string;
  /** 仓库类型（可选，关联枚举） */
  type?: WarehouseType;
  /** 状态（可选，关联枚举） */
  status?: WarehouseStatus;
  /** 是否默认仓库（可选） */
  is_default?: number;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}

/**
 * 库存状态枚举（对应status字段）
 */
export enum InventoryStatus {
  DISABLED = 0,  // 停用
  ENABLED = 1    // 启用
}

/**
 * 库存基础实体接口
 */
export interface Inventory {
  /** 库存ID */
  id: string | bigint;
  /** 商品ID */
  product_id: string | bigint;
  /** SKU ID */
  sku_id: string | bigint;
  /** 仓库ID */
  warehouse_id: number;
  /** 可用库存 */
  quantity: number;
  /** 锁定库存 */
  locked_quantity: number;
  /** 在途库存 */
  in_transit_quantity: number;
  /** 安全库存 */
  safety_stock: number;
  /** 最大库存 */
  max_stock: number;
  /** 最小库存 */
  min_stock: number;
  /** 最后盘点时间 */
  last_check_time: string | Date;
  /** 状态（关联枚举） */
  status: InventoryStatus;
  /** 创建时间 */
  created_at: string | Date;
  /** 更新时间 */
  updated_at: string | Date;
}

/**
 * 库存查询参数接口
 */
export interface InventoryQueryParams {
  /** 库存ID（可选） */
  id?: string | bigint;
  /** 商品ID（可选） */
  product_id?: string | bigint;
  /** SKU ID（可选） */
  sku_id?: string | bigint;
  /** 仓库ID（可选） */
  warehouse_id?: number;
  /** 状态（可选，关联枚举） */
  status?: InventoryStatus;
  /** 可用库存范围-最小值（可选） */
  min_quantity?: number;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}



/**
 * 库存流水类型枚举（对应log_type字段）
 */
export enum InventoryLogType {
  STOCK_IN = 1,    // 入库
  STOCK_OUT = 2,   // 出库
  TRANSFER = 3,    // 调拨
  CHECK = 4,       // 盘点
  LOCK = 5,        // 锁定
  UNLOCK = 6,      // 解锁
  RETURN = 7       // 退货
}

/**
 * 操作人类型枚举（对应operator_type字段）
 */
export enum OperatorType {
  USER = 1,        // 用户
  ADMIN = 2,       // 管理员
  SYSTEM = 3       // 系统
}

/**
 * 库存流水基础实体接口
 */
export interface InventoryLog {
  /** 流水ID */
  id: string | bigint;
  /** 商品ID */
  product_id: string | bigint;
  /** SKU ID */
  sku_id: string | bigint;
  /** 仓库ID */
  warehouse_id: number;
  /** 流水类型（关联枚举） */
  log_type: InventoryLogType;
  /** 变动数量（正数增加，负数减少） */
  change_quantity: number;
  /** 变动前数量 */
  before_quantity: number;
  /** 变动后数量 */
  after_quantity: number;
  /** 关联订单号 */
  related_order: string;
  /** 关联订单类型 */
  related_order_type: string;
  /** 批次号 */
  batch_no: string;
  /** 过期日期 */
  expiration_date: string | Date;
  /** 备注 */
  remark: string;
  /** 操作人ID */
  operator_id: string | bigint;
  /** 操作人类型（关联枚举） */
  operator_type: OperatorType;
  /** 创建时间 */
  created_at: string | Date;
}

/**
 * 库存流水查询参数接口
 */
export interface InventoryLogQueryParams {
  /** 流水ID（可选） */
  id?: string | bigint;
  /** 商品ID（可选） */
  product_id?: string | bigint;
  /** SKU ID（可选） */
  sku_id?: string | bigint;
  /** 仓库ID（可选） */
  warehouse_id?: number;
  /** 流水类型（可选，关联枚举） */
  log_type?: InventoryLogType;
  /** 操作时间范围-开始（可选） */
  created_at_start?: string | Date;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}


/**
 * 库存预警类型枚举（对应alert_type字段）
 */
export enum InventoryAlertType {
  LOW_STOCK = 1,    // 库存不足
  OVER_STOCK = 2,   // 库存积压
  EXPIRING_SOON = 3,// 临期预警
  EXPIRED = 4       // 过期预警
}

/**
 * 库存预警级别枚举（对应alert_level字段）
 */
export enum InventoryAlertLevel {
  LOW = 1,    // 低
  MEDIUM = 2, // 中
  HIGH = 3    // 高
}

/**
 * 库存预警状态枚举（对应alert_status字段）
 */
export enum InventoryAlertStatus {
  UNHANDLED = 0,  // 未处理
  HANDLING = 1,   // 处理中
  HANDLED = 2     // 已处理
}

/**
 * 库存预警基础实体接口
 */
export interface InventoryAlert {
  /** 预警ID */
  id: string | bigint;
  /** 商品ID */
  product_id: string | bigint;
  /** SKU ID */
  sku_id: string | bigint;
  /** 仓库ID */
  warehouse_id: number;
  /** 预警类型（关联枚举） */
  alert_type: InventoryAlertType;
  /** 当前库存 */
  current_quantity: number;
  /** 预警阈值 */
  threshold_value: number;
  /** 预警级别（关联枚举） */
  alert_level: InventoryAlertLevel;
  /** 预警状态（关联枚举） */
  alert_status: InventoryAlertStatus;
  /** 预警时间 */
  alert_time: string | Date;
  /** 处理人ID */
  handler_id: string | bigint;
  /** 处理时间 */
  handle_time: string | Date;
  /** 处理结果 */
  handle_result: string;
  /** 创建时间 */
  created_at: string | Date;
}

/**
 * 库存预警查询参数接口
 */
export interface InventoryAlertQueryParams {
  /** 预警ID（可选） */
  id?: string | bigint;
  /** 商品ID（可选） */
  product_id?: string | bigint;
  /** SKU ID（可选） */
  sku_id?: string | bigint;
  /** 仓库ID（可选） */
  warehouse_id?: number;
  /** 预警类型（可选，关联枚举） */
  alert_type?: InventoryAlertType;
  /** 预警状态（可选，关联枚举） */
  alert_status?: InventoryAlertStatus;
  /** 预警时间范围-开始（可选） */
  alert_time_start?: string | Date;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}
