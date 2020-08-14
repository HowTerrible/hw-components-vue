<template>
  <div class="hw-card-base">
    <slot name="slot">
      <div class="hw-card-header" v-if="title">{{title}}</div>
    </slot>
    <div class="hw-card-content">
      <slot></slot>
    </div>
    <div class="hw-card-footer"></div>
  </div>
</template>

<script>
export default {
  name: "hw-card",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="stylus" scoped>
.hw-card-base {
  border: 1px solid $bordercolor-gray-light;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  margin: 5px;
  padding-bottom: 10px;

  .hw-card-header {
    border-bottom: 1px solid $bordercolor-gray-light;
    padding: 5px 10px;
  }

  .hw-card-content {
    margin: 10px 0;
    padding: 0 10px;
  }
}
</style>