<template>
  <div class="simple-stat">
    <span class="mat-body stat-name">{{statName}}: &nbsp;<span class="mat-body stat-value">{{statValue}}</span></span> 
</div>
</template>


<script>
export default {
  props: {
    statName: String,
    statValue: String,
  },
}

</script>

<style>
.simple-stat {
    display: flex;
    flex-direction: row;
    margin: 8px 0px;
    text-align: justify;
}

.stat-name {
    /* font-size: 14px; */
    font-weight: bold;
    margin-right: 8px;
    /* width: max-content; */
}

.stat-value {
    font-weight: 300;
}
</style>