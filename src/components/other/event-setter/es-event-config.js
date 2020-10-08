
let configs = [
  {
    name: "openWindow",
    params: [
      {
        type: "url"
      },
    ]
  },
  {
    name: "openPage",
    params: {
      type: "url"
    },
  },
  {
    name: "setValue",
    aliasName: "向目标控件中设置值",
    description: "将固定值或2全局变量中的某个值设置给目标组件",
    params: [
      {
        name: "全局变量的键",
        type: "string",
        // 判断键有没有被使用
        validator: function (key) { this.$store.getters.get_globalData_keys.indexOf(key) < 0 }
      }
    ],
  },
  {
    name: "getValue",
    aliasName: "获得控件值",
    description: "获取控件值并存储到全局变量中",
    params: [
      {
        name: "全局变量的键",
        type: "select",
        selections: function () { return this.$store.getters.get_globalData_keys }
      }
    ],
  },
  {
    name: "getPageParams",
    params: ""
  },
  {
    name: "setDisplay",
  },
  {
    name: "setHide",
  },
  {
    name: "setEnable"
  },
  {
    name: "setDisable",
  },

]

export default configs