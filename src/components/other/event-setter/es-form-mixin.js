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
    getAvalibleEventTypes() {
      return [
        {
          name: "setValue",
          params: {}
        }
      ]
    },
    setValue({ sourceType, value }) {
      if (sourceType === 1) {
        this.localValue = value;
      } else if (sourceType === 2) {
        this.localValue = this.$store.getters.get_globalData(value)
      }

    },
    getValue(params) {
      console.log("getValue", params)
      this.$store.commit("addComponentGlobalData", { key: params.key, value: this.localValue })
    }
  },
}