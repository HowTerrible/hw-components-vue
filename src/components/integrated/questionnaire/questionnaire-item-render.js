export default {
  render(h) {
    return this.render(h, this.params, { valueSetter: this.valueSetter, textSetter: this.textSetter })
  },
  props: {
    render: {
      type: Function,
      default: (h) => { return h() }
    },
    params: {},
    valueSetter: {
      type: Function,
    },
    textSetter: {
      type: Function,
    }
  },
}