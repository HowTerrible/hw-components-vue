<template>
  <li
    class="breadcrumb-item"
    :class="[{ 'is-deactived': !isCurrent }]"
    @click="onItemClicked"
  >
    <span class="breadcrumb-label">{{ data[labelKey] }}</span>
  </li>
</template>

<script>
export default {
  name: "hw-breadcrumb-item",
  props: {
    data: {
      type: [Object, String, Number],
      default: "",
    },
    index: {
      type: Number,
      default: 0,
    },
    current: {
      type: Number,
      default: 0,
    },
    labelKey: {
      type: String,
      default: "label",
    },
  },
  computed: {
    isCurrent() {
      return this.current === this.index;
    },
  },
  methods: {
    onItemClicked() {
      this.$emit("click", this.data, this.index);
    },
  },
};
</script>

<style lang="stylus" scoped>
.breadcrumb-item{

  .breadcrumb-label {
    padding:0 10px;
  }
  &.is-deactived {
    .breadcrumb-label {
      font-weight: normal;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      border-right:1px solid $bordercolor-gray-light;
      &:hover {
      }
    }
  }
}
</style>
