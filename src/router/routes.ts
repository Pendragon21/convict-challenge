import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/Maps',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CompanyMaps.vue') }],
  },
  {
    path: '/',
    component: () => import('pages/Login.vue'),
  },
  {
    path: '/Register',
    component: () => import('pages/CompaniesRegister.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
