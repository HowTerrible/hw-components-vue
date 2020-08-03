<template>
  <v-dialog v-model="localOpen" v-on="$listeners" v-bind="$attrs" :width="contentWidth + 30">
    <div
      class="iframe-div"
      :style="{'width': contentWidth + 'px' , 'height': contentHeight + 'px'}"
    >
      <iframe style="width:100%; height:100%" :src="url" frameborder="0"></iframe>
    </div>
  </v-dialog>
</template>

<script>
import { Modal } from "view-design";
export default {
  name: "hw-iframe-dialog",
  props: {
    url: {
      type: String,
      default: ""
    },
    contentWidth: {
      type: Number,
      default: 400
    },
    contentHeight: {
      type: Number,
      default: 600
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: "open",
    event: "open-change"
  },
  data() {
    return {
      localOpen: this.open
    };
  },
  watch: {
    open(newValue) {
      this.localOpen = newValue;
    },
    localOpen(newValue) {
      this.$emit("open-change", newValue);
    }
  },
  components: {
    "v-dialog": Modal
  }
};
</script>

<style lang="stylus" scoped>
.frame-div {
}
</style>