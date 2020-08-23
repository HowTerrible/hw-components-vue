<template>
  <div>
    <button @click="loading = !loading">点击爆炸</button>
    <hw-card title="loading" v-loading="loading">
      <p>水能喝是怎么回事呢？水相信大家都很熟悉，但是水能喝是怎么回事呢，下面就让小编带大家一起了解吧。</p>
      <p>水能喝，其实就是可以喝，大家可能会很惊讶水怎么会能喝呢？但事实就是这样，小编也感到非常惊讶。</p>
      <p>这就是关于水能喝的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！</p>
    </hw-card>
  </div>
</template>

<script>
import Card from "@components/layout/Card";
import Loading from "@directives/loading.js";
export default {
  name: "hw-loading-demo",
  directives: { Loading },
  components: {
    "hw-card": Card,
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style lang="stylus" scoped></style>