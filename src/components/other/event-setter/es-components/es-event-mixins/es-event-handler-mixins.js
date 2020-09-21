/**
 * 需要配置zl-event-mixins里的东西一起混入使用
 * 这里仅为提供组件可用事件的配置，及监听事件的逻辑
 * 具体事件的触发逻辑参见pluginsMixins.js
 */
export default {
  props: {
    custom: {
      type: Object,
      default() {
        return {
          eventListener: {},
        };
      },
    },
  },
  data() {
    return {
      avalibleEventTypes: [],
      /**
       * 有些组件的value键不是currentValue，可在该组件的created中重新设置
       * 如果层级比较多请使用数组，例如["options", "value"]，
       * 代码会解析成this["options"]["value"]
       */
      valueKey: "localValue"
    };
  },
  created() {
    this.$on("customize-event", this.handleCustomizeEvent);
  },
  destroyed() {
    this.$off("customize-event", this.handleCustomizeEvent);
  },
  methods: {
    eventFunctionHandler(eventName, ...arg) {
      if (!eventName) return;

      this.linkageEventFunctionHandler(eventName);
    },
    linkageEventFunctionHandler(eventName) {
      // web_designer 中是事件id：事件的格式，不过我这里就简化一下，直接就是事件本体
      let event = this.custom.eventListener;
      Object.values(event).forEach(item => {
        console.log(item)
        let target = this.$store.getters.get_pluginsref(item.target);
        target.$emit("customize-event", item)
      })
    },
    handleCustomizeEvent({ name, params }) {
      if (name && params) {
        this[name] ? this[name](params) : console.log(`Error! Component does not have setter [${name}].`)
      }
    },
    getAvalibleEventTypes() {
      return this.avalibleEventTypes;
    },
  },
}