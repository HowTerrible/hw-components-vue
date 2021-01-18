<template>
  <div class="home">
    <div class="center">
      <div class="inner">
        <div class="display-area">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="left">
      <hw-list text-key="name" :data="componentsConfig"></hw-list>
      <ul>
        <template v-for="config in componentsConfig">
          <li :key="config.name">
            <router-link :to="config.path">{{ config.name }}</router-link>
          </li>
        </template>
      </ul>
    </div>
    <div class="right"></div>
  </div>
</template>
<script>
import { componentsConfig } from "./router/components";
// import IFrameDialog from "./components/general/HW-IFrame-Dialog";
// import Button from "./components/general/HW-Button";
// import TipsButton from "./components/general/HW-TipsButton";
import { List } from "@components/data/List";
export default {
  name: "home",
  components: {
    "hw-list": List,
    // "hw-tipsbtn": TipsButton,
    // "hw-iframe-dialog": IFrameDialog,
    // "hw-button": Button,
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
  height: 100vh;
  overflow: hidden;

  >* {
    height: 100%;
    float: left;
  }

  .center {
    width: 100%;
  }

  .inner {
    height: 100%;
    margin: 0 200px 0 300px;
  }

  .left {
    width: 300px;
    margin-left: -100%;
  }

  .right {
    width: 300px;
    margin-left: -200px;
  }
}

.display-area {
  width: 100%;
}
</style>
