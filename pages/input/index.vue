<template>
  <div>
    <span>{{ $store.state.inputHistory }}</span>
    <v-row class="grid-component">
      <v-col v-for="n in 25" :key="n" class="grid-row">
        <v-card>
          <v-responsive :aspect-ratio="1 / 1">
            <v-btn class="grid-number" height="100%" @click="btnPress(n)">
              {{ n }}
            </v-btn>
          </v-responsive>
          <v-card>10000</v-card>
          <v-card>99.99%</v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'InspirePage',
  methods: {
    btnPress(n) {
      this.$store.commit('addNumberMutation', n)
      console.log(n)
    },
  },
}
</script>

<style scoped>
.grid-component {
  max-width: 960px;
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
