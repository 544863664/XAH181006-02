<template>
    <div class="home">
      <UserList />
      <router-view />
    </div>
</template>

<script>
    //导入userList组件
    import UserList from './UserList';
    export default {
        name: "Home",
        components: {
            UserList,
        }
    }
</script>

<style scoped>

</style>
