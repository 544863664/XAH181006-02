<template>
    <div class="left">left</div>
</template>

<script>
    export default {
        name: "Left",
        created() {
          console.log(this.$store.state.num);
          console.log(this.$store.state.arr);
        }
    }
</script>

<style scoped>

</style>
