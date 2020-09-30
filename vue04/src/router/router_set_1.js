import Docs from '@/components/4_router/Docs';
import Blogs from '@/components/4_router/Blogs';
import Resource from '@/components/4_router/Resource';
//将当前模块的路由配置导出
export default [{
  path: '/docs',
  name: 'docs',
  component: Docs
},{
  path: '/blogs',
  name: 'blogs',
  component: Blogs
},{
  path: '/resource',
  name: 'resource',
  component: Resource
}];
