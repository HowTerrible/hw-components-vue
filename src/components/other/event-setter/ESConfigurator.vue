<template>
  <div class="es-configurator-base">
    <v-steps style="width:100%" :current="currentStep">
      <v-step title="触发事件"></v-step>
      <v-step title="目标组件"></v-step>
      <v-step title="选择操作"></v-step>
      <v-step title="操作参数"></v-step>
    </v-steps>
    <hw-item-group v-if="currentStep === 0" title="选择触发事件">
      <hw-button>不用点，默认就是click事件</hw-button>
      <div class="es-configurator-stepbtn">
        <hw-button size="small" class="next-btn" @click="currentStep++">下一步</hw-button>
      </div>
    </hw-item-group>
    <hw-item-group v-if="currentStep === 1" title="选择联动组件">
      <template v-for="item in components">
        <hw-checkbox
          v-if="item.key!==selectedSource.key"
          v-model="selectedTarget"
          :true-value="item"
          :false-value="null"
          :key="item.key"
        >{{item.key}}</hw-checkbox>
      </template>
      <div class="es-configurator-stepbtn">
        <hw-button size="small" class="pre-btn" @click="currentStep--">上一步</hw-button>
        <hw-button
          size="small"
          class="next-btn"
          :disabled="!selectedTarget"
          @click="currentStep++"
        >下一步</hw-button>
      </div>
    </hw-item-group>
    <hw-item-group v-if="currentStep === 2" title="设置联动事件">
      <hw-checkbox
        v-for="item in avalibleEvents"
        :key="item.name"
        v-model="selectedEvent"
        :true-value="item"
        :false-value="null"
      >{{item.name}}</hw-checkbox>
      <div class="es-configurator-stepbtn">
        <hw-button size="small" class="pre-btn" @click="currentStep--">上一步</hw-button>
        <hw-button
          size="small"
          :disabled="selectedEvent ===null"
          class="next-btn"
          @click="currentStep++"
        >下一步</hw-button>
      </div>
    </hw-item-group>
    <hw-item-group v-if="currentStep === 3" title="设置事件参数">
      <component
        :is="selectedEvent.component"
        :target="selectedTarget"
        :params="selectedEvent.params"
        v-model="eventObject"
      ></component>
      <div class="es-configurator-stepbtn">
        <hw-button size="small" class="pre-btn" @click="currentStep--">上一步</hw-button>
      </div>
    </hw-item-group>
    <hw-button @click="onSaveEventConfig">保存事件配置</hw-button>
  </div>
</template>

<script>
import { Steps, Step } from "view-design";
import Item from "@components/layout/Item";
import ItemGroup from "@components/layout/ItemGroup";
import Button from "@components/general/Button";
import Checkbox from "@components/form/Checkbox";
import {
  SetValue,
  GetValue,
} from "../../../components/other//event-setter/index";
export default {
  name: "es-configurator",
  components: {
    "v-steps": Steps,
    "v-step": Step,
    "hw-item": Item,
    "hw-item-group": ItemGroup,
    "set-value": SetValue,
    "get-value": GetValue,
    "hw-checkbox": Checkbox,
    "hw-button": Button,
  },
  props: {
    selectedSource: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      selectedEvent: null,
      selectedTarget: null,
      eventObject: {},
      components: Object.entries(
        this.$store.getters.get_pluginsrefs()
      ).map((item) => ({ key: item[0], item: item[1] })),
      currentStep: 0,
    };
  },
  computed: {
    avalibleEvents() {
      let result = [];
      if (
        this.selectedTarget &&
        this.selectedTarget.item &&
        this.selectedTarget.item.getAvalibleEventTypes
      ) {
        result = this.selectedTarget.item.getAvalibleEventTypes();
      }
      return result;
    },
  },
  methods: {
    onSaveEventConfig() {
      this.$emit("save-event", this.eventObject);
    },
  },
};
</script>

<style lang="stylus" scoped>
.es-configurator-base {
}

.es-configurator-stepbtn {
  width: 100%;
  overflow: hidden;
  padding: 5px 20px;
  border-top: 1px solid $bordercolor-gray-light;
  border-bottom: 1px solid $bordercolor-gray-light;

  .pre-btn {
    float: left;
  }

  .next-btn {
    float: right;
  }
}
</style>