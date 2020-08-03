<template>
  <div class="hw-card">
    <div class="hw-card-title"></div>
    <div class="hw-card-content"></div>
    <div class="hw-card-footer"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.hw-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .hw-card-title {
    height: 40px;
  }

  .hw-card-content {
    flex: 1;
  }

  .hw-card-footer {
    height: 40px;
  }
}

.hw-card:hover {
  box-shadow: $box-shadow;
}
</style>