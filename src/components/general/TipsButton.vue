<template>
  <v-tooltip v-if="hasTips" :placement="placement">
    <hw-button v-on="$listeners" :disabled="disabledWhenTips && tips.length > 0" v-bind="$attrs">
      <slot></slot>
    </hw-button>
    <div class="tip-content" slot="content">
      <template v-if="isArrayTips">
        <span v-for="tip in tips" :key="tip">{{tip}}</span>
      </template>
      <template v-else>{{tips}}</template>
    </div>
  </v-tooltip>
  <hw-button v-else v-on="$listeners" v-bind="$attrs">
    <slot></slot>
  </hw-button>
</template>

<script>
import { Tooltip } from "view-design";
import Button from "./HW-Button";
export default {
  inheritAttrs: false,
  name: "hw-tip-button",
  props: {
    tips: {
      type: [String, Array],
      default: null,
    },
    placement: {
      type: String,
      default: null,
    },
    disabledWhenTips: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    hasTips() {
      let result = false,
        tips = this.tips;
      // tips 是数组，判断是否有内容
      if (Array.isArray(tips)) {
        if (tips.length !== 0) {
          result = true;
        }
      }
      // tips是字符串，直接判断
      else {
        if (tips !== undefined && tips !== null && tips !== "") {
          result = true;
        }
      }
      return result;
    },
    isArrayTips() {
      return Array.isArray(this.tips);
    },
  },
  components: {
    "v-tooltip": Tooltip,
    "hw-button": Button,
  },
};
</script>

<style lang="stylus" scoped>
.tip-content {
  white-space: normal;
  display: flex;
  flex-direction: column;
}
</style>