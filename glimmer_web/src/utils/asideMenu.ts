// 用于生成侧边栏菜单的数据
export const asideMenu = [
  {
    title: '系统',
    icon: 'icon-park-outline:system',
    index: 'system', // 主菜单index（对应路由大类）
    submenu: [
      { title: '仪表盘', icon: 'material-symbols:speed-outline', index: 'system/dashboard' },
      { title: '设置', icon: 'material-symbols:settings-outline', index: 'system/settings' },
      { title: '数据', icon: 'material-symbols:data-exploration-outline', index: 'system/data' },
      { title: '选项', icon: 'material-symbols:check-box-outline', index: 'system/options' },
      { title: '文档', icon: 'material-symbols:description-outline', index: 'system/docs' }
    ]
  },
  {
    title: '商品',
    icon: 'mdi:shopping-outline',
    index: 'goods', // 主菜单index
    submenu: [
      { title: '商品列表', icon: 'ic:baseline-format-list-bulleted', index: 'goods/list' },
      { title: '添加商品', icon: 'mdi:plus-box-outline', index: 'goods/add' },
      { title: '商品分类', icon: 'mdi:shape-outline', index: 'goods/category' },
      { title: '商品类型', icon: 'mdi:format-list-bulleted', index: 'goods/type' },
      { title: '品牌管理', icon: 'mdi:tag-outline', index: 'goods/brand' }
    ]
  },
  {
    title: '订单',
    icon: 'mingcute:package-2-line',
    index: 'order', // 主菜单index
    submenu: [
      { title: '订单列表', icon: 'ic:baseline-format-list-bulleted', index: 'order/list' },
      { title: '订单设置', icon: 'mingcute:settings-6-line', index: 'order/settings' },
      { title: '退货申请处理', icon: 'mingcute:check-line', index: 'order/return-apply' },
      { title: '退货原因设置', icon: 'mingcute:close-line', index: 'order/return-reason' }
    ]
  },
  {
    title: '营销',
    icon: 'material-symbols:bookmark-outline',
    index: 'marketing', // 主菜单index
    submenu: [
      { title: '活动列表', icon: 'ep:calendar', index: 'marketing/activity' },
      { title: '优惠券列表', icon: 'icon-park-outline:coupon', index: 'marketing/coupon' },
      { title: '品牌推荐', icon: 'mdi-light:tag', index: 'marketing/brand-recommend' },
      { title: '新品推荐', icon: 'material-symbols:crown-outline', index: 'marketing/new-recommend' },
      { title: '人气推荐', icon: 'flowbite:fire-outline', index: 'marketing/hot-recommend' },
      { title: '专题推荐', icon: 'material-symbols-light:diamond-outline', index: 'marketing/theme-recommend' },
      { title: '广告推荐', icon: 'mingcute:lightning-line', index: 'marketing/ad-recommend' }
    ]
  },
  {
    title: '权限',
    icon: 'material-symbols:settings-outline',
    index: 'permission', // 主菜单index
    submenu: [
      { title: '用户列表', icon: 'mdi:account-outline', index: 'permission/user' },
      { title: '管理员列表', icon: 'mdi:account-tie-outline', index: 'permission/admin' },
      { title: '角色列表', icon: 'mdi:account-group-outline', index: 'permission/role' },
      { title: '菜单列表', icon: 'ic:baseline-format-list-bulleted', index: 'permission/menu' },
      { title: '资源列表', icon: 'mdi:database-outline', index: 'permission/resource' }
    ]
  }
]
