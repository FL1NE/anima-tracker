export const state = () => ({
  currentInput: [],

  currentSession: {
    // id: "",
    // title: "",
    // description: "",
    data: [
      // { data: [], createdAt: ""}
    ],
    // createdAt: "",
    // updatedAt: ""
  },

  // sessionHistories: [],

  // settings: {},
})

// Mutationsはstateのセッター以外の役割を持たない
export const mutations = {
  setCurrentInputData: (state, array) => {
    state.currentInput = array
  },

  pushNumberToCurrentInputData: (state, number) => {
    state.currentInput.push(number)
  },

  pushCurrentInputDataToCurrentSessionData: (state) => {
    state.currentSession.data.push({
      data: state.currentInput,
      createdAt: new Date().toISOString(),
    })
  },

  // addNumberMutation: (state, number) => {
  //   state.inputHistory.push(number)
  // },
}

// ActionsでバックエンドAPIと通信する
export const actions = {
  numberInput: (ctx, number) => {
    ctx.commit('pushNumberToCurrentInputData', number)

    if (ctx.state.currentInput.length > 7) {
      ctx.commit('pushCurrentInputDataToCurrentSessionData')
      ctx.commit('setCurrentInputData', [])
    }
  },
  clearCurrentSession: (ctx) => {},
}

// 計算とか
export const getters = {
  calculatedData: (state) => {
    const combinedDataArray = []
    state.currentSession.data.forEach((e) => {
      combinedDataArray.push(...e.data)
    })

    const overallCount = combinedDataArray.length

    const foundCountArray = []
    for (let i = 0; i < 25; i++) {
      // 何回見つかったか計算する & filter時はi + 1で0回避
      foundCountArray[i] = combinedDataArray.filter((n) => n === i + 1).length
    }

    // 1 ~ 0で検出率を計算しておく
    const foundRateArray = []
    for (let i = 0; i < 25; i++) {
      foundRateArray[i] = foundCountArray[i] / overallCount
      if (!foundRateArray[i]) foundRateArray[i] = 0
    }

    // 1~ 0でグラデーション用の重みづけする
    const foundColorRateArray = []
    const foundColorMax = Math.max(...foundRateArray)
    const foundColorMin = Math.min(...foundRateArray)
    // console.log("MAX: " + foundColorMax)
    // console.log("MIN: " + foundColorMin)
    for (let i = 0; i < 25; i++) {
      // max: 0.5, min 0.12 => 0.5->1.0 and 0.12->0.0
      foundColorRateArray[i] =
        (foundRateArray[i] - foundColorMin) / (foundColorMax - foundColorMin)
      if (!foundColorRateArray[i]) foundColorRateArray[i] = 0
    }

    const returnData = {
      overallCount,
      foundCountArray,
      foundRateArray,
      foundColorRateArray,
      combinedDataArray,
    }

    return returnData
  },
}
