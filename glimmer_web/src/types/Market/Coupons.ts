/** 优惠券类型枚举（对应coupon_type字段） */
export enum CouponType {
  FULL_REDUCTION = 1, // 满减券
  DISCOUNT = 2,       // 折扣券
  CASH = 3            // 现金券
}

/** 优惠券使用类型枚举（对应usage_type字段） */
export enum UsageType {
  ALL = 1,                    // 全场通用
  SPECIFIED_CATEGORIES = 2,   // 指定分类
  SPECIFIED_PRODUCTS = 3,     // 指定商品
  SPECIFIED_BRANDS = 4        // 指定品牌
}

/** 优惠券领取来源枚举（对应receive_source字段） */
export enum ReceiveSource {
  ACTIVE_RECEIVE = 1, // 主动领取
  SYSTEM_ISSUE = 2,   // 系统发放
  PURCHASE_GIFT = 3   // 购买商品赠送
}

/** 优惠券有效期类型枚举（对应validity_type字段） */
export enum ValidityType {
  FIXED_TIME = 1,     // 固定时间
  AFTER_RECEIVE = 2   // 领取后生效
}

/** 优惠券状态枚举（对应status字段） */
export enum CouponStatus {
  DISABLED = 0,       // 禁用
  ENABLED = 1         // 启用
}

/** 用户优惠券状态枚举（对应coupon_status字段） */
export enum UserCouponStatus {
  UNUSED = 0,         // 未使用
  USED = 1,           // 已使用
  EXPIRED = 2,        // 已过期
  FROZEN = 3          // 已冻结
}


/** 优惠券基础接口（对应CouponQueryDto） */
export interface Coupon {
  /** 优惠券ID */
  id: string | bigint;
  /** 优惠券名称 */
  coupon_name: string;
  /** 优惠券类型（关联枚举） */
  coupon_type: CouponType;
  /** 优惠券面值（满减/现金券金额、折扣券折扣率） */
  coupon_value: number;
  /** 最低购买金额（满减券专用） */
  min_purchase_amount: number;
  /** 折扣率（折扣券专用，如0.8表示8折） */
  discount_rate: number;
  /** 最大折扣金额（折扣券专用） */
  max_discount_amount: number;
  /** 使用类型（关联枚举） */
  usage_type: UsageType;
  /** 适用分类ID数组（JSON格式） */
  applicable_categories: number[];
  /** 适用商品ID数组（JSON格式） */
  applicable_products: (string | bigint)[];
  /** 适用品牌ID数组（JSON格式） */
  applicable_brands: number[];
  /** 有效期类型（关联枚举） */
  validity_type: ValidityType;
  /** 开始时间（固定时间模式用） */
  start_time: string | Date;
  /** 结束时间（固定时间模式用） */
  end_time: string | Date;
  /** 有效天数（领取后生效模式用） */
  valid_days: number;
  /** 状态（关联枚举） */
  status: CouponStatus;
  /** 是否公开领取 */
  is_public: number;
}

/** 优惠券详情接口（对应CouponDetailQueryDto） */
export interface CouponDetail extends Coupon {
  /** 发行总量 */
  total_quantity: number;
  /** 剩余数量 */
  remaining_quantity: number;
  /** 每人限领数量 */
  limit_per_user: number;
}

