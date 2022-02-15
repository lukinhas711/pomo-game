<template>
  <div :class="$style.profile">
    <img src="https://avatars.githubusercontent.com/u/49355209?v=4" alt="user image" :class="$style.image">
    <div :class="$style.textProfile">
      <strong :class="$style.user">Lucas Ribeiro</strong>
      <p :class="$style.xp">
        <img src="icons/level.svg" alt="levels" class="mr-2">
        <span class="text-base">Level {{ level }}</span>
      </p>
    </div>
  </div>
</template>

<script lagn="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: mapState('Challenges', ['level'])
})
</script>

<style lang="postcss" module>
.profile {
  @apply flex items-center;
}

.image {
  @apply mr-6 w-20 h-20 rounded-full;
}

.textProfile {
  @apply flex flex-col w-full;
}

user {
  @apply text-gray-100 text-2xl;
}

.xp {
  @apply flex items-center;
}
</style>
