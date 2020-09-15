export default {
  props: {
    value: {},
  },
  data() {
    return {
      localValue: null,
    };
  },
  model: {
    event: "value-change",
    prop: "value",
  },
  watch: {
    value(newValue) {
      this.localValue = newValue;
    },
    localValue(newValue) {
      this.$emit("value-change", newValue);
    },
  },
  methods: {
    getEventTypes(){
      return [
        {
          name: "setValue",
          params: {}
        }
      ]
    },
    setValue(value) {
      this.localValue = value;
    }
  },
}