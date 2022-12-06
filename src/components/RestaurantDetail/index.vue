<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{restaurant.name}}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{restaurant.categoryName}}
      </p>
    </div>
    <div class="col-lg-4">
      <img class="img-responsive center-block" :src="restaurant.image"
        style="width: 250px;margin-bottom: 25px;">
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            08:00
          </li>
          <li>
            <strong>Tel:</strong>
            (918) 827-1962
          </li>
          <li>
            <strong>Address:</strong>
            98138 Elisa Road
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <button class="btn btn-primary btn-border mr-2" @click="goDashboard(restaurant.id)">
        Dashboard
      </button>
      <button v-if="restaurant.isFavorited" type="button" class="btn btn-danger btn-border mr-2"
        @click="changeisFavorited(restaurant.isFavorited, restaurant)">
        移除最愛
      </button>
      <button v-else type="button" class="btn btn-primary btn-border mr-2"
        @click="changeisFavorited(restaurant.isFavorited, restaurant)">
        加到最愛
      </button>
      <button v-if="restaurant.isLiked" type="button" class="btn btn-danger like mr-2"
        @click="changeisLike(restaurant.isLiked, restaurant)">
        Unlike
      </button>
      <button v-else type="button" class="btn btn-primary like mr-2"
        @click="changeisLike(restaurant.isLiked, restaurant)">
        Like
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantDetail',
  props: ['restaurant'],
  methods: {
    changeisFavorited(isFavorited, restaurant) {
      restaurant.isFavorited = !isFavorited
    },
    changeisLike(isLiked, restaurant) {
      restaurant.isLiked = !isLiked
    },
    goDashboard(id){
      console.log(id)
      this.$router.push(`/restaurants/id=${id}/dashboard`)
    }


  }
}
</script>