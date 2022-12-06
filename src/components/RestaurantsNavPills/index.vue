<template>
  <ul class="nav nav-pills mb-4">
    <li class="nav-item">
      <router-link class="nav-link" :to="{ name: 'restaurants' }">
        全部
      </router-link>
    </li>

    <li v-for="category in categories" :key="category.id" class="nav-item">

      <!-- to的字符串寫法 -->
      <!-- <router-link class="nav-link" :to="`/restaurants/?categoryId=${caegory.id}`"> -->
      <!-- to的object寫法 -->
      <router-link class="nav-link" :to="{
        name: 'restaurants',
        query: { categoryId: category.id }
      }">{{ category.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RestaurantsNavPills',
  props: ['categories']
}
</script>