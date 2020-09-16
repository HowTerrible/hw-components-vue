<template>
  <input type="text" style="width:100%" v-on="$listeners" v-model="localValue" v-bind="$attrs" />
</template>

<script>
import ESMixin from "./event-setter-mixin";
import FormMixin from "./es-form-mixin";
export default {
  name: "es-input",
  mixins: [ESMixin, FormMixin],
};
</script>

<style lang="stylus" scoped></style>