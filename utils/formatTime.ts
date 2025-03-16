import moment from "moment";
import "moment/locale/id";

export const formatTime = (date: Date) => {
  moment.locale("id");
  return moment(date).format("D MMMM YYYY, HH:mm");
};
