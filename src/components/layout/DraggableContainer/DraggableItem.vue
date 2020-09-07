<template>
  <grid-item
    v-bind="$attrs"
    v-on="$listeners"
    @resize="resizeEvent"
    @move="moveEvent"
    @resized="resizedEvent"
    @moved="movedEvent"
  >{{data.i}}</grid-item>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
export default {
  name: "hw-draggable-item",
  components: {
    GridItem: VueGridLayout.GridItem,
  },
  props: {
    data: {
      default: null,
    },
  },
  methods: {
    moveEvent: function (i, newX, newY) {
      this.$emit("move", { i, newX, newY, data: this.data });
    },

    resizeEvent: function (i, newH, newW, newHPx, newWPx) {
      this.$emit("resize", { i, newH, newW, newHPx, newWPx, data: this.data });
    },

    movedEvent: function (i, newX, newY) {
      this.$emit("after-moved", { i, newX, newY, data: this.data });
    },
    resizedEvent: function (i, newH, newW, newHPx, newWPx) {
      this.$emit("after-resized", {
        i,
        newH,
        newW,
        newHPx,
        newWPx,
        data: this.data,
      });
    },
  },
};
</script>

<style lang="stylus" scoped></style>