<template>
  <div class="questionnaire-item-base">
    <h3 class="questionnaire-item-title">{{item.title}}</h3>
    <textarea class="questionnaire-text" v-if="item.useInput" v-model="text" rows="10"></textarea>
    <ul class="questionnaire-selections" v-if="!item.useInput">
      <li
        v-for="selection in localSelections"
        :key="selection.text"
        class="questionnaire-selection"
      >
        <hw-checkbox
          v-model="localvalue"
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
     * 选中结果后得得分单位
     */
    unit: {
      type: String,
      default: "",
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
      localvalue: null,
      text: this.item.text,
    };
  },
  computed: {
    inputValueKey() {
      return this.item.inputValueKey || "text";
    },
    localValueItem() {
      let temp = this.value.find((item) => item.id === this.item.id);
      let result = temp ? temp : undefined;
      return result;
    },
  },
  watch: {
    localValueItem: {
      handler(newValue) {
        if (newValue) {
          this.localvalue = newValue.value;
          this.text = newValue.text;
        }
      },
      immediate: true,
    },
    localvalue: {
      handler(newValue) {
        if (!this.localValueItem) {
          this.value.push({
            id: this.item.id,
            title: this.item.title,
            value: newValue,
            text: this.text,
          });
        } else {
          this.localValueItem.value = newValue;
        }
        this.$emit("value-change", newValue, this.item);
      },
      immediate: true,
    },
    text: {
      handler(newValue) {
        this.$set(this.localValueItem, this.inputValueKey, newValue);
        let valueResult = this.item.input2ValFunc
          ? this.item.input2ValFunc(newValue)
          : undefined;

        if (valueResult !== undefined && valueResult !== null) {
          this.localvalue = valueResult;
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
  methods: {},
};
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

.questionnaire-selections {
  padding: 0px 10px 10px;
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