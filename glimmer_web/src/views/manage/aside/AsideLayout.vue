<template>
  <el-container>
    <el-main>
      <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        unique-opened
        router
        default-active="$route.path"
        @open="handleOpen"
        @close="handleClose"
      >
        <div class="title-box">
          <div class="title-text">
            <h1 class="title">微光</h1>
            <h2 class="sub-title" v-if="!isCollapse">管理后台</h2>
          </div>
        </div>
        <el-sub-menu v-for="menu in asideMenu" :key="menu.title" :index="`/manage/${menu.index}`">
          <template #title>
            <el-icon><Icon :icon="menu.icon" /></el-icon>
            <span>{{ menu.title }}</span>
          </template>
          <el-menu-item
            v-for="subMenu in menu.submenu"
            :key="subMenu.title"
            :index="`/manage/${subMenu.index}`"
          >
            <el-icon><Icon :icon="subMenu.icon" /></el-icon>{{ subMenu.title }}
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'

// 侧边栏折叠状态
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

// 动态渲染菜单列表
import { asideMenu } from '@/utils/asideMenu'
// header传递折叠
defineProps({
  isCollapse: {
    type: Boolean,
    required: false,
    default: true,
  },
})
</script>

<style scoped lang="scss">
.el-container {
  height: 100%;
  max-width: 200px;
  .el-main {
    width: 100%;
    padding: 0;

    :deep(.el-menu-vertical-demo:not(.el-menu--collapse)) {
      width: 200px;
      height: 100%;
    }

    :deep(.title-box) {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 15px;
      .title-text {
        .title {
          margin: 0;
          font-size: 18px;
        }
        .sub-title {
          margin: 0;
          font-size: 12px;
        }
      }
      .menuIcon {
        font-size: 24px;
        cursor: pointer;
      }
    }

    :deep(.el-menu-item.is-active) {
      color: #6366f1;
    }
  }
}
</style>
