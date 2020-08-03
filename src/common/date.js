import moment from "moment";

class DateHelper {
  constructor() {
  }

  get Now() { return moment() }

  // 一段时间之前（一天之前，一周之前，一个月之前，一个季度之前，一年之前
  get OneDayAgo() { return moment().subtract(1, "day") }
  get OneWeekAgo() { return moment().subtract(1, "week") }
  get OneMonthAgo() { return moment().subtract(1, "month") }
  get OneQuarterAgo() { return moment().subtract(1, "quarters") }
  get OneYeayAgo() { return moment().subtract(1, "year") }

  // 当前一段时间（今天一整天，这周，这个月，这个季度，今年
  get Today() { return [moment().startOf("day"), moment().endOf("day")] }
  get ThisWeek() { return [moment().startOf("week"), moment().endOf("week")] }
  get ThisMonth() { return [moment().startOf("month"), moment().endOf("month")] }
  get ThisQuarter() { return [moment().startOf("quarters"), moment().endOf("quarters")] }
  get ThisYear() { return [moment().startOf("year"), moment().endOf("year")] }

  // 近一段时间（近24小时，近一周，近一个月，近一个季度，近一年
  get NearlyADay() { return [moment().subtract(1, "day"), moment()] }
  get NearlyAWeek() { return [moment().subtract(1, "week"), moment()] }
  get NearlyAMonth() { return [moment().subtract(1, "month"), moment()] }
  get NearlyAQuarters() { return [moment().subtract(1, "quarters"), moment()] }
  get NearlyAYear() { return [moment().subtract(1, "year"), moment()] }

  // 上一段时间（昨天，上周，上个月，上个季度，上一年
  get Yesterday() { return [moment().subtract(1, "day").startOf("day"), moment().subtract(1, "day").endOf("day")] }
  get LastWeek() { return [moment().subtract(1, "week").startOf("week"), moment().subtract(1, "week").endOf("week")] }
  get LastMonth() { return [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")] }
  get LastQuarter() { return [moment().subtract(1, "quarters").startOf("quarters"), moment().subtract(1, "quarters").endOf("quarters")] }
  get LastYear() { return [moment().subtract(1, "year").startOf("year"), moment().subtract(1, "year").endOf("year")] }

  // 一段时间前到现在（今天到现在，这周到现在，这个月到现在，这个季度到现在，今年到现在
  get TodayToNow() { return [moment().startOf("day"), moment()] }
  get ThisWeekToNow() { return [moment().startOf("week"), moment()] }
  get ThisMonthToNow() { return [moment().startOf("month"), moment()] }
  get ThisQuarterToNow() { return [moment().startOf("quarters"), moment()] }
  get ThisYearToNow() { return [moment().startOf("year"), moment()] }
}

export default new DateHelper()