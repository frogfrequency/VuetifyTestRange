<template>
  <v-app>
    <Navbar />
    <v-main class="v-main-container">
      <v-container fluid class="pa-0 ma-0" >
        <keep-alive >
          <router-view/>
        </keep-alive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.v-main-container {
  margin: 24px;
}


</style>
