<template>
  <!-- v-on 來監聽 submit 事件 -->
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input id="name" v-model="restaurant.name" type="text" class="form-control" name="name" placeholder="Enter name"
        required>
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select id="categoryId" class="form-control" name="categoryId" required v-model="restaurant.categoryId">
        <option value="" selected disabled>
          --請選擇--
        </option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input id="tel" type="text" v-model="restaurant.tel" class="form-control" name="tel"
        placeholder="Enter telephone number">
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input id="address" v-model="restaurant.address" type="text" class="form-control" placeholder="Enter address"
        name="address">
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input id="opening-hours" type="time" class="form-control" name="opening_hours" v-model="restaurant.openingHours">
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea id="description" class="form-control" rows="3" name="description"
        v-model="restaurant.description"></textarea>

    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img v-if="restaurant.image" :src="restaurant.image" class="d-block img-thumbnail mb-3" width="200" height="200">
      <input id="image" type="file" name="image" accept="image/*" class="form-control-file" @change="handleFileChange">
    </div>

    <button type="submit" class="btn btn-primary">
      送出
    </button>
  </form>
</template>

<script>
const dummyData = {
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2019-06-22T09:00:43.000Z',
      updatedAt: '2019-06-22T09:00:43.000Z'
    }
  ]
}
export default {
  name: 'AdminRestaurantForm',
  data() {
    return {
      restaurant: {
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      categories: []
    }
  },
  props: ['initialRestaurant']
  ,
  created() {
    this.fetchCategories()
    this.restaurant = {
      ...this.restaurant,
      ...this.initialRestaurant
    }
  },
  props: {
    initialRestaurant: {
      type: Object,
      default: () => ({
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: '',
      })
    }
  },
  methods: {
    fetchCategories() {
      this.categories = dummyData.categories
    },
    handleFileChange(event) {
      const { files } = event.target
      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.restaurant.image = ''
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0])
        this.restaurant.image = imageURL
      }
    },
    //
    handleSubmit(event) {
      const form = event.target
      const formData = new FormData(form)
      this.$emit('after-submit', formData)
    }
  }
}

</script>

<style>

</style>