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
      this[name] ? this[name](params) : console.log("Error! Component does not have value setter.")
    }
  },
}