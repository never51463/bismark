<template>
	<div v-loading.body="loading">
<!-- 这货是内容 -->
	<div class="line"></div>
		<el-row :gutter="10">
		  <el-col :xs="8" :sm="8" :md="8" :lg="8">
		  <div class="grid-content bg-purple">
      <!-- 这货是侧边栏 -->
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>
              {{doing}}
            </template>
            <el-menu-item-group>
              <template slot="title">{{bug}}</template>
              <router-link to="/poi">
                <el-menu-item index="1-1">
                {{poi}}
                </el-menu-item>
              </router-link>
              <router-link to="/poi">
                <el-menu-item index="1-2">
                {{poi}}
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
            <el-menu-item-group title="what's poi now">
              <el-menu-item index="1-3">
              {{area}}
              </el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">poi was angry</template>
              <el-menu-item index="1-4-1">why</el-menu-item>
            </el-submenu>
          </el-submenu>
          <router-link to="/poi/pro">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              {{here}}
            </el-menu-item>
          </router-link>
          <router-link to="/poi">
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              {{set}}
            </el-menu-item>
          </router-link>
        </el-menu>
		  </div>
		  </el-col>
		  <el-col :xs="4" :sm="6" :md="8" :lg="9">
		  <div class="grid-content bg-purple-light">
       <router-view></router-view>
		  </div>
		  </el-col>
		  <el-col :xs="7" :sm="5" :md="3" :lg="2">
        <div class="grid-content bg-purple">
          <!-- 提醒你该放假了 -->
          <el-button :plain="true" @click="open">
          新消息
          </el-button>
        </div>
      </el-col>
		  <el-col :xs="5" :sm="7" :md="9" :lg="10">
        <div class="grid-content bg-purple-light">
          <el-button type="primary" icon="edit"></el-button>
          <el-button type="primary" icon="share"></el-button>
          <el-button type="primary" icon="delete"></el-button>
          <el-button type="primary" icon="search">搜索</el-button>
          <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
      </el-col>
		</el-row>
	</div>
</template>
<script>
	export default{
		name:"poi",
		data(){
			return{
				poi:"poi?",
        bug:"bug is here",
				activeIndex: '1',
				here:"the problem for poi",
				set:"what do you want from poi?",
				doing:"the way you want",
        area:"behind you",
        loading:false
			}
		},
		methods: {
      		handleSelect(key, keyPath) {
        	console.log(key, keyPath);
        	},
        	handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		      },
		      handleClose(key, keyPath) {
		        console.log(key, keyPath);
		      },
          open() {
              this.$message('holiday!');
          },
      	}
	}
</script>
<style>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  a{
    text-decoration: none;
  }
</style>