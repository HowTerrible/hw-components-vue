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
      <slot name>
        <div
          class="open-btn"
          :class="[localOpen?'hide':'show']"
          :style="btnStyle"
          @click="localOpen = !localOpen"
        >
          <span class="open-btn-arrow"></span>
        </div>
      </slot>
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
    collapseBtnPosition: {
      type: String,
      default: "right",
      validator: (item) => ["left", "right"].indexOf(item) >= 0,
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
  created() {
    this.paddingTop = 5;
    this.paddingBottom = 5;
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
      localOpen
        ? (result["max-height"] = result["height"] =
            this.$refs.displayArea.scrollHeight +
            this.paddingTop +
            this.paddingBottom +
            "px")
        : (result["max-height"] = result["height"] = this.solidStyle["height"]);

      result[`padding-${this.collapseBtnPosition}`] = this.btnStyle.width;
      return result;
    },
    btnStyle() {
      let result = {};
      result[this.collapseBtnPosition] = 0;
      let size = this.height > 40 ? 40 : this.height;
      result.width = result.height = size + "px";

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
  methods: {},
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
  padding: 5px 10px 5px 10px;
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
}

.open-btn:hover {
  cursor: pointer;
}

.open-btn.hide {
  transform: rotate(180deg);
}

.open-btn-arrow {
  position: relative;
  display: inline-block;
  width: 30%;
  height: 30%;
  border-top: 1px solid gray;
  border-left: 1px solid gray;
  border-right: none;
  border-bottom: none;
  box-sizing: border-box;
  transform: rotate(45deg);
  margin-top: 38%;
  margin-left: 38%;
}
</style>