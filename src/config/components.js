export const componentsConfig = [
  {
    name: "HWTreeDemo",
    path: "/data/HWTreeDemo",
    group: "data",
    component: () => import("../views/data/HWTreeDemo.vue")
  },
  {
    name: "HWTipsButtonDemo",
    group: "general",
    path: "/general/HWTipsButtonDemo",
    component: () => import("../views/general/HWTipsButtonDemo.vue")
  }
]

export default {}