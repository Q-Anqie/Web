// 从后端获取商品列表数据
import instance from '@/api/request'
import type { Product } from '@/types/Product/Product'
import type { PageResult } from '@/utils/pageResult'
import type { Result } from '@/types/common'

// 获取分页的商品列表
export async function getProductList(): Promise<PageResult<Product>> {
  const raw = await instance.get<Result<PageResult<Product>> | PageResult<Product>>(
    '/api/v1/products/list/products',
  )
  const res = raw as unknown as Result<PageResult<Product>> | PageResult<Product>
  const data: PageResult<Product> = (res && typeof res === 'object' && 'data' in res)
    ? (res as Result<PageResult<Product>>).data
    : (res as PageResult<Product>)
  console.log('获取的商品列表数据:', data)
  return data
}

// 获取商品分类列表
export async function getProductCategoryList(): Promise<string[]> {
  const raw = await instance.get<Result<string[]> | string[]>('/api/v1/products/list/categories')
  const res = raw as unknown as Result<string[]> | string[]
  const data: string[] = (res && typeof res === 'object' && 'data' in res)
    ? (res as Result<string[]>).data
    : (res as string[])
  return data
}
