<template>
  <div></div>
</template>

<script>
export default {
  name: "component-selector",
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      localValue: this.value,
      components: this.$store.getters.get_pluginsrefs
    };
  },
  watch: {
    value(newValue) {
      this.localValue = newValue;
    },
    localValue(newValue) {
      this.$emit("value-change", newValue);
    },
  },
};
</script>

<style lang="stylus" scoped></style>