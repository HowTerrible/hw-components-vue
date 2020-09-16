<template>
  <div>
    <hw-item title="全局变量暂存用的键">
      <input type="text" v-model="localEvent.params.key" />
    </hw-item>
  </div>
</template>

<script>
import Item from "@components/layout/Item";
import mixin from "./event-configer-mixin";
export default {
  mixins: [mixin],
  name: "get-value",
  components: {
    "hw-item": Item,
  },
  created() {
    this.localEvent.name = "getValue";
  },
};
</script>

<style lang="stylus" scoped></style>