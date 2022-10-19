<template>
  <div>
    <div v-if="preview" class="preview">
      <span>Loading</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    preview: false,
  }),
  created() {
    this.$bus.on('preview', ($event) => { this.preview = $event })
    // TIP: if in mounted, page mount phase triggers first, so loading will be missed
  },
}
</script>

<style lang="scss" scoped>
.preview {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
