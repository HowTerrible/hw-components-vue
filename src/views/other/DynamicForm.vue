<template>
  <Form ref="formValidate" :rules="rules" :model="model">
    <template v-for="(item,index) in config">
      <FormItem :label="item.label" :key="item.name + index" :prop="item.modelKey">
        <component :is="item.type" v-model="model[item.modelKey]" v-bind="item.attrs"></component>
      </FormItem>
    </template>
    <input type="button" @click="validateForm" value="CheckForm" />
  </Form>
</template>

<script>
import {
  Form,
  FormItem,
  Input,
  DatePicker,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
} from "view-design";

export default {
  name: "dynmic-form",
  components: {
    Form,
    FormItem,
    Input,
    DatePicker,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
  },
  props: {
    config: {
      type: Array,
      default: () => [],
    },
    model: {
      type: Object,
      default: () => ({}),
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    validateForm() {
      this.$refs["formValidate"].validate();
    },
  },
};
</script>

<style lang="stylus" scoped></style>