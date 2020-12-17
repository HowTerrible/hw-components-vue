export default {
  props: {
    value: {
    },
  },
  model: {
    prop: "value",
    event: "value-change"
  },
  data() {
    return {
      localValue: this.value
    }
  },
  watch: {
    value(newValue) {
      this.localValue = newValue;
    },
    localValue(newValue) {
      this.$emit("value-change", newValue)
    }
  },
}