<template>
  <el-container class="layout-container">
    <el-aside>
      <AsideLayout :isCollapse="isCollapse" />
    </el-aside>
    <el-container class="right-container">
      <el-header>
        <HeaderLayout :isCollapse="isCollapse" @toggleCollapse="toggleCollapse" />
      </el-header>
      <el-main>
        <MainLayout></MainLayout>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AsideLayout from './aside/AsideLayout.vue'
import HeaderLayout from './header/HeaderLayout.vue'
import MainLayout from './main/MainLayout.vue'

const isCollapse = ref(false)
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style scoped lang="scss">
@mixin common-styles {
  width: auto;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.layout-container {
  width: 100%;
  height: 100vh;

  .el-aside {
    @include common-styles;
  }

  .el-header {
    @include common-styles;
    height: auto;
  }

  .el-main {
    @include common-styles;
    flex: 1;
  }
}
</style>
