<template>
  <div :class="$style.container">
    <ExperienseBar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ExperienseBar from '~/components/atoms/ExperienseBar.vue'

export default Vue.extend({
  name: 'Default',
  components: {
    ExperienseBar,
  }
})
</script>

<style lang="postcss" module>
.container {
  @apply min-h-screen max-w-5xl mx-auto flex flex-col px-5 py-8 md:py-10;
}
</style>
