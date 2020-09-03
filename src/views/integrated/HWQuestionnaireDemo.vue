<template>
  <hw-card title="标准问卷">
    <questionnaire class="questionnaire-demo" :title="title" :items="items"></questionnaire>
  </hw-card>
</template>

<script>
import Card from "@components/layout/Card";
import Questionnaire from "@components/integrated/questionnaire/Questionnaire";

const config = {
  name: "测试问卷",
  items: [
    {
      id: 1,
      text: "1. 问卷问题1",
      selectionUnit: "分",
      indexMappingToValue: true, 
      // 如果选项是字符串且 indexMappingToValue = true
      // 下标对应各个选项的值, 即 0,1,2,3,4
      // 如果是字符串且 indexMappingToValue = false，值就是文本内容
      selections: ["问题1-1", "问题1-2", "问题1-3", "问题1-4", "问题1-5"],
    },
    {
      id: 2,
      text: "2. 问卷问题2",
      selectionUnit: "分",
      indexMappingToValue: true,
      selections: ["问题2-1", "问题2-2", "问题2-3", "问题2-4", "问题2-5"],
    },
    {
      id: 3,
      text: "3. 问卷问题3",
      selectionUnit: "分",
      indexMappingToValue: true,
      selections: ["问题3-1", "问题3-2", "问题3-3", "问题3-4", "问题3-5"],
    },
  ],
};

export default {
  components: {
    questionnaire: Questionnaire,
    "hw-card": Card,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.items = config.items;
    this.title = config.name;
  },
};
</script>

<style lang="stylus" scoped>
.questionnaire-demo {
  height: 400px;
}
</style>