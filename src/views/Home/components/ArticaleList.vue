<template>
  <div>
    <articale-item
      v-for="item in articles"
      :key="item.art_id"
      :article="item"
    ></articale-item>
  </div>
</template>

<script>
// 发送请求，拿到当前文章的详情数据getArticlesAPI
import { getArticlesAPI } from '@/api'
import ArticaleItem from './ArticaleItem.vue'
export default {
  components: { ArticaleItem },
  name: 'Articles',
  props: {
    id: [String, Number]
  },
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.getFirstPageArticle()
  },
  methods: {
    async getFirstPageArticle() {
      try {
        const { data } = await getArticlesAPI(this.id, +new Date())
        console.log(data)
        this.articles = data.data.results
      } catch (error) {
        // js错误，上抛。400上抛中文，507原封不动上抛
        const status = error.response?.status
        if (error.response || status === 507) {
          throw error
        } else {
          if (status === 400) {
            // 新建error对象
            throw new Error(error.response.data.message)
          }
        }
      }
    }
  }
}
</script>

<style></style>
