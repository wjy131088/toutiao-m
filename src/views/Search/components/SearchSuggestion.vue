<template>
  <div>
    <van-cell
      icon="search"
      v-for="(item, index) in highlightSuggestion"
      :key="index"
      @click="$emit('change-keywords', suggestion[index])"
    >
      <template #title>
        <span v-html="item"></span>
      </template>
    </van-cell>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import { getSuggestionAPI } from '@/api'
export default {
  props: {
    keywords: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      suggestion: []
    }
  },
  watch: {
    keywords: {
      immediate: true,
      handler: 'getSuggestion'
    }
  },
  computed: {
    highlightSuggestion() {
      const reg = new RegExp(this.keywords, 'ig')
      return this.suggestion.map((str) => {
        return str.replace(
          reg,
          (match) => `<span style='color:red'>${match}</span>`
        )
      })
    }
  },
  methods: {
    getSuggestion: debounce(async function () {
      try {
        const { data } = await getSuggestionAPI(this.keywords)
        // this.getSuggestions = data.data.option.filter((item) => Boolean(item))
        this.suggestion = data.data.options.filter(Boolean)
        // console.log(data)
      } catch (error) {
        if (error.response) {
          this.$toast.fail('获取搜索建议失败')
        } else {
          throw error
        }
      }
    }, 300)
  }
}
</script>

<style></style>
