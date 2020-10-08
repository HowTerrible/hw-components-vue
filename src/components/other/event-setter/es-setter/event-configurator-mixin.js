export default {

  props: {
    target: {
      type: Object,
      default: () => ({}),
    },
    event: {
      type: Object,
      default: () => ({}),
    },
    params: {
      type: Object,
      default: () => ({})
    }
  },
  model: {
    prop: "event",
    event: "event-change",
  },
  data() {
    return {
      localEvent: this.event,
    };
  },
  watch: {
    event(newValue) {
      this.localEvent = newValue;
    },
    localEvent(newValue) {
      this.$emit("event-change", newValue);
    },
  },
  created() {
    this.localEvent = {}
    this.localEvent.target = this.target.key;
    this.localEvent.params = {};
  },
}