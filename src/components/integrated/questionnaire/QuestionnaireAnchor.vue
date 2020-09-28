<template>
  <ul class="questionnaire-anchor-base">
    <anchor-item
      v-for="(item, index) in items"
      :key="item.id"
      :item="item"
      :index="index"
      :value="value"
      v-bind="$attrs"
      :selected="selectedItem === item"
    ></anchor-item>
  </ul>
</template>

<script>
import AnchorItem from "./QuestionnaireAnchorItem";
export default {
  name: "questionnaire-anchor",
  components: {
    "anchor-item": AnchorItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    selectedItem: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  computed: {},
};
</script>

<style lang="stylus" scoped>
.questionnaire-anchor-base {
  overflow-y: auto;
  height: 100%;
}
</style>