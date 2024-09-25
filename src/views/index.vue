<template>
  <div>
    <el-row class="header" :gutter="20">
      <el-col :span="8"><div class="grid-content ep-bg-purple">电商系统管理平台</div></el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple">欢饮您！ xxx</div></el-col>
      <el-col :span="4"><div @click="exitUser" class="grid-content ep-bg-purple">退出</div></el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>系统管理</span>
            </template>
              <el-menu-item index="1-1">用户管理</el-menu-item>
              <el-menu-item index="1-2">权限管理</el-menu-item>
              <el-menu-item index="1-3">黑白名单</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>品类管理</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <router-link to="/order">订单管理</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <router-link to="/goods">商品管理</router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon><setting /></el-icon>
            <span>评论管理</span>
          </el-menu-item>
          <el-menu-item index="6">
            <el-icon><setting /></el-icon>
            <span>活动管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <div class="content">
            <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>

/** 要先安装 cnpm install @element-plus/icons-vue */
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { useRouter } from 'vue-router';
import { getCurrentInstance } from 'vue'

 
const router = useRouter();





const that = getCurrentInstance();

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

const exitUser=()=>{
  // location.href="/"
  router.push("/")
}

</script>
  
<style scoped>
.header {
  margin-bottom: 20px;
  background-color: antiquewhite;
  margin-top: 0px;
}
.header:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
    
  border-radius: 4px;
  min-height: 36px;
  width: 150px;
}

.grid-content2 {
  height: 500px;
  background-color: aquamarine;
}
</style>