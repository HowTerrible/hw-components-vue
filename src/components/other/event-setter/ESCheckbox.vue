<template>
  <hw-checkbox v-model="localValue" v-on="$listeners" v-bind="$attrs">
    <slot></slot>
  </hw-checkbox>
</template>

<script>
import Checkbox from "@components/form/Checkbox";
import ESMixin from "./event-setter-mixin";
import FormMixin from "./es-form-mixin";
export default {
  name: "es-checkbox",
  mixins: [ESMixin, FormMixin],
  components: {
    "hw-checkbox": Checkbox,
  },
  methods: {
    privodeEvents() {
      return{
        
      }
    }
  },
};
</script>

<style lang="stylus" scoped></style>