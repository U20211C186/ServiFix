import { createRouter, createWebHistory } from 'vue-router'
import LandingView from "@/components/LandingView.vue";
import LoginSessionView from "@/components/LoginSessionView.vue";
import CheckInView from "@/components/CheckInView.vue";
import RecoverPasswordView from "@/components/RecoverPasswordView.vue";
import AddPublicationView from "@/components/AddPublicationView.vue";
import ProfileView from "@/components/ProfileView.vue";
import AddPublicationFormView from "@/components/AddPublicationFormView.vue"
import PayMethodView from "@/components/PayMethodView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginSessionView
    },
    {
      path: '/check/in',
      name: 'checkin',
      component: CheckInView
    },
    {
      path: '/recover/password',
      name: 'recover',
      component: RecoverPasswordView
    },
    {
      path: '/add/publicationform',
      name: 'addform',
      component: AddPublicationFormView
    },
    {
      path: '/add/publication',
      name: 'add',
      component: AddPublicationView
    },
    {
      path: '/view/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/pay',
      name: 'pay',
      component: PayMethodView
    }
  ]
})

export default router
