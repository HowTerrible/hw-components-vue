<template>
  <div class="history-train-base">
    <hw-item title="车次">{{ data.id }}</hw-item>
    <hw-item title="车型">{{ data.type }}</hw-item>
    <hw-item title="时间">{{ data.time }}</hw-item>
  </div>
</template>

<script>
import Item from "@components/layout/Item";
export default {
  name: "train-history",
  components: {
    "hw-item": Item,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style  scoped>
.history-train-base {
  display: flex;
  border-bottom: 1px solod gray;
}
</style>