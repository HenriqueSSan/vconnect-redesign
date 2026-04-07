import { createRouter, createWebHistory } from 'vue-router'

import SignInScreen from './app/+page.vue'

import DashboardLayout from './app/(dashboard)/+layout.vue'

import OverviewScreen from './app/(dashboard)/+page.vue'
import AccountScreen from './app/(dashboard)/account/+page.vue'
import BillingScreen from './app/(dashboard)/billing/+page.vue'
import ServicesScreen from './app/(dashboard)/services/+page.vue'
import SupportScreen from './app/(dashboard)/support/+page.vue'
import ConnexionScreen from './app/(dashboard)/connexion/+page.vue'

const routes = [
  { path: '/sign-in', name: 'sign-in', component: SignInScreen },
  {
    path: '/',
    name: '(overview)',
    component: DashboardLayout,
    children: [
      { path: '', name: 'overview', component: OverviewScreen },
      {
        path: '/account',
        name: 'account',
        component: AccountScreen,
        children: [{ path: '/documents', name: 'documents', component: ServicesScreen }]
      },
      { path: '/support', name: 'support', component: SupportScreen },
      { path: '/billing', name: 'billing', component: BillingScreen },
      { path: '/services', name: 'services', component: ServicesScreen },
      { path: '/connexion', name: 'connexion', component: ConnexionScreen }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
