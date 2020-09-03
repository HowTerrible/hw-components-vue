<template>
  <div class="hw-questionnaire-demo">
    <questionnaire :title="title" :items="items"></questionnaire>
  </div>
</template>

<script>
import Questionnaire from "@components/integrated/questionnaire/Questionnaire";

const config = {
  name: "测试问卷",
  items: [
    {
      key: 1,
      name: "1. 问卷问题1",
      selectionUnit: "分",
      indexMappingToValue: true, // 下标对应各个选项的值, 即 0,1,2,3,4
      selections: ["问题1-1", "问题1-2", "问题1-3", "问题1-4", "问题1-5"],
    },
    {
      key: 2,
      name: "2. 问卷问题2",
      selectionUnit: "分",
      indexMappingToValue: true,
      selections: ["问题2-1", "问题2-2", "问题2-3", "问题2-4", "问题2-5"],
    },
    {
      key: 3,
      name: "3. 问卷问题3",
      selectionUnit: "分",
      indexMappingToValue: true,
      selections: ["问题3-1", "问题3-2", "问题3-3", "问题3-4", "问题3-5"],
    },
  ],
};

export default {
  components: {
    questionnaire: Questionnaire,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    const config = config;
    this.items = config.items;
    this.title = config.name;
  },
};
</script>

<style lang="stylus" scoped>
.elderly-health-assessment {
  width: 100%;
  height: 100%;
}

export default {
}

</script>, <style lang='stylus'scoped>, .hw-questionnaire-demo {
}
</style>