/**
 * 商品分类基础实体接口（包含所有核心字段）
 */
export interface ProductCategory {
  /** 分类ID */
  id: number;
  /** 父分类ID */
  parent_id: number;
  /** 分类名称 */
  category_name: string;
  /** 分类编码 */
  category_code: string;
  /** 分类路径（如：1.2.3） */
  category_path: string;
  /** 分类层级 */
  category_level: number;
  /** 分类描述 */
  description: string;
  /** 分类图标 */
  icon: string;
  /** 分类图片 */
  image: string;
  /** 排序 */
  sort_order: number;
  /** 状态：0-禁用，1-启用 */
  status: number;
  /** 是否热门分类 */
  is_hot: number;
  /** 是否推荐分类 */
  is_recommend: number;
  /** SEO标题 */
  meta_title: string;
  /** SEO关键词 */
  meta_keywords: string;
  /** SEO描述 */
  meta_description: string;
}

/**
 * 商品分类查询参数接口（对应图中Query场景）
 */
export interface ProductCategoryQueryParams {
  /** 分类ID（可选） */
  id?: number;
  /** 父分类ID（可选） */
  parent_id?: number;
  /** 分类名称（模糊查询，可选） */
  category_name?: string;
  /** 分类编码（可选） */
  category_code?: string;
  /** 分类层级（可选） */
  category_level?: number;
  /** 状态（可选：0-禁用，1-启用） */
  status?: number;
  /** 是否热门分类（可选） */
  is_hot?: number;
  /** 是否推荐分类（可选） */
  is_recommend?: number;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}

/**
 * 商品分类新增参数接口（对应图中Add场景）
 */
export interface ProductCategoryAddParams {
  /** 父分类ID */
  parent_id: number;
  /** 分类名称 */
  category_name: string;
  /** 分类编码 */
  category_code: string;
  /** 分类路径（如：1.2.3） */
  category_path: string;
  /** 分类层级 */
  category_level: number;
  /** 分类描述（可选） */
  description?: string;
  /** 分类图标（可选） */
  icon?: string;
  /** 分类图片（可选） */
  image?: string;
  /** 排序（默认0） */
  sort_order?: number;
  /** 状态：0-禁用，1-启用（默认1） */
  status?: number;
  /** 是否热门分类（默认0） */
  is_hot?: number;
  /** 是否推荐分类（默认0） */
  is_recommend?: number;
  /** SEO标题（可选） */
  meta_title?: string;
  /** SEO关键词（可选） */
  meta_keywords?: string;
  /** SEO描述（可选） */
  meta_description?: string;
}

/**
 * 商品分类更新参数接口（对应图中Update场景）
 */
export interface ProductCategoryUpdateParams {
  /** 分类ID（必传，用于定位更新对象） */
  id: number;
  /** 父分类ID（可选） */
  parent_id?: number;
  /** 分类名称（可选） */
  category_name?: string;
  /** 分类编码（可选） */
  category_code?: string;
  /** 分类路径（如：1.2.3，可选） */
  category_path?: string;
  /** 分类层级（可选） */
  category_level?: number;
  /** 分类描述（可选） */
  description?: string;
  /** 分类图标（可选） */
  icon?: string;
  /** 分类图片（可选） */
  image?: string;
  /** 排序（可选） */
  sort_order?: number;
  /** 状态：0-禁用，1-启用（可选） */
  status?: number;
  /** 是否热门分类（可选） */
  is_hot?: number;
  /** 是否推荐分类（可选） */
  is_recommend?: number;
  /** SEO标题（可选） */
  meta_title?: string;
  /** SEO关键词（可选） */
  meta_keywords?: string;
  /** SEO描述（可选） */
  meta_description?: string;
}
