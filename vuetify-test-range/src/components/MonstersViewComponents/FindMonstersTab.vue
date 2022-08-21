<template>
  <div>
    <h3>find monsters</h3>
    <h2>{{ this.monsters.length }}</h2>
  </div>
</template>






<script>
export default {
  data() {
    return {
      // monsters: [],
    };
  },
  props: {
    monsters: Array
  }
};
</script>