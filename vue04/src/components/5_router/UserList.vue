<template>
    <div class="user-list">
      <table>
        <tr>
          <th>用户名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in userList">
          <td>{{item.name}}</td>
          <td>{{item.email}}</td>
          <td>{{item.tel}}</td>
          <td>
            <router-link :to="'/user-detail/' + item.id + '/' + item.name">查看用户</router-link>
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
    export default {
        name: "UserList",
        data () {
          return {
            userList: [{
              id: 1,
              name: 'tom',
              email: '123@qq.com',
              tel: '1232343'
            },{
              id: 2,
              name: 'jerry',
              email: '123@qq.com',
              tel: '1232343'
            },{
              id: 3,
              name: 'marry',
              email: '123@qq.com',
              tel: '1232343'
            }]
          }
        }
    }
</script>

<style scoped>

</style>
