<template>
    <div class="register">
      <p></p>
      username:<input type="text" v-model="user.name" />
      <br>
      <p></p>
      password:<input type="text" v-model="user.pswd" />
      <br>
      <p></p>
      <button @click="reg">注册</button>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data () {
          return {
            user: {
              name: '',
              pswd: ''
            }
          }
        },
        methods: {
          reg () {
            setTimeout(() => {
              /*
              * $route:在任何一个组件里都可以通过$router的方式获取
              * 到以VueRouter的实例，可以调用$router提供的一些函数做路由设置
              * */
              /*
              //方式1：
              this.$router.push('/login');
              */

              /*
              //方式2：
              this.$router.push({path: '/login'});
              */

              /*
              //方式3：这种方式传到login组件中的参数不会暴露在url中
              this.$router.push({name: 'login', params: {id: 1, name: 'tom'}});
              */

              /*
              //方式4：
              this.$router.push({
                path: '/login',
                //用path结合params传参数，不被承认
                params: {id: 2, name: 'jerry'}
              })
              */

              /*
              //方式5：path+query传参
              this.$router.push({
                path: '/login',
                query: {
                  id: 10,
                  name: '孟浩然'
                }
              })
              */

              //方式6：name+query传参
              this.$router.push({
                name: 'login',
                query: {
                  id: '100',
                  name: '孙悟空'
                }
              })
            }, 1000);
          }
        }
    }
</script>

<style scoped>

</style>
