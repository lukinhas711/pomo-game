<template>
  <section :class="$style.mySection">
    <div :class="$style.componentsContainer">
      <Profile />
      <CompletedChallenges />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import CompletedChallenges from '~/components/atoms/CompletedChallenges.vue'
import Profile from '~/components/molecules/Profile.vue'

interface Head {
  title: string
}

export default Vue.extend({
  head(): Head {
    return {
      title: 'Home | Pomo Game'
    }
  },
  components: {
    CompletedChallenges,
    Profile,
  }
})
</script>

<style lang="postcss" module>
.mySection {
  @apply flex flex-col lg:flex-row flex-1 lg:flex-none lg:mt-16 sm:gap-x-10 md:gap-x-20;
}

.componentsContainer {
  @apply flex flex-col w-full lg:w-1/2;
}
</style>
