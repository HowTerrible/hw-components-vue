<template>
  <div>
    <hw-collapsible-panel v-for="item in properties" :height="200" :key="item.id" :title="item.name">
      <component :is="item.setter" :current="current" :allComponents="allComponents"></component>
    </hw-collapsible-panel>
  </div>
</template>

<script>
import EventSetter from "./EventSetter";
import CollapsiblePanel from "@components/layout/CollapsiblePanel";
const propertySelections = [
  // {
  //   name: "定位",
  //   selector:"position"
  // },
  // {
  //   name: "颜色",
  //   selector:"color",
  //   properties: [
  //     {
  //       name: "字体颜色",
  //       default: "#fff",
  //     },
  //   ],
  // },
  {
    name: "事件",
    setter: "event-setter",
  },
];
export default {
  name: "property-setter",
  components: {
    "hw-collapsible-panel": CollapsiblePanel,
    "event-setter": EventSetter,
  },
  props: {
    properties: {
      type: Array,
      default: () => propertySelections,
    },
    allComponents: {
      type: Array,
      default: () => [],
    },
    current: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="stylus" scoped></style>