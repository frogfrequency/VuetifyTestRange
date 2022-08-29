<template>
  <div>
    <!-- <v-btn @click="logLongestMonsterName">log longest monster name</v-btn> -->
    <div class="title-container">
      <div class="title-container-leftside">
        <img class="logo" src="@/assets/images/dragon_ampersand.svg" />
        <h2 style="font-weight: 600">Monsters</h2>
        <v-btn class="ml-4" @click="getMonstersFromAPI" small
          >get API data</v-btn
        >
        <v-progress-circular
          v-show="usingApiData"
          class="ml-6"
          indeterminate
          size="24"
          width="3"
        ></v-progress-circular>
      </div>
      <v-btn-toggle mandatory>
        <v-btn small @click="setMonsterViewMode(false)"> card-view </v-btn>
        <v-btn small @click="setMonsterViewMode(true)"> list-view </v-btn>
      </v-btn-toggle>
    </div>
    {{
      this.monsters.length > 2
        ? `using open5e data (${monsters.length} monsters)`
        : `no monster data`
    }}

    <v-tabs>
      <v-tab v-for="tab in tabs" :key="tab.name" @click="activeTab = tab.identifier">{{tab.text}}</v-tab>
    </v-tabs>


    <div class="monster-content">
      <FindMonster
        :monsters="this.monsters"
        v-show="activeTab === 'FindMonster'"
      ></FindMonster>
      <RandomMonster
        @add-to-Favorites="addToFavorites"
        @remove-from-favorites="removeFromFavorites"
        :monsters="this.monsters"
        :favorites="this.favorites"
        :monsterListView="this.monsterListView"
        v-show="activeTab === 'RandomMonster'"
      ></RandomMonster>
      <Favorites
        @add-to-Favorites="addToFavorites"
        @remove-from-favorites="removeFromFavorites"
        :monsters="this.monsters"
        :favorites="this.favorites"
        :monsterListView="this.monsterListView"
        v-show="activeTab === 'Favorites'"
      ></Favorites>
      <Encounters
        :monsters="this.monsters"
        v-show="activeTab === 'Encounters'"
      ></Encounters>

      <v-snackbar v-model="snackbar.active" :timeout="snackbar.timeout">
        {{ snackbar.text }}

        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="snackbar.active = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import dragon_ampersand from "@/assets/images/dragon_ampersand.svg";

import FindMonster from "@/components/MonstersViewComponents/FindMonstersTab.vue";
import RandomMonster from "@/components/MonstersViewComponents/RandomMonsterTab.vue";
import Favorites from "@/components/MonstersViewComponents/FavoritesTab.vue";
import Encounters from "@/components/MonstersViewComponents/EncountersTab.vue";

export default {
  data() {
    return {
      snackbar: {
        active: false,
        text: "default text",
        timeout: 1500,
      },
      tabs: [
        { identifier: "FindMonster", text: "Find Monsters" },
        { identifier: "RandomMonster", text: "Random Monster" },
        { identifier: "Favorites", text: "Favorites" },
        { identifier: "Encounters", text: "Encounters" },
      ],
      usingApiData: false,
      monsterListView: false, // default is card-view
      activeTab: "FindMonster",
      monsters: [
        {
          slug: "skeleton",
          name: "Skeleton",
          size: "Medium",
          type: "undead",
          subtype: "",
          group: "Skeletons",
          alignment: "lawful evil",
          armor_class: 13,
          armor_desc: "armor scraps",
          hit_points: 13,
          hit_dice: "2d8+4",
          speed: {
            walk: 30,
          },
          strength: 10,
          dexterity: 14,
          constitution: 15,
          intelligence: 6,
          wisdom: 8,
          charisma: 5,
          strength_save: null,
          dexterity_save: null,
          constitution_save: null,
          intelligence_save: null,
          wisdom_save: null,
          charisma_save: null,
          perception: null,
          skills: {},
          damage_vulnerabilities: "bludgeoning",
          damage_resistances: "poison",
          damage_immunities: "",
          condition_immunities: "exhaustion, poisoned",
          senses: "darkvision 60 ft., passive Perception 9",
          languages:
            "understands the languages it knew in life but can't speak",
          challenge_rating: "1/4",
          actions: [
            {
              name: "Shortsword",
              desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
              attack_bonus: 4,
              damage_dice: "1d6",
              damage_bonus: 2,
            },
            {
              name: "Shortbow",
              desc: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
              attack_bonus: 4,
              damage_dice: "1d6",
              damage_bonus: 2,
            },
          ],
          reactions: "",
          legendary_desc: "",
          legendary_actions: "",
          special_abilities: "",
          spell_list: [],
          img_main: null,
          document__slug: "wotc-srd",
          document__title: "Systems Reference Document",
          document__license_url: "http://open5e.com/legal",
        },
      ],
      favorites: [],
    };
  },
  components: {
    FindMonster,
    RandomMonster,
    Favorites,
    Encounters,
  },
  props: {
    isFavorited: Boolean,
  },
  methods: {
    // logLongestMonsterName() {
    //   let longestString = 0;
    //   let monsters = this.monsters;
    //   for (let i=0; i<monsters.length; i++) {
    //     if (longestString < monsters[i].name.length) {
    //       longestString = monsters[i].name.length
    //       console.log(`${monsters[i].name} is longest String with: ${longestString}`)
    //     }
    //   }
    //   console.log(this.monsters.length)
    // },
    async getMonstersFromAPI() {
      // this should not be here --> better export it to an external service..
      this.usingApiData = true;
      const response = await fetch("https://api.open5e.com/monsters/?limit=20");
      const data = await response.json();
      this.monsters = data.results;
      this.usingApiData = false;
    },
    addToFavorites(monster) {
      if (!this.favorites.some((e) => e.slug === monster.slug)) {
        this.favorites = [...this.favorites, monster];
      } else {
        alert(`${monster.slug} already in favorites!`);
      }
      this.snackbar.text = `${monster.name} added to favorites`;
      this.snackbar.active = true;
    },
    removeFromFavorites(monsterSlug) {
      console.log(`removeFromFavorites receives ${monsterSlug}`);
      let filtered = [...this.favorites].filter(
        (monster) => monster.slug !== monsterSlug
      );
      this.favorites = filtered;
      this.snackbar.text = `${monsterSlug} removed from favorites`;
      this.snackbar.active = true;
    },
    setMonsterViewMode(input) {
      if (this.monsterListView != input) {
        this.monsterListView = input;
      }
    },
  },
};
</script>

<style scoped>
.title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.title-container-leftside {
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

.logo {
  height: 40px;
  margin: 8px 8px 16px 8px;
}
</style>