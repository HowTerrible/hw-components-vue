<template>
  <div>
    <dynamic-form :config="config" :model="model" :rules="rules"></dynamic-form>
  </div>
</template>

<script>
import DynamicForm from "./DynamicForm";
const componentsConfig = [
  {
    type: "Input",
    name: "input1",
    label: "input1",
    modelKey: "input1",
    attrs: {
      type: "text",
    },
  },
  {
    type: "Input",
    name: "input2",
    label: "input2",
    modelKey: "input2",
    attrs: {
      type: "number",
    },
  },
  {
    type: "DatePicker",
    name: "input3",
    label: "input3",
    modelKey: "input3",
    attrs: {
      type: "date",
    },
  },
];

const rules = { input1: [{ required: true, type: 'string', message: 'Please select time', trigger: 'change' }] };
export default {
  name: "dynamic-demo",
  components: {
    "dynamic-form": DynamicForm,
  },
  data() {
    return {
      model: {},
    };
  },
  created() {
    this.config = componentsConfig;
    this.rules = rules;
  },
};
</script>

<style lang="stylus" scoped></style>