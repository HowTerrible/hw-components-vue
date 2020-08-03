<template>
  <div class="collapsible-solid-base" :style="solidStyle">
    <div class="collapsible-base" :style="flowStyle">
      <div class="collapsible-display-area" ref="displayArea">
        <slot name="title">
          <div class="collapsible-header" v-if="title"></div>
        </slot>
        <div class="collapsible-content">
          <slot></slot>
        </div>
      </div>
      <div class="open-btn" :class="[localOpen?'hide':'show']" @click="toggleOpen">V</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hw-collapsible-poanel",
  props: {
    title: {
      type: String,
      default: "",
    },
    open: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Number,
      default: 100,
    },
    maxHeight: {
      type: Number,
      default: 300,
    },
  },
  model: {
    prop: "open",
    event: "open-change",
  },
  data() {
    return {
      localOpen: this.open,
    };
  },
  computed: {
    solidStyle() {
      let result = {};
      let height = this.height;
      result["height"] = height
        ? isNaN(height)
          ? height
          : height + "px"
        : null;

      return result;
    },
    flowStyle() {
      let result = {};
      const height = this.height;
      const localOpen = this.localOpen;
      const paddingTop = 5;
      const paddingBottom = 5;

      if (localOpen) {
        result["max-height"] = this.maxHeight + "px";
        result["height"] = this.$refs.displayArea.scrollHeight + paddingTop + paddingBottom + "px";
      } else {
        result["max-height"] = result["height"] = this.solidStyle["height"];
      }

      return result;
    },
  },
  watch: {
    open(newValue) {
      this.localOpen = newValue;
    },
    localOpen(newValue) {
      this.$emit("open-change", newValue);
    },
  },
  methods: {
    toggleOpen() {
      this.localOpen = !this.localOpen;
    },
  },
};
</script>

<style lang="stylus" scoped>
.collapsible-solid-base {
  position: relative;
}

.collapsible-base {
  transition-duration: 300ms;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  padding: 5px 20px 5px 10px;
  border: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 2px 2px 2px 0px #dddddda8;
  z-index: 1;
  background: white;
}

.collapsible-display-area {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.open-btn {
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  height: 20px;
  width: 20px;
  position: absolute;
  top: 0;
  right: 0;
}

.open-btn:hover {
  cursor: pointer;
}

.open-btn.hide {
  transform: rotate(180deg);
}
</style>