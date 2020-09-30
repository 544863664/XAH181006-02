import GoodsList from '@/components/6_router/GoodsList';
import GoodsDetail from '@/components/6_router/GoodsDetail';

export default [{
  path: '/goods-list',
  name: 'goods-list',
  component: GoodsList
},{
  path: '/goods-detail/:id/:name',
  name: 'goods-detail',
  component: GoodsDetail
}]
