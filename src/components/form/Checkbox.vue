<template>
  <label class="hw-checkbox">
    <input type="checkbox" v-model="checked" />
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "hw-checkbox",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (value) => ["default", "button"].indexOf(value) != -1,
    },
    size: {
      type: String,
      default: "normal",
      validator: (value) => ["small", "normal", "large"].indexOf(value != -1),
    },
    title: {
      type: String,
      default: "",
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
    classStyle: {
      type: String,
      default: "",
    },
  },
  model: {
    prop: "value",
    event: "value-change",
  },
  data() {
    return {
      checked: false,
    };
  },
  computed: {
    isDataArray() {
      return Array.isArray(this.value);
    },
    localClassStyle() {
      let result;
      if (this.type === "button") {
        result = "xx-checkbox-btn-label ";
      } else {
        result = "";
      }
      if (this.readonly) {
        result += "readonly";
      }
      result = result + this.classStyle + " " + this.size;
      return result;
    },
  },
  watch: {
    value(newValue) {
      this.onValueChanged(newValue);
    },
    checked(newValue) {
      this.$emit("checked", newValue, this.trueValue);
      // 勾选
      if (newValue) {
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
          this.$emit("value-change", this.falseValue);
        }
      }
    },
  },
  created() {
    this.onValueChanged(this.value);
  },
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
    onDBclick() {
      this.$emit("dbclick", this);
    },
    onClick() {
      this.$emit("click", this);
    },
  },
};
</script>

<style lang="stylus" scoped>
label.hw-checkbox {
  transition-duration: 300ms;
  position: relative;
  height: 24px;
  line-height: 20px;
  display: inline-block;
}
.hw-checkbox>input {
  display: none;
  transition-duration: 300ms;
}
.hw-checkbox>input+span {
  transition-duration: 300ms;
  position: relative;
  display: inline-block;
  text-align: right;
  width: 100%;
  height: 100%;
  color: #444;
  background-color: white;
  padding: 2px 4px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 3px;
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
  margin-right: 4px;
  left: 4px;
}
.hw-checkbox>input:checked+span::before {
  background-color: white;
  border: 1px solid white;
}
.hw-checkbox>input+span::after {
  transition-duration: 300ms;
  position: absolute;
  content: '';
  width: 4px;
  height: 6px;
  border: 3px solid #58c1f7;
  border-radius: 2px;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
  margin-top: 5px;
  top: 2px;
  left: 8px;
  display: block;
  opacity: 0;
}
.hw-checkbox>input:checked+span::after {
  opacity: 1;
}
</style> 