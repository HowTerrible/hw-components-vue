<template>
  <div>
    <hw-item title="全局变量暂存用的键">
      <input type="text" v-model="globalKey" />
      <span>{{msg}}</span>
    </hw-item>
  </div>
</template>

<script>
import Item from "@components/layout/Item";
import EventConfiguratorMixin from "./event-configurator-mixin";
export default {
  mixins: [EventConfiguratorMixin],
  name: "get-value",
  components: {
    "hw-item": Item,
  },
  data() {
    return {
      globalKeys: [],
      globalKey: "",
      msg:""
    };
  },
  watch: {
    globalKey(newValue) {
      if (this.globalKeys.indexOf(newValue) >= 0) {
        this.msg="此键值在全局变量中已存在，请使用其他名称。"
      } else {
      this.localEvent.params.key = newValue;
      }
    },
  },
  created() {
    this.localEvent.name = "getValue";
  },
  mounted() {
    this.globalKeys = Array.from(this.$store.getters.get_globalData_keys());
  },
};
</script>

<style lang="stylus" scoped></style>