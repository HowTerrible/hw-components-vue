<template>
  <li class="questionnaire-selection">
    <hw-checkbox
      v-model="localValue"
      :true-value="item.value"
      :false-value="null"
      :text="item.text"
      :readonly="readonly"
    ></hw-checkbox>
    <span v-if="showScore" class="item-score">{{ item.value }} {{ unit }}</span>
  </li>
</template>

<script>
import Checkbox from "@components/form/Checkbox";
export default {
  name: "questionnaire-item",
  components: {
    "hw-checkbox": Checkbox,
  },
  props: {
    item: {
      type: Object,
    },
    /**
     * 选中结果后得得分单位
     */
    unit: {
      type: String,
      default: "",
    },
    value: {},
    readonly: {
      type: Boolean,
      default: false,
    },
    /** 如果是函数，返回true则忽略此值 */
    ignoreValue: {
      type: [Function, Number, String],
      default: null,
    },
  },
  model: {
    prop: "value",
    event: "value-change",
  },
  computed: {
    showScore() {
      return typeof this.ignoreValue === "function"
        ? !this.ignoreValue(this.item)
        : true;
    },
  },
  data() {
    return {
      localValue: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.localValue = newValue;
    },
    localValue(newValue) {
      this.$emit("value-change", newValue);
    },
  },
};
</script>

<style lang="stylus" scoped>
.questionnaire-selection {
  list-style: none;
  margin: 10px 0;
  width: 100%;
  white-space: nowrap;
  padding-right: 40px;

  >*:nth-child(1) {
    width: 100%;
  }

  .selection-score {
    user-select: none;
    width: 40px;
    text-align: end;
    display: inline-block;
  }
}
</style>