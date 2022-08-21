<template>
  <div>
    <h1>{{ monster.slug }}</h1>
    <!-- <div class="ability-score-container">
      <div class="ability-score-identifier mat-body">
        <div class="score-name">&nbsp;</div>

        <div class="score-name">Score:</div>
        <div class="score-name">Saving Throw:</div>
      </div>

      <div *ngFor="let score of scores" class="ability-score mat-body">
        <div class="score-name">{{ score[0] }}</div>
        <div class="score-value">{{ score[1] }}&nbsp; ({{ score[2] }})</div>
        <div class="score-value">{{ score[3] }}</div>
      </div>
    </div> -->

    <v-btn @click="setAbilityScores(monster)">fire method</v-btn>
    <h3>{{this.scores}}</h3>
  </div>
</template>


<script>
export default {
  name: "AbilityScoreTable",
  props: {
    monster: Object,
  },
  data() {
    return {
      scores: undefined,
    };
  },
  computed: {
    setAbilityScores(monster) {
    let abilityNames = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
    let output = []
    abilityNames.forEach(ability => {
      if (monster[ability]) {

        let modifier = Math.floor((monster[ability] - 10) / 2);
        let modifierString = JSON.stringify(modifier);
        if (0 <= modifier) {
          modifierString = '+' + modifier;
        }

        let savingThrowModifier = monster[ability + '_save'];
        if (!savingThrowModifier) {
          savingThrowModifier = modifier;
        }

        let savingThrowModifierString;

        if (0 <= savingThrowModifier) {
          savingThrowModifierString = '+' + JSON.stringify(savingThrowModifier)
        } else {
          savingThrowModifierString = '-' + JSON.stringify(savingThrowModifier)
        }

        output.push([ability.slice(0, 3).toUpperCase(), JSON.stringify(monster[ability]), modifierString, savingThrowModifierString]);
      }
    })
    this.scores = output
  }
  },
  mounted() {
    setAbilityScores(this.monster)
  }
};
</script>