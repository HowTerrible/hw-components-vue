<template>
  <div>
    <hw-card title="Normal Tree" v-if="false">
      <hw-tree :data="treeData[1]" textKey="name"></hw-tree>
    </hw-card>
    <hw-card title="Selected Tree Click Text To Expand">
      <hw-tree
        :data="treeData[1]"
        v-model="selectedMulData"
        @select="onItemSelected"
        single
        textKey="name"
      ></hw-tree>
    </hw-card>
    <hw-card title="Selected Tree Click Text To Expand">
      <hw-tree :data="treeData[1]" v-model="selectedMulData" textKey="name"></hw-tree>
    </hw-card>
  </div>
</template>

<script>
import Tree from "@components/data/Tree";
import Card from "@components/layout/Card";

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
            { name: "level-3-3", id: 33, key: "3-3" },
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
    "hw-card": Card,
    "hw-tree": Tree,
  },
  data() {
    return {
      treeData: treeData,
      selectedMulData: [],
    };
  },
  methods: {
    onItemSelected() {
      console.log("safasfdg")
    },
  },
};
</script>

<style lang="scss" scoped>
</style>