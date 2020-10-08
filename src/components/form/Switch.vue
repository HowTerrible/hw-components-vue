<template>
  <v-switch v-on="$listeners" v-bind="$attrs">
    <slot name="open" slot="open"></slot>
    <slot name="close" slot="close"></slot>
  </v-switch>
</template>

<script>
import { Switch } from "view-design";
export default {
  name: "hw-switch",
  components: {
    "v-switch": Switch,
  },
};
</script>

<style lang="stylus" scoped></style>