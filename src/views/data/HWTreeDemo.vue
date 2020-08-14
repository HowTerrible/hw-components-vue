<template>
  <div>
    <hw-tree :data="treeData[1]" textKey="name"></hw-tree>
  </div>
</template>

<script>
import Tree from "@components/data/Tree";

const treeData = {
  1: [
    {
      name: "level-1-1",
      id: 11,
      key: "1-1",
      children: [
        { name: "level-2-1", id: 21, key: "2-1" },
        {
          name: "level-2-2",
          id: 22,
          key: "2-2",
          children: [
            { name: "level-3-1", id: 31, key: "3-1" },
            { name: "level-3-2", id: 32, key: "3-2" },
          ],
        },
      ],
    },
    { name: "level-1-2", id: 12, key: "1-2", children: [] },
  ],
};

export default {
  name: "hw-tree-demo",
  components: {
    "hw-tree": Tree,
  },
  data() {
    return {
      treeData: treeData,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>