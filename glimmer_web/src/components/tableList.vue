<template>
  <el-container>
    <el-header>
      <div class="tableTitle">
        <el-icon><Icon icon="mdi:format-list-bulleted" /></el-icon>
        <h3>{{ tableTitle }}</h3>
      </div>
      <el-button type="primary" @click="buttonValue">{{ buttonText }}</el-button>
    </el-header>

    <!-- 列表项 -->

    <el-main>
      <el-table :data="dataList" border style="width: 100%">
        <el-table-column
          :prop="column"
          :label="column"
          width="auto"
          v-for="column in listKeys"
          :key="column"
        />
      </el-table>
    </el-main>
    <el-footer>
      <el-select
        v-model="localSelection"
        multiple
        placeholder="Select"
        style="width: 240px"
        clearable
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <!-- 分页 -->

      <div class="demo-pagination-block">
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :size="size"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-footer>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'

// 配置表格属性
type Option = {
  label: string
  value: string | number
}

const props = withDefaults(
  defineProps<{
    tableTitle: string
    buttonText: string
    dataList: Record<string, unknown>[]
    listKeys: string[]
    options?: Option[]
    multipleSelection?: (string | number)[]
  }>(),
  {
    options: () => [],
    multipleSelection: () => [],
  },
)

const emit = defineEmits<{
  (e: 'update:multipleSelection', value: (string | number)[]): void
}>()

const localSelection = ref<(string | number)[]>([...props.multipleSelection])

watch(localSelection, (val) => {
  emit('update:multipleSelection', val)
})

// 分页相关
import type { ComponentSize } from 'element-plus'
const currentPage4 = ref(4)
const pageSize4 = ref(100)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)

// 分页事件处理函数
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

// 添加商品按钮跳转
import router from '@/router'
const buttonValue = () => {
  if (props.buttonText === '添加商品') {
    router.push('/manage/goods/add')
  }
}
</script>

<style scoped>
.el-container {
  height: auto;
  width: 100%;
  .el-header {
    height: auto;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .tableTitle {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }
    .el-button {
      background-color: #6366f1;
    }
  }
  .el-main {
    justify-content: center;
    align-items: center;
  }
  .el-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
