export default [

  //signin
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/SignIn')
  },
  //SignUp
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignUp')
  },
  //restaurants/
  {
    name: "restaurants",
    path: "/restaurants",
    component: () => import('@/views/Restaurants'),
  },
  //restaurants/feeds
  {
    name: "feeds",
    path: "/restaurants/feeds",
    component: () => import('@/views/Restaurants/Feeds'),
  },
  //restaurants/top
  {
    name: "top",
    path: "/restaurants/top",
    component: () => import('@/views/Restaurants/Top'),

  },
  //Restaurant/:id? 要放在 top和feed之後 不然只會跳轉到:id
  {
    path: '/restaurants/:id?',
    name: 'restaurant',
    component: () => import('@/views/Restaurants/Restaurant')
  },
  //restaurants/:id?/dashboard
  {
    path: '/restaurants/:id?/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Restaurants/Restaurant/dashboard')
  },
  //admin/ 重定向
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants'
  },
  //admin-categories
  {
    path: '/admin/admincategories',
    name: 'admin-categories',
    component: () => import('@/views/AdminCategories')
  },
  //admin-categories
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('@/views/AdminUsers')
  },
  //admin-restaurants
  {
    path: '/admin/restaurants',
    name: 'adminrestaurants',
    component: () => import('@/views/AdminRestaurants')
  },
  //admin-restaurant-new
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('@/views/AdminRestaurantNew')
  },
  //admin-restaurant
  {
    path: '/admin/restaurants/:id?',
    name: 'adminrestaurant',
    component: () => import('@/views/AdminRestaurant')
  },
  //admin-restaurant-edit
  {
    path: '/admin/restaurants/:id?/edit',
    name: 'admin-restaurant-edit',
    component: () => import('@/views/AdminRestaurantEdit')
  },
  //users
  {
    name: "users",
    path: "/users",
    component: () => import('@/views/Users'),
  },
  //users/top
  {
    name: "usertop",
    path: "/users/top",
    component: () => import('@/views/Users/UsersTop'),
  },
  //users/:id?
  {
    name: "user",
    path: "/users/:id?",
    component: () => import('@/views/Users/User'),
  },
  //users/:id?/edit
  {
    name: "users-edit",
    path: "/users/:id?/edit",
    component: () => import('@/views/Users/UserEdit'),
  },
  //首頁
  {
    path: '/',
    name: 'root',
    redirect: '/restaurants'
  },
  //notfound
  {
    path: '*',
    name: 'notfound',
    component: () => import('@/views/NotFound')
  },
]