<template>
  <div class="questionnaire-item-base">
    <h3 class="questionnaire-item-text">{{item.text}}</h3>
    <ul class="questionnaire-item-selections">
      <li
        v-for="selection in localSelections"
        :key="selection.text"
        class="questionnaire-item-selection"
      >
        <hw-checkbox
          v-model="localValue"
          :true-value="selection.value"
          :false-value="null"
          :text="selection.text"
        ></hw-checkbox>
      </li>
    </ul>
  </div>
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
      default: () => ({}),
    },
    value: {},
  },
  model: {
    prop: "value",
    event: "value-change",
  },
  data() {
    return {
      localSelections: [],
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
  created() {
    const indexMappingToValue = this.item.indexMappingToValue;
    this.item.selections
      ? this.item.selections.forEach((item, index) => {
          let temp;
          // 如果选项是基础数据类类型
          if (typeof item !== "object") {
            // 如果下表对应值，则value是下标
            // 否则就是文本
            temp = indexMappingToValue
              ? {
                  value: index,
                  text: item,
                }
              : {
                  value: item,
                  text: item,
                };
          } else {
            temp = item;
          }
          this.localSelections.push(temp);
        })
      : null;
  },
  methods: {},
};
</script>

<style lang="stylus" scoped>
.questionnaire-item-base {
  margin: 10px;
}

.questionnaire-item-selection {
  list-style: none;
}
</style>