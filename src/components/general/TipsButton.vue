<template>
  <v-tooltip v-if="hasTips">
    <hw-button v-on="$listeners" v-bind="$attrs">
      <slot></slot>
    </hw-button>
    <div class="tip-content" slot="content">
      <template v-if="isArrayTips">
        <p v-for="tip in tips" :key="tip">{{tip}}</p>
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
import Button from "./Button";
export default {
  inheritAttrs: false,
  name: "hw-tip-button",
  props: {
    tips: {
      type: [String, Array],
      default: null
    }
  },
  data() {
    return {};
  },
  computed: {
    hasTips() {
      let result = false,
        tips = this.tips;
      if (Array.isArray(tips) && tips.length !== 0) {
        result = true;
      } else {
        if (tips !== undefined && tips !== null && tips !== "") {
          result = true;
        }
      }
      return result;
    },
    isArrayTips() {
      return Array.isArray(this.tips);
    }
  },
  components: {
    "v-tooltip": Tooltip,
    "hw-button": Button
  }
};
</script>

<style lang="stylus" scoped>
.tip-content {
  white-space: normal;
}</style>