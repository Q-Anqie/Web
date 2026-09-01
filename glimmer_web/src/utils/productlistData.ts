import { ref} from 'vue'
export default {
  tableTitle: '商品列表',
  buttonText: '搜索商品',
  selectSearchNum: 4,
  textSearchData: [{value: ref(''), placeholder: '商品名称'}, {value: ref(''), placeholder: '商品编号'}],
  selectSearchData: [{label: '分类一', value: 'cat1'}, {label: '分类二', value: 'cat2'}, {label: '分类三', value: 'cat3'}],
}
