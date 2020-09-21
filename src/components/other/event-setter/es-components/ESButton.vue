<template>
  <hw-button v-on="$listeners" v-bind="$attrs" @click="onClick">
    <slot></slot>
  </hw-button>
</template>

<script>
import Button from "@components/general/Button";
import { EventMixin } from "./es-event-mixins/";
export default {
  name: "es-button",
  mixins: [EventMixin],
  components: {
    "hw-button": Button,
  },
  methods: {
    onClick() {
      this.eventFunctionHandler("click");
    },
  },
};
</script>

<style lang="stylus" scoped></style>