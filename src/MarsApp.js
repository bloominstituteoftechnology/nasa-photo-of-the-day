import React from "react";
import "./MarsApp.css";
import RecentSolCardCont from "./MarsComponents/RecentSol/RecentSolCardCont";
import WeeklySolCardCont from "./MarsComponents/WeeklySol/WeeklySolCardCont";

function MarsApp() {
  return (
    <div className="MarsApp">
      <h1>Mars Weather Update</h1>
      <RecentSolCardCont />
      <WeeklySolCardCont />
    </div>
  );
}

export default MarsApp;
