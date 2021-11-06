<template>
	<!-- 注册 -->
	<div style="margin-bottom: 20px;margin-top: 10px;">
		<el-input placeholder="名字" prefix-icon="el-icon-search" style="width:120px;margin-left:20px;"
			v-model="name" size="medium">
		</el-input>
		<el-button plain style="margin-left: 20px;" @click="selectgroupbus()" icon="el-icon-search" size="medium">查询
		</el-button>
		<el-button plain style="margin-left: 20px;" @click="insert()" icon="el-icon-search" size="medium">新增
		</el-button>
	</div>
	
	<el-table   style="width: 100%" stripe   :data="register">
		<el-table-column   label="名字" sortable width="100px" prop="rename">
		</el-table-column>
		<el-table-column label="性别" width="100" prop="rsex">
		 </el-table-column>
		<el-table-column   label="年龄" width="180"  prop="rage"> 
		</el-table-column>
		<el-table-column label="社保编号" prop="rprotect"  style="width:80px" sortable>
		</el-table-column>
		<el-table-column label="工作单位"  prop="rwork">
		</el-table-column>
		<el-table-column label="联系电话"  prop="rtel">
		</el-table-column>
		<el-table-column label="家庭住址"  prop="raddress">
		</el-table-column>
		<el-table-column label="诊断"  prop="remark">
		</el-table-column>
		 <el-table-column label="住院号"  prop="rnum">
		 </el-table-column>
		 <el-table-column label="经过" prop="rmore">
		 </el-table-column>
	</el-table>
</template>

<script>
	export default {
		data() {
			return {
				register:[],
				  rsex: '',
					rage: 0,
					rwork: '',
					raddress: '',
					rtime: '',
					remark: '',
					rnum: 0,
					rmore: '',
					rprotect: '',
					rtel: '',
					rename: ''
				 
			}
		},methods:{
			loadData(){//查询所有
				this.axios.post("register/selectall").then(res=>{
					this.register=res.data;
					console.log(res,"获取到的")
					
				})
			},
			selectgroupbus(){
				console.log(this.name,"获取到的")
				this.axios.post("register/select",{
					rename:name
				}).then(res=>{
					this.register=res.data;
				})
				
			},
			insert(){
				this.$router.push({ //路由跳页面
					name: "登记新增"
				});
			}
		},
		mounted() {
			this.loadData();
		}
	}
</script>

<style scoped="scoped">
</style>
