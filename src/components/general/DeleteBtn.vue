<template>
  <div class="hw-deletable-item">
    <span class="hw-delete-item-btn" @click="onDeleteClick"></span>
    <span class="hw-delete-item-text">{{text}}</span>
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
    data: {
      type: [String, Number, Boolean, Array, Object],
      default: null,
    },
  },
  methods: {
    onDeleteClick() {
      this.$emit("delete-item", this.data || this.text);
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
  margin: 2px 2px;
  overflow: hidden;
}

.hw-delete-item-btn {
  transition-duration: 300ms;
  position: relative;
  cursor: pointer;
  display: inline-block;
  width: 20px;
  height: 100%;
  background-color: white;
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

.hw-delete-item-text {
  cursor: text;
  display: inline-block;
  position: relative;
  height: 100%;
  vertical-align: top;
}

.hw-deletable-item:hover>.hw-delete-item-btn {
  background-color: rgb(255, 98, 36);
}

.hw-deletable-item:hover>.hw-delete-item-btn::before {
  background-color: white;
}

.hw-deletable-item:hover>.hw-delete-item-btn:hover {
  background-color: white;
}

.hw-deletable-item:hover>.hw-delete-item-btn:hover::before {
  background-color: rgb(255, 98, 36);
}
</style>