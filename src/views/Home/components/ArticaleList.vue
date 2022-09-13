<template>
  <div class="article">
    <van-pull-refresh v-model="refreshLoading" @refresh="getNextPageArticle">
      <van-list
        v-model="loading"
        @load="getNextPageArticle"
        offset="100"
        :immediate-check="false"
        :finished="finished"
        :error.sync="error"
        error-text="请求失败，点击重新加载"
        finished-text="没有更多了"
      >
        <articale-item
          v-for="item in articles"
          :key="item.art_id"
          :article="item"
        ></articale-item>
      </van-list>
    </van-pull-refresh>
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
      articles: [],
      preTimestamp: '',
      loading: false,
      finished: false,
      error: false,
      refreshLoading: false
    }
  },
  created() {
    this.getFirstPageArticle()
  },
  methods: {
    async getFirstPageArticle() {
      try {
        const { data } = await getArticlesAPI(this.id, +new Date())
        // console.log(data)
        this.articles = data.data.results
        this.preTimestamp = data.data.pre_timestamp
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
    },
    async getNextPageArticle() {
      try {
        const { data } = await getArticlesAPI(this.id, this.preTimestamp)
        if (!data.data.pre_timestamp) {
          this.finished = true
        }
        if (this.refreshLoading) {
          this.articles.unshift(...data.data.results)
        } else {
          this.articles.push(...data.data.results)
        }
        this.preTimestamp = data.data.pre_timestamp
        // this.loading = false
      } catch (error) {
        this.error = true
      } finally {
        this.loading = false
        this.refreshLoading = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article {
  height: calc(100vh - 92px - 83px - 100px);
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #3296fa;
    border-radius: 10px;
  }
}
</style>
