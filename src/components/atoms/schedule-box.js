export default function ScheduleBox({
  fromDay,
  toDay,
  fromTime,
  toTime,
  isClosed,
}) {
  const bgColor = isClosed ? "bg-red-600" : "bg-indigo-600";
  return (
    <div className="text-center my-5">
      <div className="flex flex-row justify-center">
        <div
          className={`flex flex-row rounded-md border border-transparent p-3 ${bgColor} mx-4 lg:mx-none  h-full w-full lg:w-1/3 inline-block`}
        >
          <div className="flex flex-col flex-wrap justify-center w-1/5 bg-white rounded-md">
            <div className="text-indigo text-xl font-extrabold">{fromDay}</div>
            {!!toDay && (
              <div className="w-full">
                <span class="inline-block h-5 w-1 bg-indigo-600"></span>
              </div>
            )}
            <div className="text-indigo text-xl font-extrabold">{toDay}</div>
          </div>
          {!isClosed ? (
            <div className="flex flex-row text-center w-full items-center justify-center">
              <span className="text-white text-2xl font-extrabold">
                {fromTime}
              </span>
              <span className="text-white text-2xl font-extrabold">
                &nbsp;-&nbsp;
              </span>
              <span className="text-white text-2xl font-extrabold">
                {toTime}
              </span>
            </div>
          ) : (
            <div className="grid text-center w-full align-content-center">
              <span className="text-white text-3xl font-extrabold">CLOSED</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
