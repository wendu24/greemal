<template>
  <div>
    <el-row class="header" :gutter="20">
      <el-col :span="8">
        <div class="grid-content ep-bg-purple">电商系统管理平台</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content ep-bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content ep-bg-purple"><login></login></div>
      </el-col>
      <el-col class="userOp" :span="8">
      </el-col>
    </el-row>
  </div>
</template>


<script setup>
  import login from './login.vue';



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
.userOp{
  display: flex;
  align-items: center;
}
.userOp div{

}
.userOp div:hover{
  color: red;
}
</style>