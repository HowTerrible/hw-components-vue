<template>
  <div>
    <hw-item title="值的来源">
      <hw-checkbox :true-value="1" v-model="sourceType">固定值</hw-checkbox>
      <hw-checkbox :true-value="2" v-model="sourceType">全局变量</hw-checkbox>
    </hw-item>
    <hw-item title="设置目标值" v-if="sourceType === 1">
      <input type="text" v-model="value" />
    </hw-item>
    <hw-item v-else title="设置全局变量中的值">
      <template v-for="item in globalKeys">
        <hw-checkbox :key="item" :true-value="item" v-model="value">{{item}}</hw-checkbox>
      </template>
    </hw-item>
  </div>
</template>

<script>
import Checkbox from "@components/form/Checkbox";
import Item from "@components/layout/Item";
import mixin from "./event-configer-mixin";
export default {
  name: "set-value",
  mixins: [mixin],
  components: {
    "hw-checkbox": Checkbox,
    "hw-item": Item,
  },
  data() {
    return {
      sourceType: 1,
      globalKeys: [],
      value: "",
    };
  },
  watch: {
    sourceType(newValue) {
      this.$set(this.localEvent.params, "sourceType", newValue);
    },
    value(newValue) {
      this.$set(this.localEvent.params, "value", newValue);
    },
  },
  created() {
    this.localEvent.name = "setValue";
  },
  mounted() {
    this.globalKeys = Array.from(this.$store.getters.get_globalData_keys());
  },
};
</script>

<style lang="stylus" scoped></style>
