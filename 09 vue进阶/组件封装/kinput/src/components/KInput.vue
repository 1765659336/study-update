<template>
    <div>
        <!-- 管理数据，实现双向数据绑定 -->
        <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        // attrs里面的属性vue默认会跑到根元素上面了
        inheritAttrs: false,
        props: {
            value: {
                type: String,
                default: ""
            },
            type: {
                type: String,
                default: "text"
            }
        },
        methods: {
            onInput(e){
                this.$emit("input",e.target.value)
            }
        },
    }
</script>

<style scoped>

</style>