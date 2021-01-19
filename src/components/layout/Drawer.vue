<template>
  <div
    class="hw-drawer-base"
    :class="[direction, open ? 'open' : '']"
    :style="{
      height,
      width,
    }"
    v-transfer-dom
    :data-transfer="!notTransfer"
  >
    <div class="hw-drawer-header">
      <div class="hw-drawer-title">{{ title }}</div>
      <div class="hw-drawer-btn">
        <hw-button @click="$emit('open-change', false)"
          ><i class="fa fa-times" aria-hidden="true"></i
        ></hw-button>
      </div>
    </div>
    <div class="hw-drawer-content"><slot></slot></div>
    <div class="hw-drawer-footer"><slot name="footer"></slot></div>
  </div>
</template>

<script>
import TransferDom from "@directives/transfer-dom";
import Button from "@components/general/Button";
export default {
  directives: { TransferDom },
  components: {
    "hw-button": Button,
  },
  name: "hw-drawer",
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: "500px",
    },
    width: {
      type: String,
      default: "800px",
    },
    title: {
      type: String,
    },
    notTransfer: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: "bottom",
      validator: (item) =>
        ["top", "right", "bottom-right", "bottom", "left"].indexOf(item) > 0,
    },
  },
  model: {
    prop: "open",
    event: "open-change",
  },
};
</script>

<style lang="stylus" scoped>
.hw-drawer-base {
  position: absolute;
  border: 1px solid $bordercolor-gray-light;
  background-color: $backcolor-white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: $transition-duration-slow;

  >* {
    padding: 20px;
  }

  .hw-drawer-header {
    height: 40px;
    border-bottom: 1px solid $bordercolor-gray-light;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .hw-drawer-content {
    height: 100%;
    flex: 1;
    overflow-y: auto;
  }
}

.hw-drawer-base.bottom-right {
  right: 0;
  bottom: 0;
  transform: translateY(100%);
}

.hw-drawer-base.bottom-right.open {
  transform: translateY(0);
}
</style>