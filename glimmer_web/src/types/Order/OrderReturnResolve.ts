/** 售后申请类型枚举（对应apply_type字段） */
export enum ReturnApplyType {
  REFUND_ONLY = 1,  // 仅退款
  RETURN_REFUND = 2,// 退货退款
  EXCHANGE = 3      // 换货
}

/** 售后处理类型枚举（对应process_type字段） */
export enum ProcessType {
  RETURN = 1,  // 退货
  EXCHANGE = 2,// 换货
  REFUND = 3   // 退款
}

/** 售后处理状态枚举（对应process_status字段） */
export enum ProcessStatus {
  PENDING = 0,     // 待处理
  PROCESSING = 1,  // 处理中
  COMPLETED = 2    // 已完成
}

/** 退货状态枚举（对应return_status字段） */
export enum ReturnStatus {
  NOT_RETURNED = 0,// 未退回
  RETURNING = 1,   // 退货中
  RETURNED = 2     // 已退回
}

/** 退款状态枚举（对应refund_status字段） */
export enum RefundStatus {
  UNREFUNDED = 0,     // 未退款
  REFUNDING = 1,      // 退款中
  REFUND_SUCCESS = 2, // 退款成功
  REFUND_FAIL = 3     // 退款失败
}

/** 检验结果枚举（对应inspection_result字段） */
export enum InspectionResult {
  QUALIFIED = 1,    // 合格
  UNQUALIFIED = 2,  // 不合格
  INSPECTING = 3    // 检测中
}

/** 支付状态枚举（对应payment_status字段） */
export enum PaymentStatus {
  PENDING = 0,   // 待支付
  SUCCESS = 1,   // 支付成功
  FAIL = 2,      // 支付失败
  REFUNDED = 3   // 已退款
}


/** 售后申请设置接口（对应OrderReturnReasonSettingQueryDto） */
export interface OrderReturnReasonSetting {
  /** 售后类型（关联枚举） */
  apply_type: ReturnApplyType;
  /** 申请原因 */
  apply_reason: string;
  /** 问题描述 */
  apply_description: string;
  /** 创建时间 */
  created_at: string | Date;
}

/** 售后申请设置新增参数（对应OrderReturnReasonSettingAddDto） */
export interface OrderReturnReasonSettingAddParams {
  /** 售后类型（必传，关联枚举） */
  apply_type: ReturnApplyType;
  /** 申请原因（必传） */
  apply_reason: string;
  /** 问题描述（必传） */
  apply_description: string;
}

/** 售后申请设置更新参数（对应OrderReturnReasonSettingUpdateDto） */
export interface OrderReturnReasonSettingUpdateParams {
  /** 售后类型（必传，关联枚举） */
  apply_type: ReturnApplyType;
  /** 申请原因（可选） */
  apply_reason?: string;
  /** 问题描述（可选） */
  apply_description?: string;
}


/** 售后处理接口（对应OrderReturnReasonResolveQueryDto） */
export interface OrderReturnReasonResolve {
  /** 处理ID */
  id: string | bigint;
  /** 关联申请ID */
  apply_id: string | bigint;
  /** 处理类型（关联枚举） */
  process_type: ProcessType;
  /** 处理状态（关联枚举） */
  process_status: ProcessStatus;
  /** 退货状态（关联枚举） */
  return_status: ReturnStatus;
  /** 处理备注 */
  process_remark: string;
  /** 完成时间 */
  completed_time: string | Date;
  /** 创建时间 */
  created_at: string | Date;
}

/** 售后处理详情接口（对应OrderReturnReasonResolveDetailQueryDto） */
export interface OrderReturnReasonResolveDetail {
  /** 处理ID */
  id: string | bigint;
  /** 关联申请ID */
  apply_id: string | bigint;
  /** 处理类型（关联枚举） */
  process_type: ProcessType;
  /** 处理状态（关联枚举） */
  process_status: ProcessStatus;
  /** 退货物流公司 */
  return_logistics_company: string;
  /** 退货物流单号 */
  return_logistics_no: string;
  /** 退货仓库ID */
  return_warehouse_id: string | bigint;
  /** 收到退货时间 */
  receive_time: string | Date;
  /** 检验结果（关联枚举） */
  inspection_result: InspectionResult;
  /** 检验备注 */
  inspection_remark: string;
  /** 退款状态（关联枚举） */
  refund_status: RefundStatus;
  /** 退款时间 */
  refund_time: string | Date;
  /** 退款交易号 */
  refund_transaction_no: string;
  /** 换货发货单ID */
  exchange_delivery_id: string | bigint;
  /** 处理人ID */
  process_user_id: string | bigint;
  /** 处理时间 */
  processed_time: string | Date;
  /** 完成时间 */
  completed_time: string | Date;
  /** 创建时间 */
  created_at: string | Date;
}


/** 支付记录接口（对应payment_records） */
export interface PaymentRecord {
  /** 支付记录ID */
  id: string | bigint;
  /** 关联订单ID */
  order_id: string | bigint;
  /** 支付流水号 */
  payment_sn: string;
  /** 支付方式 */
  payment_method: string;
  /** 支付渠道 */
  payment_channel: string;
  /** 支付金额 */
  amount: number;
  /** 支付状态（关联枚举） */
  payment_status: PaymentStatus;
  /** 第三方交易号 */
  transaction_no: string;
  /** 支付方ID */
  payer_id: string | bigint;
  /** 支付方账号 */
  payer_account: string;
  /** 支付时间 */
  pay_time: string | Date;
  /** 通知时间 */
  notify_time: string | Date;
  /** 通知数据 */
  notify_data: string;
  /** 退款金额 */
  refund_amount: number;
  /** 退款时间 */
  refund_time: string | Date;
  /** 备注 */
  remark: string;
  /** 创建时间 */
  created_at: string | Date;
  /** 更新时间 */
  updated_at: string | Date;
}
