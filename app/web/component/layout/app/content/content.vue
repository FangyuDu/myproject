<template>
  <div class="main">
    <div class="page-container page-component">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
  export default{
    name:'v-content',
    data(){
      return {

      }
    },
    components: {},
    mounted() {

    }
  }
</script>
