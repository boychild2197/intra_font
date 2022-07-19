import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login'
import Panel from '../views/Panel'
import PostsViews from '../views/PostsViews'
import StoriesView from '../views/StoriesView'
import CreatePost from '../views/CreatePost'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/panel',
    name: 'panel',
    component: Panel
  },
  {
    path: '/stories',
    name: 'stories',
    component: StoriesView
  },
  {
    path: '/createstory',
    name: 'createstory',
    component: CreateStory
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsViews
  },
  {
    path: '/createpost',
    name: 'createpost',
    component: CreatePost
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
