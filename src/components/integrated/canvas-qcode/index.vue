<template>
  <div style="overflow: auto" ref="base">
    <div class="calendar" ref="calendar" :style="calendarStyle">
      <div class="date-time">
        <span class="date">{{ date }}</span>
        <span class="full-date">{{ fullDate }}</span>
        <span class="day-of-week">{{ dayOfWeek }}</span>
      </div>
      <span class="calendar-text">{{ text }}</span>
      <img :src="qcode" alt="" class="qcode" />
    </div>
    <canvas ref="canvas" class="canvas"></canvas>

    <input type="button" value="download" @click="downloadCalendar" />
  </div>
</template>

<script>
import moment from "moment";
import html2canvas from "html2canvas";
const dayOfWeek = ["日", "一", "二", "三", "四", "五", "六"];
export default {
  props: {
    imgs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      calendarStyle: {},
    };
  },
  created() {
    this.calendarImg = require("@assets/calendar01-14.png");
    this.text = "总之岁月漫长，然而值得等待。——村上春树";
    this.calendarStyle["background-image"] = `url(${this.calendarImg})`;
    const now = moment();
    this.date = now.get("date");
    this.fullDate = now.format("YYYY年MM月DD日");
    this.dayOfWeek = "星期" + dayOfWeek[now.day()];
    this.qcode = require("@assets/logo.png");
  },
  methods: {
    async downloadCalendar() {
      const calendarEl = this.$refs.calendar;
      const canvas = this.$refs.canvas;
      const style = window.getComputedStyle(calendarEl);
      const width = parseInt(style.width),
        height = parseInt(style.height);
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.width = width;
      ctx.height = height;
      const canvass = await html2canvas(calendarEl);
      debugger;
      canvass.toBlob((data) => {
        const blob = new Blob([data], {
          type:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document/mp4",
        });
        var link = document.createElement("a");

        var objurl = URL.createObjectURL(blob);
        link.download = "grid1.png";
        link.href = objurl;
        link.click();
      });
      // .then((canvas) => {
      //   ctx.drawImage(canvas, 0, 0, width, height);
      // });
    },
  },
};
</script>

<style lang="stylus" scoped>
.calendar {
  width: 656px;
  height: 534px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .qcode {
    background-color: white;
    width: 50px;
    height: 50px;
    display: inline-block;
    position: absolute;
    left: 20px;
    bottom: 20px;
  }

  .date-time {
    display: inline-block;
    position: absolute;
    color: white;
    float: left;
    top: 6%;
    width: 160px;
    right: 6%;

    .full-date, .day-of-week, .date {
      display: inline-block;
      font-size: 12px;
      text-align: left;
      line-height: 20px;
      float: left;
    }

    .date {
      height: 38px;
      width: 38px;
      line-height: 38px;
      border-radius: 50%;
      background: #fff;
      color: #f48225;
      font-weight: 600;
      display: flex;
      justify-content: center;
      font-size: 26px;
      margin-right: 6px;
      border-radius: 100px;
      background-color: white;
      color: #FFAF46;
    }

    .full-date {
    }

    .day-of-week {
    }
  }

  .calendar-text {
    color: white;
    display: inline-block;
    position: absolute;
    bottom: 10px;
    line-height: 25px;
    max-height: 70px;
    overflow: hidden;
    font-weight: bolder;
  }
}
</style>