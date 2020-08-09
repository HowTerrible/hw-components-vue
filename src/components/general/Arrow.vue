<template>
  <span class="hw-arrow" :class="[direction]" @click="$emit('click')"></span>
</template>

<script>
export default {
  name: "hw-arrow",
  props: {
    direction: {
      type: String,
      default: "up",
      validator: ["up", "right", "down", "left"].indexOf() >= 0,
    },
  },
};
</script>

<style lang="stylus" scoped>
.hw-arrow {
  position: relative;
  display: inline-block;
  height: 20px;
  width: 20px;
}

.hw-arrow:before {
  position: absolute;
  content: '';
  display: block;
  height: 40%;
  width: 40%;
  top: 25%;
  left: 25%;
  border-top: 1px solid black;
  border-left: 1px solid black;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}

.hw-arrow.up:before {
  transform: rotate(45deg);
}

.hw-arrow.right:before {
  transform: rotate(135deg);
}

.hw-arrow.down:before {
  transform: rotate(225deg);
}

.hw-arrow.left:before {
  transform: rotate(315deg);
}
</style>