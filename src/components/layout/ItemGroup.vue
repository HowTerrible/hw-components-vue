<template>
  <div class="fig-base">
    <div class="fig-title" :style="titleStyle">{{title}}</div>
    <div class="fig-content" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "hw-item-group",
  props: {
    title: {
      type: String,
      default: ""
    },
    titleStyle: {
      type: String,
      defalut: ""
    },
    maxHeight: {
      type: [String, Number],
      default: null
    }
  },
  computed: {
    contentStyle() {
      let result = {};
      if (this.localMaxHeight) {
        result.maxHeight = this.localMaxHeight;
      }
      return result;
    },
    localMaxHeight() {
      let maxHeight = this.maxHeight;
      let result = "";
      if (!isNaN(maxHeight)) {
        result = maxHeight + "px";
      } else {
        result = maxHeight;
      }
      return result;
    }
  }
};
</script>

<style lang="less" scoped>
.fig-base {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 0 0 5px 10px;
  background-color: white;

  .fig-title {
    margin: 5px 0px 0 5px;
    cursor: default;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 3px;
  }
  .fig-content {
    box-sizing: border-box;
    padding: 5px 10px;
    overflow-y: auto;
    height: 100%;
    width: 100%;
  }
}
</style>