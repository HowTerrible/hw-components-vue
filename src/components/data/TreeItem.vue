<template>
  <li class="hw-tree-item-base" :class="classes">
    <hw-arrow
      v-if="hasChildren"
      :direction="expand?'down':'right'"
      @click="()=>{expand=!expand}"
      class="hw-tree-item-arrow"
    ></hw-arrow>
    <span class="hw-item-text" @click="onTextClicked">{{data[textKey]}}</span>
    <ul v-if="hasChildren" class="hw-tree-item-children" :style="itemChildrenStyle">
      <template v-for="item in data[childrenKey]">
        <transition :key="item[idKey]" name="hw-tree-item">
          <hw-tree-item
            :clickTextToExpand="clickTextToExpand"
            v-if="expand"
            :key="item[idKey]"
            :data="item"
            :textKey="textKey"
            :childrenKey="childrenKey"
          ></hw-tree-item>
        </transition>
      </template>
    </ul>
  </li>
</template>

<script>
import Arrow from "@components/general/Arrow";
export default {
  name: "hw-tree-item",
  components: {
    "hw-arrow": Arrow,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    select: {
      type: Boolean,
      default: false,
    },
    selectedItem:{
      type: Boolean,
      defalut: null
    },
    idKey: {
      type: String,
      default: "id",
    },
    textKey: {
      type: String,
      default: "textKey",
    },
    childrenKey: {
      type: String,
      default: "children",
    },
    clickTextToExpand: {
      type: Boolean,
      default: false,
    },
    multiply: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checked: false,
      localSelected: false,
      expand: false,
      itemChildrenStyle: {},
    };
  },
  computed: {
    hasChildren() {
      let children = this.data[this.childrenKey];
      return children && Array.isArray(children) && children.length > 0;
    },
    classes() {
      let result = [];
      this.localSelected ? result.push("selected") : null;
      return result;
    },
  },
  watch: {
    expand(newValue) {
      this.$dispatch("", newValue, this.data);
      this.changeChildrenStyle();
    },
    localSelected(newVal) {
      if (newVal) {
        this.$dispatch("select", this.data);
      }
    },
  },
  methods: {
    changeChildrenStyle() {
      let style = this.itemChildrenStyle;
    },
    onTextClicked() {
      if (!this.localSelected) {
        this.localSelected = true;
      }
      if (this.clickTextToExpand) {
        this.expand = !this.expand;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.hw-tree-item-base {
  padding-left: 20px;
  position: relative;
  list-style: none;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  cursor: pointer;
}

.hw-tree-item-arrow {
  position: absolute;
  top: 0;
  left: 0;
}

.hw-tree-item-arrow:hover {
  opacity: 0.6;
}

.hw-tree-item-base.selected > .hw-item-text {
  background-color: $backcolor-blue-select;
}

.hw-item-text {
  cursor: pointer;
  padding: 0 4px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
}

.hw-tree-item-children {
  overflow: hidden;
}

.hw-tree-item-enter, .hw-tree-item-leave-to {
  height: 0px;
}

.hw-tree-item-enter-to, .hw-tree-item-leave {
  height: 20px;
}
</style>