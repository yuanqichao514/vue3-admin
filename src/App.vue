<template>
  <div class="layout">
    <el-container class="container" v-if="showMenu">
      <el-aside class="aside">
        <div class="head">
          <img src="//s.weituibao.com/1582958061265/mlogo.png" alt="logo" />
          <span>vue3 admin</span>
        </div>
        <div class="line"></div>
        <el-menu background-color="#222832" text-color="#fff" :router="true">
          <el-submenu index="1">
            <template #title>
              <span>Dashboard</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/">
                <i class="el-icon-data-line"></i>首页
              </el-menu-item>
              <el-menu-item index="/add">
                <i class="el-icon-data-line"></i>添加商品
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container class="content">
        <Header />
        <div class="main">
          <router-view></router-view>
        </div>
        <Footer />
      </el-container>
    </el-container>
    <el-container v-else class="containerElse">
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router'
export default {
  name: "APP",
  components: { Header, Footer },
  setup() {
    const noMenu = ['/login']

    const router = useRouter()

    const state = reactive({
      showMenu: true
    })

    router.beforeEach((to) => {
      state.showMenu = !noMenu.includes(to.path)
    })

    return {
      ...toRefs(state)
    }
  }
};
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background-color: #fff;
  display: flex;
}
.container {
  height: 100vh;
}
.containerElse {
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.aside {
  width: 200px !important;
  background-color: #222832;
}
.head {
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
}
.head img {
  width: 50px;
  margin-right: 10px;
}
.head span {
  font-size: 20px;
  color: #ffffff;
}
.line {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.content {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: hidden;
}
.main {
  height: calc(100vh-100px);
  overflow: auto;
  padding: 10px;
}
</style>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.el-menu {
  border-right: none !important;
}
.el-submenu {
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.el-submenu:first-child {
  border-top: none;
}
.el-submenu [class^="el-icon-"] {
  vertical-align: -1px !important;
}
a {
  color: #409eff;
  text-decoration: none;
}
.el-pagination {
  text-align: center;
  margin-top: 20px;
}
.el-popper__arrow {
  display: none;
}
</style>
