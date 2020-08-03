<template>
  <div :class="colClass" :style="colWidth">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hw-col",
  props: {
    span: {
      type: Number,
      default: 24
    }
  },
  computed: {
    colWidth() {
      let result = "";
      const span = this.span;
      if (span && !isNaN(span)) {
        result = "widht:" + Math.floor((span / 24) * 100) + "%; ";
      }
      return result;
    },
    colClass() {
      let colClass = "hw-col ";
      switch (this.span) {
        case 8:
          colClass = colClass + "col-" + this.span;
          break;
      }
      return colClass;
    }
  }
};
</script>

<style lang="stylus" scoped>
.hw-col.col-8 {
  width: 33%;
}
</style>