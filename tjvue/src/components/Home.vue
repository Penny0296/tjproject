<template>
	<el-container>
		<el-header>首页部分</el-header>
		 <el-container>
			<!-- 菜单区 -->
			<el-aside width="200px">
				 <el-menu :uniqueOpened="true" default-active="1" class="el-menu-vertical-demo" @open="handleOpen"
					@close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-submenu index="1">
						<!-- 标题插槽完整版 -->
						<template #title>
							<i class="el-icon-location"></i><!-- 图标 -->
						 </template>
						<el-menu-item index="1-1">新增部门</el-menu-item>
						<el-menu-item index="1-2">编辑部门</el-menu-item>
						<el-submenu index="1-4">
							<!-- 标题插槽迷你版 没有图标-->
							<template #title>部门权限</template>
							<el-menu-item index="1-4-1">新增角色</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						 <template #title>
							<router-link to="/register">住院登记</router-link>
						</template>
					</el-menu-item>
					<!-- 禁用：disabled -->
					 <el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<template #title>
							<!-- <router-link to="/transfer">穿梭框</router-link> -->
						</template>
					</el-menu-item>
				 </el-menu>
			</el-aside>
			<el-container>
				<!-- 视图区-->
				<router-view />
				<el-main>
				</el-main>
				<el-footer>
					底部底部
				</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style scoped="scoped">
	* {
		margin: 0px;
		padding: 0px;
	}

	html body {
		height: 100%;
	}

	.el-header,
	.el-footer {
		background-color: #B3C0D1;
		color: white;
		text-align: center;
		line-height: 60px;

	}

	.el-aside {
		background-color: #D3DCE6;
		color: #333;
		text-align: center;
		line-height: 200px;
		height: 500px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

	.el-submenu__title i {
		color: cornflowerblue;
	}

	element.style {
		padding-left: 20px;
		color: #409EFF;
		background-color: rgb(84, 92, 100);
	}

	.el-menu-item i {
		color: dodgerblue;
	}

	.el-menu-item.is-active {
		color: #409EFF;
	}

	.el-aside a {
		text-decoration: none;
		/* 继承父类的属性（颜色） */
		color: inherit;
	}

	.el-menu {
		height: 500px;
	}
</style>
