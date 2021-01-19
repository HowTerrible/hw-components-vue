<template>
  <div>
    <hw-card title="Delete Button">
      <hw-panel></hw-panel>
      <hw-button></hw-button>
    </hw-card>
  </div>
</template>

<script>
import Card from "@components/layout/Card";
import Panel from "@components/layout/Panel";
export default {
  name: "hw-panel-demo",
  components: {
    "hw-panel": Panel,
    "hw-card": Card,
  },
};
</script>

<style lang="stylus" scoped></style>