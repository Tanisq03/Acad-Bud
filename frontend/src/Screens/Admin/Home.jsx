/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import Notice from "../../components/Notice";
import Student from "./Student";
import Faculty from "./Faculty";
import Subjects from "./Subject";
import { baseApiURL } from "../../baseUrl";
import Admin from "./Admin";
import Profile from "./Profile";
import Branch from "./Branch";
import bg from "../../public/bg5.png"

const Home = () => {
  const router = useLocation();
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Profile");
  const [dashboardData, setDashboardData] = useState({
    studentCount: "",
    facultyCount: "",
  });
  useEffect(() => {
    if (router.state === null) {
      navigate("/");
    }
    setLoad(true);
  }, [navigate, router.state]);

  useEffect(() => {
    getStudentCount();
    getFacultyCount();
  }, []);

  const getStudentCount = () => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .get(`${baseApiURL()}/student/details/count`, {
        headers: headers,
      })
      .then((response) => {
        if (response.data.success) {
          setDashboardData({
            ...dashboardData,
            studentCount: response.data.user,
          });
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getFacultyCount = () => {
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .get(`${baseApiURL()}/faculty/details/count`, {
        headers: headers,
      })
      .then((response) => {
        if (response.data.success) {
          setDashboardData({
            ...dashboardData,
            facultyCount: response.data.user,
          });
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
    <section className="bg-gray-800 text-gray-50 min-h-screen bg bg-cover bg-center bg-fixed bg-no-repeat"
    style={{ backgroundImage: `url(${bg})`}}>
      {load && (
        <>
          <Navbar />
          <div className="max-w-6xl mx-auto">
            <ul className="flex justify-evenly items-center gap-10 w-full mx-auto my-8">
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Profile"
                    ? "border-b-2 pb-2 border-teal-900 bg-teal-900 rounded-xl "
                    : "bg-teal-600 text-gray-50 hover:bg-teal-600 border-b-2 border-teal-500 rounded-xl"
                }`}
                onClick={() => setSelectedMenu("Profile")}
              >
                Profile
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Student"
                    ? "border-b-2 pb-2 border-teal-900 bg-teal-900 rounded-xl "
                    : "bg-teal-600 text-gray-50 hover:bg-teal-600 border-b-2 border-teal-500 rounded-xl"
                }`}
                onClick={() => setSelectedMenu("Student")}
              >
                Student
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Faculty"
                    ? "border-b-2 pb-2 border-teal-900 bg-teal-900 rounded-xl "
                    : "bg-teal-600 text-gray-50 hover:bg-teal-600 border-b-2 border-teal-500 rounded-xl"
                }`}
                onClick={() => setSelectedMenu("Faculty")}
              >
                Faculty
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Branch"
                    ? "border-b-2 pb-2 border-teal-900 bg-teal-900 rounded-xl "
                    : "bg-teal-600 text-gray-50 hover:bg-teal-600 border-b-2 border-teal-500 rounded-xl"
                }`}
                onClick={() => setSelectedMenu("Branch")}
              >
                Branch
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
                  selectedMenu === "Subjects"
                    ? "border-b-2 pb-2 border-teal-900 bg-teal-900 rounded-xl "
                    : "bg-teal-600 text-gray-50 hover:bg-teal-600 border-b-2 border-teal-500 rounded-xl"
                }`}
                onClick={() => setSelectedMenu("Subjects")}
              >
                Subjects
              </li>
              <li
                className={`text-center rounded-sm px-4 py-2 w-1/5 cursor-pointer ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
                  selectedMenu === "Admin"
                    ? "border-b-2 pb-2 border-teal-900 bg-teal-900 rounded-xl "
                    : "bg-teal-600 text-gray-50 hover:bg-teal-600 border-b-2 border-teal-500 rounded-xl"
                }`}
                onClick={() => setSelectedMenu("Admin")}
              >
                Admins
              </li>
            </ul>

            <>
              {selectedMenu === "Branch" && <Branch />}
              {selectedMenu === "Notice" && <Notice />}
              {selectedMenu === "Student" && <Student />}
              {selectedMenu === "Faculty" && <Faculty />}
              {selectedMenu === "Subjects" && <Subjects />}
              {selectedMenu === "Admin" && <Admin />}
              {selectedMenu === "Profile" && <Profile />}
            </>
          </div>
        </>
      )}
      <Toaster position="bottom-center" />
      </section>
    </>
  );
};

export default Home;
