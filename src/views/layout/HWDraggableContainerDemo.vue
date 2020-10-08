<template>
  <div>
    <hw-card style="width:1000px">
      <hw-button @click="items.push({
    x: 0,
    y: 0,
    w: 2,
    h: 2,id:items.length})">增加项目</hw-button>
      <hw-draggable-container
        :items="items"
        :col-num="16"
        :row-height="50"
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
import Button from "@components/general/Button";
import Card from "@components/layout/Card";
import Checkbox from "@components/form/Checkbox";

const testLayout = [
  {
    x: 0,
    y: 0,
    w: 2,
    h: 2,
    i: "0",
    component: (h) => {
      function onSpanClick() {
        console.log("clicked");
      }
      return <span onclick={onSpanClick}>go;sdjgpoaerjoig</span>;
    },
  },
  {
    x: 2,
    y: 0,
    w: 12,
    h: 8,
    i: "1",
    isResizable: false,
    component: (h) => {
      let data = [];

      for (let i = 0; i <= 360; i++) {
        let t = (i / 180) * Math.PI;
        let r = Math.sin(2 * t) * Math.cos(2 * t);
        data.push([r, i]);
      }

      let polar = {
        title: {
          text: "极坐标双数值轴",
        },
        legend: {
          data: ["line"],
        },
        polar: {
          center: ["50%", "54%"],
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        angleAxis: {
          type: "value",
          startAngle: 0,
        },
        radiusAxis: {
          min: 0,
        },
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: data,
          },
        ],
        animationDuration: 2000,
      };
      return <v-chart options={polar}></v-chart>;
    },
  },
  {
    x: 10,
    y: 0,
    w: 2,
    h: 2,
    i: "2",
    component: {
      component: "@components/form/Checkbox",
      key: "hw-checkbox",
      render: (h) => {
        return <hw-checkbox>1241254124</hw-checkbox>;
      },
    },
  },
  {
    x: 0,
    y: 2,
    w: 2,
    h: 2,
    i: "3",
    component: (h) => {
      return <hw-checkbox>1241254124</hw-checkbox>;
    },
  },
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
    "hw-button": Button,
    "hw-draggable-container": () =>
      import("@components/layout/DraggableContainer/index.js"),
  },
  data() {
    return {
      items: testLayout,
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="stylus" scoped></style>