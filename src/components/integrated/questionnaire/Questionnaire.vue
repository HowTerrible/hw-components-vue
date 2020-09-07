<template>
  <div class="questionnaire-base" ref="questionnaire-base">
    <div class="questionnaire-main" :style="questionnaireStyle">
      <h2 class="questionnaire-title">{{title}}</h2>
      <div class="questionnaire-content">
        <div class="questionnaire-inner">
          <!-- <transition> -->
          <keep-alive>
            <template v-for="item in items">
              <questionnaire-item
                @value-change="onValueChanged"
                v-model="item.value"
                v-if="currentItem === item"
                :key="item.id"
                :unit="unit"
                :item="item"
              ></questionnaire-item>
            </template>
          </keep-alive>
          <!-- </transition> -->
        </div>
      </div>
      <div class="questionnaire-nav prev" @click="currentIndex-- " v-show="currentIndex>0">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div
        class="questionnaire-nav next"
        @click="currentIndex++"
        v-show="currentIndex<(items.length-1)"
      >
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
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
import Arrow from "@components/general/Arrow";
import Item from "@components/layout/HW-Item";
import QuestionnaireItem from "./QuestionnaireItem";
import QuestionnaireAnchor from "./QuestionnaireAnchor";
export default {
  name: "questionnaire",
  components: {
    "hw-item": Item,
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
  position: relative;
  width: 100%;
  overflow: hidden;
}

.questionnaire-main {
  position: relative;
  float: left;
  height: 100%;
  overflow: hidden;
  padding-top: 30px;
  padding-bottom: 60px;
}

.questionnaire-title {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.questionnaire-content {
  width: 100%;
  float: left;

  .questionnaire-inner {
    padding: 0 30px;
  }
}

.questionnaire-nav {
  transition-duration: $transition-duration;
  position: relative;
  float: left;
  width: 30px;
  height: 100%;
  user-select: none;
  cursor: pointer;
  opacity: 0.6;

  >* {
    font-size: 16x;
    position: absolute;
    top: 50%;
    left: 40%;
  }
}

.questionnaire-nav:hover {
  opacity: 1;

  >* {
    color: $color-blue;
  }
}

.questionnaire-nav.prev {
  margin-left: -100%;
  border-left: 1px solid $bordercolor-gray-light;
  background: linear-gradient(to right, rgba($backcolor-gray, 0.3), rgba(0, 0, 0, 0));
}

.questionnaire-nav.next {
  margin-left: -30px;
  border-right: 1px solid $bordercolor-gray-light;
  background: linear-gradient(to left, rgba($backcolor-gray, 0.3), rgba(0, 0, 0, 0));
}

// .questionnaire-nav {
// bottom: 0px;
// left: 0;
// right: 0;
// height: 28px;
// margin: 2px 0;
// padding: 2px 10px 0 0;

// .prev {
// float: left;
// }

// .next {
// float: right;
// }
// }
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
  user-select: none;
  bottom: 0;
}
</style>