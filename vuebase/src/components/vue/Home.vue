<template>
    <div class="home">
        <!--将add和show引入-->
        <!--
          如果当前组件的某个子组件中调用了$emit函数，向当前组件传递了一些数据，那么在当前组件对于这个子组件的调用标签上
        -->
        <Add v-on:eventOfAdd="recDataFromAdd" />
        <!--为标签的属性加  指令修饰符，那么这个属性的值就变成代码表达式。-->
        <Show v-bind:currentUser="user" />
    </div>
</template>

<script>
    //导入子组件
    import Add from '@/components/vue/pages/Add';
    import Show from '@/components/vue/pages/Show';
        export default {
            name: "Home",
            data () {
                return {
                    user: {}
                }
            },
            components: {
                Add,
                Show
            },
            methods: {
                recDataFromAdd (data) {
                    this.user = data;
                }
            }
        }
</script>

<style scoped>

</style>
