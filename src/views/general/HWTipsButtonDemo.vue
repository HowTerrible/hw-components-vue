<template>
  <div>
    General
    <tips-button :tips="tips" @click="()=>onTipClicked('TipsButton1')">TipsButton1</tips-button>
    <br/>
    Button disabled when has tips
    <tips-button :tips="tips" disabledWhenTips @click="()=>onTipClicked('TipsButton2')">TipsButton2</tips-button>
  </div>
</template>

<script>
import TipsButton from "@components/general/TipsButton";

export default {
  name: "hw-tipsbutton-demo",
  components: {
    "tips-button": TipsButton,
  },
  data() {
    return {
      tips: ["something happend at 1", "something happend at 2"],
    };
  },
  methods: {
    onTipClicked(name) {
      this.$message.success(`${name} has been clicked`)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>