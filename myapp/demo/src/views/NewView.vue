<template>
  <div class="new1">
    <el-container style="height: 100%;">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="$route.path" router>

          <el-submenu index="1">
            <template slot="title"> <i class="el-icon-loading"></i>home</template>
            <router-link to="/Login"><el-menu-item>登录</el-menu-item></router-link>
            <el-submenu index="1-1">
              <template slot="title"><i class="el-icon-shopping-cart-2"></i> 购物车</template>
              <router-link to="/buy"><el-menu-item>购物车1</el-menu-item></router-link>
              <router-link to="/buybox"> <el-menu-item>购物车2</el-menu-item></router-link>
              <router-link to="/buynew"> <el-menu-item>购物车3</el-menu-item></router-link>
            </el-submenu>

            <el-submenu index="1-2">
              <template slot="title"><i class="el-icon-document"></i>列表</template>
              <router-link to="/list"><el-menu-item>列表1</el-menu-item></router-link>
            </el-submenu>

            <el-submenu index="1-3">
              <template slot="title"><i class="el-icon-s-order"></i> 测试</template>
              
              <router-link to="/ShengMingZhouQi"><el-menu-item >测试1</el-menu-item></router-link>
              <router-link to="/VueText"><el-menu-item >Vue2.0</el-menu-item></router-link>
              <router-link to="/Chacao"><el-menu-item >插槽1</el-menu-item></router-link>
              <router-link to="/ChaCaoNew"><el-menu-item >插槽2</el-menu-item></router-link>
              <router-link to="/ChaCaoNew1"><el-menu-item >插槽3</el-menu-item></router-link>
              <router-link to="/Directives"><el-menu-item >插件</el-menu-item></router-link>
            </el-submenu>
            
          </el-submenu>
        </el-menu>
      </el-aside>

    <el-container>
      <!-- <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header> -->

      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
</el-container>
   
  </div>
</template>

<script>

export default {
    name: "NewView",
    
    data(){
        const item = {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
          tableData: Array(20).fill(item)
        };
    },
    components: {  }
}
</script>

<style scoped>
  .el-menu-item{
    opacity: .7;
    color: #409EFF;
    text-decoration: none;
  }
 
  .el-submenu .el-menu-item {
    padding: 0;
  }
  .new1 a{
    text-decoration: none;
  }
</style>