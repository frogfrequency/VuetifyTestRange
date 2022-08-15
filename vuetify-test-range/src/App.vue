<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container class="container">
        <keep-alive>
          <router-view />
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
