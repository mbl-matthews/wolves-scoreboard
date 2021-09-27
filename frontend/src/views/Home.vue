<template>
  <div>
    <my-app-bar v-if="hidevar"></my-app-bar>
    <Scoreboard v-on:click.native="toggleHide()" />
  </div>

</template>

<script>
  import Scoreboard from "@/components/Scoreboard";
  import MyAppBar from '../components/MyAppBar.vue';


  export default {
    name: 'Home',
    data: () => ({
    hidevar: true
    }),
    methods: {
    toggleHide() {
      this.hidevar = !this.hidevar
      }
    },
    components: {
      Scoreboard,
        MyAppBar,
    },
  }
</script>
