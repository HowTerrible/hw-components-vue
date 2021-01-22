<template>
  <div>
    <hw-breadcrumb title="Drawer"> </hw-breadcrumb>
  </div>
</template>

<script>
import Button from "@components/general/Button";
import Card from "@components/layout/Card";
import Breadcrumb from "@components/navigation/breadcrumb";
export default {
  name: "hw-drawer-demo",
  components: {
    "hw-breadcrumb": Breadcrumb,
    "hw-button": Button,
    "hw-card": Card,
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style lang="stylus" scoped></style>
