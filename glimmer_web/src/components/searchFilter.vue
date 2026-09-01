<template>
  <el-container>
    <el-header>
      <div class="tableTitle">
        <el-icon><Icon icon="mdi:format-list-bulleted" /></el-icon>
        <h3>{{ tableTitle }}</h3>
      </div>
      <div>
        <el-button type="primary">重置</el-button>
        <el-button type="primary">{{ buttonText }}</el-button>
      </div>
    </el-header>
    <el-main>
      <el-form :inline="true" style="width: 900px">
        <!-- 文本型搜索 *2 -->
        <el-form-item v-for="(item, index) in textSearchData" :key="index" style="width: 250px">
          <el-input
            type="text"
            :model-value="item.value.value"
            @update:model-value="item.value.value = $event"
            :placeholder="item.placeholder"
            clearable
          >
            <template #prefix>
              <el-icon>
                <Icon icon="mdi:magnify" />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <!-- 下拉型搜索 *4 -->
        <el-form-item v-for="num in selectSearchNum" :key="num" style="width: 250px">
          <el-select v-model="value" placeholder="Select" clearable>
            <el-option
              v-for="(item, index) in selectSearchData"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { Icon } from '@iconify/vue'
const value = ref('')
withDefaults(
  defineProps<{
    tableTitle: string
    buttonText: string
    selectSearchNum: number
    textSearchData: { value: Ref<string>; placeholder: string }[]
    selectSearchData: { label: string; value: string }[]
  }>(),
  {},
)
</script>

<style scoped>
.el-container {
  .el-header {
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
