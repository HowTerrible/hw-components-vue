export default {
  created() {
    this.avalibleEventTypes.push(
      {
        name: "setValue",
        component: "set-value",
        params: {

        }
      });
  },
  methods: {
    setValue({ sourceType, value }) {
      let templateValue;
      if (sourceType === 1) {
        templateValue = value;
      } else if (sourceType === 2) {
        templateValue = this.$store.getters.get_globalData(value)
      }

      if (typeof this.valueKey === "string") {
        this[this.valueKey] = templateValue
      } else {
        // 暂时不想兼容其他格式
        let temp = this, keyLength = this.valueKey.length;
        // 因为层级里面肯定是对象，所以使用temp保存引用向里面递归，
        // 找到最后一层的前一层，然后手动设值
        for (var i = 0; i < keyLength - 1; i++) {
          temp = this[this.valueKey[i]]
        }
        temp[this.valueKey[keyLength - 1]] = [templateValue]
      }
    },
  },
}