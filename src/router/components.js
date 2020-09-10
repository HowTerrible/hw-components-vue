const integratedComponents = [
  {
    name: "Questionnaire",
    path: "/integrated/HWQuestionnaireDemo",
    group: "integrated",
    component: () => import("../views/integrated/HWQuestionnaireDemo")
  }
]
const dataComponents = [
  {
    name: "TreeDemo",
    path: "/data/HWTreeDemo",
    group: "data",
    component: () => import("../views/data/HWTreeDemo.vue")
  },
]
const layoutComponents = [
  {
    name: "CheckboxDemo",
    group: "layout",
    path: "/layout/HWCheckboxDemo",
    component: () => import("../views/form/HWCheckboxDemo.vue")
  },
  {
    name: "LoadingDemo",
    group: "layout",
    path: "/layout/HWLoadingDemo",
    component: () => import("../views/general/HWLoadingDemo.vue")
  },
  {
    name: "ButtonDemo",
    group: "layout",
    path: "/layout/HWButtonDemo",
    component: () => import("../views/general/HWButtonDemo.vue")
  },
  {
    name: "PanelDemo",
    group: "layout",
    path: "/layout/HWPanelDemo",
    component: () => import("../views/layout/HWPanelDemo.vue")
  },
  {
    name: "CollapsiblePanelDemo",
    group: "layout",
    path: "/layout/HWCollapsiblePanelDemo",
    component: () => import("../views/layout/HWCollapsiblePanelDemo.vue")
  },
  {
    name: "CardDemo",
    group: "layout",
    path: "/layout/HWCardDemo",
    component: () => import("../views/layout/HWCardDemo.vue")
  },
  {
    name: "DraggableContainer",
    group: "layout",
    path: "/layout/HWDraggableContainerDemo",
    component: () => import("../views/layout/HWDraggableContainerDemo.vue")
  },
]
const generalComponents = [
  {
    name: "TipsButtonDemo",
    group: "general",
    path: "/general/HWTipsButtonDemo",
    component: () => import("../views/general/HWTipsButtonDemo.vue")
  },
  {
    name: "Echart",
    group: "general",
    path: "/general/HWEchartDemo",
    component: () => import("../views/general/HWEchartDemo.vue")
  },
]

const otherDemo = [
  {
    name: "DynamicComponent",
    group: "other",
    path: "/other/DynamicComponent",
    component: () => import("../views/other/DynamicComponentDemo.vue")
  },
]

export const componentsConfig = [
  ...dataComponents,
  ...layoutComponents,
  ...generalComponents,
  ...integratedComponents,
  ...otherDemo
]

export default {}