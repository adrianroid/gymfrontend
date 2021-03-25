import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/signin.vue'
import SignUp from '../views/signup.vue'
import UserProfile from '../views/profile.vue'
import resetPassword from '../views/resetpassword.vue'
import checkin from '../views/checkin.vue'
import qrreader from '../views/qrreader.vue'
import invoice from '../views/invoice.vue'
import members from '../views/members.vue'
Vue.use(VueRouter)
const isLoggedIn = (to, from, next) => {
  if(localStorage.token) {
    next({ name: "Login" });
  } else {
    next();
  }
}
const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/',
        component: checkin,
        name: 'home',
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'profile',
        component: UserProfile,
        name: 'profile',
      },
      {        
        path: 'user-checkin',
        component: qrreader,
        name: 'checkin',
      },
      {        
        path: 'members',
        component: members,
        name: 'members',
      },
      {        
        path: 'invoices',
        component: invoice,
        name: 'invoices',
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
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
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const getCookie = (cname)=> {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
} 
router.beforeEach((to, from, next) => {
  console.log(to)
  if(!(to.name == 'Login' || to.name == 'Sign Up' || to.name == 'Reset-Password' ))
    if(){
      next({name: 'Login'})
    }
    
  else 
    next()
})

export default router
