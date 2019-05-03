<template>
    <el-row type="flex" class="row-bg login" justify="center" >
        <el-col :span="6">
            <el-card class="box-card">
                <div slot="header">
                    <span>用户登录</span>
                </div>
                <el-form label-position="top" :model="ruleForm" label-width="80px" :rules="rules" ref="login"  style="text-align: left;">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="ruleForm.username" prefix-icon="el-icon-circle-check-outline"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="userpassword">
                        <el-input v-model="ruleForm.userpassword" type="password" prefix-icon="el-icon-view"></el-input>
                    </el-form-item>
                    <el-button :loading="false" style="width: 100%;" type="primary" @click="submitForm('login')">登录</el-button>
                </el-form>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'Login',
    data() {
          return {
            ruleForm: {
              username: '',
              userpassword: '',
            },
            rules: {
                username: [
                    { required: true, message: '不能为空', trigger: 'blur' },
                    { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
                ],
                userpassword: [
                    { required: true, message: '不能为空', trigger: 'blur' },
                    { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
                ]
            }
          }
    },
    methods: {
        submitForm: function (formname) {
            this.$refs[formname].validate((valid) => {
                if (valid) {
                    this.$store.state.info = {usernmae:'admin'}
                    this.$store.state.logined = true;
                    this.$router.push({path:'/index'})
                } else {
                    return false;
                }
            });
        }
    },
    mounted: function () {
        this.$store.dispatch('add');
        alert(this.$store.state.count);
    }
}
</script>

<style scoped>
.el-card >>>el-card__body{
    padding-top: 5px;
}
.login{
    margin-top: 10%;
}
</style>
