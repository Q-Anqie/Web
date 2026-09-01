/**
 * 订单商品售后状态枚举（对应after_sales_status字段）
 */
export enum AfterSalesStatus {
  NONE = 0,       // 无售后
  PROCESSING = 1, // 售后中
  COMPLETED = 2   // 售后完成
}

/**
 * 操作人类别枚举（对应operator_type字段）
 */
export enum OperatorType {
  USER = 1,    // 用户
  ADMIN = 2,   // 管理员
  SYSTEM = 3   // 系统
}

/**
 * 布尔型状态枚举（对应is_gift、is_comment等字段）
 */
export enum BooleanStatus {
  NO = 0,  // 否
  YES = 1  // 是
}


/**
 * 订单商品接口（对应OrderProductQueryDto）
 */
export interface OrderProduct {
  /** 订单商品ID */
  id: string | bigint;
  /** 关联订单ID */
  order_id: string | bigint;
  /** 关联商品ID */
  product_id: string | bigint;
  /** 关联SKU ID */
  sku_id: string | bigint;
  /** 商品编号 */
  product_sn: string;
  /** 商品名称 */
  product_name: string;
  /** 商品图片URL */
  product_image: string;
  /** 规格信息（JSON格式，键值对结构） */
  specifications: Record<string, string>;
  /** 商品单价 */
  unit_price: number;
  /** 购买数量 */
  quantity: number;
  /** 商品总价 */
  total_price: number;
  /** 优惠金额 */
  discount_amount: number;
  /** 实付金额 */
  actual_price: number;
  /** 商品成本价 */
  cost_price: number;
  /** 商品重量 */
  weight: number;
  /** 是否为赠品 */
  is_gift: BooleanStatus;
  /** 是否已评价 */
  is_comment: BooleanStatus;
  /** 售后状态（关联枚举） */
  after_sales_status: AfterSalesStatus;
}


/**
 * 订单操作日志接口（对应OrderOperationLogsDto）
 */
export interface OrderOperationLog {
  /** 日志ID */
  id: string | bigint;
  /** 关联订单ID */
  order_id: string | bigint;
  /** 操作人ID */
  operator_id: string | bigint;
  /** 操作人类别（关联枚举） */
  operator_type: OperatorType;
  /** 操作类型（如“订单支付”“订单发货”） */
  operation_type: string;
  /** 操作内容（如“用户支付了订单XXX”） */
  operation_content: string;
  /** 操作IP地址 */
  ip_address: string;
  /** 用户代理（浏览器/设备信息） */
  user_agent: string;
  /** 操作时间 */
  created_at: string | Date;
}


/**
 * 发货商品明细接口（对应delivery_items）
 */
export interface DeliveryItem {
  /** 发货商品ID */
  id: string | bigint;
  /** 关联发货单ID */
  delivery_id: string | bigint;
  /** 关联订单商品ID */
  order_item_id: string | bigint;
  /** 关联商品ID */
  product_id: string | bigint;
  /** 关联SKU ID */
  sku_id: string | bigint;
  /** 发货数量 */
  quantity: number;
  /** 商品批次号 */
  batch_no: string;
  /** 创建时间 */
  created_at: string | Date;
}
