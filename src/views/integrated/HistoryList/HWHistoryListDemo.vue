<template>
  <hw-card title="可编辑历史" style="width: 600px">
    <hw-button @click="data.push({})">新增一项</hw-button>
    <editable-history name="高铁出行历史" :data="data">
      <template v-slot:default="slotProps">
        <train-history
          :key="slotProps.data.id"
          :data="slotProps.data"
        ></train-history
      ></template>
    </editable-history>
  </hw-card>
</template>

<script>
import Button from "@components/general/Button";
import Card from "@components/layout/Card";
import EditableHistory from "@components/integrated/editable-history-list/HistoryContainer";
import HistoryItemTrain from "./HistoryItem_Train";
export default {
  name: "hw-history-list-demmo",
  components: {
    "hw-card": Card,
    "hw-button": Button,
    "editable-history": EditableHistory,
    "train-history": HistoryItemTrain,
  },
  data() {
    return {
      data: [
        {
          id: "D12314",
          type: "动车",
          time: "2020-10-10 22:20:10",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>