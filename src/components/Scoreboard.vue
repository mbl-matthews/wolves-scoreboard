<template>
  <v-container fluid>
    <v-row class="ma-2" dense align="center" justify="center">
      <v-col cols="5">
        <v-card elevation="10" outlined color="#EDEDED">
          <v-container fluid>
            <v-row align="center" justify="center" no-gutters>
              <v-col>
                <v-img
                    contain
                    :src="require('@/assets/teams/' + homeLogo)"
                    class="mx-auto"
                    width="95%"
                />
              </v-col>
            </v-row>
            <v-row justify="center" align="center" no-gutters>
              <v-col class="d-flex justify-center">
                <span style="font-size: 20rem" class="ma-n16 font-weight-bold">
                  {{ this.homeScore }}
                </span>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="2" class="d-flex justify-center">
        <v-img
            src="@/assets/vs_djk.png"
            width="400"
            contain
        />
      </v-col>
      <v-col cols="5">
        <v-card elevation="10" outlined color="#EEEEEE">
          <v-container>
            <v-row align="center" justify="center" no-gutters>
              <v-col>
                <v-img
                    contain
                    :src="require('@/assets/teams/' + awayLogo)"
                    class="mx-auto"
                    width="95%"
                />
              </v-col>
            </v-row>
            <v-row justify="center" align="center" no-gutters>
              <v-col class="d-flex justify-center">
                <span style="font-size: 20rem" class="ma-n16 font-weight-bold">
                  {{ awayScore }}
                </span>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card color="#EEEEEE" outlined elevation="10">
          <v-container fluid>
            <v-row class="pa-1" justify="center" align="center">
              <v-col cols="2" class="pa-4">
                <v-row class="pa-2" style="border: 2px solid #AAAAAA; border-radius: 5px">
                  <v-img
                      contain
                      src="@/assets/wow.png"
                      class="mx-auto"
                      height="150"
                  />
                </v-row>
              </v-col>
              <v-spacer/>
              <v-col cols="2" class="pa-4">
                <v-row class="pa-2" style="border: 2px solid #AAAAAA; border-radius: 5px">
                  <v-img
                      contain
                      src="@/assets/artcore.png"
                      class="mx-auto"
                      height="150"
                  />
                </v-row>
              </v-col>
              <v-spacer/>
              <v-col cols="2" class="pa-4">
                <v-row class="pa-2" style="border: 2px solid #AAAAAA; border-radius: 5px">
                  <v-img
                      contain
                      src="@/assets/insiras.png"
                      class="mx-auto"
                      height="150"
                  />
                </v-row>
              </v-col>
              <v-spacer/>
              <v-col cols="2" class="pa-4">
                <v-row class="pa-2" style="border: 2px solid #AAAAAA; border-radius: 5px">
                  <v-img
                      contain
                      src="@/assets/indigo_inverted.png"
                      class="mx-auto"
                      height="150"
                  />
                </v-row>
              </v-col>
              <v-spacer/>
              <v-col cols="2" class="pa-4">
                <v-row class="pa-2" style="border: 2px solid #AAAAAA; border-radius: 5px">
                  <v-img
                      contain
                      src="@/assets/Gauselmann.png"
                      class="mx-auto"
                      height="150"
                  />
                </v-row>
              </v-col>
              <v-spacer/>
              <v-col cols="2" class="pa-4">
                <v-row class="pa-2" style="border: 2px solid #AAAAAA; border-radius: 5px">
                  <v-img
                      contain
                      src="@/assets/barre_inverted.png"
                      class="mx-auto"
                      height="150"
                  />
                </v-row>
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
    homeLogo: "",
    awayLogo: "",
  }),
  mounted() {
    const defLogo = "wolves.png"

    let hs = localStorage.getItem("homeScore") || 0;
    localStorage.setItem("homeScore", hs)
    this.homeScore = hs
    let asc = localStorage.getItem("awayScore") || 0;
    localStorage.setItem("homeScore", asc)
    this.awayScore = asc
    let hl = localStorage.getItem("homeLogo") || defLogo;
    localStorage.setItem("homeLogo", hl)
    this.homeLogo = hl
    let al = localStorage.getItem("awayLogo") || defLogo;
    localStorage.setItem("awayLogo", al)
    this.awayLogo = al

    window.onstorage = () => {
      console.log("Storage changed!")
      this.homeScore = localStorage.getItem("homeScore") || 0
      this.awayScore = localStorage.getItem("awayScore") || 0
      this.homeLogo = localStorage.getItem("homeLogo") || defLogo
      this.awayLogo = localStorage.getItem("awayLogo") || defLogo
    }
  },
}
</script>

<style scoped>

</style>