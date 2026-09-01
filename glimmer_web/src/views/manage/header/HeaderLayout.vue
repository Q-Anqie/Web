<template>
  <el-container>
    <el-main>
      <div class="left-nav">
        <el-icon @click="handleCollapse"
          ><Icon icon="material-symbols:menu" class="menuIcon"
        /></el-icon>
        <div class="nav-router">
          <h2 class="title">{{ $router.currentRoute.value.fullPath }}</h2>
          <p class="sub-title">欢迎使用管理后台模板</p>
        </div>
      </div>
      <div class="right-nav">
        <el-input type="text" placeholder="搜索" class="search-input" clearable>
          <template #prefix>
            <el-icon><Icon icon="mdi:magnify" /></el-icon>
          </template>
        </el-input>
        <el-icon class="userIcon"><User /></el-icon>
        <div class="text-info">
          <p class="userName">管理员</p>
          <p class="userEmail">
            <el-icon><Icon icon="mdi:email-outline" /></el-icon>
            0391938198@qtc.com
          </p>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
// Props
defineProps({
  isCollapse: {
    type: Boolean,
    required: false,
    default: false,
  },
})
// Emits
// 补充TS类型约束，增强类型校验
const emit = defineEmits<{
  (e: 'toggleCollapse'): void
}>()
// 函数添加返回值类型
const handleCollapse = (): void => {
  emit('toggleCollapse')
}
</script>

<style scoped lang="scss">
.el-container {
  .el-main {
    display: flex;
    flex-direction: row;
    align-items: center;

    .left-nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 1;

      .menuIcon {
        font-size: 28px;
        cursor: pointer;
      }

      .nav-router {
        margin-left: 15px;

        .title {
          margin: 0;
          font-size: 18px;
        }

        .sub-title {
          margin: 0;
          font-size: 12px;
          color: #888;
        }
      }
    }

    .right-nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;

      .userIcon {
        font-size: 28px;
        cursor: pointer;
      }

      .text-info {
        p {
          margin: 0;
          font-size: 14px;
          color: #333;
          cursor: pointer;
        }
      }

      .search-input {
        width: 300px;

        :deep(.el-input__wrapper) {
          border-radius: 20px;
        }
      }
    }
  }
}
</style>
