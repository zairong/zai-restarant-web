<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">
      餐廳評論網
    </router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarSupportedContent" class="navbar-collapse collapse">
      <div class="ml-auto d-flex align-items-center">
        <!--後台權限-->
        <router-link to="/admin" class="text-white mr-3" v-if="currentUser.isAdmin">
          管理員後台
        </router-link>
        <!-- 登入狀態 -->
        <template v-if="isAuthenticated">
          <!-- is user is login -->
          <router-link to="/users" class="text-white mr-3">
            使用者 您好
          </router-link>
          <button type="button" class="btn btn-sm btn-outline-success my-2 my-sm-0">
            登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
// seed data
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
  name: 'NavBar',
  data() {
    return {
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false
    }
  },
  mounted() {
    this.fetchUser()
  },
  methods: {
    fetchUser() {
      //解構並將dummyUser.currentUser內資料取代this.currentUser
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser
      }
      //假登入
      this.isAuthenticated = dummyUser.isAuthenticated
    }
  }
}
</script>

<style>

</style>