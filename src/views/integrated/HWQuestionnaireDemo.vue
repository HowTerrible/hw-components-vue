<template>
  <hw-card title="标准问卷" style="width: 600px">
    <questionnaire
      class="questionnaire-demo"
      :anchorWidth="300"
      :title="config.name"
      :unit="config.unit"
      :items="config.items"
      :description="config.description"
      :ignoreValue="config.ignoreValue"
      :ignoreValueAnchor="config.ignoreValueAnchor"
      v-model="value"
      @save="onSave"
      showTotal
      enableSaveWhenFinished
    ></questionnaire>
  </hw-card>
</template>

<script>
import Card from "@components/layout/Card";
import Questionnaire from "@components/integrated/questionnaire/Questionnaire";

const config = {
  name: "测试问卷",
  unit: "分",
  ignoreValue: ({ value }) => value < 0, // 返回true则忽略此值
  ignoreValueAnchor: ({ value }, config) =>
    config.selections.find((item) => item.value === value).text,
  items: [
    {
      id: 1,
      title: "1. 问卷问题1",
      indexMappingToValue: true,
      // 如果选项是字符串且 indexMappingToValue = true
      // 下标对应各个选项的值, 即 0,1,2,3,4
      // 如果是字符串且 indexMappingToValue = false，值就是文本内容
      selections: [
        "问题1-1",
        "问题1-2 特长特长特长特长特长特长特长特长特长特长特长",
        "问题1-3 假设有个文本特别特别特别特别特别特别特别特别特别特别特别特别特别特别长的",
        "问题1-4",
        "问题1-5",
      ],
    },
    {
      id: 2,
      title: "2. 问卷问题2 问卷问题特别特别长",
      indexMappingToValue: true,
      selections: ["问题2-1", "问题2-2", "问题2-3", "问题2-4", "问题2-5"],
    },
    {
      id: 3,
      title: "3. 问卷问题3",
      indexMappingToValue: true,
      selections: [
        "问题3-1",
        "问题3-2",
        "问题3-3",
        "问题3-4",
        "问题3-5",
        "问题3-6",
        "问题3-7",
        "问题3-8",
      ],
    },
    {
      id: 4,
      title: "4. 问卷问题4",
      indexMappingToValue: true,
      selections: ["问题4-1", "问题4-2", "问题4-3", "问题4-4", "问题4-5"],
    },
    {
      id: 5,
      title: "5. 问卷问题5 此题目的结果来源自问卷3",
      indexMappingToValue: true,
      selections: ["问题5-1", "问题5-2", "问题5-3", "问题5-4", "问题5-5"],
      valueFromOutside: true, // 值从外面来
      selectionReadonly: true,
      otherComponent: {
        render(h, params, data, { valueSetter, textSetter }) {
          function onclick(event) {
            valueSetter(2);
          }
          return <input type="button" value="点击就赋值" onclick={onclick} />;
        },
      },
    },
    {
      id: 6,
      title: "6. 时间(秒)",
      indexMappingToValue: true,
      selections: [
        "问题6-1",
        "问题6-2",
        "问题6-3",
        "问题6-4",
        "问题6-5",
        "问题6-6",
        "问题6-7",
        "问题6-8",
        "问题6-9",
        "问题6-10",
      ],
      inputValueKey: "text", // input的值存放的键。默认textotherComponent: {
      otherComponent: {
        render(h, params, data, { textSetter }) {
          function onclick(event) {
            textSetter(event.target.value);
          }
          return <input type="number" placeholder="时间" onkeyup={onclick} />;
        },
      },
    },
    {
      id: 7,
      title: "7. 问卷问题7 有内容2分，没内容 0分",
      useInput: true, // 使用Input而不是选项。默认false
      inputValueKey: "text", // input的值存放的键。默认text
      input2ValFunc: (value) => {
        // 评分标准。默认null
        return value ? 2 : 0;
      },
    },
    {
      id: 8,
      title: "8. 问卷问题8",
      selections: [
        {
          text: "是1",
          value: 5,
          checkboxValue: 1
        },
        {
          text: "是2",
          value: 5,
          checkboxValue: 2
        },
        {
          text: "否",
          value: 0,
        },
        {
          text: "不清楚",
          value: -1,
        },
      ],
    },
  ],
  description: `  1.评估标准：salghowehgnsdlzgvhoiwauegihw;aoghiejfldjgowajgneiozeoi。
  2.其他内容：
     (1) sajoglkserhlghesrihgoise;
     (2) fkldshgoiwerashtgehnsgvwesa;
     (3) fadlskhgliwoasehgss;'hjesoijge;
     (4) fvsdklgno;serwgkoergglkhsaegawe;
     (5) flkahl;gh;weohgawei;g;awoeigw.`,
};

export default {
  components: {
    questionnaire: Questionnaire,
    "hw-card": Card,
  },
  data() {
    return {
      config: {},
      value: [
        { id: 1, title: "1. 问卷问题1", value: 1 },
        { id: 2, title: "2. 问卷问题2 问卷问题特别特别长", value: 1 },
        { id: 3, title: "3. 问卷问题3", value: 2 },
        { id: 4, title: "4. 问卷问题4", value: 3 },
        { id: 6, title: "6. 问卷问题6" },
        {
          id: 7,
          title: "7. 问卷问题7 有内容2分，没内容 0分",
          value: 2,
          text: "1234124",
        },
      ],
    };
  },
  created() {
    this.config = config;
  },
  methods: {
    onSave(item, total) {
      console.log(item, total);
      // console.log(JSON.stringify(item));
    },
  },
};
</script>

<style lang="stylus" scoped>
.questionnaire-demo {
  height: 600px;
}
</style>