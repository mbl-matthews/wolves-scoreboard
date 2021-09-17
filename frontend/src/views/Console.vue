<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="10">
        <v-card elevation="10">
          <v-card-title class="text-h2">Scoreboard Werte</v-card-title>
          <v-container fluid>
            <v-row align="center" justify="center">
              <v-col cols="10">
                <v-text-field
                    label="Wolves"
                    v-model="homeInput"
                    hide-details
                    type="number"
                    outlined
                />
              </v-col>
              <v-col cols="2">
                <v-btn color="primary" @click="applyHomeScore">Übernehmen</v-btn>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="10">
                <v-text-field
                    label="Gast"
                    v-model="awayInput"
                    hide-details
                    type="number"
                    outlined
                />
              </v-col>
              <v-col cols="2">
                <v-btn color="primary" @click="applyAwayScore">Übernehmen</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar
        v-model="snackbar.show"
        :color="snackbar.color"
        timeout="-1"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="cancel"
            text
            v-bind="attrs"
            @click="snackbar.show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: 'Console',
  data: () => ({
    homeInput: 0,
    awayInput: 0,
    snackbar: {
      show: false,
      text: "",
      color: "",
    }
  }),
  methods: {
    applyHomeScore() {
      console.log(this.homeInput)
      if(this.homeInput === "" || this.homeInput < 0) {
        this.showSnackbar("Wert muss eine positive Zahl sein!", "error")
        return
      }
      this.$store.commit("setHomeScore", this.homeInput)

      console.log(this.$store.state.homeScore)
      this.showSnackbar("Wolves Punktestand übernommen", "success")
    },
    applyAwayScore() {
      console.log(this.awayInput)
      if(this.homeInput === "" || this.awayInput < 0) {
        this.showSnackbar("Wert muss eine positive Zahl sein!", "error")
        return
      }
      this.$store.commit("setAwayScore", this.awayInput)

      this.showSnackbar("Gast Punktestand übernommen", "success")
    },
    showSnackbar(text, color) {
      this.snackbar.show = true
      this.snackbar.text = text
      this.snackbar.color = color
    }
  }

}
</script>
