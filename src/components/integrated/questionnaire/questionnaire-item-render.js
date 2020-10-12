export default {
  render(h) {
    return this.render(h, this.params, this.value, { valueSetter: this.valueSetter, textSetter: this.textSetter })
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
    },
    value: {
      type: Object
    }
  },
}