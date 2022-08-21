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
      <span>{{ this.speed }}</span>

      <v-divider></v-divider>

      <AbilityScoreTable :scores="this.abilityScores"></AbilityScoreTable>

      <v-divider></v-divider>

      <div v-if="this.skills !== ''">
        <SimpleMonsterStat :statName="'Skills'" :statValue="skills"></SimpleMonsterStat>
      </div>

      <div v-if="monster.damage_immunities !== ''">
        <SimpleMonsterStat :statName="'Damage Immunities'" :statValue="monster.damage_immunities"></SimpleMonsterStat>
      </div>

      <div v-if="monster.condition_immunities !== ''">
        <SimpleMonsterStat :statName="'Condition Immunities'" :statValue="monster.condition_immunities"></SimpleMonsterStat>
      </div>

      <SimpleMonsterStat :statName="'Senses'" :statValue="monster.senses"></SimpleMonsterStat>
      <SimpleMonsterStat :statName="'Languages'" :statValue="monster.languages"></SimpleMonsterStat>
      <SimpleMonsterStat :statName="'Challenge Rating'" :statValue="challengeRating"></SimpleMonsterStat>

      <div v-if="0 < specialAbilities.length">
        <v-divider></v-divider>
        <div class="monster-detail-subheader">Special Abilities</div>
        <SimpleMonsterStat
          v-for="(specAbility, index) in specialAbilities"
          :key="index"
          :statName="specAbility[0]"
          :statValue="specAbility[1]"
        ></SimpleMonsterStat>
      </div>

      <div v-if="0 < actions.length">
        <v-divider></v-divider>
        <div class="monster-detail-subheader">Actions</div>
        <SimpleMonsterStat

          v-for="(action, index) in actions"
          :key="index"
          :statName="action[0]"
          :statValue="action[1]"
        >
        </SimpleMonsterStat>
      </div>

      <div v-if="0 < reactions.length">
        <v-divider></v-divider>
        <div class="monster-detail-subheader">Reactions</div>
        <SimpleMonsterStat
          v-for="(reaction, index) in reactions"
          :key="index"
          :statName="reaction[0]"
          :statValue="reaction[1]"
        >
        </SimpleMonsterStat>
      </div>

      <div v-if="0 < legendaryActions.length">
        <v-divider></v-divider>
        <div class="monster-detail-subheader">Legendary Actions</div>
        <SimpleMonsterStat
          v-for="(legAction, index) in legendaryActions"
          :key="index"
          :statName="legAction[0]"
          :statValue="legAction[1]"
        ></SimpleMonsterStat>
      </div>


    </div>
  </div>
</template>


<script>
import router from "../../router/index.js";

import AbilityScoreTable from "../MonstersViewComponents/AbilityScoreTable.vue";
import SimpleMonsterStat from "./SimpleMonsterStat.vue"


let {
  function1,
  function2,
  extractSpeed,
  extractAbilityScores,
  extractSkills,
  extractChallengeRating,
  extractNameDescPairs,
} = require("../../services/MonsterDataExtractionService");

export default {
  name: "Details",
  props: {
    monster: Object,
  },
  data() {
    return {
      speed: "",
      skills: "",
      abilityScores: [],
      challengeRating: "",
      specialAbilities: [],
      actions: [],
      reactions: [],
      legendaryActions: [],
    };
  },
  components: {
    AbilityScoreTable,
    SimpleMonsterStat,
  },
  methods: {
    function1,
    function2,
    extractSpeed,
    extractAbilityScores,
    extractChallengeRating,
    extractNameDescPairs,
    goBack() {
      router.go(-1);
      // router.removeRoute(`${this.monster.slug}`);
    },
    testFunction() {
      console.log(this.specialAbilities);
    },
  },
  mounted() {
    this.speed = extractSpeed(this.monster.speed);
    this.abilityScores = extractAbilityScores(this.monster);
    this.skills = extractSkills(this.monster.skills);
    this.challengeRating = extractChallengeRating(this.monster);
    this.specialAbilities = extractNameDescPairs(
      this.monster.special_abilities
    );
    this.actions = extractNameDescPairs(this.monster.actions);
    this.reactions = extractNameDescPairs(this.monster.reactions);
    this.legendaryActions = extractNameDescPairs(
      this.monster.legendary_actions
    )
  },
  beforeUpdate() {
    this.speed = extractSpeed(this.monster.speed);
    this.abilityScores = extractAbilityScores(this.monster);
    this.skills = extractSkills(this.monster.skills);
    this.challengeRating = extractChallengeRating(this.monster);
    this.specialAbilities = extractNameDescPairs(
      this.monster.special_abilities
    );
    this.actions = extractNameDescPairs(this.monster.actions);
    this.reactions = extractNameDescPairs(this.monster.reactions);
    this.legendaryActions = extractNameDescPairs(
      this.monster.legendary_actions
    )
  }
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

.monster-detail-subheader {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
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