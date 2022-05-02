export const state = () => ({
  inputHistory: [],
  // いずれこんな感じでとる
  // [
  //   {
  //     memo: "",
  //     createdAt: (date),
  //     data: [1, 2, 3, 4, 5, 6, 7, 8],
  //   }
  // ]
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
