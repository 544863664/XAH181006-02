//导入配置路由需要的组件
//一级路由
import ManM from '../components/11_router/ManList/ManM';
import GirlM from '../components/11_router/ManList/GirlM';
import ChildM from '../components/11_router/ManList/ChildM';
//女装对应的二级路由
import Shirt from '../components/11_router/GirlList/Shirt';
import Dress from '../components/11_router/GirlList/Dress';
import Shoes from '../components/11_router/GirlList/Shoes';

//衬衫对应的三级菜单
import Sr1 from '../components/11_router/shirtManList/Sr1'
import Sr2 from '../components/11_router/shirtManList/Sr2'

//一级路由的配置前面必须要加'/'
export default [{
  path: '/girl-m',
  name: 'girl-m',
  component: GirlM,
  redirect: '/girl-m/Dress',
  children: [{
    path: '/girl-m/Dress',
    name: 'dress',
    component: Dress
  },{
    path: '/girl-m/shirt',
    name: 'shirt',
    component: Shirt,

    //配置二级路由shirt的子路由列表
    children: [{
        path: '/girl-m/shirt/sr1',
        name: 'sr1',
        component: Sr1
    },{
      path: '/girl-m/shirt/sr2',
      name: 'sr2',
      component: Sr2
    }]
  },{
    path: '/girl-m/shoes',
    name: 'shoes',
    component: Shoes
  }]
},{
  path: '/man-m',
  name: 'man-m',
  component: ManM
},{
  path: '/child-m',
  name: 'child-m',
  component: ChildM
}]
