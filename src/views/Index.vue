<template>
    <div class="container">
        <el-button type="primary">主要按钮</el-button>
    </div>
</template>

<script>
import {reactive, toRefs, ref} from "vue"
// 在vue文件中获取vue2中process.env的值
const ENV = import.meta.env

export default{
    name:"App",
    setup() {

        console.log(ENV);

        const data = reactive({

        })
        const refData = toRefs(data)
        return {
            ...refData
        }
    }
}
</script>

<style scoped>
</style>
