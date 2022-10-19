<template>
  <div>{{ data }}</div>
</template>

<script>
export default {
  data: () => ({ data: null }),
  async mounted() {
    this.$bus.emit('preview', true)
    this.data = await $fetch('https://api.your.url')
    this.$bus.emit('preview', false)
  },
}
</script>
