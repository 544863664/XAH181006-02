import Article from '../components/router_test/content/Article';
import Comment from '../components/router_test/content/Comment';
import Report from '../components/router_test/content/Report';

import Hy from '../components/router_test/statistical/Hy';
import Loss from '../components/router_test/statistical/Loss';
import Time from '../components/router_test/statistical/Time';
import Userlc from '../components/router_test/statistical/Userlc';
import Xz from '../components/router_test/statistical/Xz';

import UserActive from '../components/router_test/user/Active';
import New from '../components/router_test/user/New';

export default [{
  path: '/article',
  name: 'article',
  comment: Article,
},{
  path: '/comment',
  name: 'comment',
  comment: Comment
},{
  path: '/report',
  name: 'report',
  comment: Report
},{
  path: '/hy',
  name: 'hy',
  comment: Hy
},{
  path: '/loss',
  name: 'loss',
  comment: Loss
},{
  path: '/time',
  name: 'time',
  component: Time
},{
  path: '/userlc',
  name: 'userlc',
  component: Userlc
},{
  path: '/xz',
  name: 'xz',
  component: Xz
},{
  path: '/userArticle',
  name: 'userAricle',
  component: UserActive
},{
  path: '/new',
  name: 'new',
  component: New
}]
