import {
    createApp
} from 'vue'
import App from './App.vue'
import router from '@/router'
import {
    ElButton,
    ElContainer,
    ElAside,
    ElMenu,
    ElSubmenu,
    ElMenuItemGroup,
    ElMenuItem,
    ElForm,
    ElFormItem,
    ElInput,
    ElCheckbox,
    ElPopover,
    ElTag,
    ElCard,
    ElTable,
    ElUpload,
    ElDialog,
    ElPagination,
    ElTableColumn,
    ElPopconfirm,
    ElCascader,
    ElRadioGroup,
    ElRadio
} from 'element-plus'


import 'element-plus/lib/theme-chalk/index.css'

const $filters = {
    prefix(url) {
        if (url && url.startsWith('http')) {
            // 当 url 以 http 开头时候，我们返回原路径
            return url
        } else {
            // 否则，我们给路径添加 host，如下
            url = `http://backend-api-02.newbee.ltd${url}`
            return url
        }
    }
}

const app = createApp(App)
    .use(router)
    .use(ElButton)
    .use(ElContainer)
    .use(ElAside)
    .use(ElMenu)
    .use(ElSubmenu)
    .use(ElMenuItemGroup)
    .use(ElMenuItem)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElCheckbox)
    .use(ElPopover)
    .use(ElTag)
    .use(ElCard)
    .use(ElTable)
    .use(ElTableColumn)
    .use(ElUpload)
    .use(ElDialog)
    .use(ElPagination)
    .use(ElPopconfirm)
    .use(ElCascader)
    .use(ElRadioGroup)
    .use(ElRadio)
    .mount('#app')


    app.config.globalProperties.$filters = $filters
    app.config.globalProperties.goTop = function () {
        const main = document.querySelector('.main')
        main.scrollTop = 0
    }