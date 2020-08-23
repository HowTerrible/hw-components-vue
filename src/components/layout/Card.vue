<template>
  <div class="hw-card-base">
    <div class="hw-card-header" v-if="showHeader">
      <slot name="title">
        <span v-if="title">{{title}}</span>
      </slot>
    </div>
    <div class="hw-card-content">
      <slot></slot>
    </div>
    <div class="hw-card-footer" v-if="showHeader">
      <slot name="footer">
        <span v-if="footer">{{footer}}</span>
      </slot>
    </div>
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
    footer: {
      type: String,
      default: "",
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showHeader: true,
      showFooter: true,
    };
  },
  mounted() {
    this.showHeader = this.title || this.$slots.title !== undefined;
    this.showFooter = this.footer || this.$slots.footer !== undefined;
  },
};
</script>

<style lang="stylus" scoped>
.hw-card-base {
  border: 1px solid $bordercolor-gray-light;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  margin: 5px;

  .hw-card-header {
    border-bottom: 1px solid $bordercolor-gray-light;
    padding: 5px 10px;
  }

  .hw-card-content {
    margin: 10px 0;
    padding: 0 10px;
  }

  .hw-card-header {
    border-top: 1px solid $bordercolor-gray-light;
    padding: 5px 10px;
  }
}
</style>