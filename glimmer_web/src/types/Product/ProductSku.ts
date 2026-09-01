/**
 * 商品SKU基础实体接口（包含所有核心字段）
 */
export interface ProductSku {
  /** SKU ID */
  id: string | bigint;
  /** 商品ID */
  product_id: string | bigint;
  /** SKU编码 */
  sku_sn: string;
  /** 规格属性（JSON格式，如：{"颜色":"红色","尺寸":"XL"}） */
  specifications: Record<string, string>;
  /** SKU图片 */
  image: string;
  /** 原价 */
  origin_price: number;
  /** 销售价 */
  selling_price: number;
  /** 成本价 */
  cost_price: number;
  /** 库存数量 */
  stock: number;
  /** 库存预警值 */
  warning_stock: number;
  /** 已售数量 */
  sold_count: number;
  /** 状态：0-禁用，1-启用 */
  status: number;
}

/**
 * 商品SKU查询参数接口
 */
export interface ProductSkuQueryParams {
  /** SKU ID（可选） */
  id?: string | bigint;
  /** 商品ID（可选） */
  product_id?: string | bigint;
  /** SKU编码（可选） */
  sku_sn?: string;
  /** 规格属性关键词（可选） */
  specifications?: string;
  /** 状态（可选：0-禁用，1-启用） */
  status?: number;
  /** 库存数量范围-最小值（可选） */
  min_stock?: number;
  /** 库存数量范围-最大值（可选） */
  max_stock?: number;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}

/**
 * 商品SKU新增参数接口
 */
export interface ProductSkuAddParams {
  /** 商品ID（必传） */
  product_id: string | bigint;
  /** SKU编码（必传） */
  sku_sn: string;
  /** 规格属性（必传，JSON格式） */
  specifications: Record<string, string>;
  /** SKU图片（可选） */
  image?: string;
  /** 原价（必传） */
  origin_price: number;
  /** 销售价（必传） */
  selling_price: number;
  /** 成本价（可选） */
  cost_price?: number;
  /** 库存数量（必传） */
  stock: number;
  /** 库存预警值（可选，默认0） */
  warning_stock?: number;
  /** 状态（可选，默认1-启用） */
  status?: number;
}

/**
 * 商品SKU更新参数接口
 */
export interface ProductSkuUpdateParams {
  /** SKU ID（必传，用于定位更新对象） */
  id: string | bigint;
  /** 商品ID（可选） */
  product_id?: string | bigint;
  /** SKU编码（可选） */
  sku_sn?: string;
  /** 规格属性（可选，JSON格式） */
  specifications?: Record<string, string>;
  /** SKU图片（可选） */
  image?: string;
  /** 原价（可选） */
  origin_price?: number;
  /** 销售价（可选） */
  selling_price?: number;
  /** 成本价（可选） */
  cost_price?: number;
  /** 库存数量（可选） */
  stock?: number;
  /** 库存预警值（可选） */
  warning_stock?: number;
  /** 状态（可选：0-禁用，1-启用） */
  status?: number;
}
