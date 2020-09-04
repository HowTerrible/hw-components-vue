<template>
  <ul class="questionnaire-anchor-base">
    <anchor-item
      v-for="(item, index) in items"
      :textKey="textKey"
      :key="item.id"
      :unit="unit"
      :item="item"
      :index="index"
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
    textKey: {
      type: String,
      default: "text",
    },
    unit: {
      type: String,
      default: "",
    },
    selectedItem: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {},
};
</script>

<style lang="stylus" scoped></style>