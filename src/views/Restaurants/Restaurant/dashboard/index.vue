<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  "restaurant": {
    "id": 1,
    "name": "Jarrell Marvin",
    "tel": "095.959.6098",
    "address": "4831 Jacobi Harbors",
    "opening_hours": "08:00",
    "description": "Beatae dolorem autem doloremque deleniti qui aliquid odit voluptatum voluptate.\nMaiores eum aspernatur reprehenderit maxime eaque consequatur rerum sed non.\nQui ab accusamus sint.\nAutem perspiciatis neque neque.\nEaque amet animi enim distinctio maxime corporis omnis quo voluptatem.",
    "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.098135662769796",
    "viewCounts": 0,
    "createdAt": "2022-12-04T02:58:20.000Z",
    "updatedAt": "2022-12-04T02:58:20.000Z",
    "CategoryId": 1,
    "Category": {
      "id": 1,
      "name": "中式料理",
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z"
    },
    "Comments": [
      {
        "id": 1,
        "text": "Voluptas rerum ex sed.",
        "UserId": 1,
        "RestaurantId": 1,
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z",
        "User": {
          "id": 1,
          "name": "root",
          "email": "root@example.com",
          "password": "$2a$10$1Gfnhst2ElXt2aPquxtW2.7WKliLCXXD/4g4g5PX5HDe9qQaVuXKC",
          "isAdmin": true,
          "image": null,
          "createdAt": "2022-12-04T02:58:20.000Z",
          "updatedAt": "2022-12-04T02:58:20.000Z"
        }
      },
      {
        "id": 51,
        "text": "In sint fugit sit minus voluptate.",
        "UserId": 1,
        "RestaurantId": 1,
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z",
        "User": {
          "id": 1,
          "name": "root",
          "email": "root@example.com",
          "password": "$2a$10$1Gfnhst2ElXt2aPquxtW2.7WKliLCXXD/4g4g5PX5HDe9qQaVuXKC",
          "isAdmin": true,
          "image": null,
          "createdAt": "2022-12-04T02:58:20.000Z",
          "updatedAt": "2022-12-04T02:58:20.000Z"
        }
      },
      {
        "id": 101,
        "text": "Sequi recusandae vero dolorum omnis.",
        "UserId": 3,
        "RestaurantId": 1,
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z",
        "User": {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$7tDLGbQgVx3gPXXYiZYnZ.V5yhkRBnvdC9DdSRvc3k.pTtZwKCQPa",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-12-04T02:58:20.000Z",
          "updatedAt": "2022-12-04T02:58:20.000Z"
        }
      }
    ]
  }
}
export default {
  name: 'dashboard',
  data() {
    return {
      "restaurant": {
        "id": 1,
        "name": "Jarrell Marvin",
        "tel": "095.959.6098",
        "address": "4831 Jacobi Harbors",
        "opening_hours": "08:00",
        "description": "Beatae dolorem autem doloremque deleniti qui aliquid odit voluptatum voluptate.\nMaiores eum aspernatur reprehenderit maxime eaque consequatur rerum sed non.\nQui ab accusamus sint.\nAutem perspiciatis neque neque.\nEaque amet animi enim distinctio maxime corporis omnis quo voluptatem.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.098135662769796",
        "viewCounts": 0,
        "createdAt": "2022-12-04T02:58:20.000Z",
        "updatedAt": "2022-12-04T02:58:20.000Z",
        "CategoryId": 1,
        "Category": {
          "id": 1,
          "name": "中式料理",
          "createdAt": "2022-12-04T02:58:20.000Z",
          "updatedAt": "2022-12-04T02:58:20.000Z"
        },
        "Comments": [
          {
            "id": 1,
            "text": "Voluptas rerum ex sed.",
            "UserId": 1,
            "RestaurantId": 1,
            "createdAt": "2022-12-04T02:58:20.000Z",
            "updatedAt": "2022-12-04T02:58:20.000Z",
            "User": {
              "id": 1,
              "name": "root",
              "email": "root@example.com",
              "password": "$2a$10$1Gfnhst2ElXt2aPquxtW2.7WKliLCXXD/4g4g5PX5HDe9qQaVuXKC",
              "isAdmin": true,
              "image": null,
              "createdAt": "2022-12-04T02:58:20.000Z",
              "updatedAt": "2022-12-04T02:58:20.000Z"
            }
          },
          {
            "id": 51,
            "text": "In sint fugit sit minus voluptate.",
            "UserId": 1,
            "RestaurantId": 1,
            "createdAt": "2022-12-04T02:58:20.000Z",
            "updatedAt": "2022-12-04T02:58:20.000Z",
            "User": {
              "id": 1,
              "name": "root",
              "email": "root@example.com",
              "password": "$2a$10$1Gfnhst2ElXt2aPquxtW2.7WKliLCXXD/4g4g5PX5HDe9qQaVuXKC",
              "isAdmin": true,
              "image": null,
              "createdAt": "2022-12-04T02:58:20.000Z",
              "updatedAt": "2022-12-04T02:58:20.000Z"
            }
          },
          {
            "id": 101,
            "text": "Sequi recusandae vero dolorum omnis.",
            "UserId": 3,
            "RestaurantId": 1,
            "createdAt": "2022-12-04T02:58:20.000Z",
            "updatedAt": "2022-12-04T02:58:20.000Z",
            "User": {
              "id": 3,
              "name": "user2",
              "email": "user2@example.com",
              "password": "$2a$10$7tDLGbQgVx3gPXXYiZYnZ.V5yhkRBnvdC9DdSRvc3k.pTtZwKCQPa",
              "isAdmin": false,
              "image": null,
              "createdAt": "2022-12-04T02:58:20.000Z",
              "updatedAt": "2022-12-04T02:58:20.000Z"
            }
          }
        ]
      }
    }
  },
  methods: {
    fetchRestaurants() {
      return this.restaurant = dummyData.restaurant 
    }
  },
  mounted() {
    this.fetchRestaurants()
  },

}  
</script>