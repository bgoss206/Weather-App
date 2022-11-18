import React from "react";

function TimeAndLocation() {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          Day, Date month year | local time: 00:00 AM
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium"> Seattle, WA </p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
