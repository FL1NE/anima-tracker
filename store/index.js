export const state = () => ({
  inputHistory: [],
})

export const mutations = {
  addNumberMutation: (state, number) => {
    state.inputHistory.push(number)
  },
}

// export const actions = () => ({
//   addNumberAction: ({ commit }, number) => {
//     commit('addNumberMutation', number)
//   }
// });
