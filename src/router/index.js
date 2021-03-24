import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/signin.vue'
import SignUp from '../views/signup.vue'
import UserProfile from '../views/profile.vue'
import resetPassword from '../views/resetpassword.vue'
import checkin from '../views/checkin.vue'
import qrreader from '../views/qrreader.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/',
        component: checkin
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'profile',
        component: UserProfile
      },
      {        
        path: 'user-checkin',
        component: qrreader
      }
    ]
  },
  {
    path: '/sign-in',
    name: 'Log In',
    component: SignIn
  },
  {
    path: '/reset-password',
    name: 'Reset-Password',
    component: resetPassword
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    component: SignUp
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
