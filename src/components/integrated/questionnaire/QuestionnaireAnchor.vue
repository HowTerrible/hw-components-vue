<template>
  <ul class="questionnaire-anchor-base">
    <li
      class="questionnaire-anchor"
      @click="$emit('click', {item, index})"
      v-for="(item, index) in items"
      :key="item.id"
    >{{item[textKey]}}</li>
  </ul>
</template>

<script>
export default {
  name: "questionnaire-anchor",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    textKey: {
      type: String,
      default: "text",
    },
    selectedItem: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="stylus" scoped>
.questionnaire-anchor {
  list-style: none;
  cursor: pointer;
  padding: 2px 4px;
  margin: 2px 0;
  border-radius: $border-radius;
  transition-duration: $transition-duration;
  border: 1px solid $bordercolor-gray-light;
}

.questionnaire-anchor:hover {
  box-shadow: $box-shadow;
}
</style>