<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div class="card mb-3" style="max-width: 540px;margin: auto;" v-for= "restaurant in restaurants"
      :key="restaurant.id" >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a >
            <img class="card-img" :src="restaurant.image">
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.viewCounts}}</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button type="button" class="btn btn-danger mr-2" v-if="restaurant.isFavorited"  @click="changeisFavorited(restaurant.isFavorited, restaurant)">
              移除最愛
            </button>
            <button type="button" class="btn btn-primary" v-else  @click="changeisFavorited(restaurant.isFavorited, restaurant)">
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '@/components/NavTabs'
const dummyData = {
  "restaurants": [
    {
      "id": 50,
      "name": "Armani Rowe",
      "tel": "924-712-9149 x482",
      "address": "89614 Webster Field",
      "opening_hours": "08:00",
      "description": "voluptatum sed suscipit",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.969439777409054",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 49,
      "name": "Herminio Huel",
      "tel": "(263) 853-7593 x87322",
      "address": "68210 Weimann Circles",
      "opening_hours": "08:00",
      "description": "Quia reprehenderit assumenda aspernatur. Ipsum vel",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.78161821130536",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 4,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 48,
      "name": "Emma Lesch",
      "tel": "(050) 423-4580",
      "address": "616 Karlie Junctions",
      "opening_hours": "08:00",
      "description": "Aut ut in nihil voluptates.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.766476117387533",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 3,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 47,
      "name": "Alta Kemmer",
      "tel": "(744) 981-5285 x0509",
      "address": "0999 Terrance Ville",
      "opening_hours": "08:00",
      "description": "Itaque quidem at velit voluptatem adipisci aut fug",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.45690790137339",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 2,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 46,
      "name": "Wilhelmine Kiehn",
      "tel": "835.140.1683 x32763",
      "address": "83488 Blanda Pass",
      "opening_hours": "08:00",
      "description": "Sunt ratione commodi eveniet sequi explicabo praes",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.96776707832954",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 45,
      "name": "Felipe Parisian",
      "tel": "1-844-656-9082 x125",
      "address": "43054 Melody Brook",
      "opening_hours": "08:00",
      "description": "Et expedita molestiae. At qui sed totam cupiditate",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=4.316214924247586",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 3,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 44,
      "name": "Minerva Bernhard",
      "tel": "1-287-846-7615 x3128",
      "address": "8668 Kilback Ferry",
      "opening_hours": "08:00",
      "description": "Vero tenetur explicabo commodi voluptatem.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.8063687353805378",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 2,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 43,
      "name": "Gregory Daniel",
      "tel": "(325) 525-8723 x0209",
      "address": "644 Audrey Trail",
      "opening_hours": "08:00",
      "description": "assumenda iste dolores",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.39652497356831",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 42,
      "name": "Lexie Kreiger",
      "tel": "716-876-5475 x669",
      "address": "8545 Roderick Knoll",
      "opening_hours": "08:00",
      "description": "Quo dolorem ab fugit odio et voluptas. Rem enim di",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.405859962036489",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 41,
      "name": "Filiberto Gleason",
      "tel": "841-864-9390 x30229",
      "address": "853 Myrna Park",
      "opening_hours": "08:00",
      "description": "voluptatem",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.6417859793801",
      "viewCounts": 0,
      "createdAt": "2022-12-04T02:58:20.000Z",
      "updatedAt": "2022-12-04T02:58:20.000Z",
      "CategoryId": 2,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    }
  ]
}
export default {
  components: {
    NavTabs
  },
  created(){
    this.fetchRestaurants()
  },
  data() {
    return {
      restaurants: []
    }
  },
  methods: {
    fetchRestaurants() {
      const { restaurants } = dummyData
      this.restaurants = restaurants ||[]
    },
    changeisFavorited(isFavorited, restaurant) {
      restaurant.isFavorited = !isFavorited
    },

  }
}
</script>

<style>

</style>