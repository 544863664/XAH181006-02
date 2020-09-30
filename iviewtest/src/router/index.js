import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Icons from '../components/SubList/Icons'

import Forms from '../components/SubList/Forms'
import Ae from '../components/SubList/Ae'
import Ed from '../components/SubList/Ed'

import Tables from '../components/SubList/Tables'
import Dt from '../components/SubList/Dt'

import Echarts from '../components/SubList/Echarts'
import Flot from '../components/SubList/Flot'

import NotFound from '../components/404'

export default new Router({
  routes: [
    {
      path: '/icons',
      name: 'icons',
      component: Icons
    },{
      path: '/ge',
      name: 'ge',
      component: Forms
    },{
      path: '/ae',
      name: 'ae',
      component: Ae
    },{
      path: '/ed',
      name: 'ed',
      component: Ed
    },{
      path: '/st',
      name: 'st',
      component: Tables
    },{
      path: '/dt',
      name: 'dt',
      component: Dt
    },{
      path: '/chartJS',
      name: 'chartJS',
      component: Echarts
    },{
      path: '/flot',
      name: 'flot',
      component: Flot
    },{
      path: '*',
      component: NotFound
    }
  ]
})
