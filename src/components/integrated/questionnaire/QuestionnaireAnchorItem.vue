<template>
  <li
    class="questionnaire-anchor"
    :class="itemClass"
    @click="$dispatch('click', { item, index })"
  >
    <span class="questionnaire-anchor-text" :title="item[titleKey]">{{
      item[titleKey]
    }}</span>
    <span class="questionaire-anchor-result" :title="displayText">{{
      displayText
    }}</span>
  </li>
</template>

<script>
export default {
  name: "questionnaire-anchor-item",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
    },
    titleKey: {
      type: String,
      default: "title",
    },
    /** 单位 */
    unit: {
      type: String,
      default: "",
    },
    /** 是否被选中 */
    selected: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Array,
      default: () => [],
    },
    /** 如果是函数，返回true则忽略此值 */
    ignoreValue: {
      type: [Function, Number, String],
      default: null,
    },
    /** 右侧锚点用回调 */
    ignoreValueAnchor: {
      type: Function,
    },
  },
  computed: {
    itemValue() {
      return this.value.find((item) => item.id === this.item.id);
    },
    displayValue() {
      let itemValue = this.itemValue;
      let result =
        itemValue === undefined ||
        itemValue === null ||
        itemValue.value === undefined ||
        itemValue.value === null
          ? ""
          : itemValue.value;
      return result.toString();
    },
    displayText() {
      let result;
      if (
        this.itemValue &&
        typeof this.ignoreValue === "function" &&
        this.ignoreValue(this.itemValue)
      ) {
        typeof this.ignoreValueAnchor === "function"
          ? (result = this.ignoreValueAnchor(this.itemValue, this.item))
          : this.displayValue + this.localUnit;
      } else {
        result = this.displayValue + this.localUnit;
      }
      return result;
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
  min-width: 20%;
  text-align: end;
}
</style>