import { Getters } from './types'

export default {
  challengesLength: state => state.allChallenges.length,
  currentXpPersentage: (state) => {
    const percentage = (state.xp.current / state.xp.end) * 100
    return Number(percentage.toFixed(2))
  },
  currentChalleng: state =>
  (typeof state.currentChallengeIndex === 'number')
   ?state.allChallenges[state.currentChallengeIndex]
   : null
} as Getters
