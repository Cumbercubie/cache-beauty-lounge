import DayButton from "./atoms/day-button";
import { phoneNumber, phoneNumberText } from "../constants";
export default function Apppointment(props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div className="flex justify-center">
        <img
          className="h-3/4 object-fill border rounded-3xl"
          alt="appointment"
          src="/images/appointment/face_flower.jpg"
        />
      </div>
      <div className="flex flex-col gap-8 h-3/  4 justify-center">
        <span className="text-center text-2xl font-light">
          We value your time. Please call us make sure we have available time
          for you! We are always ready to serve our dear customers!
        </span>
        <div className="block text-center">
          <DayButton>
            <div className="text-2xl">
              <span className="mdi mdi-phone mr-2"></span>
              {phoneNumberText}
            </div>
          </DayButton>
        </div>
      </div>
    </div>
  );
}
