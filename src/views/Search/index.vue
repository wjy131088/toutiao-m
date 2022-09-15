<template>
  <div>
    <form action="/">
      <van-search
        class="search"
        v-model.trim="keywords"
        background="#3296fa"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @focus="isShowSearchResult = false"
        @cancel="$router.push('/')"
      ></van-search>
    </form>
    <!-- 搜索历史/建议/搜索结果 -->
    <components
      :is="componentName"
      :keywords="keywords"
      @change-keywords="onSearch"
    ></components>
    <!-- <search-history></search-history>
    <search-suggestion></search-suggestion>
    <search-results></search-results> -->
  </div>
</template>

<script>
import SearchHistory from './components/SearchHistory'
import SearchSuggestion from './components/SearchSuggestion'
import SearchResults from './components/SearchResults'
import { mapMutations, mapState } from 'vuex'
export default {
  components: {
    SearchHistory,
    SearchSuggestion,
    SearchResults
  },
  data() {
    return {
      keywords: '',
      isShowSearchResult: false
    }
  },
  computed: {
    ...mapState(['histories']),
    componentName() {
      if (this.keywords === '') {
        return 'SearchHistory'
      }
      if (this.isShowSearchResult) {
        return 'SearchResults'
      }
      return 'SearchSuggestion'
    }
  },
  methods: {
    ...mapMutations(['SET_HISTORIES']),
    onSearch(keywords) {
      const distinctHistories = [...new Set([keywords, ...this.histories])]
      this.SET_HISTORIES(distinctHistories)

      this.keywords = keywords
      this.isShowSearchResult = true
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  [role='button'] {
    color: #fff;
  }
}
</style>
