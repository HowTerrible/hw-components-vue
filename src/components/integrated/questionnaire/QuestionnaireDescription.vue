<script>
export default {
  name: "questionnaire-description",
  render(h) {
    return this.render ? this.render(h, this.params) : <span></span>; 
  },
  props: {
    params: {},
    render: {
      type: Function,
      dfault: null,
    },
  },
};
</script>

<style lang="stylus" scoped></style>