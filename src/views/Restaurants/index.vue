<template>
  <div class="container py-5">
    
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard :restaurant='restaurant' v-for="restaurant in restaurants" :key="restaurant.id" />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination v-show="totalPage.length > 1" 
      :currentPage="currentPage" 
      :totalPage="totalPage"
      :categoryId="categoryId" 
      :previousPage="previousPage" 
      :nextPage="nextPage" />
  </div>
</template>

<script>
import NavTabs from '@/components/NavTabs'
import RestaurantCard from '@/components/RestaurantCard'
import RestaurantsNavPills from '@/components/RestaurantsNavPills'
import RestaurantsPagination from '@/components/RestaurantsPagination'

const dummyData = {
  "restaurants": [
    {
      "id": 1,
      "name": "Maribel Kuhlman",
      "tel": "670.899.7794",
      "address": "50590 Parker Rue",
      "opening_hours": "08:00",
      "description": "Reprehenderit non qui eum neque assumenda. Dolor i",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.96667761884057",
      "viewCounts": 0,
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-12-02T16:30:15.000Z",
        "updatedAt": "2022-12-02T16:30:15.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 2,
      "name": "Carrie Schowalter",
      "tel": "641.707.2224",
      "address": "56275 Schuppe Road",
      "opening_hours": "08:00",
      "description": "Deserunt laudantium laboriosam qui sed assumenda i",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.39890796053504",
      "viewCounts": 0,
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-12-02T16:30:15.000Z",
        "updatedAt": "2022-12-02T16:30:15.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 3,
      "name": "Monserrat Thompson",
      "tel": "972-264-8364 x1002",
      "address": "920 Benedict Inlet",
      "opening_hours": "08:00",
      "description": "aut quas temporibus",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.36304529634659",
      "viewCounts": 0,
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-12-02T16:30:15.000Z",
        "updatedAt": "2022-12-02T16:30:15.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 4,
      "name": "Gregg Gusikowski",
      "tel": "732.637.5216",
      "address": "5077 Sipes Well",
      "opening_hours": "08:00",
      "description": "Iste et a doloremque id ut assumenda repellat. A s",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.453221101460926",
      "viewCounts": 0,
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-12-02T16:30:15.000Z",
        "updatedAt": "2022-12-02T16:30:15.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 5,
      "name": "Aubree Jacobs",
      "tel": "571.142.0221 x3481",
      "address": "61363 Cornelius Mountains",
      "opening_hours": "08:00",
      "description": "Et recusandae repudiandae consequatur magni ut dic",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.60296592726144",
      "viewCounts": 0,
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z",
      "CategoryId": 4,
      "Category": {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2022-12-02T16:30:15.000Z",
        "updatedAt": "2022-12-02T16:30:15.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 6,
      "name": "Vinnie Mertz",
      "tel": "1-596-957-3325",
      "address": "69098 Hane Circle",
      "opening_hours": "08:00",
      "description": "Esse dignissimos consequatur iure blanditiis sed a",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.70644981644164",
      "viewCounts": 0,
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-12-02T16:30:15.000Z",
        "updatedAt": "2022-12-02T16:30:15.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 7,
      "name": "Kenyon Kuhic",
      "tel": "(918) 287-7543 x74853",
      "address": "26171 Beatty Stravenue",
      "opening_hours": "08:00",
      "description": "Deserunt dicta expedita temporibus. Aut rerum et v",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=49.02002847002282",
      "viewCounts": 0,
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-12-02T16:30:15.000Z",
        "updatedAt": "2022-12-02T16:30:15.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 8,
      "name": "Elliot Halvorson",
      "tel": "576-784-8925",
      "address": "467 Lauretta Hills",
      "opening_hours": "08:00",
      "description": "Debitis aut adipisci. Explicabo dolorem nam qui. E",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.830736622985505",
      "viewCounts": 0,
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-12-02T16:30:15.000Z",
        "updatedAt": "2022-12-02T16:30:15.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 9,
      "name": "Aracely Oberbrunner",
      "tel": "(427) 617-6595 x6654",
      "address": "87987 Tremblay Mall",
      "opening_hours": "08:00",
      "description": "Tempore ut architecto quam labore velit quia sed i",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.73150404160798",
      "viewCounts": 0,
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-12-02T16:30:15.000Z",
        "updatedAt": "2022-12-02T16:30:15.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    },
    {
      "id": 10,
      "name": "Adeline Ziemann",
      "tel": "330.899.0982",
      "address": "18898 Mohr Groves",
      "opening_hours": "08:00",
      "description": "Et quam ex. Corrupti at ut. Consequatur tempore au",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.308525189899372",
      "viewCounts": 0,
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-12-02T16:30:15.000Z",
        "updatedAt": "2022-12-02T16:30:15.000Z"
      },
      "isFavorited": false,
      "isLiked": false
    }
  ],
  "categories": [
    {
      "id": 1,
      "name": "中式料理",
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z"
    },
    {
      "id": 2,
      "name": "日本料理",
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z"
    },
    {
      "id": 3,
      "name": "義大利料理",
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z"
    },
    {
      "id": 4,
      "name": "墨西哥料理",
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z"
    },
    {
      "id": 5,
      "name": "素食料理",
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z"
    },
    {
      "id": 6,
      "name": "美式料理",
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z"
    },
    {
      "id": 7,
      "name": "複合式料理",
      "createdAt": "2022-12-02T16:30:15.000Z",
      "updatedAt": "2022-12-02T16:30:15.000Z"
    }
  ],
  "categoryId": "",
  "page": 1,
  "totalPage": [
    1,
    2,
    3,
    4,
    5
  ],
  "prev": 1,
  "next": 2
}
export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1

    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      const { restaurants, categories, categoryId, page, totalPage, prev, next } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }

  }
}
</script>