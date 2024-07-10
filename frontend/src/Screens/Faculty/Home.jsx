import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Notice from "../../components/Notice";
import Profile from "./Profile";
import Timetable from "./Timetable";
import { Toaster } from "react-hot-toast";
import Material from "./Material";
import Marks from "./Marks";
import Student from "./Student";
import bg from "../../public/bg5.png"
const Home = () => {
  const router = useLocation();
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("My Profile");
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (router.state === null) {
      navigate("/");
    }
    setLoad(true);
  }, [navigate, router.state]);

  return (
    <section className="bg-gray-800 text-gray-50 min-h-screen bg bg-cover bg-center bg-fixed bg-no-repeat"
    style={{ backgroundImage: `url(${bg})`}}>
      {load && (
        <>
          <Navbar />
          <div className="max-w-6xl mx-auto">
            <ul className="flex justify-evenly items-center gap-10 w-full mx-auto my-8">
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "My Profile"
                    ? "border-b-2 pb-2 border-teal-900 bg-teal-900 rounded-xl "
                    : "bg-teal-600 text-gray-50 hover:bg-teal-600 border-b-2 border-teal-500 rounded-xl"
                }`}
                onClick={() => setSelectedMenu("My Profile")}
              >
                My Profile
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Student Info"
                    ? "border-b-2 pb-2 border-teal-900 bg-teal-900 rounded-xl "
                    : "bg-teal-600 text-gray-50 hover:bg-teal-600 border-b-2 border-teal-500 rounded-xl"
                }`}
                onClick={() => setSelectedMenu("Student Info")}
              >
                Student Info
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Upload Marks"
                    ?"border-b-2 pb-2 border-teal-900 bg-teal-900 rounded-xl "
                    : "bg-teal-600 text-gray-50 hover:bg-teal-600 border-b-2 border-teal-500 rounded-xl"
                }`}
                onClick={() => setSelectedMenu("Upload Marks")}
              >
                Upload Marks
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Timetable"
                    ? "border-b-2 pb-2 border-teal-900 bg-teal-900 rounded-xl "
                    : "bg-teal-600 text-gray-50 hover:bg-teal-600 border-b-2 border-teal-500 rounded-xl"
                }`}
                onClick={() => setSelectedMenu("Timetable")}
              >
                Timetable
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Notice"
                    ? "border-b-2 pb-2 border-teal-900 bg-teal-900 rounded-xl "
                    : "bg-teal-600 text-gray-50 hover:bg-teal-600 border-b-2 border-teal-500 rounded-xl"
                }`}
                onClick={() => setSelectedMenu("Notice")}
              >
                Notice
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Material"
                    ? "border-b-2 pb-2 border-teal-900 bg-teal-900 rounded-xl "
                    : "bg-teal-600 text-gray-50 hover:bg-teal-600 border-b-2 border-teal-500 rounded-xl"
                }`}
                onClick={() => setSelectedMenu("Material")}
              >
                Material
              </li>
            </ul>
            {selectedMenu === "Timetable" && <Timetable />}
            {selectedMenu === "Upload Marks" && <Marks />}
            {selectedMenu === "Material" && <Material />}
            {selectedMenu === "Notice" && <Notice />}
            {selectedMenu === "My Profile" && <Profile />}
            {selectedMenu === "Student Info" && <Student />}
          </div>
        </>
      )}
      <Toaster position="bottom-center" />
    </section>
  );
};

export default Home;
