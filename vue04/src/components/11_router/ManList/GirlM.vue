<template>
    <div class="girl-m">
      <h2>
        <router-link to="/girl-m/dress">裙子</router-link>
        <router-link to="/girl-m/shirt">衬衫</router-link>
        <router-link to="/girl-m/shoes">鞋</router-link>
      </h2>

      <router-view />
    </div>
</template>

<script>
    export default {
        name: "GirlM"
    }
</script>

<style scoped>

</style>
