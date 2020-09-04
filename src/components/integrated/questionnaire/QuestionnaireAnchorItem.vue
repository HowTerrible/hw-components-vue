<template>
  <li class="questionnaire-anchor" :class="itemClass" @click="$dispatch('click', {item, index})">
    <span class="questionnaire-anchor-text" :title="item[textKey]">{{item[textKey]}}</span>
    <span class="questionaire-anchor-result">{{value + localUnit}}</span>
  </li>
</template>

<script>
export default {
  name: "questionnaire-anchor",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
    },
    textKey: {
      type: String,
      default: "text",
    },
    unit: {
      type: String,
      default: "",
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    value() {
      let result = this.item.value;
      if (result === null || result === undefined) result = "";
      return result.toString();
    },
    localUnit() {
      let result = this.unit;
      if (!result || !this.value) result = "";
      return result;
    },
    itemClass() {
      let result = [];
      this.selected ? result.push("selected") : null;
      return result;
    },
  },
};
</script>

<style lang="stylus" scoped>
.questionnaire-anchor {
  width: 100%;
  height: 27px;
  list-style: none;
  cursor: pointer;
  padding: 2px 4px;
  margin: 2px 0;
  border-radius: $border-radius;
  transition-duration: $transition-duration;
  border: 1px solid $bordercolor-gray-light;
  user-select: none;
}

.questionnaire-anchor:hover {
  box-shadow: $box-shadow;
}

.questionnaire-anchor.selected {
  background-color: $backcolor-blue;
  color: $color-white;
  box-shadow: $box-shadow;
}

.questionnaire-anchor-text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  width: 80%;
}

.questionaire-anchor-result {
  float: right;
  display: inline-block;
  width: 20%;
}
</style>