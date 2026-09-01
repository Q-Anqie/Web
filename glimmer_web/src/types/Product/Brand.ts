/**
 * 品牌基础实体接口（包含所有核心字段）
 */
export interface Brand {
  /** 品牌ID */
  id: number;
  /** 品牌名称 */
  brand_name: string;
  /** 品牌编码 */
  brand_code: string;
  /** 品牌Logo */
  logo: string;
  /** 品牌描述 */
  description: string;
  /** 品牌国家/地区 */
  country: string;
  /** 官方网站 */
  website: string;
  /** 排序 */
  sort_order: number;
  /** 状态：0-禁用，1-启用 */
  status: number;
  /** 是否热门品牌 */
  is_hot: number;
  /** 是否官方品牌 */
  is_official: number;
}

/**
 * 品牌查询参数接口
 */
export interface BrandQueryParams {
  /** 品牌ID（可选） */
  id?: number;
  /** 品牌名称（模糊查询，可选） */
  brand_name?: string;
  /** 品牌编码（可选） */
  brand_code?: string;
  /** 品牌国家/地区（可选） */
  country?: string;
  /** 状态（可选：0-禁用，1-启用） */
  status?: number;
  /** 是否热门品牌（可选） */
  is_hot?: number;
  /** 是否官方品牌（可选） */
  is_official?: number;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}

/**
 * 品牌新增参数接口
 */
export interface BrandAddParams {
  /** 品牌名称（必传） */
  brand_name: string;
  /** 品牌编码（必传） */
  brand_code: string;
  /** 品牌Logo（可选） */
  logo?: string;
  /** 品牌描述（可选） */
  description?: string;
  /** 品牌国家/地区（可选） */
  country?: string;
  /** 官方网站（可选） */
  website?: string;
  /** 排序（可选，默认0） */
  sort_order?: number;
  /** 状态（可选，默认1-启用） */
  status?: number;
  /** 是否热门品牌（可选，默认0） */
  is_hot?: number;
  /** 是否官方品牌（可选，默认0） */
  is_official?: number;
}

/**
 * 品牌更新参数接口
 */
export interface BrandUpdateParams {
  /** 品牌ID（必传，用于定位更新对象） */
  id: number;
  /** 品牌名称（可选） */
  brand_name?: string;
  /** 品牌编码（可选） */
  brand_code?: string;
  /** 品牌Logo（可选） */
  logo?: string;
  /** 品牌描述（可选） */
  description?: string;
  /** 品牌国家/地区（可选） */
  country?: string;
  /** 官方网站（可选） */
  website?: string;
  /** 排序（可选） */
  sort_order?: number;
  /** 状态（可选：0-禁用，1-启用） */
  status?: number;
  /** 是否热门品牌（可选） */
  is_hot?: number;
  /** 是否官方品牌（可选） */
  is_official?: number;
}
