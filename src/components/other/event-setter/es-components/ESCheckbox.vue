<template>
  <hw-checkbox v-model="localValue" v-on="$listeners" v-bind="$attrs">
    <slot></slot>
  </hw-checkbox>
</template>

<script>
import Checkbox from "@components/form/Checkbox";
import { FormMixin, EventMixin, SetValue, GetValue } from "./es-event-mixins/";
export default {
  name: "es-checkbox",
  mixins: [EventMixin, FormMixin, SetValue, GetValue],
  components: {
    "hw-checkbox": Checkbox,
  },
  methods: {},
};
</script>

<style lang="stylus" scoped></style>