export default {
  name: "component-generator",
  render(h) {
    return this.render(h, this.params);
  },
  props: {
    render: {
      type: Function,
      default: null
    },
    params: {
      type: Object,
      default: () => ({})
    }
  },
}