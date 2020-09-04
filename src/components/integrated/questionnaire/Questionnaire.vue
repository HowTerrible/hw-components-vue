<template>
  <div class="questionnaire-base" ref="questionnaire-base">
    <div class="questionnaire-content" :style="questionnaireStyle">
      <h2 class="questionnaire-title">{{title}}</h2>
      <!-- <transition> -->
      <keep-alive>
        <template v-for="item in items">
          <questionnaire-item
            @value-change="onValueChanged"
            v-model="item.value"
            v-if="currentItem === item"
            :key="item.id"
            :item="item"
          ></questionnaire-item>
        </template>
      </keep-alive>
      <!-- </transition> -->
      <div class="questionnaire-nav">
        <keep-alive>
          <hw-button
            size="small"
            class="prev"
            @click="currentIndex-- "
            v-if="currentIndex>0"
          >{{preText}}</hw-button>
        </keep-alive>
        <keep-alive>
          <hw-button
            size="small"
            class="next"
            @click="currentIndex++"
            v-if="currentIndex<(items.length-1)"
          >{{nextText}}</hw-button>
        </keep-alive>
      </div>
    </div>
    <div class="questionnaire-anchor" :style="anchorStyle">
      <questionnaire-anchor
        :width="anchorWidth"
        :selected-item="currentItem"
        :items="items"
        :unit="unit"
        @click="onAnchorClicked"
      ></questionnaire-anchor>
      <div class="questionnaire-total">
        <hw-item
          label-width="60"
          content-width="40px"
          :title="totalText"
          text-align="right"
        >{{total}} {{unit}}</hw-item>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@components/general/Button";
import Item from "@components/layout/HW-Item";
import QuestionnaireItem from "./QuestionnaireItem";
import QuestionnaireAnchor from "./QuestionnaireAnchor";
export default {
  name: "questionnaire",
  components: {
    "hw-item": Item,
    "hw-button": Button,
    "questionnaire-item": QuestionnaireItem,
    "questionnaire-anchor": QuestionnaireAnchor,
  },
  props: {
    title: {
      type: String,
      default: "",
      require: true,
    },
    items: {
      type: Array,
      default: () => [],
      require: true,
    },
    unit: {
      type: String,
      default: "",
    },
    anchorWidth: {
      type: Number,
      default: 150,
    },
    showTotal: {
      type: Boolean,
      default: false,
    },
    totalText: {
      type: String,
      default: "总分",
    },
    preText: {
      type: String,
      default: "上一个",
    },
    nextText: {
      type: String,
      default: "下一个",
    },
  },
  data() {
    return {
      currentItem: this.items[0],
      currentIndex: 0,
      questionnaireStyle: { width: "auto" },
      localValue: {},
      total: null,
    };
  },
  computed: {
    anchorStyle() {
      let result = {};
      result.width = this.anchorWidth + "px";
      return result;
    },
  },
  watch: {
    localValue(newValue) {},
    currentIndex(newValue) {
      this.currentItem = this.items[newValue];
    },
  },
  created() {},
  mounted() {
    let baseEl = this.$refs["questionnaire-base"];
    this.questionnaireStyle.width =
      baseEl.offsetWidth - this.anchorWidth + "px";
  },
  methods: {
    onAnchorClicked({ item, index }) {
      this.currentIndex = index;
    },
    onValueChanged(value, item) {
      if (value !== undefined || value !== null) {
        this.$set(this.localValue, item.id, value);
      } else {
        this.$delete(this.localValue, item.id);
      }
      this.calculateTotal();
    },
    calculateTotal() {
      let firstItem = this.localValue[0];
      this.total = Object.values(this.localValue).reduce(
        (pre, cur) => {
          return isNaN(cur) ? pre : pre + cur;
        },
        isNaN(firstItem) ? 0 : firstItem
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.questionnaire-base {
  height: 100%;
  width: 100%;
}

.questionnaire-title {
}

.questionnaire-content {
  float: left;
  height: 100%;
}

.questionnaire-nav {
  padding: 0 10px 0 0;

  .prev {
    float: left;
  }

  .next {
    float: right;
  }
}

.questionnaire-anchor {
  position: relative;
  float: right;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  padding: 0 0 0 10px;
  border-left: 1px solid $bordercolor-gray-light;
}

.questionnaire-total {
  position: absolute;
  bottom: 0;
}
</style>