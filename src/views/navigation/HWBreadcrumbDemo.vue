<template>
  <div class="breadcrumb-base">
    <hw-card title="面包屑 Breadcrumb">
      <hw-breadcrumb v-model="currentBreadcrumb1" :data="defaultBreadcrumbs1">
      </hw-breadcrumb>
      <hw-button @click="addBreadcrumb1">增加面包屑te</hw-button>
    </hw-card>
    <hw-card title="搜索框配合面包屑 Breadcrumb">
      <hw-button @click="addBreadcrumb2">增加面包屑te</hw-button>
      <hw-input
        v-model="searchInput2"
        @keyup.enter.native="onSearch2"
      ></hw-input>
      <hw-breadcrumb v-model="currentBreadcrumb2" :data="defaultBreadcrumbs2">
      </hw-breadcrumb>
    </hw-card>
  </div>
</template>

<script>
import Button from "@components/general/Button";
import Card from "@components/layout/Card";
import { Input } from "@components/form/";
import { Breadcrumb } from "@components/navigation/breadcrumb";
export default {
  name: "hw-drawer-demo",
  components: {
    "hw-breadcrumb": Breadcrumb,
    "hw-button": Button,
    "hw-card": Card,
    "hw-input": Input,
  },
  data() {
    return {
      open: false,
      currentBreadcrumb1: 0,
      defaultBreadcrumbs1: [{ label: "全部文件", id: "-1" }],

      searchInput2: "",
      currentBreadcrumb2: 0,
      defaultBreadcrumbs2: [{ label: "全部文件", id: "-1" }],
    };
  },
  watch: {
    currentBreadcrumb1(newValue) {
      const current = this.defaultBreadcrumbs1[newValue];
      this.$message.success(`该搜索${current.label}啦。`);
    },
    currentBreadcrumb2(newValue) {
      const current = this.defaultBreadcrumbs2[newValue];
      this.$message.success(`该搜索${current.label}啦。`);
    },
  },
  methods: {
    addBreadcrumb1() {
      this.defaultBreadcrumbs1.push({
        label: "文件夹" + this.currentBreadcrumb1,
        id: this.currentBreadcrumb1 + "",
      });
    },
    addBreadcrumb2() {
      this.defaultBreadcrumbs2.push({
        label: "文件夹" + this.currentBreadcrumb2,
        id: this.currentBreadcrumb2 + "",
      });
    },
    onSearch2() {
      const searchBreadIndex = this.defaultBreadcrumbs2.findIndex(
          (item) => item.searchVal
        ),
        searchBread = this.defaultBreadcrumbs2[searchBreadIndex];
      if (searchBread) {
        if (searchBread.searchVal !== this.searchInput2) {
          this.defaultBreadcrumbs2.splice(searchBreadIndex + 1);
        }
        searchBread.label = `"${this.searchInput2}"的搜索结果`;
        searchBread.searchVal = this.searchInput2;
      } else {
        const current = this.defaultBreadcrumbs2[this.currentBreadcrumb2];
        this.defaultBreadcrumbs2.push({
          label: `"${this.searchInput2}"的搜索结果`,
          id: current.id,
          searchVal: this.searchInput2,
        });
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.breadcrumb-base{
  >*{
    margin: 20px;
  }
}
</style>
