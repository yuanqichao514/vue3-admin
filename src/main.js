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
    ElRadio,
    ElSelect,
    ElOption
} from 'element-plus'


import 'element-plus/lib/theme-chalk/index.css'

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
    .use(ElSelect)
    .use(ElOption)
    .mount('#app')

app.config.globalProperties.goTop = function () {
    const main = document.querySelector('.main')
    main.scrollTop = 0
}

const orderStatus = {
    0: '待支付',
    1: '已支付',
    2: '配货完成',
    3: '出库成功',
    4: '交易成功',
    '-1': '手动关闭',
    '-2': '超时关闭',
    '-3': '商家关闭'
}

// 全局方法
app.config.globalProperties.$filters = {
    orderMap(status) {
        return orderStatus[status] || '未知状态'
    },
    prefix(url) {
        if (url && url.startsWith('http')) {
            return url
        } else {
            url = `http://backend-api-02.newbee.ltd${url}`
            return url
        }
    }
}