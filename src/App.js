import React from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";

export default function App() {
  return (
    <div className="font-sf mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit from-cyan-700 to-blue-700 shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
    </div>
  );
}
