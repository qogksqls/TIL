<template>
  <div>
    <h1>{{ article.title }}</h1>

    <p>
      {{ article.content }}
    </p>
    <!-- Article Edit/Delete UI -->
    <div v-if="isAuthor">
      <router-link :to="{ name: 'articleEdit', params: {articlePk}}">
        <button>Edit</button>
      </router-link>
      |
      <button @click="deleteArticle(articlePk)">Delete</button>
    </div>

    <!-- Article Like UI -->
    <div>
      Likeit:
      <button
        @click="likeArticle(articlePK)"
      >{{ likeCount }}</button>
    </div>

    <hr />
    <!-- Comment UI -->
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'ArticleDetail',
    data() {
      return {
        articlePk: this.$route.params.articlePk,
      }
    },
    computed: {
      ...mapGetters(['article', 'isAuthor']),
      likeCount() {
        return this.article.like_users?.length
      }
    },
    methods: {
      ...mapActions(['fetchArticle', 'likeArticle', 'deleteArticle'])
    },
    created() {
      this.fetchArticle(this.articlePk)
    },
  }
</script>

<style></style>
