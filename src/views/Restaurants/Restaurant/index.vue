<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :restaurant="restaurant" />
    <hr>
    <!-- 餐廳評論 RestaurantComments @after-delete-comment為自訂義名稱,afterDeleteComment是回調函數 -->
    <RestaurantComments :restaurantComments="restaurantComments" @after-delete-comment="afterDeleteComment" />
    <!-- 新增評論 CreateComment -->
    <CreateComment @afterCreateComment="afterCreateComment"/>
  </div>
</template>

<script>
import RestaurantDetail from "@/components/RestaurantDetail"
import RestaurantComments from "@/components/RestaurantComments"
import CreateComment from "@/components/CreateComment"
const dummyData = {
  //假的 
  "restaurant": {
    "id": 5,
    "name": "Judy Runte",
    "tel": "(918) 827-1962",
    "address": "98138 Elisa Road",
    "opening_hours": "08:00",
    "description": "dicta et cupiditate",
    "image": "https://loremflickr.com/320/240/food,dessert,restaurant/?random=1",
    "createdAt": "2019-06-22T09:00:43.000Z",
    "updatedAt": "2019-06-22T09:00:43.000Z",
    "CategoryId": 3,
    "Category": {
      "id": 3,
      "name": "義大利料理",
      "createdAt": "2019-06-22T09:00:43.000Z",
      "updatedAt": "2019-06-22T09:00:43.000Z"
    },
    "FavoritedUsers": [],
    "LikedUsers": [],
    "Comments": [
      {
        "id": 3,
        "text": "Quos asperiores in nostrum cupiditate excepturi aspernatur.",
        "UserId": 2,
        "RestaurantId": 1,
        "createdAt": "2019-06-22T09:00:43.000Z",
        "updatedAt": "2019-06-22T09:00:43.000Z",
        "User": {
          "id": 2,
          "name": "user1",
          "email": "user1@example.com",
          "password": "$2a$10$0ISHJI48xu/VRNVmEeycFe8v5ChyT305f8KaJVIhumu7M/eKAikkm",
          "image": "https://i.imgur.com/XooCt5K.png",
          "isAdmin": false,
          "createdAt": "2019-06-22T09:00:43.000Z",
          "updatedAt": "2019-06-23T01:16:31.000Z"
        }
      }
    ]
  },
  "isFavorited": false,
  "isLiked": false
}
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  name: 'Restaurant',
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    getDataById(){
      console.log(this.$route.params)
    },
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      }
      this.restaurantComments = dummyData.restaurant.Comments
    },
    afterDeleteComment(commentId) {
      //篩選出除了Delte之外的評論
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      )
    },
    //新增評論
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  }
}
</script>