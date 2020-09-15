<template>
  <div>
    <hw-card title="事件配置器">
      <div class="demo-container" style="height:600px">
        <div class="demo-center">
          <div class="demo-inner">
            <es-checkbox ref="checkbox1" v-model="checkboxValue" :true-value="1">测试多选框1</es-checkbox>
            <es-checkbox ref="checkbox2" v-model="checkboxValue" :true-value="2">测试多选框2</es-checkbox>
            <es-button ref="button1" :custom="button1Event">测试点击 1</es-button>
            <es-button ref="button2" :custom="button2Event">测试点击 2</es-button>
            <div :style="{minHeight:'40px'}">选中checkbox: {{checkboxValue}}</div>
          </div>
        </div>
        <div class="demo-right">
          <div
            class="current-select-component"
            style="height: 40px;line-height:40px;"
          >当前选中了组件：{{selectComponent.key}}</div>
          <ul class="components-list">
            <es-component-item
              v-for="item in components"
              @select="(id, component)=>selectComponent = {key:id, item:component}"
              :key="item.key"
              :id="item.key"
              :component="item.item"
            ></es-component-item>
          </ul>
        </div>
      </div>
    </hw-card>
  </div>
</template>

<script>
import Card from "@components/layout/Card";
import {
  ESButton,
  ESCheckbox,
  ESComponentItem,
} from "../../../components/other//event-setter/index";

export default {
  name: "event-setter-demo",
  components: {
    "es-button": ESButton,
    "es-checkbox": ESCheckbox,
    "es-component-item": ESComponentItem,
    "hw-card": Card,
  },
  data() {
    return {
      checkboxValue: null,
      button1Event: {
        id: "button1",
        eventListener: { name: "setValue", params: 1, target: "checkbox1" },
      },
      button2Event: {
        id: "button2",
        eventListener: { name: "setValue", params: 2, target: "checkbox1" },
      },
      components: [],
      selectComponent: {},
    };
  },
  mounted() {
    setTimeout(() => {
      this.$refs
        ? Object.entries(this.$refs).forEach((item) => {
            let component = {
              key: item[0],
              item: item[1],
            };
            this.$store.commit("add_pluginsrefs", component);
            this.components.push(component);
          })
        : null;
    }, 100);
  },
};
</script>

<style lang="stylus" scoped>
.demo-center, .demo-right {
  float: left;
  height: 100%;
}

.demo-center {
  width: 100%;
}

.demo-inner {
  margin-right: 300px;
}

.demo-right {
  width: 300px;
  margin-left: -300px;
  padding: 10px;
  border-left: 1px dashed $bordercolor-gray-light;
}
</style>