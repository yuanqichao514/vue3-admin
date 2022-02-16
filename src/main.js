import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { ElButton, ElContainer, ElAside, ElMenu, ElSubmenu, ElMenuItemGroup, ElMenuItem } from 'element-plus'


import 'element-plus/lib/theme-chalk/index.css'

createApp(App)
.use(router)
.use(ElButton)
.use(ElContainer)
.use(ElAside)
.use(ElMenu)
.use(ElSubmenu)
.use(ElMenuItemGroup)
.use(ElMenuItem)
.mount('#app')