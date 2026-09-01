// 筛选搜索的数据列表

// 筛选搜索的数据列表
const searchFilterData = [
  {
    id: 1, // bigint [商品ID]
    product_sn: 'ABC123', // varchar[50] [商品编号]
    product_name: 'Product A', // varchar[200] [商品名称]
    category_id: 2, // int [品类ID]
    brand_id: 3, // int [品牌ID]
    main_image: 'https://example.com/product-a-main.jpg', // varchar[500] [主图]
    selling_price: 99.99, // decimal(15,2) [销售价]
    sku_type: 1, // tinyint [SKU类型：1-单SKU，2-多SKU]
    sold_count: 100, // int [已售数量]
    view_count: 500, // int [浏览量]
    is_hot: 1, // tinyint [是否热销]
    is_new: 1, // tinyint [是否新品]
    is_recommend: 1, // tinyint [是否推荐]
    is_virtual: 0, // tinyint [是否虚拟商品]
    is_digital: 0, // tinyint [是否数字商品]
    is_self_support: 1, // tinyint [是否自营商品]
    shelf_time: '2026-01-01 00:00:00', // datetime [上架时间]
    off_shelf_time: '2026-12-31 23:59:59', // datetime [下架时间]
    status: 3, // tinyint [状态：0-草稿，1-待审核，2-审核不通过，3-已上架，4-已下架]
    audit_status: 1, // tinyint [审核状态：0-待审核，1-审核通过，2-审核不通过]
    audit_remark: '审核通过' // varchar[500] [审核备注]
  }
]

export default searchFilterData
