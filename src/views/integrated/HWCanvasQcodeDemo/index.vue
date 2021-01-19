<template>
  <div class="demo-base">
    <hw-card title="Canvas制作图片" style="width: 800px">
      <canvas-qcode></canvas-qcode>
    </hw-card>
  </div>
</template>

<script>
import Card from "@components/layout/Card";
import CanvasQcode from "@components/integrated/canvas-qcode";

export default {
  components: {
    canvasQcode: CanvasQcode,
    "hw-card": Card,
  },
  created() {},
};
</script>

<style lang="stylus" scoped>
.questionnaire-demo {
  height: 600px;
}
</style>