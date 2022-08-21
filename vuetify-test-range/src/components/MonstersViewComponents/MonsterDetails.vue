<template>
  <div>
    <v-btn small @click="goBack">
      <v-icon class="mr-2"> mdi-arrow-left </v-icon>
      back</v-btn
    >
    <div class="details-container">
      <!-- <v-btn small @click="$router.go(-1)">back</v-btn> -->
      <h1>{{ monster.name }}</h1>

      <div class="title-subheader">
        <div>
          {{ monster.size }} | {{ monster.type }} | {{ monster.alignment }}
        </div>
      </div>

      <v-divider></v-divider>

      <span class="property-name">Armor Class: </span>
      <span>{{ monster.armor_class }}</span>
      <br />
      <span class="property-name">Hit Points: </span>
      <span>{{ monster.hit_points }}</span>
      <br />
      <span class="property-name">Speed: </span>
      <span>{{ giveExtractedSpeed(monster.speed) }}</span>

      <v-divider></v-divider>

        <AbilityScoreTable :monster="this.monster"></AbilityScoreTable>

    </div>
  </div>
</template>


<script>
import router from "../../router/index.js";

import AbilityScoreTable from "../MonstersViewComponents/AbilityScoreTable.vue"


export default {
  name: "Details",
  props: {
    monster: Object,
  },
  data() {
    return {};
  },
  components: {
    AbilityScoreTable
  },
  methods: {
    goBack() {
      router.go(-1);
      // router.removeRoute(`${this.monster.slug}`);
    },
    giveExtractedSpeed(speedRaw) {
      speedRaw = JSON.stringify(speedRaw);

      let speedString = speedRaw.replace(/:/g, ": ");
      speedString = speedString.replace(/,/g, ", ");
      speedString = speedString.replace(/"|{|}/g, "");
      return speedString;
    },
  },
};
</script>


<style>
.details-container {
  /* background-color: blanchedalmond; */
  margin-top: 16px;
}

.title-subheader {
  font-style: italic;
}

.v-divider {
  margin: 12px;
}

.property-name {
  display: inline-block;
  font-weight: bold;
  margin: 4px 8px 4px 0px;
}
</style>