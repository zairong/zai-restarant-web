<template>
  <div class="container py-5">
    <form>
      <div class="form-group">
        <label for="name">使用者名稱: &nbsp; &nbsp; {{ dummyUser.currentUser.name }}</label>
        <input id="name" v-model="newUsername" type="text" name="name" class="form-control" placeholder="輸入你想更換的姓名"
          required>
        <button @click.prevent.stop="changeName">更換姓名</button>
      </div>

      <div class="form-group">
        <img v-if="dummyUser.currentUser.image" :src="dummyUser.currentUser.image" class="d-block img-thumbnail mb-3"
          width="200" height="200">
        <br />
        <label for="image">我的頭像</label>
        <input id="image" type="file" name="image" accept="image/*" class="form-control-file"
          @change="handleFileChange">
      </div>
      <!-- 需要回傳修改的資料給伺服器, @click='sentData(伺服器要求的參數)'-->
      <button type="submit" class="btn btn-primary" @click.prevent.stop="sendData(dummyUser)">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserEdit',
  data() {
    return {
      //假數據(須向伺服器post Userid 並請求回應取得) 
      dummyUser: {
        currentUser: {
          id: 1,
          name: '管理者55688',
          email: 'root@example.com',
          image: 'https://i.pravatar.cc/300',
          isAdmin: true
        },
        isAuthenticated: true,
      },
      newUsername: ''
    }
  },
  methods: {
    //改名
    changeName() {
      this.dummyUser.currentUser.name = this.newUsername
    },
    //改頭像
    handleFileChange(event) {
      const { files } = event.target
      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        return
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0])
        this.dummyUser.currentUser.image = imageURL
      }
    },
    //傳參數給伺服器修改使用者資訊
    sendData(dummyUser) {
      console.log(123);
      //大概長這樣
      // axios({ url: `xxxxx/user/edit/${dummyUser.userId}/${dummyUser.userImg}`, method: 'post' })
      // 或長這樣 ----看後端的要求
      // axios({ url: `xxxxx/user/edit/`, method: 'post',data:dummyUser })

      
    }
  }
}


</script>

<style>

</style>