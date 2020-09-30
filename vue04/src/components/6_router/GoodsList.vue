<template>
    <div class="goods-list">
      <div>
        <h1>宠辱不惊，闲看庭前花开花落.去留无意，漫随天外云卷云舒</h1>
        <table>
          <tr>
            <th>名称</th>
            <th>操作</th>
          </tr>
          <tr v-for="item in goodsList">
            <td>{{item.name}}</td>
            <td>
              <!--在调用路由时传参-->
              <router-link :to="'/goods-detail' +'/'+ item.id + '/' + item.name" tag="button">查看详情</router-link>
            </td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        data () {
            return {
                goodsList: [{
                  id: 1,
                  name: '蛋糕',
                },{
                  id: 2,
                  name: '雪糕',
                },{
                  id: 3,
                  name: '蛋糕',
                }]
            }
        }
    }
</script>

<style scoped>

</style>
