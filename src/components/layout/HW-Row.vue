<template>
  <div class="hw-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hw-row"
};
</script>

<style lang="less" scoped>
.hw-row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>