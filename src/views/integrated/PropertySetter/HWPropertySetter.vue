<template>
  <div>
    <hw-card style="height:100%; width:100%">
      <div class="base">
        <div class="content">
          <template v-for="item in components">
            <div class="conponent-container" :key="item.id" @click="()=>onContainerClicked(item)">
              <component-generator v-bind="item" ref="item.id"></component-generator>
            </div>
          </template>
        </div>
        <div class="setter">
          <property-setter :all-components="components" :current="currentComponent"></property-setter>
        </div>
      </div>
    </hw-card>
  </div>
</template>

<script>
import PropertySetter from "./PropertySetter";
import Card from "@components/layout/Card";
import ComponentGenerator from "./component-generator";

const components = [
  {
    id: 1,
    render: (h, params) => {
      return <input type="text" placeholder={params.placeholder}></input>;
    },
    params: { placeholder: "this is text" },
  },
  {
    id: 2,
    render: (h) => {
      return <input type="text"></input>;
    },
    params: {},
  },
];
export default {
  name: "hw-property-setter",
  components: {
    "hw-card": Card,
    "component-generator": ComponentGenerator,
    "property-setter": PropertySetter,
  },
  data() {
    return {
      components: components,
      currentComponent: null,
    };
  },
  methods: {
    onContainerClicked(item) {
      this.currentComponent = item;
    },
  },
};
</script>

<style lang="stylus" scoped>
.base {
  height: 800px;

  >* {
    float: left;
    height: 100%;
  }
}

.content {
  width: 100%;
  padding-right: 200px;
}

.setter {
  width: 200px;
  margin-left: -200px;
  border-left: 1px dashed $bordercolor-gray-light;
}
</style>