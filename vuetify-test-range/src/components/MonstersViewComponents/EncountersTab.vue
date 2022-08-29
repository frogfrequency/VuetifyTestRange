<template>
  <div>
    <h2>Encounters</h2>

    <v-btn @click="testFunction">call test function</v-btn>
    <v-btn @click="increaseTestVar">increase testVar</v-btn>
  </div>
</template>

<script>

let {
  testFunction,
  increaseTestVar,
} = require("../../services/EncounterService");


export default {
  props: {
    monsters: Array,
  },
  methods: {
    testFunction,
    increaseTestVar,
  }
};
</script>