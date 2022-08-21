<template>
  <div>
    <h2>Favorites</h2>

  <!-- <v-container> -->
    <div class="test">
      <v-flex v-for="favorit in favorites" :key="favorit.slug">
    
    <MonsterCard
      v-show="!monsterListView"
      @add-to-favorites="emitAddToFavorites"
      @remove-from-favorites="removeFromFavorites"
      :monster="favorit"
      :isFavorit="true"
    ></MonsterCard>
    <MonsterListElement
      v-show="monsterListView"
      @add-to-favorites="emitAddToFavorites"
      @remove-from-favorites="removeFromFavorites"
      :monster="favorit"
      :isFavorit="true"
    ></MonsterListElement>



      </v-flex>
      
    </div>
  <!-- </v-container> -->


  </div>
</template>

<script>

import MonsterCard from "./MonsterCard.vue";
import MonsterListElement from "./MonsterListElement.vue"


export default {
  props: {
    favorites: Array,
    monsterListView: Boolean,
  },
  methods: {
    emitAddToFavorites(monster) {
      this.$emit("add-to-Favorites", monster);
    },
    removeFromFavorites(monsterSlug) {
      this.$emit("remove-from-favorites", monsterSlug);
    },
  },
  components: {
    MonsterCard,
    MonsterListElement
  },
};
</script>


<style>
.favorites-container {
  display: flex;
  flex-direction: row;
}

.test {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>