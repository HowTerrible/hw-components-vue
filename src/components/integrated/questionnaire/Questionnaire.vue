<template>
  <div class="questionnaire-base">
    <div class="questionnaire-content">
      <div class="questionnaire-title">{{title}}</div>
      <transition>
        <keep-alive>
          <questionnaire-item></questionnaire-item>
        </keep-alive>
      </transition>
    </div>
    <div class="questionnaire-anchor">
      <questionnaire-anchor :selected-item="currentItem" :items="items" @click="onAnchorClicked"></questionnaire-anchor>
    </div>
  </div>
</template>

<script>
import QuestionnaireItem from "./QuestionnaireItem";
import QuestionnaireAnchor from "./QuestionnaireAnchor";
export default {
  name: "questionnaire",
  components: {
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
  },
  data() {
    return {
      currentItem: this.items[0],
    };
  },
  methods: {
    onAnchorClicked({ item, index }) {},
  },
};
</script>

<style lang="stylus" scoped>
.questionnaire-base {
  height: 100%;
  width: 100%;
}

.questionnaire-content {
  float: left;
  width: 70%;
  height: 100%;
}

.questionnaire-anchor {
  float: right;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
}
</style>