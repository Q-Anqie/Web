<template>
  <!-- 搜索 -->
  <searchFilter
    :table-title="data.tableTitle"
    :button-text="data.buttonText"
    :text-search-data="textSearchData"
    :select-search-data="data.selectSearchData"
    :select-search-num="data.selectSearchNum"
  />
  <!-- 数据展示 -->
  <tableList
    :table-title="'商品列表'"
    :button-text="'添加商品'"
    :data-list="pageResult?.records ?? []"
    :list-keys="listKeys"
    v-model:multiple-selection="multipleSelection"
  />
</template>

<script lang="ts" setup>
import { type Ref } from 'vue'
import tableList from '@/components/tableList.vue'
import searchFilter from '@/components/searchFilter.vue'

// 导入筛选数据
import data from '@/utils/productlistData.ts'
const textSearchData: { value: Ref<string>; placeholder: string }[] = data.textSearchData

// 获取商品列表
import { getProductList } from '@/api/product/productListApi'
import type { PageResult } from '@/utils/pageResult'
import type { Product } from '@/types/Product/Product'
import { onMounted, ref } from 'vue'
const pageResult = ref<PageResult<Product> | null>(null)
// 临时表格键名
const listKeys = ['id', 'productName', 'productSn', 'categoryId', 'stock', 'status']
// 临时批量操作选择项
const multipleSelection = ref<(string | number)[]>([])
// 组件挂载时获取商品列表
onMounted(async () => {
  try {
    pageResult.value = await getProductList()
    for (const record of pageResult.value.records) {
      console.log(record)
    }
  } catch (error) {
    console.error('请求商品列表失败:', error)
  }
})
</script>
