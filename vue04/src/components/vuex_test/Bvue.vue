<template>
    <div class="b">
      <h2>b组件</h2>
      <input type="text" v-model="inputTxt1">
      <button @click="setvuexinp1">改变author</button>
      <br>
      <p></p>
      <input type="text" v-model="inputTxt2">
      <button @click="setvuexinp2">改变another</button>
    </div>
</template>

<script>
    export default {
        name: "Bvue",
        data () {
          return {
            inputTxt1: '',
            inputTxt2: ''
          }
        },
        methods: {
          setvuexinp1: function () {
            this.$store.state.author = this.inputTxt1;
          },
          setvuexinp2: function () {
            this.$store.state.another = this.inputTxt2;
          }
        }
    }
</script>

<style scoped>

</style>
