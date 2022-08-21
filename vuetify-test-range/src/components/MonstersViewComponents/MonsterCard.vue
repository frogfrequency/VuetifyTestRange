<template>
  <v-card class="ma-4" width="480">
    <div class="card-title-container">
      <v-card-title class="font-weight-bold text-uppercase pb-0">{{
        monster.slug
      }}</v-card-title>

      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-card-title
            v-bind="attrs"
            v-on="on"
            slot="activator"
            class="font-weight-bold ma-0 pb-0"
            >{{ monster.challenge_rating }}</v-card-title
          >
        </template>
        <span>Challenge Rating</span>
      </v-tooltip>
    </div>

    <v-card-text class="py-1">
      <div>
        <div class="mt-0 pb-4">
          {{ monster.size }} &nbsp;|&nbsp; {{ monster.type }} &nbsp;|&nbsp;
          {{ monster.alignment }}
        </div>
      </div>
      <div class="monster-characteristic">
        <div class="monster-characteristic-name">Armor Class:</div>
        <div class="monster-characteristic-value">
          {{ monster.armor_class }}
        </div>
      </div>

      <div class="monster-characteristic">
        <div class="monster-characteristic-name">Hit Points:</div>
        <div class="monster-characteristic-value">{{ monster.hit_points }}</div>
      </div>

      <div class="monster-characteristic">
        <div class="monster-characteristic-name">Speed:</div>
        <div class="monster-characteristic-value">
          {{ giveExtractedSpeed(monster.speed) }}
        </div>
      </div>

      <div class="monster-characteristic">
        <div class="monster-characteristic-name">Languages:</div>
        <div class="monster-characteristic-value">{{ monster.languages }}</div>
      </div>

      <div class="monster-characteristic">
        <div class="monster-characteristic-name">Senses:</div>
        <div class="monster-characteristic-value">{{ monster.senses }}</div>
      </div>
    </v-card-text>

    <v-card-actions class="pa-4 pt-2 d-flex justify-space-between">
      <v-btn
        small
        link
        :to="`/monsters/${monster.slug}`"
        @click="createNewRoute(monster.slug)"
        >DETAILS</v-btn
      >
      <v-btn
        v-show="!isFavorit"
        small
        @click="$emit('add-to-favorites', monster)"
        >FAVORITE</v-btn
      >
      <v-btn
        v-show="isFavorit"
        small
        @click="$emit('remove-from-favorites', monster.slug)"
        >UNFAVORITE</v-btn
      >
    </v-card-actions>
  </v-card>
</template>


<script>
import router from "../../router/index.js";
import MonsterDetails from "../MonstersViewComponents/MonsterDetails.vue";

export default {
  name: "MonsterCard",
  props: {
    monster: Object,
    isFavorit: Boolean,
  },
  methods: {
    createNewRoute(slug) {
      router.addRoute({
        component: MonsterDetails,
        path: `/monsters/${slug}`,
        props: {
          monster: this.monster
        },
      });
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


<style scoped>
.card-title-container {
  /* height: 32px; */
  display: flex;
  justify-content: space-between;
}
.monster-characteristic {
  display: flex;
  margin-bottom: 4px;
}

.monster-characteristic-name {
  margin-right: 6px;
  font-weight: bold;
}
</style>