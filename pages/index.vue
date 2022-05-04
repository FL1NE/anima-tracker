<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <img src="~/assets/images/anima.png" width="100%" />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          AnimaTracker (アニマトラッカー)へようこそ!
        </v-card-title>
        <v-card-text>
          <p>
            アニマトラッカーはメダルゲーム「アニマロッタ」シリーズ向けの統計解析ツールです。
            アニマロッタのルーレットは台によって偏りが発生するため、このツールで統計をとることでより当選確率を向上させることができます。
          </p>
          <p>
            アニマロッタについての詳細は
            <a
              href="https://p.eagate.573.jp/game/lotta/an6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              公式サイト </a
            >をご覧ください。
          </p>
          <p>
            サイドバーの
            <nuxt-link to="/input">データ入力</nuxt-link>
            から早速解析をしてみましょう！
          </p>

          <p>
            作者:
            <a
              href="https://twitter.com/FL1NE"
              target="_blank"
              rel="noopener noreferrer"
            >
              @FL1NE
            </a>
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
