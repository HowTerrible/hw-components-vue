<template>
  <div>
    <hw-card>
      <hw-draggable-container
        :items="items"
        :col-num="12"
        :row-height="30"
        is-draggable
        autoSize
        is-resizable
        vertical-compact
        :margin="[10, 10]"
        use-css-transforms
      ></hw-draggable-container>
    </hw-card>
  </div>
</template>

<script>
import Card from "@components/layout/Card";
import DraggableContainer from "@components/layout/DraggableContainer/index.js";

const testLayout = [
  { x: 0, y: 0, w: 4, h: 2, i: "0" },
  { x: 4, y: 0, w: 4, h: 2, i: "1" },
  { x: 8, y: 0, w: 4, h: 2, i: "2" },
  { x: 0, y: 2, w: 2, h: 2, i: "3" },
  { x: 2, y: 2, w: 2, h: 2, i: "4" },
  { x: 4, y: 2, w: 2, h: 2, i: "5" },
  { x: 6, y: 2, w: 2, h: 2, i: "6" },
  { x: 8, y: 2, w: 2, h: 2, i: "7" },
  { x: 10, y: 2, w: 2, h: 2, i: "8" },
  { x: 0, y: 4, w: 2, h: 2, i: "9" },
  { x: 2, y: 4, w: 2, h: 2, i: "10" },
  { x: 4, y: 4, w: 2, h: 2, i: "11" },
  { x: 6, y: 4, w: 2, h: 2, i: "12" },
  { x: 8, y: 4, w: 2, h: 2, i: "13" },
  { x: 10, y: 4, w: 2, h: 2, i: "14" },
];
export default {
  name: "hw-draggable-container-demo",
  components: {
    "hw-card": Card,
    "hw-draggable-container": DraggableContainer,
  },
  data() {
    return {
      items: testLayout,
    };
  },
  created() {},
};
</script>

<style lang="stylus" scoped></style>