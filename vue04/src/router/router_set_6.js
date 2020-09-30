import UserM from '../components/9_router/UserManger';
import DataM from '../components/9_router/DataManger';
import GoodM from '../components/9_router/GoodM';

/*
* 命名视图：
*   在当前path下，使用router-view标签，同时展示当前理由配置时的components中的所有组件。
*   通过router-view标签的name属性识别当前位置应该导入components中的哪个组件。
*   name值必须是components中默认配置好的键
* */

export default [{
  path: '/',
  components: {
    default: UserM,
    'good-m': GoodM,
    'data-m': DataM
  }
}]
