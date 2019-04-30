<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人中心</el-breadcrumb-item>
      <el-breadcrumb-item>个人信息</el-breadcrumb-item>
    </el-breadcrumb>
    <!--数据表格-->
    <el-table
      :data="userdata"
      border
      size="small"
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="usergroup"
        label="分组"
        width="180">
      </el-table-column>
      <el-table-column
        prop="registertime"
        label="注册时间">
      </el-table-column>
      <el-table-column

        label="操作"
      >
        <el-button-group  slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-edit" @click="edititem(scope.row.id)"></el-button>
          <el-button type="primary" size="small" icon="el-icon-delete" @click="deleteitem(scope.row.id)"></el-button>
        </el-button-group>
      </el-table-column>
    </el-table>
    <!--修改框-->
    <el-dialog
      title="信息修改"
      :visible.sync="visible"
      width="50%"
    >
      <el-form ref="editform" :model="curdata"  label-width="80px">
        <el-input type="hidden" v-model="curdata.id"></el-input>
        <el-form-item label="用户名">
          <el-input v-model="curdata.username"></el-input>
        </el-form-item>
        <el-form-item label="用户分组">
          <el-select  placeholder="请选择活动区域" v-model="curdata.usergroup">
            <el-option label="超级管理员" value="超级管理员"></el-option>
            <el-option label="编辑" value="编辑"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="注册时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"
                            v-model="curdata.registertime"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.stop="submitForm">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  //引入布局头部
  export default {
    data() {
      let userdata = [
        {
          id:1,
          username: 'admin',
          usericon: '/assets/logo.png',
          usergroup: '超级管理员',
          registertime: '2019-04-25'
        },
        {
          id:2,
          username: 'editor',
          usericon: '/assets/logo.png',
          usergroup: '管理员',
          registertime: '2019-04-25'
        }
      ]
      let visible = false;
      let curdata = {
        username:'',
        usergroup: '',
        registertime: ''
      };
      return {userdata,visible, curdata}
    },
    methods: {
      submitForm: function () {
        for (let [key, item] of this.userdata.entries()) {
          if (item.id == this.curdata.id) {
            this.userdata[key] = this.curdata;
          }
        }
        this.visible = false;
        this.$message({
          type: 'success',
          message: '修改成功!'
        });
      },
      edititem(id) {
        for (let item of this.userdata) {
          if (item.id == id) {
            this.curdata = item;
          }
        }
        this.visible = true;
      },
      deleteitem(id) {
        this.$confirm('确定要删除吗?', '标题名称', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          for (let [key, item] of this.userdata.entries()) {
            if (item.id == id) {
              this.userdata.splice(key, 1);
            }
          }
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<style scoped>
  .el-breadcrumb{ margin-bottom: 10px;}
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
