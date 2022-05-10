<template>
  <v-container style="width: 70%">
    <my-app-bar></my-app-bar>
    <v-row align="center" justify="center">
      <v-col>
        <v-card elevation="10">
          <v-card-title class="text-h2">Scoreboard Werte</v-card-title>
          <v-container>
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
                <v-btn block color="primary" @click="applyHomeScore"
                  >Übernehmen</v-btn
                >
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
                <v-btn block color="primary" @click="applyAwayScore"
                  >Übernehmen</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card elevation="10">
          <v-card-title class="text-h3">Heim Logo auswählen</v-card-title>
          <v-container>
            <v-row align="center" justify="center">
              <v-col>
                <v-card outlined color="blue-grey lighten-4">
                  <v-container class="d-flex flex-wrap">
                    <v-row>
                      <v-col
                        class="d-flex justify-center align-center"
                        v-for="(logo, index) in logos"
                        :key="logo.uuid"
                      >
                        <v-card
                          outlined
                          :style="[
                            selected.home === index
                              ? { border: '8px solid #1b529a' }
                              : { border: '5px solid grey', outline: '3px solid white' },
                          ]"
                        >
                          <v-img
                            width="150"
                            :aspect-ratio="1 / 1"
                            :src="require('@/assets/teams/' + logo.path)"
                            @click="selectLogo(true, index)"
                          />
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card elevation="10">
          <v-card-title class="text-h3">Gast Logo auswählen</v-card-title>
          <v-container>
            <v-row align="center" justify="center">
              <v-col>
                <v-card outlined color="blue-grey lighten-4">
                  <v-container class="d-flex flex-wrap">
                    <v-row>
                      <v-col
                        class="d-flex justify-center align-center"
                        v-for="(logo, index) in logos"
                        :key="logo.uuid"
                      >
                        <v-card
                          outlined
                          :style="[
                            selected.away === index
                              ? { border: '8px solid #1b529a' }
                              : { border: '5px solid grey', outline: '3px solid white' },
                          ]"
                        >
                          <v-img
                            width="150"
                            :aspect-ratio="1 / 1"
                            :src="require('@/assets/teams/' + logo.path)"
                            @click="selectLogo(false, index)"
                          />
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="2000">
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
import MyAppBar from "../components/MyAppBar.vue";
import { uuid } from "vue-uuid";

export default {
  components: { MyAppBar },
  name: "Console",
  data: () => ({
    logos: [],
    homeInput: 0,
    awayInput: 0,
    snackbar: {
      show: false,
      text: "",
      color: "",
    },
    selected: {
      home: -1,
      away: -1,
    },
  }),
  mounted() {
    const teams = require.context("@/assets/teams", true, /^.*\.png$/);
    this.logos = teams.keys().map((key) => {
      return {
        uuid: uuid.v4(),
        path: key.slice(2),
      };
    });
    console.log(this.logos);
  },
  methods: {
    applyHomeScore() {
      console.log(this.homeInput);
      if (this.homeInput === "" || this.homeInput < 0) {
        this.showSnackbar("Wert muss eine positive Zahl sein!", "error");
        return;
      }
      localStorage.setItem("homeScore", this.homeInput);

      console.log(this.$store.state.homeScore);
      this.showSnackbar("Wolves Punktestand übernommen", "success");
    },
    applyAwayScore() {
      console.log(this.awayInput);
      if (this.homeInput === "" || this.awayInput < 0) {
        this.showSnackbar("Wert muss eine positive Zahl sein!", "error");
        return;
      }
      localStorage.setItem("awayScore", this.awayInput);

      this.showSnackbar("Gast Punktestand übernommen", "success");
    },
    selectLogo(home, index) {
      const logo = this.logos[index].path;
      if (home) {
        this.selected.home = index;
        localStorage.setItem("homeLogo", logo);
      } else {
        this.selected.away = index;
        localStorage.setItem("awayLogo", logo);
      }
      console.log(this.selected);
    },
    showSnackbar(text, color) {
      this.snackbar.show = true;
      this.snackbar.text = text;
      this.snackbar.color = color;
    },
  },
};
</script>
