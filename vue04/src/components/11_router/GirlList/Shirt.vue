<template>
    <div class="shirt">
      <h3>
        <router-link :to="{name: 'sr1'}">冬装</router-link>
        <router-link to="/girl-m/shirt/sr2">夏装</router-link>
      </h3>
      <router-view />
    </div>
</template>

<script>
    export default {
        name: "Shirt"
    }
</script>

<style scoped>

</style>
