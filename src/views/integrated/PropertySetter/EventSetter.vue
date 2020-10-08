<template>
  <div style="height:200px">
    <div class="event-list">
      <hw-item title="点击事件">
        <div>target</div>
      </hw-item>
    </div>
    <div class="components">
      <template v-for="item in allComponents">
        <div
          class="component"
          v-if="current !== item"
          :key="item.id + 'component'"
          @click="()=>{onComponentClicked(item)}"
        >组件{{item.id}}</div>
      </template>
    </div>
  </div>
</template>

<script>
import Item from "@components/layout/HW-Item";
export default {
  name: "event-setter",
  components: {
    "hw-item": Item,
  },
  props: {
    current: {
      type: Object,
      default: () => ({}),
    },
    allComponents: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onComponentClicked(item) {},
  },
};
</script>

<style lang="stylus" scoped></style>