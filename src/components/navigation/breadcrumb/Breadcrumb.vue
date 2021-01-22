<template>
  <div class="hw-breadcrumb-base">
    <ul>
      <template v-for="(item, index) in data">
        <hw-breadcrumb-item :key="index" :data="item"></hw-breadcrumb-item
      ></template>
    </ul>
  </div>
</template>

<script>
import BreadcrumbItem from "./BreadcrumbItem.vue";
export default {
  name: "hw-breadcrumb",
  components: {
    "hw-breadcrumb-item": BreadcrumbItem,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="stylus" scoped></style>
