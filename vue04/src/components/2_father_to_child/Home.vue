<template>
    <div class="home">
        <Child :dataCon="list" />
    </div>
</template>

<script>
    //导入组件
    import Child from './Child';
    export default {
        name: "Home",
        data () {
            return {
                list: '卡机的反馈'
            }
        },
        components: {
            Child,
        }
    }
</script>

<style scoped>

</style>
