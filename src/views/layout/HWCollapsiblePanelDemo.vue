<template>
  <div>
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

    <button @click="()=>{open=!open}">{{open?"open":"close"}}</button>
    <hw-collapsible-panel
      v-model="open"
      :height="40"
      :maxHeight="100"
      class="test-panel"
      collapseBtnPosition="left"
      title="外部控制展开"
    >
      <div class="panel-content">
        <p>水能喝是怎么回事呢？水相信大家都很熟悉，但是水能喝是怎么回事呢，下面就让小编带大家一起了解吧。</p>
        <p>水能喝，其实就是可以喝，大家可能会很惊讶水怎么会能喝呢？但事实就是这样，小编也感到非常惊讶。</p>
        <p>这就是关于水能喝的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！</p>
      </div>
    </hw-collapsible-panel>
  </div>
</template>

<script>
import CollapsiblePanel from "@components/layout/CollapsiblePanel";
export default {
  name: "hw-Collapsible-panel-demo",
  components: {
    "hw-collapsible-panel": CollapsiblePanel,
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style lang="stylus" scoped></style>