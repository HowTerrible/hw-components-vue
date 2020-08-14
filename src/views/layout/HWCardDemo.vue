<template>
  <div>
    <hw-card></hw-card>
    <hw-card></hw-card>
    <hw-card></hw-card>
    <hw-card></hw-card>
    <hw-card></hw-card>
  </div>
</template>

<script>
import Card from "@components/layout/Card";
export default {
  name: "hw-card-demo",
  components: {
    "hw-card": Card,
  },
};
</script>

<style lang="stylus" scoped></style>