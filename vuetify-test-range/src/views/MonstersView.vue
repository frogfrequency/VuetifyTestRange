<template>

  <div class="monsters">
    <div class="title-container">
      <img class="logogo" src="@/assets/images/dragon_ampersand.svg"/>
      <h2 style="font-weight: 600">Monsters</h2>
      <div id="monster-data-status">
        {{ this.monsters.length ? "using open5e data" : "no monster data" }}
      </div>
      <v-btn @click="getMonstersFromAPI" small>get API data</v-btn>
      <v-progress-circular
        indeterminate
        size="20"
        width="2.5"
      ></v-progress-circular>
    </div>

    <v-tabs>
      <v-tab @click="active = 'FindMonster'">find monsters</v-tab>
      <v-tab @click="active = 'RandomMonster'">random monster</v-tab>
      <v-tab @click="active = 'Favorites'">favorites</v-tab>
      <v-tab @click="active = 'Encounters'">encounters</v-tab>
    </v-tabs>

    <div class="monster-content">
      <FindMonster
        :monsters="this.monsters"
        v-show="active === 'FindMonster'"
      ></FindMonster>
      <RandomMonster v-show="active === 'RandomMonster'"></RandomMonster>
      <Favorites v-show="active === 'Favorites'"></Favorites>
      <Encounters v-show="active === 'Encounters'"></Encounters>
    </div>
  </div>

</template>

<script>

import dragon_ampersand from "@/assets/images/dragon_ampersand.svg"

import FindMonster from "@/components/MonstersViewComponents/FindMonsters.vue";
import RandomMonster from "@/components/MonstersViewComponents/RandomMonster.vue";
import Favorites from "@/components/MonstersViewComponents/Favorites.vue";
import Encounters from "@/components/MonstersViewComponents/Encounters.vue";

export default {
  data() {
    return {
      active: "FindMonster",
      monsters: [],
    };
  },
  components: {
    FindMonster,
    RandomMonster,
    Favorites,
    Encounters,
  },
  methods: {
    async getMonstersFromAPI() {
      const response = await fetch(
        "https://api.open5e.com/monsters/?limit=20"
      );
      const data = await response.json();
      this.monsters = data.results;
    },
  },
};
</script>

<style scoped>
.title-container {
  display: flex;
  align-items: center;
  margin: 12px 0px;
}

#monster-data-status {
  font-style: italic;
  margin: 0px 16px;
}

.monster-content {
  margin: 16px;
}

.logogo {
  height: 30px;
}

</style>