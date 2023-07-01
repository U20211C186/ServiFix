import { createRouter, createWebHistory } from 'vue-router'
import LandingView from "@/components/LandingView.vue";
import LoginSessionView from "@/components/LoginSessionView.vue";
import CheckInView from "@/components/CheckInView.vue";
import RecoverPasswordView from "@/components/RecoverPasswordView.vue";
import AddPublicationView from "@/components/AddPublicationView.vue";
import ProfileView from "@/components/ProfileView.vue";
import AddPublicationFormView from "@/components/AddPublicationFormView.vue"
import EditProfileView from "@/components/EditProfileView.vue";
import LogOutView from "@/components/LogOutView.vue";
import ConfirmLogOutView from "@/components/ConfirmLogOutView.vue";
import PayMethodView from "@/components/PayMethodView.vue";
import PostponeRequestView from "@/components/PostponeRequestView.vue";
import ServiceStatusView from "@/components/ServiceStatusView.vue";
import SaveSuccessfulView from "@/components/SaveSuccessfulView.vue";
import InboxView from "@/components/InboxView.vue";
import MyRouteView from "@/components/MyRouteView.vue";
import NotificationsView from "@/components/NotificationsView.vue";
import DetailsView from "@/components/DetailsView.vue";

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
      path: '/edit/profile',
      name:'EditProfileView',
      component: EditProfileView
    },
    {
      path: '/inbox',
      name: 'InboxView',
      component: InboxView
    },
    {
      path: '/route',
      name: 'MyRouteView',
      component: MyRouteView
    },
    {
      path: '/details',
      name: 'DetailsView',
      component: DetailsView
    },
    {
      path: '/notifications',
      name: 'NotificationsView',
      component: NotificationsView
    },
    {
      path: '/pay',
      name: 'pay',
      component: PayMethodView
    },
    {
      path: '/postpone/request',
      name:'PostponeRequestView',
      component: PostponeRequestView
    },
    {
      path:'/logout',
      name:'LogOutView',
      component:LogOutView
    },
    {
      path:'/service/status',
      name:'ServiceStatusView',
      component: ServiceStatusView
    },
    {
      path:'/save/successful',
      name:'SaveSuccessfulView',
      component:SaveSuccessfulView
    },
    {
      path:'/confirm/logout',
      name:'ConfirmLogOutView',
      component:ConfirmLogOutView
    }
  ]
})

export default router
