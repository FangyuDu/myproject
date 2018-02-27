<template lang="pug">
  .page-home
    section.control-panel
      .container
        el-button
          a(href="/api/checkFonts") 检测新的字体
        el-button
          a(href="/api/fontDownload") 下载
    section.container
      ul.tabs.clearfix
        li.tabs-item(:class="{'active': pn === item.value}" v-for="item in l" :key="item.value" v-text="item.label" @click="changeView(item.value)")
    section.container
      keep-alive
        compontent(:is="pn")
</template>
<script>
import selectIcon from '../selectIcon'
import customNames from '../customNames'
import customCodes from '../customCodes'
export default {
  name: 'home',
  data() {
    return {
      l: [{
        label: '选择图标',
        value: 'selectIcon'
      }, {
        label: '自定义类名',
        value: 'customNames'
      }, {
        label: '自定义编码',
        value: 'customCodes'
      }],
      pn: 'selectIcon' // pn => pagename
    }
  },
  components: {
    selectIcon,
    customNames,
    customCodes
  },
  methods: {
    changeView(pn = 'selectIcon') {
      this.pn = pn
    }
  }
}
</script>
<style lang="scss" scoped>
  .control-panel {
    background-color: #fcfcfc;
    padding: 10px 0;
  }
  .tabs {
    border-bottom: solid 1px #aaa;
    margin-bottom: 0;
    padding-left: 5px;
    margin-top: 10px;
  }
  .tabs-item {
    float: left;
    line-height: 42px;
    padding: 0 15px;
    margin-right: 2px;
    border: solid 1px transparent;
    margin-bottom: -1px;
    cursor: pointer;
    &.active {
      border: solid 1px #ddd;
      background-color: #fff;
      border-radius: 5px 5px 0 0;
      border-color: #aaa #aaa transparent!important;
      box-shadow: -2px -2px 2px -2px #ccc, 2px -2px 2px -2px #ccc;
    }
    
  }
</style>
