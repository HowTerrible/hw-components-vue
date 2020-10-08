export default {
  render(h) {
    return this.render(h, this.params, this.valueSetter)
  },
  props: {
    render: {
      type: Function,
      default: (h) => { return h() }
    },
    params: {},
    valueSetter: {
      type: Function,
    }
  },
}