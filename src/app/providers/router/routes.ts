import type { RouteRecordRaw } from 'vue-router'
import { DefaultLayout } from '@/app/layouts'

export const routes: readonly RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/houses',
  },
  {
    path: '/houses',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: () => import('@/pages/house'),
        name: 'HousePage',
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/not-found'),
    name: 'NotFoundPage',
  },
] as const
