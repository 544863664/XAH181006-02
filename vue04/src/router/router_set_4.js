import Register from '@/components/7_router/Register';
import Login from '@/components/7_router/Login';

export default [{
  path: '/register',
  name: 'register',
  component: Register
},{
  path: '/login',
  //若果其他组件通过路由调用当前组件时，我们事先不知道外界要向当前组件传参的键的列表，就要使用name+params的形式传参
  name: 'login',
  component: Login
}]
