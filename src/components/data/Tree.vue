<template>
  <div class="hw-tree-base">
    <ul class="hw-tree">
      <template v-for="item in data">
        <hw-tree-item
          :key="item[idKey]"
          :data="item"
          :textKey="textKey"
          :idKey="idKey"
          :childrenKey="childrenKey"
        ></hw-tree-item>
      </template>
    </ul>
  </div>
</template>

<script>
import TreeItem from "./TreeItem";
export default {
  name: "hw-tree",
  components: {
    "hw-tree-item": TreeItem,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    idKey: {
      type: String,
      default: "id",
    },
    textKey: {
      type: String,
      default: "text",
    },
    childrenKey: {
      type: String,
      default: "children",
    },
  },
};
</script>

<style lang="stylus" scoped></style>