export default {
  created() {
    this.avalibleEventTypes.push(
      {
        name: "getValue",
        component: "get-value",
      });
  },
  methods: {
    getValue(params) {
      this.$store.commit("add_ComponentGlobalData", { key: params.key, value: this[this.valueKey] })
    }
  },
}