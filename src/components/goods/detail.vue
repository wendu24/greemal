<template>


    <el-dialog v-model="dialogVisible" title="商品详情" width="700" height="500" >
  
      <el-form  :inline="true" :model="goodsInfo" class="demo-form-inline">
        <el-form-item label="商品编号">
          <el-input v-model="goodsInfo.value.goodsName"  disabled />
        </el-form-item>
        
        <el-form-item label="商品名称">
          <el-input v-model="goodsInfo.value.goodsName" disabled />
        </el-form-item>
        
        <el-form-item label="商品价格">
          <el-input v-model="goodsInfo.value.price" disabled />
        </el-form-item>
        
        <el-form-item label="新增时间">
          <el-input v-model="goodsInfo.value.createTime" disabled />
        </el-form-item>
        
        
      </el-form>
  
  
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
  </template>
  
  <script setup>
  import { watch, ref, defineEmits } from 'vue'
  import { ElMessageBox } from 'element-plus'
  
  const dialogVisible = defineModel('showDetaiDialog');
  const goodsInfo = defineModel('goodsInfo');
  // const dialogVisible = ref(props.showDetaiDialog)
  
  // const emit = defineEmits(['update:dialogVisible'])
  
  
  // const handleClose = (done) => {
  //   ElMessageBox.confirm('Are you sure to close this dialog?')
  //     .then(() => {
  //       // done()
  //       // emit('update:dialogVisible', dialogVisible)
  //     })
  //     .catch(() => {
  //       // catch error
  //     })
  // }
  
  
  // watch(() => dialogVisible.value, (newValue) => {
  //   console.log(newValue);
  //   console.log(dialogVisible);
  // });
  
  watch(() => goodsInfo, (newValue) => {
    console.log(newValue);
    console.log(goodsInfo);
  });
  
  
  </script>
  
  <style scoped>
  .demo-form-inline{
    margin-left: 30px;
  }
  </style>