<template>
  <div class="questionnaire-item-base">
    <h3 class="questionnaire-item-text">{{item.text}}</h3>
    <ul class="questionnaire-selections">
      <li
        v-for="selection in localSelections"
        :key="selection.text"
        class="questionnaire-selection"
      >
        <hw-checkbox
          v-model="localValue"
          :true-value="selection.value"
          :false-value="null"
          :text="selection.text"
          allow-wrap
        ></hw-checkbox>
        <span class="selection-score">{{selection.value}} {{unit}}</span>
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
    unit: {
      type: String,
      default: "",
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
      this.$emit("value-change", newValue, this.item);
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
  position: relative;
  margin: 10px;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  padding-top: 24px;
}

.questionnaire-item-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.questionnaire-selections {
  padding: 10px 10px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
}

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