<template>
  <v-container fluid>
    <v-row class="ma-5" dense align="center" justify="center">
      <v-col cols="5">
        <v-card elevation="10" outlined>
          <v-container>
            <v-row align="center" justify="center" no-gutters>
              <v-col>
                <v-img
                    src="@/assets/wolves.png"
                    width="100%"
                />
              </v-col>
            </v-row>
            <v-row justify="center" align="center" no-gutters>
              <v-col class="d-flex justify-center">
                <span style="font-size: 6rem" class="font-weight-bold">
                  {{ this.homeScore }}
                </span>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-img
            src="@/assets/vs.png"
        />
      </v-col>
      <v-col cols="5">
        <v-card elevation="10" outlined class="">
          <v-container>
            <v-row align="center" justify="center" no-gutters>
              <v-col>
                <v-img
                    src="@/assets/gast.png"
                    width="100%"
                />
              </v-col>
            </v-row>
            <v-row justify="center" align="center" no-gutters>
              <v-col class="d-flex justify-center">
                <span style="font-size: 6rem" class="font-weight-bold">
                  {{ awayScore }}
                </span>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Scoreboard",
  data: () => ({
    homeScore: 0,
    awayScore: 0,
  }),
  mounted() {
    let hs = localStorage.getItem("homeScore") || 0;
    localStorage.setItem("homeScore", hs)
    this.homeScore = hs
    let asc = localStorage.getItem("awayScore") || 0;
    localStorage.setItem("homeScore", asc)
    this.awayScore = asc

    window.onstorage = () => {
      console.log("Storage changed!")
      this.homeScore = localStorage.getItem("homeScore") || 0
      this.awayScore = localStorage.getItem("awayScore") || 0
    }
  }
}
</script>

<style scoped>

</style>