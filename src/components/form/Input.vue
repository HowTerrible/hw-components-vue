<template>
  <input type="text" v-model="localValue" />
</template>

<script>
import FormMixin from "../mixins/form-mixin";
export default {
  mixins: [FormMixin],
};
</script>

<style lang="stylus" scoped></style>