<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <!-- 前一頁 previousPage -->
      <li v-show="previousPage" :class="['page-item', { disabled: currentPage === 1 }]">
        <router-link class="page-link" aria-label="Previous" :to="{
          name: 'restaurants',
          query: { categoryId, page: previousPage }
        }">
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>


      <!-- 頁碼 -->
      <li v-for="page in totalPage" :key="page" :class="['page-item', { active: currentPage === page }]">
        <router-link class="page-link" :to="{ name: 'restaurants', query: { categoryId, page } }">
          {{ page }}
        </router-link>
      </li>

      <!-- 後一頁 nextPage -->
      <li v-show="nextPage" :class="['page-item', { disabled: currentPage === totalPage.length }]">
        <router-link class="page-link" :to="{ name: 'restaurants', query: { categoryId, page: nextPage } }"
          aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>

    </ul>
  </nav>
</template>

<script>
export default {
  props: ['currentPage', 'totalPage', 'categoryId', 'previousPage', 'nextPage'],
  methods: {

  }
}
</script>
<style lang="less" scoped>
.pagination {
  justify-content: center;
}
</style>