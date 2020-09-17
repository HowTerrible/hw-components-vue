<template>
  <div>
    <hw-card title="事件配置器">
      <div class="demo-container" style="height:600px">
        <div class="demo-center">
          <div class="demo-inner">
            <es-checkbox ref="checkbox1" v-model="checkboxValue" :true-value="1">测试多选框1</es-checkbox>
            <es-checkbox ref="checkbox2" v-model="checkboxValue" :true-value="2">测试多选框2</es-checkbox>
            <es-button ref="button1" :custom="eventContainer.button1">测试点击 1</es-button>
            <es-button ref="button2" :custom="eventContainer.button2">测试点击 2</es-button>
            <es-input ref="input1" placeholder="input1"></es-input>
            <es-input ref="input2" placeholder="input2"></es-input>
            <es-input ref="input3" placeholder="input3"></es-input>
            <es-input ref="input4" placeholder="input4"></es-input>
            <div :style="{minHeight:'40px'}">选中checkbox: {{checkboxValue}}</div>
          </div>
        </div>

        <div class="demo-left">
          <es-configurator
            v-if="selectedComponent.key"
            @save-event="onSaveEventConfig"
            :selected-source="selectedComponent"
          ></es-configurator>
          <!-- <hw-item-group title="选择触发事件">
            <hw-button>不用点，默认就是click事件</hw-button>
          </hw-item-group>
          <hw-item-group title="选择联动组件">
            <template v-for="item in components">
              <hw-checkbox
                v-if="item.key!==selectedComponent.key"
                v-model="selectedTarget"
                :true-value="item"
                :key="item.key"
              >{{item.key}}</hw-checkbox>
            </template>
          </hw-item-group>
          <hw-item-group title="设置联动事件">
            <hw-checkbox v-model="selectedEvent" true-value="set-value">setValue</hw-checkbox>
            <hw-checkbox v-model="selectedEvent" true-value="get-value">getValue</hw-checkbox>
          </hw-item-group>
          <hw-item-group title="设置事件参数">
            <component :is="selectedEvent" :target="selectedTarget" v-model="eventObject"></component>
          </hw-item-group>
          <hw-button @click="onSaveEventConfig">保存事件配置</hw-button>-->
        </div>

        <div class="demo-right">
          <div
            class="current-select-component"
            style="height: 40px;line-height:40px;"
          >当前选中了组件：{{selectedComponent.key}}</div>
          <ul class="components-list">
            <es-component-item
              v-for="item in components"
              @select="(id, component)=>selectedComponent = {key:id, item:component}"
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
import ESConfigurator from "@components/other/event-setter/ESConfigurator";
import Card from "@components/layout/Card";
import {
  ESButton,
  ESCheckbox,
  ESComponentItem,
  ESInput,
} from "../../../components/other//event-setter/index";

export default {
  name: "event-setter-demo",
  components: {
    "es-button": ESButton,
    "es-checkbox": ESCheckbox,
    "es-input": ESInput,
    "es-component-item": ESComponentItem,
    "hw-card": Card,
    "es-configurator": ESConfigurator,
  },
  data() {
    return {
      checkboxValue: null,
      eventContainer: {},
      components: [],
      selectedComponent: {},
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
            this.$set(this.eventContainer, item[0], {
              id: item[0],
              eventListener: {},
            });
            this.$store.commit("add_pluginsrefs", component);
            this.components.push(component);
          })
        : null;
    }, 100);
  },
  methods: {
    onSaveEventConfig(eventObj) {
      console.log(eventObj);
      this.$emit("save-event", eventObj);
      if (eventObj.name === "getValue") {
        this.$store.commit("addComponentGlobalData", {
          key: eventObj.params.key,
          value: undefined,
        });
      }
      this.$set(
        this.eventContainer[this.selectedComponent.key].eventListener,
        `click$$${eventObj.target}$$${eventObj.name}`,
        eventObj
      );
      this.selectedComponent = {};
    },
  },
};
</script>

<style lang="stylus" scoped>
.demo-container>* {
  float: left;
  height: 100%;
}

.demo-center {
  width: 100%;
}

.demo-inner {
  margin: 0 300px;
}

.demo-left {
  width: 300px;
  margin-left: -100%;
  border-right: 1px dashed $bordercolor-gray-light;
}

.demo-right {
  width: 300px;
  margin-left: -300px;
  padding: 10px;
  border-left: 1px dashed $bordercolor-gray-light;
}
</style>