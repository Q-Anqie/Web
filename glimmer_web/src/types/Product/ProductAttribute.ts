/**
 * 商品属性输入类型枚举（对应input_type字段的固定值）
 */
export enum ProductAttributeInputType {
  TEXT = 1,      // 文本
  RADIO = 2,     // 单选
  CHECKBOX = 3,  // 多选
  SELECT = 4     // 下拉框
}

/**
 * 商品属性基础实体接口
 */
export interface ProductAttribute {
  /** 属性ID */
  id: number;
  /** 属性名称 */
  attribute_name: string;
  /** 属性编码 */
  attribute_code: string;
  /** 所属分类ID */
  category_id: number;
  /** 输入类型（关联枚举） */
  input_type: ProductAttributeInputType;
  /** 可选值列表（逗号分隔，如："红色,蓝色,黑色"） */
  value: string;
  /** 是否必填 */
  is_required: number;
  /** 是否可搜索 */
  is_searchable: number;
  /** 是否可筛选 */
  is_filterable: number;
  /** 是否销售属性 */
  is_sale_attribute: number;
  /** 是否规格属性 */
  is_specification: number;
  /** 排序 */
  sort_order: number;
  /** 状态：0-禁用，1-启用 */
  status: number;
}

/**
 * 商品属性查询参数接口
 */
export interface ProductAttributeQueryParams {
  /** 属性ID（可选） */
  id?: number;
  /** 属性名称（模糊查询，可选） */
  attribute_name?: string;
  /** 所属分类ID（可选） */
  category_id?: number;
  /** 输入类型（可选，关联枚举） */
  input_type?: ProductAttributeInputType;
  /** 状态（可选：0-禁用，1-启用） */
  status?: number;
  /** 是否销售属性（可选） */
  is_sale_attribute?: number;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}

/**
 * 商品属性新增参数接口
 */
export interface ProductAttributeAddParams {
  /** 属性名称（必传） */
  attribute_name: string;
  /** 属性编码（必传） */
  attribute_code: string;
  /** 所属分类ID（必传） */
  category_id: number;
  /** 输入类型（必传，关联枚举） */
  input_type: ProductAttributeInputType;
  /** 可选值列表（逗号分隔，可选） */
  value?: string;
  /** 是否必填（可选，默认0） */
  is_required?: number;
  /** 是否可搜索（可选，默认0） */
  is_searchable?: number;
  /** 是否可筛选（可选，默认0） */
  is_filterable?: number;
  /** 是否销售属性（可选，默认0） */
  is_sale_attribute?: number;
  /** 是否规格属性（可选，默认0） */
  is_specification?: number;
  /** 排序（可选，默认0） */
  sort_order?: number;
  /** 状态（可选，默认1-启用） */
  status?: number;
}

/**
 * 商品属性更新参数接口
 */
export interface ProductAttributeUpdateParams {
  /** 属性ID（必传，定位更新对象） */
  id: number;
  /** 属性名称（可选） */
  attribute_name?: string;
  /** 属性编码（可选） */
  attribute_code?: string;
  /** 所属分类ID（可选） */
  category_id?: number;
  /** 输入类型（可选，关联枚举） */
  input_type?: ProductAttributeInputType;
  /** 可选值列表（逗号分隔，可选） */
  value?: string;
  /** 是否必填（可选） */
  is_required?: number;
  /** 是否可搜索（可选） */
  is_searchable?: number;
  /** 是否可筛选（可选） */
  is_filterable?: number;
  /** 是否销售属性（可选） */
  is_sale_attribute?: number;
  /** 是否规格属性（可选） */
  is_specification?: number;
  /** 排序（可选） */
  sort_order?: number;
  /** 状态（可选：0-禁用，1-启用） */
  status?: number;
}


/**
 * 商品属性值基础实体接口
 */
export interface ProductAttributeValue {
  /** 属性值ID */
  id: string | bigint;
  /** 商品ID */
  product_id: string | bigint;
  /** 属性ID（关联商品属性） */
  attribute_id: number;
  /** 属性值（如："红色"） */
  attribute_value: string;
  /** 排序 */
  sort_order: number;
}

/**
 * 商品属性值查询参数接口
 */
export interface ProductAttributeValueQueryParams {
  /** 属性值ID（可选） */
  id?: string | bigint;
  /** 商品ID（可选） */
  product_id?: string | bigint;
  /** 属性ID（可选，关联商品属性） */
  attribute_id?: number;
  /** 分页页码（默认1） */
  pageNum?: number;
  /** 分页大小（默认10） */
  pageSize?: number;
}

/**
 * 商品属性值新增参数接口
 */
export interface ProductAttributeValueAddParams {
  /** 商品ID（必传） */
  product_id: string | bigint;
  /** 属性ID（必传，关联商品属性） */
  attribute_id: number;
  /** 属性值（必传） */
  attribute_value: string;
  /** 排序（可选，默认0） */
  sort_order?: number;
}

/**
 * 商品属性值更新参数接口
 */
export interface ProductAttributeValueUpdateParams {
  /** 属性值ID（必传，定位更新对象） */
  id: string | bigint;
  /** 商品ID（可选） */
  product_id?: string | bigint;
  /** 属性ID（可选，关联商品属性） */
  attribute_id?: number;
  /** 属性值（可选） */
  attribute_value?: string;
  /** 排序（可选） */
  sort_order?: number;
}
