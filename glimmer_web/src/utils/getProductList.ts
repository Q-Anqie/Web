// 从后端获取商品列表数据
import instance from '@/api/request'
import type { Product } from '@/types/Product/Product'
import type { PageResult } from '@/utils/pageResult'
import type { Result } from '@/types/common'

// 获取分页的商品列表
export async function getProductList(): Promise<PageResult<Product>> {
  const res = await instance.get<Result<PageResult<Product>> | PageResult<Product>>('/api/v1/products/list/products')
  const data: PageResult<Product> = res?.data ?? res
  console.log('获取的商品列表数据:', data)
  return data
}

// 获取商品分类列表
export async function getProductCategoryList(): Promise<string[]> {
  const res = await instance.get<Result<string[]> | string[]>('/api/v1/products/list/categories')
  const data: string[] = res?.data ?? res
  return data
}
