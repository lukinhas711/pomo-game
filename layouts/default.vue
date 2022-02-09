<template>
  <div :class="$style.container">
    <ExperienseBar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ExperieseBar from '@/components/ExperienseBar.vue'

export default Vue.extend({
  name: 'Default',
  components: {
    ExperieseBar,
  }
})
</script>

<style lang="postcss" module>
.container {
  @apply min-h-screen max-w-5xl mx-auto flex flex-col px-5 py-8 md:py-10;
}
</style>