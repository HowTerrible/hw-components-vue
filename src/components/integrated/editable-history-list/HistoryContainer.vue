<template>
  <div class="history-base">
    <div class="history-content">
      <div class="history-items">
        <template v-for="item in data">
          <slot :data="item"></slot>
        </template>
      </div>
    </div>
    <div class="history-name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.history-base > * {
  float: left;
  height: 400px;
}
.history-content {
  width: 100%;
}
.history-items {
  height: 100%;
  width: 100%;
  padding-left: 200px;
}

.history-name {
  width: 200px;
  margin-left: -100%;
  border-right: 1px dashed gray;
}
</style>