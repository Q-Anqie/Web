/**
 * 后端统一响应格式（所有接口都返回这个结构）
 */
export interface Result<T = unknown> {
  code: number;
  msg: string;
  data: T;
}



/**
 * 分页响应通用类型（对应后端分页接口的返回数据）
 */
export interface PageResult<T> {
  total: number;      // 总记录数
  totalPages: number; // 总页数
  pageNum: number;    // 当前页码
  pageSize: number;   // 每页条数
  list: T[];          // 分页数据列表（泛型，比如商品列表、用户列表）
}
