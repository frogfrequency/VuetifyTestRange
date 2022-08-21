
<template>
  <!-- LE = list-element -->
  <v-card>
    <div class="monster-LE-leftside">

      
      
      
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on" slot="activator" class="LE-element">
          <div class="LE-challenge-rating">
            {{ monster.challenge_rating }}
          </div>
        </div>
        </template>
        <span>Challenge Rating</span>
      </v-tooltip>




      
        <div class="LE-name">
          {{ monster.name }}
        </div>
      
        <div class="LE-main-characteristics">
          {{ monster.size }} &nbsp;|&nbsp; {{ monster.type }} &nbsp;|&nbsp;
          {{ monster.alignment }}
        </div>
      
        <div class="LE-secondary-characteristics hidden-md-and-down">
          <span>Hit Points: </span>{{ monster.hit_points }} &nbsp;&nbsp;
          <span>Armor Class: </span>{{ monster.armor_class }}
        </div>
    </div>
    <v-card-actions class="pa-0 pt-0">
      <v-btn
        class="mr-2"
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

export default {
  props: {
    monster: Object,
    isFavorit: Boolean,
  },
};
</script>





<style scoped>
span {
  font-weight: bold;
}

.v-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px 0px 4px;
  height: 56px;
  margin: 4px;
}

.LE-element {
  margin: 0px;
  padding: 0px;
}

.monster-LE-leftside {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: max-content;
}

.LE-challenge-rating {
  width: 48px;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}

.LE-name {
  width: 240px;
  font-weight: bold;
  font-size: 18px;
  height: max-content;
}

.LE-main-characteristics {
  width: 360px;
  height: max-content;
}

.LE-secondary-characteristics {
  width: 260px;
  height: max-content;
}
</style>