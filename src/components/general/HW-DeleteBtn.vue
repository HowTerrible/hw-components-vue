<template>
  <div class="hw-deletable-item">
    <span class="hw-delete-item-btn"></span>
    {{text }}
  </div>
</template>

<script>
export default {
  name: "delete-button",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="stylus" scoped>
.hw-deletable-item {
  cursor: default;
  transition-duration: 300ms;
  position: relative;
  min-width: 64px;
  height: 20px;
  line-height: 18px;
  display: inline-block;
  border-radius: 3px;
  padding-right: 4px;
  border: 1px solid #ddd;
  margin: 2px 0;
}

.hw-delete-item-btn {
  transition-duration: 300ms;
  position: relative;
  cursor: pointer;
  display: inline-block;
  width: 20px;
  height: 100%;
  background-color: white;
  vertical-align: middle;
  margin-right: 4px;
}

.hw-delete-item-btn::before {
  transition-duration: 300ms;
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -2px;
  margin-left: -5px;
  height: 4px;
  width: 10px;
  background-color: rgb(255, 98, 36);
}

.hw-deletable-item:hover>.hw-delete-item-btn {
  background-color: rgb(255, 98, 36);
}

.hw-deletable-item:hover>.hw-delete-item-btn::before {
  background-color: white;
}
</style>