/**
 * 商品核心接口（精准匹配给定字段）
 */
export interface Product {
  /** 商品ID */
  id: string | bigint;
  /** 商品编号 */
  product_sn: string;
  /** 商品名称 */
  product_name: string;
  /** 分类ID */
  category_id: number;
  /** 品牌ID */
  brand_id: number;
  /** 主图 */
  main_image: string;
  /** 销售价 */
  selling_price: number;
  /** SKU类型：1-单SKU，2-多SKU */
  sku_type: number;
  /** 已售数量 */
  sold_count: number;
  /** 浏览量 */
  view_count: number;
  /** 是否热销 */
  is_hot: number;
  /** 是否新品 */
  is_new: number;
  /** 是否推荐 */
  is_recommend: number;
  /** 是否虚拟商品 */
  is_virtual: number;
  /** 是否数字商品 */
  is_digital: number;
  /** 是否自营商品 */
  is_self_support: number;
  /** 上架时间 */
  shelf_time: string | Date;
  /** 下架时间 */
  off_shelf_time: string | Date;
  /** 状态：0-草稿，1-待审核，2-审核不通过，3-已上架，4-已下架 */
  status: number;
  /** 审核状态：0-待审核，1-审核通过，2-审核不通过 */
  audit_status: number;
  /** 审核备注 */
  audit_remark: string;
}


/**
 * 商品核心接口（精准匹配给定字段）
 */
export interface ProductAdd {
  /** 商品编号 */
  product_sn: string;
  /** 商品名称 */
  product_name: string;
  /** 副标题/促销语 */
  subtitle: string;
  /** 分类ID */
  category_id: number;
  /** 品牌ID */
  brand_id: number;
  /** 主图 */
  main_image: string;
  /** 商品图册（JSON数组，存储图片URL列表） */
  image_gallery: string[];
  /** 商品视频 */
  video_url: string;
  /** 商品描述 */
  description: string;
  /** 商品详情HTML */
  detail_html: string;
  /** 原价 */
  origin_price: number;
  /** 销售价 */
  selling_price: number;
  /** 成本价 */
  cost_price: number;
  /** 重量（kg） */
  weight: number;
  /** 体积（m³） */
  volume: number;
  /** 单位：件、个、套等 */
  unit: string;
  /** SKU类型：1-单SKU，2-多SKU */
  sku_type: number;
  /** 库存类型：1-普通库存，2-批次库存 */
  stock_type: number;
  /** 总库存 */
  total_stock: number;
  /** 库存预警值 */
  warning_stock: number;
  /** 是否热销 */
  is_hot: number;
  /** 是否新品 */
  is_new: number;
  /** 是否推荐 */
  is_recommend: number;
  /** 是否虚拟商品 */
  is_virtual: number;
  /** 是否数字商品 */
  is_digital: number;
  /** 是否自营商品 */
  is_self_support: number;
  /** 运费模板ID */
  delivery_template_id: number;
  /** 售后服务（JSON格式，具体结构可根据业务扩展） */
  after_sales_service: unknown;
  /** 保修期（月） */
  warranty_period: number;
  /** 状态：0-草稿，1-待审核，2-审核不通过，3-已上架，4-已下架 */
  status: number;
  /** 审核状态：0-待审核，1-审核通过，2-审核不通过 */
  audit_status: number;
  /** 审核备注 */
  audit_remark: string;
  /** SEO标题 */
  meta_title: string;
  /** SEO关键词 */
  meta_keywords: string;
  /** SEO描述 */
  meta_description: string;
}


/**
 * 商品核心接口（精准匹配给定字段）
 */
export interface ProductUpdate {
  /** 商品编号 */
  product_sn: string;
  /** 商品名称 */
  product_name: string;
  /** 副标题/促销语 */
  subtitle: string;
  /** 分类ID */
  category_id: number;
  /** 品牌ID */
  brand_id: number;
  /** 主图 */
  main_image: string;
  /** 商品图册（JSON数组，存储图片URL列表） */
  image_gallery: string[];
  /** 商品视频 */
  video_url: string;
  /** 商品描述 */
  description: string;
  /** 商品详情HTML */
  detail_html: string;
  /** 原价 */
  origin_price: number;
  /** 销售价 */
  selling_price: number;
  /** 成本价 */
  cost_price: number;
  /** 重量（kg） */
  weight: number;
  /** 体积（m³） */
  volume: number;
  /** 单位：件、个、套等 */
  unit: string;
  /** SKU类型：1-单SKU，2-多SKU */
  sku_type: number;
  /** 库存类型：1-普通库存，2-批次库存 */
  stock_type: number;
  /** 总库存 */
  total_stock: number;
  /** 库存预警值 */
  warning_stock: number;
  /** 平均评分 */
  avg_rating: number;
  /** 是否热销 */
  is_hot: number;
  /** 是否新品 */
  is_new: number;
  /** 是否推荐 */
  is_recommend: number;
  /** 是否虚拟商品 */
  is_virtual: number;
  /** 是否数字商品 */
  is_digital: number;
  /** 是否自营商品 */
  is_self_support: number;
  /** 运费模板ID */
  delivery_template_id: number;
  /** 售后服务（JSON格式，具体结构可根据业务扩展） */
  after_sales_service: unknown;
  /** 保修期（月） */
  warranty_period: number;
  /** 下架时间 */
  off_shelf_time: string | Date;
  /** 状态：0-草稿，1-待审核，2-审核不通过，3-已上架，4-已下架 */
  status: number;
  /** 审核状态：0-待审核，1-审核通过，2-审核不通过 */
  audit_status: number;
  /** 审核备注 */
  audit_remark: string;
  /** SEO标题 */
  meta_title: string;
  /** SEO关键词 */
  meta_keywords: string;
  /** SEO描述 */
  meta_description: string;
}
