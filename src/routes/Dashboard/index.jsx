import { Route, Routes } from "react-router-dom";
import { Dashboard, Teachers } from "../../pages/Dashboard";

function DashboardPage() {
  return (
    
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/teachers" element={<Teachers />} />
    </Routes>
  );
}

export default DashboardPage;
