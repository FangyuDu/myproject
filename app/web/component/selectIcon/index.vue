<template lang="pug">
  section
    div
      h2 已选择
        el-button(type="text" @click.native="clearSelect") 清空选择
      el-row.font-list(:gutter="10")
        el-col(:span="3" v-for = "v in selectIcons")
          .font-item(@click="toggle(v)")
            i.fi-icon(:class="['cmsui-icon-'+v.code]")
            p.fi-name .cmsui-icon-{{v.code}}
    div(v-for="c in list")
      h2 {{c.name}}
      el-row.font-list(:gutter="10")
        el-col(:span="3" v-for = "v in c.list")
          .font-item(@click="toggle(v)" :class="{'is-select': v.isSelect}")
            i.fi-icon(:class="['cmsui-icon-'+v.code]")
            p.fi-name {{v.fileName}}
</template>
<script>
import _ from 'lodash'

export default {
  name: 'selectIcon',
  data() {
    return {
      list: [],
      selectIcons: []
    }
  },
  filters: {
    fontname(v) {
      return v.replace(/\.svg$/, '')
    }
  },
  methods: {
    loadFontlist() {
      this.$http('/api/getAllFonts')
        .then(res => {
          let tempArr = []
          _.forIn(res.data, (val, key) => {
            tempArr.push({
              name: key,
              list: val.map(item => {
                item.isSelect = false
                return item
              })
            })
          })
          this.list = tempArr
          // this.list = res.data
        })
    },
    toggle(font) {
      const {selectIcons} = this
      font.isSelect = !font.isSelect
      if (font.isSelect) {
        selectIcons.push(font)
      } else {
        let i = selectIcons.indexOf(font)
        selectIcons.splice(i, 1)
      }
      this.$store.dispatch('toggleFont', font)
    },
    clearSelect() {
      this.$store.dispatch('setFontList', [])
      this.selectIcons.forEach(item => {
        item.isSelect = false
      })
      this.selectIcons = []
    }
  },
  created() {
    this.loadFontlist()
  }
}
</script>
<style lang="scss" scoped>
  .font-item {
    box-shadow: 1px 2px 3px #ddd;
    border: solid 1px #ddd;
    padding: 5px;
    line-height: 20px;
    // height: 50px;
    margin-bottom: 10px;
    text-align: center;
    cursor: pointer;
    .fi-icon {
      font-size: 30px;
      line-height: 1.5;
    }
    .fi-name {
      font-size: 13px;
    }
    &.is-select {
      box-shadow: 1px 2px 3px #b92b57;
      border-color: #b92b57;
    }
  }
</style>
