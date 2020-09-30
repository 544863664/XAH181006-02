<template>
    <div class="home">
        <Add v-on:eventOfadd="recDataFromAdd" />
        <Show v-bind:currentUser="user" />
    </div>
</template>

<script>
    //引入组件
    import Add from '@/components/vue_test/pages/Add';
    import Show from '@/components/vue_test/pages/Show';
    export default {
        name: "Home",
        data () {
            return {
                user: {}
            }
        },
        components: {
            Add, Show
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
