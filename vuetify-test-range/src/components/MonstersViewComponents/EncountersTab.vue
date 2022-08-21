<template>
  <div>
    <h3>Encounters</h3>
    <h2>contains: {{ this.monsters.length }} monsters</h2>
  </div>
</template>

<script>
export default {
  props: {
    monsters: Array,
  },
};
</script>