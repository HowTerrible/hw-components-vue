<template>
  <li class="component-item" @click="onClick">{{id}}</li>
</template>

<script>
export default {
  name: "es-component-item",
  props: {
    id: {
      type: [String, Number],
      default: null,
      required: true,
    },
    component: {
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit("select", this.id, this.component);
    },
  },
};
</script>

<style lang="stylus" scoped>
.component-item {
  list-style: none;
  height: 24px;
  line-height: 24px;
  padding: 10px;
  border-bottom: 1px solid $bordercolor-gray-light;
  box-sizing: content-box;
  border-radius: $border-radius;
  transition-duration: $transition-duration;
}

.component-item:hover {
  cursor: pointer;
  color: $color-blue;
  box-shadow: $box-shadow;
}
</style>