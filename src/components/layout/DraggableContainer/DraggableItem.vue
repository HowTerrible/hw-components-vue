<template>
  <div class="draggable-item" @click="onItemClicked">
    <darggable-component v-if="component" :component="component"></darggable-component>
  </div>
</template>

<script>
import DarggableComponent from "./DraggableComponent";
export default {
  inheritAttrs: false,
  name: "hw-draggable-item",
  components: {
    "darggable-component": DarggableComponent,
  },
  props: {
    data: {
      default: null,
    },
    component: {
      type: [Function, Object],
      default: null,
    },
  },
  created() {},
  methods: {
    onItemClicked() {
      console.log("sgjaserikagh");
    },
  },
};
</script>

<style lang="stylus" scoped>
.draggable-item {
  height: 100%;
  width: 100%;
  border: 1px solid $bordercolor-gray-light;
  box-shadow: $box-shadow-small;
}

.draggable-item:hover {
  box-shadow: $box-shadow;
}
</style>