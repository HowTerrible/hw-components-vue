<template>
  <ul class="questionnaire-anchor-base">
    <anchor-item
      v-for="(item, index) in items"
      :titleKey="titleKey"
      :key="item.id"
      :unit="unit"
      :item="item"
      :index="index"
      :value="value"
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
    titleKey: {
      type: String,
      default: "title",
    },
    unit: {
      type: String,
      default: "",
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