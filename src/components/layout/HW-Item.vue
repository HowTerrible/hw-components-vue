<template>
  <div class="fi-base">
    <div :class="titleClass" :title="title" :style="titleStyle">
      <slot name="title">{{title}}</slot>
    </div>
    <div class="fi-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "hw-item",
  props: {
    title: {
      type: String,
      default: ""
    },
    labelWidth: {
      type: [String, Number],
      default: null
    },
    titleLevel: {
      type: Number,
      default: null
    }
  },
  computed: {
    titleStyle() {
      let result = "";
      const labelWidth = this.labelWidth;
      if (labelWidth) {
        if (!isNaN(labelWidth)) {
          result = "width:" + labelWidth + "px; ";
        } else {
          result = "width:" + labelWidth + "; ";
        }
      }
      return result;
    },
    titleClass() {
      let result = "fi-title ";
      if (this.titleLevel) {
        result += "level" + this.titleLevel;
      }
      return result;
    }
  }
};
</script>

<style lang="stylus" scoped>
.fi-base {
  display: flex;
  align-items: center;
  min-height: 40px;
  width: 100%;
  padding: 5px 10px 5px 5px;

  .fi-title {
    font-weight: 400;
    margin: 0 10px;
    cursor: default;
  }

  .fi-title.level1 {
    font-size: $font-size-h1;
    font-weight: $font-weight-h1;
  }

  .fi-title.level2 {
    font-size: $font-size-h2;
    font-weight: $font-weight-h2;
  }

  .fi-content {
    flex: 1;
  }
}
</style>