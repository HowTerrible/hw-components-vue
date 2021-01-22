<template>
  <li @click="onItemClicked"></li>
</template>

<script>
export default {
  name: "hw-breadcrumb-item",
  props: {
    data: {
      type: [Object, String, Number],
      default: "",
    },
  },
  methods: {
    onItemClicked() {
      const data = typeof data === "object" ? data.data : data;
      this.$emit("click", data);
    },
  },
};
</script>

<style lang="stylus" scoped></style>
