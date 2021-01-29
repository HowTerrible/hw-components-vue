<template>
  <input class="hw-input" type="text" v-model="localValue" />
</template>

<script>
import FormMixin from "../mixins/form-mixin";
export default {
  mixins: [FormMixin],
};
</script>

<style lang="stylus" scoped>
.hw-input{
  display: inline-block;
  height: $height;
}

.hw-input.small{
  height: $hegiht-small
}
</style>
