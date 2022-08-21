<template>
  <div>
    <div class="ability-score-container">
      <div class="ability-score-identifier mat-body">
        <div class="score-name">&nbsp;</div>

        <div class="score-name">Score:</div>
        <div class="score-name">Saving Throw:</div>
      </div>

      <div v-for="(score, index) of scores"  class="ability-score mat-body" :key="index">
        <div class="score-name">{{ score[0] }}</div>
        <div class="score-value">{{ score[1] }}&nbsp; ({{ score[2] }})</div>
        <div class="score-value">{{ score[3] }}</div>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: "AbilityScoreTable",
  props: {
    scores: Array
  },
  data() {
    return {
      //
    };
  },
  methods: {
    //
  },
};
</script>





<style>
.ability-score-container {
    display: flex;
}

.ability-score {
    margin: 4px 8px;
    /* background-color: blue; */
    width: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ability-score-identifier {
    margin: 4px 8px;
    width: 120px;
    display: flex;
    flex-direction: column;
    align-items: left;
}


.score-name {
    font-weight: bold;
    margin-bottom: 6px;
}

.score-value {
    margin-bottom: 4px;
    font-weight: 200;
}
</style>