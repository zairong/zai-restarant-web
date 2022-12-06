<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea class="form-control" rows="3" name="text" v-model="text"></textarea>
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">回上一頁</button>
      <button type="submit" class="btn btn-primary mr-0">
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid"
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
  name: 'CreateComment',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    handleSubmit() {
      // TODO: 向 API 發送 POST 請求
      // 伺服器新增 Comment 成功後...
      this.$emit('afterCreateComment', {
        commentId: uuidv4(), // 尚未串接 API 暫時使用隨機的 id
        restaurantId: this.restaurantId,
        text: this.text
      })
      this.text = '' // 將表單內的資料清空
    },

  },
}
</script>