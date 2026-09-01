<template>
  <el-button @click="updateVisiuable">按我</el-button>
  <el-dialog v-model="isVisible" title="添加类型" width="500">
    <el-form label-width="80px">
      <el-form-item label="类型名称">
        <el-input />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="buttons">
        <el-button>提交</el-button>
        <el-button>重置</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const isVisible = ref(false)
const updateVisiuable = () => {
  isVisible.value = true
}
</script>
