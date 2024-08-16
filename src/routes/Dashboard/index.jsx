import { Route, Routes } from "react-router-dom";
import {
  Billing,
  Dashboard,
  Exam,
  Settings,
  Students,
  Teachers,
} from "../../pages/Dashboard";
import Navbar from "../../component/Navbar/Navbar";
import CustomModal from "../../component/CustomModal";
import { useContext } from "react";
import { MainContext } from "../../context/Context";


export default function DashboardPage() {
  const { showIsLogOutModal, setShowIsLogOutModal } = useContext(MainContext);

  const logout = () => {
    setShowIsLogOutModal(false);
    setTimeout(() => {
      window.localStorage.clear();
      window.location.reload();
    }, 700);
  };

  return (
    <div className="flex">
      <Navbar />
      <div className="w-[80%]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/exams" element={<Exam />} />
        </Routes>
      </div>
      <CustomModal
        showIsLogOutModal={showIsLogOutModal}
        setShowIsLogOutModal={setShowIsLogOutModal}
      >
        <div>Are you sure you want to log out?</div>
        <button onClick={() => setShowIsLogOutModal(false)}>No</button>
        
        <button onClick={logout}>Yes</button>
      </CustomModal>
    </div>
  );
}
