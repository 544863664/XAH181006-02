<template>
    <div class="props">
      {{id}}--{{name}}
    </div>
</template>

<script>
    export default {
        name: "Props",
        props: ['id', 'name']
    }
</script>

<style scoped>

</style>
