<template>


  <el-dialog v-model="dialogVisible" title="订单详情" width="700" height="500" >

    <el-form  :inline="true" :model="orderInfo" class="demo-form-inline">
      <el-form-item label="订单编号" prop="orderCode">
        <el-input v-model="orderInfo.orderCode"  disabled />
      </el-form-item>
      
      <el-form-item label="商品名称" prop="goodsName">
        <el-input v-model="orderInfo.goodsName" disabled />
      </el-form-item>
      
      <el-form-item label="收货地址" prop="address">
        <el-input v-model="orderInfo.address" disabled />
      </el-form-item>
      
      <el-form-item label="下单时间" prop="orderTime">
        <el-input v-model="orderInfo.orderTime" disabled />
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
const orderInfo = defineModel('orderInfo');
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

watch(() => orderInfo, (newValue) => {
  console.log(newValue);
  console.log(orderInfo);
});


</script>

<style scoped>
.demo-form-inline{
  margin-left: 30px;
}
</style>