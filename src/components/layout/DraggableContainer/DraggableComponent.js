import Vue from "vue"
import "echarts/lib/chart/line";
import "echarts/lib/component/polar";
import Echart from "vue-echarts"

export default {
  inheritAttrs: false,
  name: "draggable-component",
  components: {
    "hw-checkbox": () => import("@components/form/Checkbox"),
    "v-chart": Echart
  },
  render(h) {
    let result;
    if (typeof this.component === "function")
      result = this.component(h, this.params)
    else {
      Vue.component(this.component.key, this.component.component);
      result = this.component.render(h, this.params);
    }
    return result;
  },
  props: {
    component: {
      type: [Function, Object],
      default: null,
      validator: (item) => null || typeof item === "function" || (item && item.render && item.component && item.key)
    },
    params: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
  },
}