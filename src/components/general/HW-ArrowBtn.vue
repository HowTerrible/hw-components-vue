<template>
  <span class="hw-arrow-btn">
    <span class="hw-arrow"></span>
  </span>
</template>

<script>
export default {
  props: {
    direcrtion: {
      type: String,
      default: "up",
      validator: ["up", "right", "down", "left"].indexOf() >= 0,
    },
  },
};
</script>

<style lang="stylus" scoped>
.hw-arrow-btn {
  position relative
  display: block;
  height: 20px;
  width: 20px;
  margin: 2px;
}

.hw-arrow {
  display: block;
  height: 40%;
  width: 40%;
  border-top: 1px solid black;
  border-left: 1px solid black;
   transform rotate(45deg)
}
</style>