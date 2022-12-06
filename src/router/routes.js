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
  //Restaurants
  {
    path: '/restaurants',
    name: 'restaurants',
    component: () => import('@/views/Restaurants'),

  },
  //restaurants/feeds
  {
    name: "feeds",
    path: "/restaurants/feeds",
    component: () => import('@/views/Restaurants/Feeds'),
  },
  //admin/restaurants
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants'
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
  //restaurants/top
  {
    name: "top",
    path: "/restaurants/top",
    component: () => import('@/views/Restaurants/Top'),

  },
  //Restaurant 要放在 top和feed之後 不然只會跳轉到:id
  {
    path: '/restaurants/:id?',
    name: 'restaurant',
    component: () => import('@/views/Restaurants/Restaurant')
  },
  //dashboard
  {
    path: '/restaurants/:id?/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Restaurants/Restaurant/dashboard')
  },
  //users/top
  ,
  {
    name: "top",
    path: "/users/top",
    component: () => import('@/views/Users/Top'),
  },
  {
    name: "users",
    path: "/users",
    component: () => import('@/views/Users'),
    redirect:"/users/top"
  },
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