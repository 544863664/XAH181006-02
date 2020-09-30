<template>
    <div class="add">
        姓名：<input type="text" v-model="user.name">
        <br>
        邮箱：<input type="text" v-model="user.email">
        <br>
        电话：<input type="text" v-model="user.tel">
        <br>
        <p></p>
        <button @click="submit()">提交</button>
    </div>
</template>

<script>
    export default {
        name: "Add",
        data () {
            //vue脚手架规定当前组件中所有的变量都要先在data中声明
            return {
                user: {
                    name: '',
                    email: '',
                    tel: '',
                },
            }
        },
        methods: {
            submit () {
                //当在当前组件的某个事件绑定的函数中，调用$emit函数，意味着向当前组件的父级标签给出了一个信号。
                this.$emit('eventOfAdd', this.user);
            }
        }
    }
</script>

<style scoped>

</style>
