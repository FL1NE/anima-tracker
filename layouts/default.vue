<template>
  <v-app dark>
    <!-- ----------------------------------------------------------------------- -->

    <v-navigation-drawer v-model="drawer" fixed app>
      <v-sheet color="grey darken-4" class="pa-4">
        <div v-if="false">
          <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>
          <div>john@vuetifyjs.com</div>
        </div>
        <div v-else>
          <v-btn
            to="/signin"
            class="mb-4"
            color="blue darken-1"
            width="100%"
            height="64"
            >Sign in</v-btn
          >
          <div>サインインをするとより多くの機能が使えます。</div>
        </div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- ----------------------------------------------------------------------- -->

    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>

    <!-- ----------------------------------------------------------------------- -->

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- ----------------------------------------------------------------------- -->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'AnimaTracker (アニマトラッカー)',

      drawer: false,

      items: [
        {
          icon: 'mdi-home',
          title: 'トップページ',
          to: '/',
        },
        {
          icon: 'mdi-apps',
          title: 'データ入力',
          to: '/input',
        },
        {
          icon: 'mdi-history',
          title: 'データ履歴',
          to: '/history',
        },
        {
          icon: 'mdi-chart-box',
          title: 'データ解析',
          to: '/Analysis',
        },
      ],
    }
  },
}
</script>
