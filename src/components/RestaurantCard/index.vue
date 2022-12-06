<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img class="card-img-top" :src="restaurant.image" alt="Card image cap" width="286px" height="180px">
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{ restaurant.Category.name }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button v-if="restaurant.isFavorited" type="button" class="btn btn-danger btn-border favorite mr-2"
          @click="changeisFavorited(restaurant.isFavorited, restaurant)">
          移除最愛
        </button>
        <button v-else type="button" class="btn btn-primary btn-border favorite mr-2"
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
  </div>
</template>

<script>
export default {
  props: ['restaurant'],
  methods: {
    changeisFavorited(isFavorited, restaurant) {
      restaurant.isFavorited = !isFavorited
    },
    changeisLike(isLiked, restaurant) {
      restaurant.isLiked = !isLiked
    },


  }

}
</script>


<style>

</style>