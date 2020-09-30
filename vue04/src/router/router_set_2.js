import UserDetail from '@/components/5_router/UserDetail';
//配置用户详情路由
export default [{
  path: '/user-detail/:userId/:sex', //url路由
  name: 'user-detail', // 路由命名
  component: UserDetail
}]
