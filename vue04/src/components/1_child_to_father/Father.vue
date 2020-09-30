<template>
    <div class="father">
        <!--接受子组件传递过来的数据-->
        <Child v-on:dataCon="getData" />
        <h1>{{mess}}</h1>
    </div>
</template>

<script>
    //导入组件
    import Child from './Child';
    export default {
        name: "Father",
        data () {
            return {
                mess: '',
            }
        },
        components: {
            Child,
        },
        methods: {
            getData (data) {
                this.mess = data;
            }
        }
    }
</script>

<style scoped>

</style>
