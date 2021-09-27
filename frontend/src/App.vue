<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    date: new Date().toLocaleDateString("de-DE", {year: "numeric", month: "long", day: "numeric"})
  }),

};
</script>

<style>
  html {
    overflow-y: auto !important;
  }
</style>
