<template>
    <div class="add">
        姓名：<input type="text" v-model="user.name">
        <br>
        <p></p>
        邮箱：<input type="text" v-model="user.email">
        <br>
        <p></p>
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
            return {
                user: {
                    name: '',
                    email: '',
                    tel: ''
                }
            }
        },
        methods: {
            submit () {
                this.$emit('eventOfadd', this.user);
            }
        }
    }
</script>

<style scoped>

</style>
