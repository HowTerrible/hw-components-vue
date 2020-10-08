<template>
  <input type="text" style="width:100%" v-on="$listeners" v-model="localValue" v-bind="$attrs" />
</template>

<script>
import { FormMixin, EventMixin, SetValue, GetValue } from "./es-event-mixins/";
export default {
  name: "es-input",
  mixins: [EventMixin, FormMixin, SetValue, GetValue],
};
</script>

<style lang="stylus" scoped></style>