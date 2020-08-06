<template>
  <div class="home">
    <router-view></router-view>
    <!-- <div class="btnDiv">
      <hw-tipsbtn>dsadf</hw-tipsbtn>
      <hw-tipsbtn :tips="tips1">dsadf</hw-tipsbtn>
      <hw-tipsbtn :tips="tips2">dsadf</hw-tipsbtn>
      <hw-button @click="openBing = true">打开必应</hw-button>
    </div>
    <hw-iframe-dialog v-model="openBing" url="https://cn.bing.com/"></hw-iframe-dialog>

    <hw-collapsible-panel :height="40" :maxHeight="100" class="test-panel">
      <div class="panel-content">
        <p>水能喝是怎么回事呢？水相信大家都很熟悉，但是水能喝是怎么回事呢，下面就让小编带大家一起了解吧。</p>
        <p>水能喝，其实就是可以喝，大家可能会很惊讶水怎么会能喝呢？但事实就是这样，小编也感到非常惊讶。</p>
        <p>这就是关于水能喝的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！</p>
      </div>
    </hw-collapsible-panel>
    <hw-collapsible-panel
      :height="40"
      :maxHeight="100"
      class="test-panel"
      collapseBtnPosition="left"
    >
      <div class="panel-content">
        <p>水能喝是怎么回事呢？水相信大家都很熟悉，但是水能喝是怎么回事呢，下面就让小编带大家一起了解吧。</p>
        <p>水能喝，其实就是可以喝，大家可能会很惊讶水怎么会能喝呢？但事实就是这样，小编也感到非常惊讶。</p>
        <p>这就是关于水能喝的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！</p>
      </div>
    </hw-collapsible-panel>
        <p>水能喝是怎么回事呢？水相信大家都很熟悉，但是水能喝是怎么回事呢，下面就让小编带大家一起了解吧。</p>
        <p>水能喝，其实就是可以喝，大家可能会很惊讶水怎么会能喝呢？但事实就是这样，小编也感到非常惊讶。</p>
    <p>这就是关于水能喝的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！</p>-->
    <template v-for="config in componentsConfig">
      <!-- <hw-button @click="()=>onComponentClick(config)" :key="config.name">{{config.name}}</hw-button> -->
      <router-link :to="config.path" :key="config.name">{{config.name}}</router-link>
    </template>
  </div>
</template>
<script>
import { componentsConfig } from "./config/components";
// import IFrameDialog from "./components/general/HW-IFrame-Dialog";
import Button from "./components/general/HW-Button";
// import TipsButton from "./components/general/HW-TipsButton";
// import CollapsiblePanel from "./components/layout/HW-CollapsiblePanel";
export default {
  name: "home",
  components: {
    // "hw-tipsbtn": TipsButton,
    // "hw-iframe-dialog": IFrameDialog,
    "hw-button": Button,
    // "hw-collapsible-panel": CollapsiblePanel,
  },
  data() {
    return {
      tips1: "test",
      tips2: ["test row1", "test row2"],
      openBing: false,
      componentsConfig: componentsConfig,
    };
  },
  created() {},
  methods: {
    onComponentClick(config) {
      this.$router.push(config.name);
    },
  },
};
</script>

<style lang="stylus" scoped>
.home {
  width: 100vw;
  height: 20vh;

  >* {
    margin-right: 10px;
  }
}

.panel-content {
}
</style>