/** 优惠券新增参数（对应CouponAddDto） */
export interface CouponAddParams {
  /** 优惠券名称（必传） */
  coupon_name: string;
  /** 优惠券类型（必传，关联枚举） */
  coupon_type: CouponType;
  /** 优惠券面值（必传） */
  coupon_value: number;
  /** 最低购买金额（满减券必传） */
  min_purchase_amount?: number;
  /** 折扣率（折扣券必传） */
  discount_rate?: number;
  /** 最大折扣金额（折扣券必传） */
  max_discount_amount?: number;
  /** 使用类型（必传，关联枚举） */
  usage_type: UsageType;
  /** 适用分类ID数组（使用类型为2时必传） */
  applicable_categories?: number[];
  /** 适用商品ID数组（使用类型为3时必传） */
  applicable_products?: (string | bigint)[];
  /** 适用品牌ID数组（使用类型为4时必传） */
  applicable_brands?: number[];
  /** 发行总量（必传） */
  total_quantity: number;
  /** 每人限领数量（必传） */
  limit_per_user: number;
  /** 有效期类型（必传，关联枚举） */
  validity_type: ValidityType;
  /** 开始时间（有效期类型为1时必传） */
  start_time?: string | Date;
  /** 结束时间（有效期类型为1时必传） */
  end_time?: string | Date;
  /** 有效天数（有效期类型为2时必传） */
  valid_days?: number;
  /** 状态（可选，默认1-启用） */
  status?: CouponStatus;
  /** 是否公开领取（可选，默认1） */
  is_public?: number;
}

/** 优惠券更新参数（对应CouponUpdateDto） */
export interface CouponUpdateParams {
  /** 优惠券ID（必传） */
  id: string | bigint;
  /** 优惠券名称（可选） */
  coupon_name?: string;
  /** 优惠券类型（可选，关联枚举） */
  coupon_type?: CouponType;
  /** 优惠券面值（可选） */
  coupon_value?: number;
  /** 使用类型（可选，关联枚举） */
  usage_type?: UsageType;
  /** 发行总量（可选） */
  total_quantity?: number;
  /** 状态（可选，关联枚举） */
  status?: CouponStatus;
}



/** 用户优惠券基础接口（对应UserCouponsQueryDto） */
export interface UserCoupon {
  /** 用户优惠券ID */
  id: string | bigint;
  /** 用户ID */
  user_id: string | bigint;
  /** 关联优惠券ID */
  coupon_id: string | bigint;
  /** 优惠码 */
  coupon_code: string;
  /** 用户优惠券状态（关联枚举） */
  coupon_status: UserCouponStatus;
  /** 领取来源（关联枚举） */
  receive_source: ReceiveSource;
  /** 领取时间 */
  receive_time: string | Date;
  /** 使用时间 */
  used_time: string | Date;
  /** 使用订单ID */
  used_order_id: string | bigint;
  /** 使用金额 */
  used_amount: number;
}

/** 用户优惠券详情接口（对应UserCouponDetailQueryDto） */
export interface UserCouponDetail extends UserCoupon {
  /** 优惠券名称 */
  coupon_name: string;
  /** 优惠券类型（关联枚举） */
  coupon_type: CouponType;
  /** 优惠券面值 */
  coupon_value: number;
  /** 最低购买金额 */
  min_purchase_amount: number;
  /** 优惠券有效期开始时间 */
  start_time: string | Date;
  /** 优惠券有效期结束时间 */
  end_time: string | Date;
}

/** 用户优惠券新增参数（对应UserCouponsAddDto） */
export interface UserCouponAddParams {
  /** 用户ID（必传） */
  user_id: string | bigint;
  /** 关联优惠券ID（必传） */
  coupon_id: string | bigint;
  /** 优惠码（必传） */
  coupon_code: string;
  /** 领取来源（必传，关联枚举） */
  receive_source: ReceiveSource;
  /** 领取时间（必传） */
  receive_time: string | Date;
  /** 有效期开始时间（必传） */
  start_time: string | Date;
  /** 有效期结束时间（必传） */
  end_time: string | Date;
}

/** 用户优惠券更新参数（对应UserCouponsUpdateDto） */
export interface UserCouponUpdateParams {
  /** 用户优惠券ID（必传） */
  id: string | bigint;
  /** 用户优惠券状态（可选，关联枚举） */
  coupon_status?: UserCouponStatus;
  /** 使用时间（可选） */
  used_time?: string | Date;
  /** 使用订单ID（可选） */
  used_order_id?: string | bigint;
  /** 使用金额（可选） */
  used_amount?: number;
}
