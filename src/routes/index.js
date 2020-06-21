import {
    Dashboard,
    NotFound,
    Login,
    Title
}from '../views'

// 主路由
export const mainRoutes = [
  {
    path: '/login',
    component: Login
  },

  {
    path: '/404',
    component: NotFound
  },
]
export const adminRoutes = [
  {
    path: '/admin/dashboard',
    component: Dashboard,
    exact: true,
    title: '首页',
    children: false,
  },
  {
    path: '/admin/title',
    component: Title,
    exact: true,
    title: '文章',
    children: false,
  },
]

    
    
