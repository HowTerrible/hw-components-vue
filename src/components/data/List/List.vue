<template>
  <ul>
    <template><slot name="header"></slot></template>
    <template v-for="(item, index) in data">
      <list-item v-bind="$attrs" :key="item.key || index" :data="item"></list-item>
    </template>
    <template><slot name="footer"></slot></template>
  </ul>
</template>

<script>
import ListItem from "./ListItem";
export default {
  name: "hw-list",
  components: {
    "list-item": ListItem,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="stylus" scoped></style>