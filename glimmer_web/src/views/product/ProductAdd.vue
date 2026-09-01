<script setup lang="ts">
import { ref } from 'vue'
const activeStep = ref(0)
const nextStep = () => {
  if (activeStep.value < 3) {
    activeStep.value += 1
  }
  if (activeStep.value === 3) {
    setTimeout(() => {
      activeStep.value = 0
    }, 3000)
  }
}
</script>

<template>
  <el-container>
    <el-header>
      <!-- 步骤条 -->
      <el-steps
        style="max-width: 600px"
        :active="activeStep"
        align-center
        process-status="process"
        :space="200"
        finish-status="success"
      >
        <el-step title="Step 1" description="Some description" />
        <el-step title="Step 2" description="Some description" />
        <el-step title="Step 3" description="Some description" />
      </el-steps>
    </el-header>
    <el-main>
      <el-form label-width="120px">
        <template v-if="activeStep === 0">
          <!-- 商品编号 -->
          <el-form-item label="商品编号">
            <el-input placeholder="请输入商品编号" />
          </el-form-item>
          <!-- 商品名称 -->
          <el-form-item label="商品名称">
            <el-input placeholder="请输入商品名称" />
          </el-form-item>
          <el-form-item label="副标题">
            <el-input placeholder="请输入商品副标题" />
          </el-form-item>
          <!-- 分类 -->
          <el-form-item label="商品分类">
            <el-select placeholder="请选择商品分类">
              <el-option label="分类一" value="1" />
              <el-option label="分类二" value="2" />
              <el-option label="分类三" value="3" />
            </el-select>
          </el-form-item>
          <!-- 品牌 -->
          <el-form-item label="商品品牌">
            <el-select placeholder="请选择商品品牌">
              <el-option label="品牌一" value="1" />
              <el-option label="品牌二" value="2" />
              <el-option label="品牌三" value="3" />
            </el-select>
          </el-form-item>
        </template>

        <template v-if="activeStep === 1">
          <el-form-item label="商品图片">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="商品图册">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              multiple
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
          <!-- 商品视频 -->
          <el-form-item label="商品视频">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
          <!-- 商品描述 -->
          <el-form-item label="商品描述">
            <el-input type="textarea" :rows="4" placeholder="请输入商品描述" />
          </el-form-item>
          <!-- 商品原价 -->
          <el-form-item label="商品原价">
            <el-input placeholder="请输入商品原价" />
          </el-form-item>
          <!-- 商品销售价 -->
          <el-form-item label="商品销售价">
            <el-input placeholder="请输入商品销售价" />
          </el-form-item>
          <!-- 商品成本价 -->
          <el-form-item label="商品成本价">
            <el-input placeholder="请输入商品成本价" />
          </el-form-item>
          <!-- 重量 -->
          <el-form-item label="商品重量">
            <el-input placeholder="请输入商品重量" />
          </el-form-item>
          <!-- 体积 -->
          <el-form-item label="商品体积">
            <el-input placeholder="请输入商品体积" />
          </el-form-item>
          <!-- 单位 -->
          <el-form-item label="商品单位">
            <el-input placeholder="请输入商品单位" />
          </el-form-item>
        </template>

        <template v-if="activeStep === 2">
          <!-- sku类型 -->
          <el-form-item label="SKU类型">
            <el-radio-group>
              <el-radio label="1" :value="1">单规格</el-radio>
              <el-radio label="2" :value="2">多规格</el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 库存类型 -->
          <el-form-item label="库存类型">
            <el-radio-group>
              <el-radio label="1" :value="1">统一库存</el-radio>
              <el-radio label="2" :value="2">独立库存</el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 总库存 -->
          <el-form-item label="总库存">
            <el-input placeholder="请输入总库存" />
          </el-form-item>
          <!-- 库存预警值 -->
          <el-form-item label="库存预警值">
            <el-input placeholder="请输入库存预警值" />
          </el-form-item>
          <!-- 是否热销 -->
          <el-form-item label="是否热销">
            <el-switch />
          </el-form-item>
          <!-- 是否新品 -->
          <el-form-item label="是否新品">
            <el-switch />
          </el-form-item>
          <!-- 是否推荐 -->
          <el-form-item label="是否推荐">
            <el-switch />
          </el-form-item>
          <!-- 是否虚拟商品 -->
          <el-form-item label="是否虚拟商品">
            <el-switch />
          </el-form-item>
          <!-- 是否数字商品 -->
          <el-form-item label="是否数字商品">
            <el-switch />
          </el-form-item>
          <!-- 是否自营商品 -->
          <el-form-item label="是否自营商品">
            <el-switch />
          </el-form-item>
          <!-- 售后服务 -->
          <el-form-item label="售后服务">
            <el-input type="textarea" :rows="4" placeholder="请输入售后服务内容" />
          </el-form-item>
          <!-- 保修期 -->
          <el-form-item label="保修期">
            <el-input placeholder="请输入保修期" />
          </el-form-item>
        </template>
        <template v-if="activeStep === 3">
          <el-alert
            title="添加成功，请返回商品列表查看!"
            type="success"
            :closable="false"
            center
            v-if="activeStep === 3"
          />
        </template>
      </el-form>
    </el-main>
    <el-footer>
      <el-button type="primary" v-if="activeStep in [0, 1, 2]" @click="nextStep">提交</el-button>
    </el-footer>
  </el-container>
</template>

<style scoped>
.el-container {
  height: auto;
  width: 100%;

  .el-header {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .el-steps {
      width: 100%;
    }
  }

  .el-main {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .el-form {
      height: auto;
      width: 800px;

      display: flex;
      flex-direction: column;
      align-items: center;
      .el-form-item {
        width: 600px;
      }
    }
  }

  .el-footer {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
