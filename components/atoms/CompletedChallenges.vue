<template>
  <div :class="$style.challengesContainer">
    <p class="text-lg">
      Completed Challenges
    </p>
    <p class="text-2xl">
      {{ CompletedChallenges }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: mapState('Challenges', ['completedChallenges'])
})
</script>

<style lang="postcss" module>
.challengesContainer {
  @apply flex justify-between items-center pb-5 border-b-2 border-gray-100 mt-8 lg:mt-14 font-medium;
}
</style>
