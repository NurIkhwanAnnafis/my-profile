import { lazy } from "react";

const menu = [
  {
    path: '/welcome',
    exact: true,
    component: lazy(() => import('../../../containers/Welcome'))
  },
  {
    path: '/to-do',
    exact: true,
    component: lazy(() => import('../../../containers/App'))
  },
  {
    path: '/dummy',
    exact: true,
    component: lazy(() => import('../../../containers/Dummy'))
  },
  {
    path: '/',
    exact: true,
    component: lazy(() => import('../../../pages/Profile'))
  }
]

export { menu };