import Props from '@/components/8_router/Props';

export default {
  path: '/props/:id/:name',
  name: 'props',
  component: Props,
 // props: trur //允许当前组件被路由调用时传的参数被组件实例的props接受
}
