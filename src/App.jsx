import React from "react";
import DashboardHeader from "./components/DashboardHeader";
import SummarySection from "./components/SummarySection";
import EmployeeTable from "./components/EmployeeTable";
import { employeesData } from "./data/employeesData";

function App() {
  return (
    <div style={{ backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      <DashboardHeader />
      <div style={{ padding: "20px" }}>
        <SummarySection employees={employeesData} />
        <EmployeeTable data={employeesData} />
      </div>
    </div>
  );
}

export default App;
