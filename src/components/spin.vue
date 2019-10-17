<template>
  <Spin fix v-if="spinShow">
    <div class="loader"></div>
  </Spin>
</template>

<script>
export default {
  props: {
    spinShow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.loader {
  width: 64px;
  height: 64px;
  background: url('../resource/images/1.svg');
}
</style>
