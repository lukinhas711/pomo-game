import { Mutations, MutationsInterface } from './types'

export default {
  [Mutations.SET_CURRENT_CHALLENGE_INDEX] (state, index) {
    state.currentChallengeIndex = index
  },
  [Mutations.SET_IS_LEVEL_UP_MODAL_OPEN] (state, flag) {
    state.isLevelUpModalOpen = flag
  },
  [Mutations.COMPLETE_CHALLENGE] (state, xpAmount) {
    const { current, end } = state.xp
    const currentTotalXp = current + xpAmount
    const sholdLevelUp = currentTotalXp >= end

    state.completeChallenges += 1

    if (sholdLevelUp){
      state.level += 1

      const remainingXp = currentTotalXp - end
      const xpToNextLevel = Math.pow((state.level + 1 ) * 4, 2)

      state.xp = {
        current: remainingXp,
        start: 0,
        end: xpToNextLevel,
      }

      state.isLevelUpModalOpen = true
      return
    }

    state.xp = {
      ...state.xp,
      current: currentTotalXp
    }

  },
  [Mutations.SAVE_COOKIE_DATA] (state, cookie) {
    state.level = cookie.level
    state.xp = cookie.xp
    state.completeChallenges = cookie.completedChallenges
  },
} as MutationsInterface;