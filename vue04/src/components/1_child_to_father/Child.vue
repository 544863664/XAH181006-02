<template>
    <div class="Child">
        <input type="text" v-model="mess">
        <button @click="submit()">提交</button>
    </div>
</template>

<script>
    export default {
        name: "Child",
        data () {
            return {
                mess: '',
            }
        },
        methods: {
            submit () {
                //向当前子组件的父组件发出一个信号，向父组件传递数据
                this.$emit('dataCon', this.mess);
            }
        }
    }
</script>

<style scoped>

</style>
