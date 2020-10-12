<template>
  <label class="hw-checkbox" :class="localClass" :style="checkboxStyle">
    <input
      type="checkbox"
      :readonly="readonly"
      :disabled="disabled"
      v-model="checked"
      @click="onClick"
    />
    <span>
      <span class="hw-checkbox-text" v-if="!hideText">
        <slot>{{ text }}</slot>
      </span>
    </span>
  </label>
</template>

<script>
export default {
  name: "hw-checkbox",
  props: {
    size: {
      type: String,
      default: "normal",
      validator: (value) => ["small", "normal", "large"].indexOf(value != -1),
    },
    text: {
      type: String,
      default: " ",
    },
    trueValue: {
      type: [Array, Object, String, Number, Boolean],
      default: true,
    },
    falseValue: {
      type: [Array, Object, String, Number, Boolean],
      default: false,
    },
    value: [Array, Object, String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    hideText: {
      type: Boolean,
      default: false,
    },
    classStyle: {
      type: String,
      default: "",
    },
    allowWrap: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    prop: "value",
    event: "value-change",
  },
  data() {
    return {
      checked: false,
      /**
       * 此项被 点击勾选，设置此值为true
       * vmodel变化，出发valueChanged事件 进入onValueChanged
       * 根据value变化，判断出此项被勾选，checed = true，触发checkChanged
       * 因为check的newValue为true，走到了设值得代码段
       * 需要及时将此标识符 恢复false。
       * 否则点击另一个的时候，会有两个checkbox的此标识符为true
       */
      clickedItem: false,
    };
  },
  computed: {
    isDataArray() {
      return Array.isArray(this.value);
    },
    localClass() {
      let result = [this.size];

      this.readonly ? result.push("readonly") : null;
      result.push(this.allowWrap ? "allow-wrap" : "nowrap");
      return result;
    },
    checkboxStyle() {
      let result = {};
      return result;
    },
  },
  watch: {
    value(newValue, oldValue) {
      this.onValueChanged(newValue, oldValue);
    },
    checked(newValue) {
      if (this.readonly) return;
      this.$emit("checked", newValue, this.trueValue);
      // 勾选
      if (newValue) {
        // 需要在 勾选时 清掉此标识，否在在勾选 其他项目时会导致此项依然发送了falseValue
        this.clickedItem = false;
        if (this.isDataArray) {
          // 如果是value数组，需要在选中时将trueValue添加进去
          this.value.findIndex((item) => item === this.trueValue) < 0
            ? this.value.push(this.trueValue)
            : null;
          this.$emit("value-change", this.value);
        } else {
          this.$emit("value-change", this.trueValue);
        }
      }
      // 取消勾选
      else {
        if (this.isDataArray) {
          let targetIndex = this.value.findIndex((v) => v === this.trueValue);
          targetIndex >= 0 ? this.value.splice(targetIndex, 1) : null;
          this.$emit("value-change", this.value);
        } else {
          // 如果不是当前点击项目也发出此事件
          // 会导致vmodel绑定的所有checkbox都是falseValue的状态
          this.clickedItem ? this.$emit("value-change", this.falseValue) : null;
        }
      }
    },
  },
  created() {
    this.onValueChanged(this.value);
  },
  mounted() {},
  methods: {
    onValueChanged(newValue) {
      // 当值改变时，需要判断truevalue在不在value数组
      if (this.isDataArray) {
        let selectedItem = newValue.find((item) => {
          return item == this.trueValue;
        });
        if (selectedItem !== undefined && selectedItem !== null) {
          this.checked = true;
        } else {
          this.checked = false;
        }
      }
      // 当值改变时，需要判断truevalue等不等于value
      else {
        this.checked = this.trueValue == newValue;
      }
    },
    onClick() {
      if (this.readonly) return;
      this.clickedItem = true;
      this.$emit("click", this);
    },
    setCheck(newValue) {
      this.checked = newValue;
    },
  },
};
</script>

<style lang="stylus" scoped>
label.hw-checkbox {
  cursor: pointer;
  transition-duration: 300ms;
  position: relative;
  min-height: 24px;
  line-height: 20px;
  display: inline-block;
  margin: 1px 2px;
}

.hw-checkbox>input {
  display: none;
  transition-duration: 300ms;
}

.hw-checkbox>input+span {
  user-select: none;
  transition-duration: 300ms;
  position: relative;
  display: inline-block;
  width: 100%;
  min-height: 100%;
  color: #444;
  background-color: white;
  padding: 2px 4px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding-left: 20px;
}

.hw-checkbox>input:checked+span {
  color: white;
  background-color: #58c1f7;
  border: 1px solid white;
}

.hw-checkbox>input+span::before {
  content: '';
  width: 12px;
  height: 12px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 3px;
  display: block;
  float: left;
  margin-top: 3px;
  left: 4px;
  position: absolute;
  top: 50%;
  margin-top: -6px;
}

.hw-checkbox>input:checked+span::before {
  background-color: white;
  border: 1px solid white;
}

.hw-checkbox>input+span::after {
  transition-duration: 300ms;
  position: absolute;
  content: '';
  width: 6px;
  height: 10px;
  border: 3px solid #58c1f7;
  border-radius: 2px;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
  margin-top: -6px;
  top: 50%;
  left: 7px;
  display: block;
  opacity: 0;
}

.hw-checkbox>input:checked+span::after {
  opacity: 1;
}

.hw-checkbox.readonly {
  user-select: none;
  pointer-events: none;
}

.hw-checkbox.allow-wrap {
  white-space: normal;
}

.hw-checkbox.nowrap {
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
}

.hw-checkbox.nowrap .hw-checkbox-text {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  word-break: break-all;
  text-overflow: ellipsis;
}

.hw-checkbox-text {
  padding: 0 4px;
  text-align: start;
  min-height: 1rem;
}
</style> 