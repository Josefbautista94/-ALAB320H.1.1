import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EmployeePage from "./pages/EmployeePage";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        maxWidth: "1200px",
        margin: "0 auto",
        color: "white",
        boxSizing: "border-box",
        borderLeft: "1px solid gray" 
      }}
    >
      <div
        style={{
          width: "40%",
          borderRight: "1px solid gray",
          boxSizing: "border-box",
          overflowY: "auto", // scrolls if list gets long
        }}
      >
        <HomePage />
      </div>
      <div
        style={{
          width: "60%",
          boxSizing: "border-box",
          overflowY: "auto",
          borderRight:"1px solid gray"
        }}
      >
        <EmployeePage />
      </div>
    </div>
  );
}

export default App;
