<template>
    <div class="header-nav">
      <button @click="addNum()">添加</button>
      <br>
      <h1>{{arr}}</h1>
      <h1>{{changeArr()}}</h1>
      <h1>{{changeArr2}}</h1>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav",
        data () {
          return {
            arr: [10,40,30,60],
            num: ''
          }
        },
        created () {
          // this.changeArr()
        },
        /*
        * computed:计算属性。
        * 如果一个vue实例中，有某些数据需要经过一系列的处理之后才能使用，那么我们就以计算属性的形式声明这个数据。
        * computed中的计算属性都是函数，而且这些函数都有返回值。
        * 在调用computed中的计算属性时，把他们当做变量调用即可。
        *
        * 在实例中methods中也可以实现相同效果，但是methods中，如果对于这个数据处理，有依赖数据，那么methods会惰性响应。而computed中，只要依赖数据发生变化，computed立即响应。
        * */
        computed: {
          changeArr2 () {
            let r = [];
            for (let item of this.arr) {
              r.push(item * 2);
            }
            return r;
          }
        },
        methods: {
          addNum () {
            this.arr.push(100);
          },
          changeArr () {
            let r = [];
            for (let i in this.arr) {
              r.push(this.arr[i]*=2);
            }
            return r;
          }
        }
    }
</script>

<style scoped>

</style>
