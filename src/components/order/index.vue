<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <el-form :inline="true" :model="orderSearchForm" class="demo-form-inline">
        <el-form-item label="订单号">
          <el-input v-model="orderSearchForm.orderCode" placeholder="请输入订单号" clearable />
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="orderSearchForm.goodsName" placeholder="请输入商品名称" clearable />
        </el-form-item>
        <el-form-item label="订单日期">
          <el-date-picker v-model="orderSearchForm.orderTime" type="date" placeholder="请输入订单日期" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="onSubmit">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="24">
      <el-button type="primary" @click="onSubmit">新增</el-button>
      <el-button type="primary" @click="onSubmit">批量删除</el-button>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="24">
      <el-table :data="tableData" @selection-change="handleSelectionChange" ref="multipleTableRef" style="width: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column label="订单日期" width="120">
          <template #default="scope">{{ scope.row.orderTime }}</template>
        </el-table-column>
        <el-table-column property="goodsName" label="商品名称" width="120" />
        <el-table-column property="orderCode" label="订单号" width="120" show-overflow-tooltip />
        <el-table-column property="address" label="收货地址" show-overflow-tooltip />
        <el-table-column property="userName" label="用户名" />
        <el-table-column property="number" label="数量" />
        <el-table-column fixed="right" property="" label="操作">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="showDetail(scope.row)">
              详情
            </el-button>
            <el-button link type="primary" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
  <detail v-model:showDetaiDialog="showDetaiDialog" v-model:orderInfo="orderInfo" />
</template>
<script setup name="detail">
import detail from "./detail.vue";
import { ref, reactive, watch } from "vue";
import { ElTable } from "element-plus";
import { listOrders, addOrder } from '@/api/order/order'



const multipleTableRef = ref();
const selectedOrder = ref([])

const orderSearchForm = ref({
  orderCode: "",
  goodsName: "",
  orderTime: "",
});

const onSubmit = () => {
  console.log("submit!");
};

const getOrderList = () => {
  listOrders({}).then(resp => {
    console.log(resp);
  },error=>{
    alert(error);
  });
}
getOrderList();

const handleSelectionChange = (selection) => {
  selectedOrder.value = selection;
  console.log(selectedOrder.value);
};

const showDetaiDialog = ref(false);
const orderInfo = ref({});
const showDetail = (row) => {
  showDetaiDialog.value = true
  orderInfo.value = row
  console.log(`orderInfo:${orderInfo.value.orderCode}`)
  console.log(`orderInfo:${orderInfo}`)
}

watch(() => showDetaiDialog.value, (newValue) => {
  console.log(newValue);
  console.log(showDetaiDialog);
});

const tableData = ref([
  {
    orderCode: "TMS12222222",
    goodsName: "格力变频挂机111",
    orderTime: "2024-01-01",
    address: "福建省三明市泰宁县111",
  },
  {
    orderCode: "TMS155522222",
    goodsName: "格力立式挂机111",
    orderTime: "2024-01-03",
    address: "福建省三明市泰宁县222",
  },
  {
    orderCode: "TMS100022222",
    goodsName: "格力变频挂机333",
    orderTime: "2024-01-04",
    address: "福建省三明市泰宁县333",
  },
]);


</script>

<style scoped></style>
