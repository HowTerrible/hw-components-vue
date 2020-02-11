<template>
  <div class="home">
    <div class="btnDiv">
      <hw-tipsbtn>dsadf</hw-tipsbtn>
      <hw-tipsbtn :tips="tips1">dsadf</hw-tipsbtn>
      <hw-tipsbtn :tips="tips2">dsadf</hw-tipsbtn>
      <hw-tipsbtn :tips="tips2" :disabled="tips2">dsadf</hw-tipsbtn>
    </div>
  </div>
</template>
<script>
import TipsButton from "./components/general/TipsButton";
export default {
  name: "home",
  data() {
    return {
      tips1: "test",
      tips2: ["test row1", "test row2"]
    };
  },
  components: {
    "hw-tipsbtn": TipsButton
  }
};
</script>

<style lang="stylus" scoped>
.home {
  width: 100vw;
  height: 20vh;
  display: flex;
  align-content: center;
  justify-content: center;

  >* {
    margin-right: 10px;
  }
}
</style>
