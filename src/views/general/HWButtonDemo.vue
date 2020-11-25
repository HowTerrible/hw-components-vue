<template>
  <div>
    <hw-card title="Delete Button">
      <hw-delete-button
        :text="item"
        @delete-item="onItemDelete"
        v-for="item in deleteBtns"
        :key="item"
      ></hw-delete-button>
    </hw-card>
  </div>
</template>

<script>
import Card from "@components/layout/Card";
import Button from "@components/general/Button";
import DeleteButton from "@components/general/DeleteBtn";
import moment from "moment";

const testData = ["c", "c++", "java", "c++++", "c++++++"];

export default {
  name: "hw-button-demo",
  components: {
    "hw-button": Button,
    "hw-delete-button": DeleteButton,
    "hw-card": Card,
  },
  data() {
    return {
      deleteBtns: [...testData],
    };
  },
  created() {
    console.log(moment().diff(moment("2022-04-12 19:29:00"), 'days'));
  },
  methods: {
    moment,
    onItemDelete(data) {
      this.deleteBtns.splice(
        this.deleteBtns.findIndex((item) => item === data),
        1
      );
    },
  },
};
</script>

<style lang="stylus" scoped></style>