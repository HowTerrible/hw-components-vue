<template>
  <grid-layout v-bind="$attrs" v-on="$listeners" :layout.sync="items">
    <template v-for="item in items">
      <draggable-item
        is="GridItem"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >{{item.i}}</draggable-item>
    </template>
  </grid-layout>
</template>

<script>
import DraggableItem from "./DraggableItem";
import VueGridLayout from "vue-grid-layout";

/**
 *  layout参数示例
    :layout="layout"
    :col-num="12"
    :row-height="30"
    :is-draggable="true"
    :is-resizable="true"
    :vertical-compact="true"
    :margin="[10, 10]"
    :use-css-transforms="true"
    @layout-created="layoutCreatedEvent"
    @layout-before-mount="layoutBeforeMountEvent"
    @layout-mounted="layoutMountedEvent"
    @layout-ready="layoutReadyEvent"
    @layout-updated="layoutUpdatedEvent"
 */
export default {
  name: "hw-draggable-container",
  components: {
    GridLayout: VueGridLayout.GridLayout,
    "draggable-item": DraggableItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="stylus" scoped></style>