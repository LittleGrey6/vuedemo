<template>
    <div class="box">
        <el-table
            :data="userdata"
            border
            size="small"
            highlight-current-row
            style="width: 100%"
            max-height="250"
            >
            <el-table-column
            	fixed
                prop="id"
                label="id"
                width="180">
            </el-table-column>
            <el-table-column
                prop="username"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="sex"
                label="性别"
                width="180">
            </el-table-column>
            <el-table-column
                prop="phone"
                label="电话/手机"
                width="180">
            </el-table-column>
            <el-table-column
                prop="hobby"
                label="爱好"
                width="180">
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
            :before-close="handleClose">
            <el-form ref="editform" :model="curdata"  label-width="80px">
                <el-input type="hidden" v-model="curdata.id"></el-input>
                <el-form-item label="姓名">
                    <el-input v-model="curdata.username"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select class="selectsex"   placeholder="请选择性别" v-model="curdata.sex">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="电话/手机">
                    <el-col :span="11">
                    	<el-input v-model="curdata.phone"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="爱好">
                    <el-col >
                    	<el-input v-model="curdata.hobby"></el-input>
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
                username: '何彦龙',
                sex: '男',
                phone: '18393374110',
                hobby: '王者荣耀-2'
            },
            {
                id:2,
                username: '张旭',
                sex: '男',
                phone: '18393374110',
                hobby: '刺激战场-2'
            },
            {
                id:3,
                username: '朱颖',
                sex: '女',
                phone: '18393374110',
                hobby: '刺激战场-2'
            },
            {
                id:4,
                username: '丁龙龙',
                sex: '男',
                phone: '18393374110',
                hobby: '刺激战场-2'
            },
            {
                id:5,
                username: '赵鹏慧',
                sex: '女',
                phone: '18393374110',
                hobby: '刺激战场-2'
            }
        ]
        let visible = false;
        let curdata = {
            username:'',
            sex: '',
            phone: '',
            hobby:''
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
	.box{
		text-align: center;
	}
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
       .selectsex{float: left;}
</style>
