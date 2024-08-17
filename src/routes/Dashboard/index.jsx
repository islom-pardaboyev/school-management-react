import { Route, Routes, useNavigate } from "react-router-dom";
import {
  About,
  Billing,
  Dashboard,
  Exam,
  Settings,
  Students,
  Teachers,
  UpdateTeachers,
} from "../../pages/Dashboard";
import Navbar from "../../component/Navbar/Navbar";
import CustomModal from "../../component/CustomModal";
import { useContext } from "react";
import { MainContext } from "../../context/Context";
import TeacherAdd from "../../pages/Dashboard/TeacherAdd";

export default function DashboardPage() {
  const { showIsLogOutModal, setShowIsLogOutModal } = useContext(MainContext);
  const navigate = useNavigate();

  const logout = () => {
    setShowIsLogOutModal(false);
    setTimeout(() => {
      window.localStorage.clear();
      navigate("/");
      window.location.reload();
    }, 1200);
  };

  return (
    <div className="flex">
      <Navbar />
      <div className="w-[80%]">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/add" element={<TeacherAdd />} />
          <Route path="/teachers/:id" element={<About />} />
          <Route path="/teachers/update/:id" element={<UpdateTeachers />} />
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
        <div className="flex flex-col items-center h-full justify-evenly">
          <h1 className="font-kubmh text-2xl font-medium">Are you sure you want to log out?</h1>
          <div className="flex items-center gap-3">
            <button className="bg-rose-500 hover:bg-rose-700 text-white px-4 py-2 rounded-md" onClick={() => setShowIsLogOutModal(false)}>No</button>
            <button className="bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded-md" onClick={logout}>Yes</button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
}
