<template>
  <div>
    <v-row class="lotta-display">
      <v-col class="lotta-display-cols">
        <v-responsive
          class="lotta-display-child lotta-display-1st"
          :aspect-ratio="1 / 1"
        >
          <span class="lotta-display-text">{{
            $store.state.currentInput[0]
          }}</span>
        </v-responsive>
      </v-col>
      <v-col class="lotta-display-cols">
        <v-responsive
          class="lotta-display-child lotta-display-1st"
          :aspect-ratio="1 / 1"
        >
          <span class="lotta-display-text">{{
            $store.state.currentInput[1]
          }}</span>
        </v-responsive>
      </v-col>
      <v-col class="lotta-display-cols">
        <v-responsive
          class="lotta-display-child lotta-display-1st"
          :aspect-ratio="1 / 1"
        >
          <span class="lotta-display-text">{{
            $store.state.currentInput[2]
          }}</span>
        </v-responsive>
      </v-col>
      <v-col class="lotta-display-cols">
        <v-responsive
          class="lotta-display-child lotta-display-2nd"
          :aspect-ratio="1 / 1"
        >
          <span class="lotta-display-text">{{
            $store.state.currentInput[3]
          }}</span>
        </v-responsive>
      </v-col>
      <v-col class="lotta-display-cols">
        <v-responsive
          class="lotta-display-child lotta-display-2nd"
          :aspect-ratio="1 / 1"
        >
          <span class="lotta-display-text">{{
            $store.state.currentInput[4]
          }}</span>
        </v-responsive>
      </v-col>
      <v-col class="lotta-display-cols">
        <v-responsive
          class="lotta-display-child lotta-display-3rd"
          :aspect-ratio="1 / 1"
        >
          <span class="lotta-display-text">{{
            $store.state.currentInput[5]
          }}</span>
        </v-responsive>
      </v-col>
      <v-col class="lotta-display-cols">
        <v-responsive
          class="lotta-display-child lotta-display-4th"
          :aspect-ratio="1 / 1"
        >
          <span class="lotta-display-text">{{
            $store.state.currentInput[6]
          }}</span>
        </v-responsive>
      </v-col>
      <v-col class="lotta-display-cols">
        <v-responsive
          class="lotta-display-child lotta-display-5th"
          :aspect-ratio="1 / 1"
        >
          <span class="lotta-display-text">{{
            $store.state.currentInput[7]
          }}</span>
        </v-responsive>
      </v-col>
    </v-row>

    <div class="decontainer">
      <v-row class="grid-component">
        <v-col v-for="n in 25" :key="n" class="grid-row">
          <v-card>
            <v-responsive :aspect-ratio="1 / 1">
              <v-btn
                class="grid-number"
                :class="
                  colorGrad[
                    Math.round(
                      calculatedData.foundColorRateArray[n - 1] *
                        (colorGrad.length - 1)
                    )
                  ]
                "
                :disabled="$store.state.currentInput.includes(n)"
                height="100%"
                @click="btnPress(n)"
              >
                {{ n }}
              </v-btn>
            </v-responsive>
            <v-card class="disable-zoom">{{
              calculatedData.foundCountArray[n - 1]
            }}</v-card>
            <v-card class="disable-zoom"
              >{{
                Math.round(calculatedData.foundRateArray[n - 1] * 100 * 100) /
                100
              }}
              %</v-card
            >
          </v-card>
        </v-col>
      </v-row>
    </div>

    <h1 class="pt-12">統計情報</h1>
    <h2>ゲームのプレイ数: {{ $store.state.currentSession.data.length }}</h2>
    <h2>総抽選回数: {{ calculatedData.overallCount }}</h2>

    <div class="pt-8">
      <v-btn color="red darken-1" @click="$store.dispatch('clearCurrentInput')"
        >現在の入力を削除</v-btn
      >
    </div>

    <div class="pt-8">
      <v-btn color="red darken-4" @click="clearDataDialog = !clearDataDialog"
        >全てのデータの削除</v-btn
      >
    </div>

    <div class="pt-8">
      <v-btn color="amber darken-4" @click="downloadCurrentSessionJson()"
        >データのエクスポート (.json)</v-btn
      >
    </div>

    <div class="pt-8">
      <v-btn
        color="green darken-3"
        :loading="isFileSelecting"
        @click="ImportJsonToCurrentSession()"
        >データのインポート (.json)</v-btn
      >
    </div>

    <h1 class="pt-12">DEBUG (開発・デバッグ用)</h1>

    <h2>Session data</h2>
    <v-card
      v-for="(value, name) in $store.state.currentSession.data"
      :key="name"
    >
      <div>{{ name }}: {{ value }}</div>
    </v-card>

    <h2>State data</h2>
    <v-card v-for="(value, name) in $store.state" :key="'state' + name">
      <div>{{ name }}: {{ value }}</div>
    </v-card>

    <h2>Calculated data</h2>
    <v-card v-for="(value, name) in calculatedData" :key="'data' + name">
      <div>{{ name }}: {{ value }}</div>
    </v-card>

    <!-- ----------------------------------------------------------------------- -->

    <input
      ref="uploader"
      class="d-none"
      type="file"
      accept="application/json"
      @change="onFileChanged"
    />

    <!-- ----------------------------------------------------------------------- -->
    <v-dialog v-model="clearDataDialog" max-width="500px">
      <v-card>
        <v-card-title class="text-h5 red lighten-1">
          全てのデータを削除しますか？
        </v-card-title>

        <v-card-text>
          <div class="text-h5 pt-8">
            全てのデータを削除すると過去の履歴含め初期状態に戻ります
          </div>
          <div class="text-h5">データの削除を実行しますか？</div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="error" dark large @click="clearAllData()">
            はい、データを削除します
          </v-btn>

          <v-btn text color="primary" @click="clearDataDialog = false">
            キャンセル
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'InspirePage',
  data() {
    return {
      clearDataDialog: false,
      isFileSelecting: false,
      selectedFile: null,
      colorGrad: [
        // '',
        'red lighten-5 black--text',
        'red lighten-4 black--text',
        'red lighten-3 black--text',
        'red lighten-2 black--text',
        'red lighten-1 black--text',
        'red darken-1 white--text',
        'red darken-2 white--text',
        'red darken-3 white--text',
        'red darken-4 white--text',
        'orange darken-4 white--text',
        'amber darken-3 white--text',
        'amber white--text',
      ],
    }
  },
  computed: {
    calculatedData() {
      return this.$store.getters.calculatedData
    },
  },
  methods: {
    btnPress(n) {
      this.$store.dispatch('numberInput', n)
      // console.log('numberInput: ' + n)
    },
    clearAllData() {
      this.$store.dispatch('clearAllData')
      this.clearDataDialog = false
    },
    downloadCurrentSessionJson() {
      const blob = new Blob(
        [JSON.stringify(this.$store.state.currentSession, null, '  ')],
        { type: 'application/json' }
      )
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'sample.json'
      link.click()
      URL.revokeObjectURL(url)
    },
    ImportJsonToCurrentSession() {
      this.isFileSelecting = true
      // After obtaining the focus when closing the FilePicker, return the button state to normal
      window.addEventListener(
        'focus',
        () => {
          this.isFileSelecting = false
        },
        { once: true }
      )

      // Trigger click on the FileInput
      this.$refs.uploader.click()
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0]
      // Do whatever you need with the file, liek reading it with FileReader
      // console.log(this.selectedFile)
      if (this.selectedFile.length <= 0) {
        return false
      }
      const fr = new FileReader()

      const storeHandler = this.$store

      fr.onload = function (e) {
        // console.log(e);
        // result = 成型済みのjsonデータ、これで置き換える
        const result = JSON.parse(e.target.result)
        // console.log(result)

        // const formatted = JSON.stringify(result, null, 2);

        storeHandler.dispatch('overwriteCurrentSession', result)
        // document.getElementById('result').value = formatted;
        // console.log(formatted)
      }

      fr.readAsText(this.selectedFile)
    },
  },
}
</script>

<style scoped>
.lotta-display {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
}

.lotta-display-cols {
  margin: -10px;
}

.lotta-display-child {
  text-align: center;
  position: relative;
  border-radius: 100px;
  border: 0.125em solid white;
}

.lotta-display-1st {
  background-color: #ff6f00;
}

.lotta-display-2nd {
  background-color: #bf360c;
}

.lotta-display-3rd {
  background-color: #b71c1c;
}

.lotta-display-4th {
  background-color: #880e4f;
}

.lotta-display-5th {
  background-color: #4a148c;
}

.lotta-display-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.decontainer {
  margin-top: 15px;
  margin-left: -15px;
  margin-right: -15px;
}

.grid-component {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}

.grid-row {
  width: 20%;
  flex: 0 0 20%;
  max-width: 20%;
  font-size: 1rem;
}

.grid-number {
  width: 100%;
  height: 100%;
}
</style>
