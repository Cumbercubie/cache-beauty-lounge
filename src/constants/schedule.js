export const dayInWeek = {
  MONDAY: "MONDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
  THURSDAY: "THURSDAY",
  FRIDAY: "FRIDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
};
export const dayInWeekMap = [
  {
    value: dayInWeek.MONDAY,
    short: "Mon",
    title: "Monday",
  },
  {
    value: dayInWeek.TUESDAY,
    short: "Tue",
    title: "Tuesday",
  },
  {
    value: dayInWeek.WEDNESDAY,
    short: "Wed",
    title: "Wednesday",
  },
  {
    value: dayInWeek.THURSDAY,
    short: "Thu",
    title: "Thursday",
  },
  {
    value: dayInWeek.FRIDAY,
    short: "Fri",
    title: "Friday",
  },
  {
    value: dayInWeek.SATURDAY,
    short: "Sat",
    title: "Saturday",
    isWeekend: true,
  },
  {
    value: dayInWeek.SUNDAY,
    short: "Sun",
    title: "Sunday",
    isWeekend: true,
  },
];
export const schedule = [
  {
    fromDay: dayInWeek.MONDAY,
    toDay: dayInWeek.FRIDAY,
    openAt: "9.30 A.M",
    closeAt: "7.30 P.M",
  },
  {
    fromDay: dayInWeek.SATURDAY,
    openAt: "9.00 A.M",
    closeAt: "6.00 P.M",
  },
  {
    fromDay: dayInWeek.SUNDAY,
    isClosed: true,
  },
];
