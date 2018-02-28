<template lang="pug">
  .page-admin
    .pa-header.container
      el-button(@click.right.prevent.native="test") 扫描已有字体
      span(@click.right.prevent="test") 测试
      span(@contextmenu.prevent="test") aaa
</template>
<script>
export default {
  methods: {
    test() {
      console.log('test')
    }
  }
}
</script>
