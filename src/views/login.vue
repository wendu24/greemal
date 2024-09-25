<template>
    <el-button key="登录" link @click="dialogVisible = true">
        登录
    </el-button>

    <el-dialog v-model="dialogVisible" title="请登录" width="350" height="500">

        <el-form :inline="true" :model="userLoginInfo" ref="loginRef" :rules="rules" class="demo-form-inline">
            <el-form-item label="账号" prop="userName">
                <el-input v-model="userLoginInfo.userName" />
            </el-form-item>

            <el-form-item label="密码" prop="password">
                <el-input v-model="userLoginInfo.password" />
            </el-form-item>

        </el-form>


        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="doLogin">
                    登录
                </el-button>
            </div>
        </template>
    </el-dialog>

</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

const { proxy } = getCurrentInstance();
const dialogVisible = ref(false);

const userLoginInfo = ref({
    userName: "",
    password: "",
});
// const loginRef = reactive();

const doLogin = (loginRef) => {
    console.log(loginRef)
    proxy.$refs.loginRef.validate((valid) => {
        if (!valid)
            return;
        if (userLoginInfo.value.userName == "wenjx" && userLoginInfo.value.password == "123456") {
            dialogVisible.value = false
            router.push("/index")

        } else {
            console.log(`验证结果${valid}`)

        }

    })


}


const rules = {
    userName: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'change', },
    ]
}

</script>

<style scoped>
.demo-form-inline {
    margin-left: 40px;
    margin-right: 30px;
}
</style>