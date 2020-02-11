<template>
  <v-button v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </v-button>
</template>

<script>
import { Button } from "view-design";
export default {
  inheritAttrs: false,
  name: "hw-button",
  components: {
    "v-button": Button
  }
};
</script>