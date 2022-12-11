import { dayInWeek, dayInWeekMap, schedule } from "../constants/schedule";
import DayButton from "./atoms/day-button";
import ScheduleBox from "./atoms/schedule-box";
export default function Schedule(props) {
  const getShortDay = (value) => {
    return dayInWeekMap.find((m) => m.value === value)?.short;
  };
  return schedule.map((s) => (
    <ScheduleBox
      fromDay={getShortDay(s.fromDay)}
      toDay={getShortDay(s.toDay)}
      fromTime={s.openAt}
      toTime={s.closeAt}
      isClosed={s.isClosed}
    />
  ));
  // return "";
}
