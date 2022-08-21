<template>
  <div>
    <h3>Random Monster</h3>
    <v-btn small @click="giveRandomMonsterIdx(monsters.length)">new random monster</v-btn>

    <MonsterCard
      v-show="!monsterListView"
      @add-to-favorites="emitAddToFavorites"
      @remove-from-favorites="removeFromFavorites"
      :monster="monsters[this.randomIdx]"
      :isFavorit="giveIsFavorit(monsters[this.randomIdx], this.favorites)"
    ></MonsterCard>
    <MonsterListElement
      v-show="monsterListView"
      @add-to-favorites="emitAddToFavorites"
      @remove-from-favorites="removeFromFavorites"
      :monster="monsters[this.randomIdx]"
      :isFavorit="giveIsFavorit(monsters[this.randomIdx], this.favorites)"
    ></MonsterListElement>

  </div>
</template>

<script>
import MonsterCard from "./MonsterCard.vue";
import MonsterListElement from "./MonsterListElement.vue"

export default {
  computed: {
    //
  },
  props: {
    monsters: Array,
    favorites: Array,
    monsterListView: Boolean,
  },
  data() {
    return {
      randomIdx: 0,
    };
  },
  methods: {
    giveRandomMonsterIdx(length) {
      this.randomIdx = Math.floor(Math.random() * length);
    },
    emitAddToFavorites(monster) {
      this.$emit("add-to-Favorites", monster);
    },
    removeFromFavorites(monsterSlug) {
      this.$emit("remove-from-favorites", monsterSlug);
    },
    giveIsFavorit(monster = "abcd", favorites) {
      // console.log(`isFavorit fires with ${monster.slug} and ${favorites}`)
      return favorites.some((e) => e.slug === monster.slug);
      // return true
    },
  },
  components: {
    MonsterCard,
    MonsterListElement
  },
};
</script>