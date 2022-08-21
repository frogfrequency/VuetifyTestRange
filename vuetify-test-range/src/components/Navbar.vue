<template>
  <nav>
    <v-toolbar>
      <v-app-bar-nav-icon @click="drawerShown = !drawerShown" />
      <!-- <v-icon @click="drawerShown = !drawerShown">mdi-menu</v-icon> -->
      <v-toolbar-title>
        <span class="font-weight-heavy">D&D</span>
        <span class="font-weight-light"> Toolkit </span>
      </v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer
      disable-resize-watcher
      class="nav-drawer"
      width="160px"
      v-model="drawerShown"
      app
    >
      <!-- remove app in the above line to change drawer position but this also changes content positioning -->
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          link
          :to="link.route"
          @click="drawerShown = false"
        >
          <v-list-item-title>
            {{ link.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawerShown: false,
      links: [
        { text: "Home", route: "/" },
        { text: "Monsters", route: "/monsters" },
        { text: "Equipment", route: "/equipment" },
        { text: "Spells", route: "/spells" },
        { text: "Rules", route: "/rules" },
        { text: "About", route: "/about" },
      ],
    };
  },
  // name: "navbar"
};
</script>

<style scoped>
span {
  font-size: 26px;
  font-weight: 700;
}
</style>