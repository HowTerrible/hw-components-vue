<template>
  <div class="questionnaire-item-base">
    <h3 class="questionnaire-item-title">{{ item.title }}</h3>
    <template v-if="item.useInput">
      <textarea
        class="questionnaire-text"
        v-if="inputType === 'text'"
        v-model="text"
        rows="10"
      ></textarea>
      <input type="number" v-model="text" v-else-if="inputType === 'number'" />
      <span class="questionnaire-unit">{{ localUnit }}</span>
    </template>
    <ul class="questionnaire-selections" v-if="!item.useInput">
      <questionnaire-item
        v-for="selection in localSelections"
        :key="selection.text"
        :item="selection"
        :readonly="selectionReadonly"
        v-bind="$attrs"
        v-model="localValue"
      ></questionnaire-item>
    </ul>
    <item-render
      v-if="hasOtherComponent"
      :render="item.otherComponent.render"
      :params="item.otherComponent.params"
      :valueSetter="outsideValueSetter"
      :textSetter="outsideTextSetter"
    ></item-render>
  </div>
</template>

<script>
import ItemRender from "./questionnaire-item-render";
import QuestionnaireItem from "./QuestionnaireItem";
let V_QuestionnaireItem = {
  name: "questionnaire-list",
  components: {
    "item-render": ItemRender,
    "questionnaire-item": QuestionnaireItem,
  },
  props: {
    /**
     * 问卷中得题目对象

     *  {
     *  id                  题目的id
     *  title               题目的标题
     *  indexMappingToValue 选项 的值是否来自下标。如果selections中的项目是【字符串】格式，会使用此变量判断，如果此值为true，选项选中的值就是他的下标，如果为false，选中项的值就是选项文本
     *  selections          选项 可以是字符串，或者对象。对象的格式默认是{text, value}，也可以通过后面的textKey 和 valueKey两个属性更换取值的键
     *  description         描述，会被访入pre标签中
     *  useInput            使用Input而不是选项。默认false
     *  inputValueKey       input的值存放的键。默认text
     *  input2ValFunc       input中值生成value的标准，目前仅支持函数格式，参数就是input的值。返回value。如果没配置或者返回的value为空，将不会设置value
     *  selectionReadonly   checkbox全部只读，不可点击
     *  valueFromOutside    值通过外部来源，需要设置callback
     *  callback            值来源的回调函数
     *  unit                使用此值单独设置单位将独立于全局unit
     *  inputType           默认text,使用textarea,可设置为number,使用input:number
     *  }
     */
    item: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Array,
      default: () => [],
    },
    /**
     * 如果问题得每个选项是对象格式，可以选配每个题目的【文本】对应的键
     */
    textKey: {
      type: String,
      default: "text",
    },
    /**
     * 如果问题得每个选项是对象格式，可以选配每个题目的【值】对应的键
     */
    valueKey: {
      type: String,
      default: "value",
    },
  },
  data() {
    return {
      localSelections: [],
      localValue: null,
      text: this.item.text,
    };
  },
  computed: {
    inputType() {
      return this.item.inputType || "text";
    },
    inputValueKey() {
      return this.item.inputValueKey || "text";
    },
    localUnit() {
      return this.item.unit || this.unit;
    },
    localValueItem() {
      let temp = this.value.find((item) => item.id === this.item.id);
      let result = temp ? temp : undefined;
      return result;
    },
    selectionReadonly() {
      return this.item.selectionReadonly;
    },
    hasOtherComponent() {
      return this.item.otherComponent ? true : false;
    },
  },
  watch: {
    localValueItem: {
      handler(newValue) {
        if (newValue) {
          this.localValue = newValue.value;
          this.text = newValue.text;
        }
      },
      immediate: true,
    },
    localValue: {
      handler(newValue) {
        if (!this.localValueItem) {
          this.value.push({
            id: this.item.id,
            title: this.item.title,
            value: newValue,
            text: this.text,
          });
        } else {
          this.$set(this.localValueItem, "value", newValue);
        }
        this.$emit("value-change", newValue, this.item);
      },
      immediate: true,
    },
    text: {
      handler(newValue) {
        if (!this.item.inputValueKey) return;
        this.$set(this.localValueItem, this.inputValueKey, newValue);
        let valueResult = this.item.input2ValFunc
          ? this.item.input2ValFunc(newValue)
          : undefined;

        if (valueResult !== undefined && valueResult !== null) {
          this.localValue = valueResult;
        }
      },
      immediate: true,
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
            let startIndex = item.startIndex || 0;
            temp = indexMappingToValue
              ? {
                  value: startIndex + index,
                  text: item,
                }
              : {
                  value: item,
                  text: item,
                };
          } else {
            temp = {
              text: item[this.textKey],
              value: item[this.valueKey],
            };
          }
          this.localSelections.push(temp);
        })
      : null;
  },
  mounted() {},
  methods: {
    outsideValueSetter(value) {
      this.localValue = value;
    },
    outsideTextSetter(text) {
      this.text = text;
    },
  },
};
export default V_QuestionnaireItem;
</script>

<style lang="stylus" scoped>
.questionnaire-item-base {
  position: relative;
  padding: 30px;
  padding-top: 24px;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
}

.questionnaire-item-title {
  position: absolute;
  padding: 0 30px;
  top: 0;
  left: 0;
  right: 0;
}

.questionnaire-text {
  width: 100%;
}

.questionnaire-unit {
}

.questionnaire-selections {
  padding: 0px 10px 10px;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
}
</style>