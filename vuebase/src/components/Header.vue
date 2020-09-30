<template>
  <!--
    1.一个组件的代码结构别写在template标签中。
    2.template标签中只能有一个直接子级block标签。
      （1）虽然template标签页划分了范围，但是template只是在代码中体现一个模块，在页面上没有任何反馈（vue底层代码不会把他解析成一个标签）。
      （2）每个后缀名为.vue的文件，都单独形成一个上下文环境。在当前组件中声明的所有变灵鹤函数，只能作用域当前组件，所以每个vue文件中的根标签block标签限制了当前组件代码中的生效范围。
  -->
    <div class="Header">
      <h1>汉钟离，韩湘子，曹国舅，铁拐李，蓝采和，吕洞宾，张果老，何仙姑</h1>
      <h2>{{num}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data () {
            return {
                //在data函数的返回值中，以键值对的形式声明当前组件中要使用到的所有的变量
              num: 100,
              arr: [],
            }
        },
        methods: {
            //当前组件中要使用到的所有的函数，不能写成箭头函数
            fn () {},
            move () {}
        }
    }
</script>

<style scoped>
/*如果一个组件中的style标签，设置了scoped属性，那么这个style标签中的样式，只生效于这个标签。
如果灭迹啊，那么当前样式会影响和当前组件共同展示的组件的样式*/
</style>
