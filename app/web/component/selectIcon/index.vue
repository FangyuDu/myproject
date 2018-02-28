<template lang="pug">
  section
    div(v-for="c in list")
      h2 {{c.name}}
      el-row.font-list(:gutter="10")
        el-col(:span="4" v-for = "v in c.list")
          .font-item {{v | fontname}}
</template>
<script>
export default {
  name: 'selectIcon',
  data() {
    return {
      list: []
    }
  },
  filters: {
    fontname(v) {
      return v.replace(/\.svg$/, '')
    }
  },
  methods: {
    loadFontlist() {
      this.$http('/api/scanFonts')
        .then(res => {
          console.log(res)
          this.list = res.data
        })
    }
  },
  created() {
    this.loadFontlist()
  }
}
</script>
<style lang="scss" scoped>
  .font-item {
    box-shadow: 0 0 3px #ddd;
    padding: 5px;
    line-height: 20px;
    height: 50px;
    margin-bottom: 10px;
  }
</style>
