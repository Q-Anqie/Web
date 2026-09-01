/**
 * 秒杀订单状态枚举（对应seckill_status字段）
 */
export enum SeckillStatus {
  UNPAID = 0,    // 待支付
  PAID = 1,      // 已支付
  EXPIRED = 2    // 已超时
}

/**
 * 秒杀订单基础实体接口
 */
export interface SeckillOrder {
  /** 秒杀订单ID */
  id: string | bigint;
  /** 用户ID */
  user_id: string | bigint;
  /** 秒杀活动ID */
  activity_id: string | bigint;
  /** 关联订单ID */
  order_id: string | bigint;
  /** 秒杀码 */
  seckill_code: string;
  /** 秒杀订单状态（关联枚举） */
  seckill_status: SeckillStatus;
  /** 秒杀时间 */
  seckill_time: string | Date;
  /** 过期时间 */
  expire_time: string | Date;
  /** 创建时间 */
  created_at: string | Date;
}

/**
 * 秒杀订单查询参数接口
 */
export interface SeckillOrderQueryParams {
  /** 秒杀订单ID（可选） */
  id?: string | bigint;
  /** 用户ID（可选） */
  user_id?: string | bigint;
  /** 秒杀活动ID（可选） */
  activity_id?: string | bigint;
  /** 秒杀订单状态（可选，关联枚举） */
  seckill_status?: SeckillStatus;
  /** 秒杀时间范围-开始（可选） */
  seckill_time_start?: string | Date;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}


/**
 * 团购订单状态枚举（对应join_status字段）
 */
export enum GroupbuyJoinStatus {
  ONGOING = 0,   // 拼团中
  SUCCESS = 1,   // 拼团成功
  FAIL = 2       // 拼团失败
}

/**
 * 团购订单基础实体接口
 */
export interface GroupbuyOrder {
  /** 团购订单ID */
  id: string | bigint;
  /** 团购活动ID */
  activity_id: string | bigint;
  /** 团ID */
  group_id: string | bigint;
  /** 用户ID */
  user_id: string | bigint;
  /** 关联订单ID */
  order_id: string | bigint;
  /** 是否为团长（1-是，0-否） */
  is_leader: number;
  /** 拼团状态（关联枚举） */
  join_status: GroupbuyJoinStatus;
  /** 参团时间 */
  join_time: string | Date;
  /** 成团时间 */
  success_time: string | Date;
  /** 创建时间 */
  created_at: string | Date;
}

/**
 * 团购订单查询参数接口
 */
export interface GroupbuyOrderQueryParams {
  /** 团购订单ID（可选） */
  id?: string | bigint;
  /** 团购活动ID（可选） */
  activity_id?: string | bigint;
  /** 团ID（可选） */
  group_id?: string | bigint;
  /** 用户ID（可选） */
  user_id?: string | bigint;
  /** 拼团状态（可选，关联枚举） */
  join_status?: GroupbuyJoinStatus;
  /** 参团时间范围-开始（可选） */
  join_time_start?: string | Date;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}


/**
 * 用户积分汇总基础实体接口
 */
export interface UserPoint {
  /** 积分ID */
  id: string | bigint;
  /** 用户ID */
  user_id: string | bigint;
  /** 总积分 */
  total_point: number;
  /** 已使用积分 */
  used_point: number;
  /** 锁定积分 */
  locked_point: number;
  /** 已过期积分 */
  expired_point: number;
  /** 创建时间 */
  created_at: string | Date;
  /** 更新时间 */
  updated_at: string | Date;
}

/**
 * 用户积分汇总查询参数接口
 */
export interface UserPointQueryParams {
  /** 积分ID（可选） */
  id?: string | bigint;
  /** 用户ID（可选） */
  user_id?: string | bigint;
  /** 总积分范围-最小值（可选） */
  min_total_point?: number;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}


/**
 * 积分变动类型枚举（对应change_type字段）
 */
export enum PointChangeType {
  INCREASE = 1,  // 增加
  DECREASE = 2   // 减少
}

/**
 * 积分来源类型枚举（对应source_type字段）
 */
export enum PointSourceType {
  SIGN_IN = 1,        // 签到
  SHOPPING = 2,       // 购物
  EVALUATE = 3,       // 评价
  INVITE = 4,         // 邀请
  EXCHANGE = 5,       // 积分兑换
  EXPIRE = 6          // 过期
}

/**
 * 积分变动记录基础实体接口
 */
export interface PointRecords {
  /** 记录ID */
  id: string | bigint;
  /** 用户ID */
  user_id: string | bigint;
  /** 变动类型（关联枚举） */
  change_type: PointChangeType;
  /** 变动积分 */
  change_points: number;
  /** 变动后当前积分 */
  current_points: number;
  /** 来源类型（关联枚举） */
  source_type: PointSourceType;
  /** 来源ID（如订单ID、签到记录ID） */
  source_id: string;
  /** 变动描述 */
  description: string;
  /** 积分过期时间 */
  expire_time: string | Date;
  /** 创建时间 */
  created_at: string | Date;
}

/**
 * 积分变动记录查询参数接口
 */
export interface PointRecordsQueryParams {
  /** 记录ID（可选） */
  id?: string | bigint;
  /** 用户ID（可选） */
  user_id?: string | bigint;
  /** 变动类型（可选，关联枚举） */
  change_type?: PointChangeType;
  /** 来源类型（可选，关联枚举） */
  source_type?: PointSourceType;
  /** 变动时间范围-开始（可选） */
  created_at_start?: string | Date;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}
