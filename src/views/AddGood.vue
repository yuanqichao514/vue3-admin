<template>
    <div class="container">
        添加商品
    </div>
</template>

<script lang="ts">
import {reactive, toRefs, ref} from "vue"
interface dataProps{

}
export default{
    name:"AddGood",
    setup() {
        const data = reactive({

        })
        const refData = toRefs(data)
        return {
            ...refData
        }
    }
}
</script>

<style lang="less" scoped>
</style>
