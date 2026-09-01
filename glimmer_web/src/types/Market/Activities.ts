/** 促销活动类型枚举（对应promotion_type字段） */
export enum PromotionType {
  FULL_REDUCTION = 1, // 满减
  DISCOUNT = 2,       // 折扣
  FULL_GIFT = 3,      // 满赠
  FREE_SHIPPING = 4   // 包邮
}

/** 促销活动范围枚举（对应promotion_scope字段） */
export enum PromotionScope {
  ALL = 1,                    // 全场
  SPECIFIED_CATEGORIES = 2,   // 指定分类
  SPECIFIED_PRODUCTS = 3,     // 指定商品
  SPECIFIED_BRANDS = 4        // 指定品牌
}

/** 促销条件类型枚举（对应condition_type字段） */
export enum ConditionType {
  FULL_REDUCTION = 1, // 满减
  DISCOUNT = 2        // 折扣
}

/** 优惠类型枚举（对应discount_type字段） */
export enum DiscountType {
  AMOUNT = 1,    // 金额
  RATE = 2       // 折扣率
}

/** 活动通用状态枚举（对应status字段） */
export enum ActivityStatus {
  DISABLED = 0,       // 禁用
  NOT_STARTED = 1,    // 未开始
  IN_PROGRESS = 2,    // 进行中
  ENDED = 3           // 已结束
}

/** 布尔型状态枚举（对应is_recommended等字段） */
export enum BooleanStatus {
  NO = 0,  // 否
  YES = 1  // 是
}

/** 促销活动基础接口（对应PromotionQueryDto） */
export interface Promotion {
  /** 活动ID */
  id: string | bigint;
  /** 活动名称 */
  promotion_name: string;
  /** 活动类型（关联枚举） */
  promotion_type: PromotionType;
  /** 活动范围（关联枚举） */
  promotion_scope: PromotionScope;
  /** 范围关联项ID数组（JSON格式，如分类/商品/品牌ID） */
  scope_items: number[];
  /** 条件类型（关联枚举） */
  condition_type: ConditionType;
  /** 条件值（如满减的“满X元”） */
  condition_value: number;
  /** 优惠类型（关联枚举） */
  discount_type: DiscountType;
  /** 优惠值（如满减金额、折扣率） */
  discount_value: number;
  /** 活动开始时间 */
  start_time: string | Date;
  /** 活动结束时间 */
  end_time: string | Date;
  /** 活动状态（关联枚举） */
  status: ActivityStatus;
  /** 活动优先级 */
  priority: number;
}

/** 促销活动详情接口（对应PromotionDetailQueryDto） */
export interface PromotionDetail extends Promotion {
  /** 赠品商品ID */
  gift_product_id: string | bigint;
  /** 赠品数量 */
  gift_quantity: number;
  /** 最大优惠金额 */
  max_discount_amount: number;
  /** 最大优惠次数 */
  max_discount_times: number;
  /** 浏览次数 */
  view_count: number;
  /** 成功参与次数 */
  success_count: number;
}

/** 促销活动新增参数（对应PromotionAddDto） */
export interface PromotionAddParams {
  /** 活动名称（必传） */
  promotion_name: string;
  /** 活动类型（必传，关联枚举） */
  promotion_type: PromotionType;
  /** 活动范围（必传，关联枚举） */
  promotion_scope: PromotionScope;
  /** 范围关联项ID数组（必传，JSON格式） */
  scope_items: number[];
  /** 条件类型（必传，关联枚举） */
  condition_type: ConditionType;
  /** 条件值（必传） */
  condition_value: number;
  /** 优惠类型（必传，关联枚举） */
  discount_type: DiscountType;
  /** 优惠值（必传） */
  discount_value: number;
  /** 赠品商品ID（满赠活动必传） */
  gift_product_id?: string | bigint;
  /** 赠品数量（满赠活动必传） */
  gift_quantity?: number;
  /** 最大优惠金额（可选） */
  max_discount_amount?: number;
  /** 活动开始时间（必传） */
  start_time: string | Date;
  /** 活动结束时间（必传） */
  end_time: string | Date;
  /** 活动状态（可选，默认1-未开始） */
  status?: ActivityStatus;
}

/** 促销活动更新参数（对应PromotionUpdateDto） */
export interface PromotionUpdateParams {
  /** 活动ID（必传） */
  id: string | bigint;
  /** 活动名称（可选） */
  promotion_name?: string;
  /** 优惠值（可选） */
  discount_value?: number;
  /** 活动状态（可选，关联枚举） */
  status?: ActivityStatus;
}

