import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MonstersView from '../views/MonstersView.vue'
import EquipmentView from '../views/EquipmentView.vue'
import SpellsView from '../views/SpellsView.vue'
import RulesView from '../views/RulesView.vue'
import AboutView from '../views/AboutView.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/monsters',
    name: 'monsters',
    component: MonstersView
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: EquipmentView
  },
  {
    path: '/spells',
    name: 'spells',
    component: SpellsView
  },
  {
    path: '/rules',
    name: 'rules',
    component: RulesView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
