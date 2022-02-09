<template>
  <header :class="$style.header">
    <p :class="$style.infoXP">{{ `${xp.start} xp` }}</p>
    <div :class="$style.bar">
      <div
        :class="$style.progressBar"
        :style="{ width: `${currentXpPersentage}%` }"
      >
        <p :class="$style.barInfo">
          {{ `${xp.current} xp (${currentXpPersentage}%)` }}
        </p>
      </div>
    </div>
    <p :class="$style.infoXp">
      {{ `${xp.end} xp` }}
    </p>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from "vuex";

export default Vue.extend({
  name: "ExperiensBar",
  computed: {
    ...mapState("Challenges", ["xp"]),
    ...mapGetters("Challenges", ["currentXpPersentage"]),
  },
});
</script>

<style lang="postcss" module>
.header {
  @apply pb-10 flex items-center;
}

.infoXP {
  @apply text-sm;
}

.bar {
  @apply mx-4 lg:mx-6 flex-1 bg-gray-200 h-1 rounded-full;
}

.progressBar {
  @apply relative bg-green-50 h-1;
}

.barInfo {
  @apply text-sm absolute -right-4 w-max top-2;
}
</style>