/** 秒杀活动基础接口（对应SeckillActivitiesQueryDto） */
export interface SeckillActivity {
  /** 秒杀活动ID */
  id: string | bigint;
  /** 活动名称 */
  activity_name: string;
  /** 关联商品ID */
  product_id: string | bigint;
  /** 关联SKU ID */
  sku_id: string | bigint;
  /** 秒杀价 */
  seckill_price: number;
  /** 原价 */
  original_price: number;
  /** 总库存 */
  total_stock: number;
  /** 可用库存 */
  available_stock: number;
  /** 每人限购数量 */
  limit_per_user: number;
  /** 活动开始时间 */
  start_time: string | Date;
  /** 活动结束时间 */
  end_time: string | Date;
  /** 活动状态（关联枚举） */
  status: ActivityStatus;
  /** 是否推荐 */
  is_recommended: BooleanStatus;
}

/** 秒杀活动详情接口（对应SeckillActivitiesDetailQueryDto） */
export interface SeckillActivityDetail extends SeckillActivity {
  /** 浏览次数 */
  view_count: number;
  /** 下单次数 */
  order_count: number;
  /** 成功抢购次数 */
  success_count: number;
}

/** 秒杀活动新增参数（对应SeckillActivitiesAddDto） */
export interface SeckillActivityAddParams {
  /** 活动名称（必传） */
  activity_name: string;
  /** 关联商品ID（必传） */
  product_id: string | bigint;
  /** 关联SKU ID（必传） */
  sku_id: string | bigint;
  /** 秒杀价（必传） */
  seckill_price: number;
  /** 原价（必传） */
  original_price: number;
  /** 总库存（必传） */
  total_stock: number;
  /** 每人限购数量（必传） */
  limit_per_user: number;
  /** 活动开始时间（必传） */
  start_time: string | Date;
  /** 活动结束时间（必传） */
  end_time: string | Date;
  /** 是否推荐（可选，默认0-否） */
  is_recommended?: BooleanStatus;
}

/** 秒杀活动更新参数（对应SeckillActivitiesUpdateDto） */
export interface SeckillActivityUpdateParams {
  /** 秒杀活动ID（必传） */
  id: string | bigint;
  /** 可用库存（可选） */
  available_stock?: number;
  /** 活动状态（可选，关联枚举） */
  status?: ActivityStatus;
  /** 是否推荐（可选） */
  is_recommended?: BooleanStatus;
}


/** 团购活动基础接口（对应GroupbuyActivitiesQueryDto） */
export interface GroupbuyActivity {
  /** 团购活动ID */
  id: string | bigint;
  /** 活动名称 */
  activity_name: string;
  /** 关联商品ID */
  product_id: string | bigint;
  /** 关联SKU ID */
  sku_id: string | bigint;
  /** 团购价 */
  groupbuy_price: number;
  /** 原价 */
  original_price: number;
  /** 成团时长（小时） */
  duration_hours: number;
  /** 总库存 */
  total_stock: number;
  /** 可用库存 */
  available_stock: number;
  /** 每人限购数量 */
  limit_per_user: number;
  /** 活动开始时间 */
  start_time: string | Date;
  /** 活动结束时间 */
  end_time: string | Date;
  /** 活动状态（关联枚举） */
  status: ActivityStatus;
  /** 是否推荐 */
  is_recommended: BooleanStatus;
}

/** 团购活动详情接口（对应GroupbuyActivitiesDetailQueryDto） */
export interface GroupbuyActivityDetail extends GroupbuyActivity {
  /** 浏览次数 */
  view_count: number;
  /** 下单次数 */
  order_count: number;
  /** 成功成团次数 */
  success_count: number;
}

/** 团购活动新增参数（对应GroupbuyActivitiesAddDto） */
export interface GroupbuyActivityAddParams {
  /** 活动名称（必传） */
  activity_name: string;
  /** 关联商品ID（必传） */
  product_id: string | bigint;
  /** 关联SKU ID（必传） */
  sku_id: string | bigint;
  /** 团购价（必传） */
  groupbuy_price: number;
  /** 原价（必传） */
  original_price: number;
  /** 成团时长（必传，小时） */
  duration_hours: number;
  /** 总库存（必传） */
  total_stock: number;
  /** 每人限购数量（必传） */
  limit_per_user: number;
  /** 活动开始时间（必传） */
  start_time: string | Date;
  /** 活动结束时间（必传） */
  end_time: string | Date;
  /** 是否推荐（可选，默认0-否） */
  is_recommended?: BooleanStatus;
}

/** 团购活动更新参数（对应GroupbuyActivitiesUpdateDto） */
export interface GroupbuyActivityUpdateParams {
  /** 团购活动ID（必传） */
  id: string | bigint;
  /** 可用库存（可选） */
  available_stock?: number;
  /** 活动状态（可选，关联枚举） */
  status?: ActivityStatus;
  /** 是否推荐（可选） */
  is_recommended?: BooleanStatus;
}


