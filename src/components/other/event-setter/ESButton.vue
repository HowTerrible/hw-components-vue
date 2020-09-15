<template>
  <hw-button v-on="$listeners" v-bind="$attrs" @click="onClick">
    <slot></slot>
  </hw-button>
</template>

<script>
import Button from "@components/general/Button";
import ESMixin from "./event-setter-mixin";
export default {
  name: "es-button",
  mixins: [ESMixin],
  components: {
    "hw-button": Button,
  },
  methods: {
    onClick() {
      this.eventFunctionHandler("click")
    }
  },
};
</script>

<style lang="stylus" scoped></style>