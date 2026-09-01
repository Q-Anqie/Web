/**
 * 订单类型枚举（对应order_type字段的固定值）
 */
export enum OrderType {
  NORMAL = 1,    // 普通订单
  GROUP = 2,     // 团购订单
  SECOND_KILL = 3// 秒杀订单
}

/**
 * 订单状态枚举（对应order_status字段的固定值）
 */
export enum OrderStatus {
  PENDING_PAYMENT = 0, // 待付款
  PENDING_DELIVERY = 1,// 待发货
  DELIVERED = 2,       // 已发货
  RECEIVED = 3,        // 已签收
  COMPLETED = 4,       // 已完成
  CLOSED = 5           // 已关闭
}

/**
 * 支付状态枚举（对应payment_status字段的固定值）
 */
export enum PaymentStatus {
  UNPAID = 0,   // 未支付
  PAID = 1,     // 已支付
  REFUNDED = 2  // 已退款
}

/**
 * 发货状态枚举（对应delivery_status字段的固定值）
 */
export enum DeliveryStatus {
  UNDELIVERED = 0,// 未发货
  DELIVERED = 1,  // 已发货
  RECEIVED = 2,   // 已签收
  RETURNED = 3    // 已退回
}

/**
 * 售后状态枚举（对应after_sales_status字段的固定值）
 */
export enum AfterSalesStatus {
  NONE = 0,       // 无售后
  PROCESSING = 1, // 售后中
  COMPLETED = 2   // 售后完成
}

/**
 * 发票类型枚举（对应invoice_type字段的固定值）
 */
export enum InvoiceType {
  PERSONAL = 1, // 个人
  COMPANY = 2   // 公司
}


/**
 * 订单基础信息接口（对应OrderQueryDto）
 */
export interface Order {
  /** 订单ID */
  id: string | bigint;
  /** 订单编号 */
  order_sn: string;
  /** 用户ID */
  user_id: string | bigint;
  /** 订单类型（关联枚举） */
  order_type: OrderType;
  /** 订单状态（关联枚举） */
  order_status: OrderStatus;
  /** 支付状态（关联枚举） */
  payment_status: PaymentStatus;
  /** 发货状态（关联枚举） */
  delivery_status: DeliveryStatus;
  /** 订单金额 */
  total_amount: number;
  /** 实付金额 */
  actual_amount: number;
  /** 支付方式 */
  payment_method: string;
  /** 支付交易编号 */
  payment_transaction_no: string;
}


/**
 * 订单详情接口（对应OrderDetailQueryDto）
 */
export interface OrderDetail {
  /** 订单编号 */
  order_sn: string;
  /** 订单详情ID */
  id: string | bigint;
  /** 订单类型（关联枚举） */
  order_type: OrderType;
  /** 订单状态（关联枚举） */
  order_status: OrderStatus;
  /** 支付状态（关联枚举） */
  payment_status: PaymentStatus;
  /** 发货状态（关联枚举） */
  delivery_status: DeliveryStatus;
  /** 售后状态（关联枚举） */
  after_sales_status: AfterSalesStatus;
  /** 订单金额 */
  total_amount: number;
  /** 实付金额 */
  actual_amount: number;
  /** 运费 */
  shipping_fee: number;
  /** 税金 */
  tax_amount: number;
  /** 保险费 */
  insurance_amount: number;
  /** 优惠券金额 */
  coupon_amount: number;
  /** 折扣金额 */
  discount_amount: number;
  /** 支付方式 */
  payment_method: string;
  /** 支付交易编号 */
  payment_transaction_no: string;
  /** 配送方式 */
  delivery_method: string;
  /** 配送时间 */
  delivery_time: string | Date;
  /** 收货人姓名 */
  receiver_name: string;
  /** 收货人电话 */
  receiver_phone: string;
  /** 收货省 */
  receiver_province: string;
  /** 收货区 */
  receiver_district: string;
  /** 收货地址 */
  receiver_address: string;
  /** 邮政编码 */
  receiver_postal_code: string;
  /** 发票类型（关联枚举） */
  invoice_type: InvoiceType;
  /** 发票抬头 */
  invoice_title: string;
  /** 发票税号 */
  invoice_tax_no: string;
  /** 发票内容 */
  invoice_content: string;
  /** 卖家备注 */
  seller_remark: string;
  /** 买家备注 */
  buyer_remark: string;
  /** 取消人 */
  cancel_person: string;
  /** 取消时间 */
  cancel_time: string | Date;
  /** 关闭人 */
  close_person: string;
  /** 关闭时间 */
  close_time: string | Date;
  /** 自动收货天数 */
  auto_receive_days: number;
  /** 创建时间 */
  created_at: string | Date;
}


/**
 * 订单设置接口（对应OrderSettingDto）
 */
export interface OrderSetting {
  /** 自动收货天数 */
  auto_receive_days: number;
}
