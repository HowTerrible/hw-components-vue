<template>
  <li @click="click">{{ text }}</li>
</template>

<script>
export default {
  name: " hw-list-item",
  props: {
    data: {},
    textKey: {
      type: String,
      default: "text",
    },
  },
  computed: {
    text() {
      let result = "";
      if (/^(string|number)$/.test(typeof this.data)) {
        result = this.data;
      } else {
        result = this.data[this.textKey];
      }
      return result;
    },
  },
  methods: {
    click() {
      this.$emit("click", this.data);
    },
  },
};
</script>

<style lang="stylus" scoped></style>