<template>
  <!-- 商品列表 -->
  <template v-if="route.path === '/manage/goods/list'">
    <ProductList />
  </template>
  <!-- 商品分类 -->
  <template v-else-if="route.path === '/manage/goods/category'">
    <ProductCategory />
  </template>
  <!-- 商品类型 -->
  <template v-else-if="route.path === '/manage/goods/type'">
    <ProductType />
  </template>
  <!-- 品牌管理 -->
  <template v-else-if="route.path === '/manage/goods/brand'">
    <BrandManage />
  </template>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
// 获取当前路由
const route = useRoute()

// 导入页面组件
import ProductList from '@/views/product/ProductList.vue'
import ProductCategory from './product/ProductCategory/ProductCategory.vue'
import ProductType from './product/product_type/ProductType.vue'
import BrandManage from './product/brandmanage/BrandManage.vue'
</script>
