import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { baseApiURL } from "../baseUrl";
import bgImage from "../public/bgImage.png"
import bgcover from "../public/ACADBUD.png"
const Login = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Student");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.login !== "" && data.password !== "") {
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(`${baseApiURL()}/${selected.toLowerCase()}/auth/login`, data, {
          headers: headers,
        })
        .then((response) => {
          navigate(`/${selected.toLowerCase()}`, {
            state: { type: selected, loginid: response.data.loginid },
          });
        })
        .catch((error) => {
          toast.dismiss();
          console.error(error);
          toast.error(error.response.data.message);
        });
    } else {
    }
  };
  return (
    <div className="bg-gray-800 h-[100vh] w-full flex justify-between items-center text-gray-50"
    style={{ backgroundImage: `url(${bgImage})` }}>
      
      <div className="w-[40%] flex justify-center items-start flex-col pl-8">
        <p className="text-3xl font-semibold pb-2 border-b-2 border-green-500">
          {selected && selected} Login
        </p>
        <form
          className="flex justify-center items-start flex-col w-full mt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-[70%]">
            <label className="mb-1" htmlFor="eno">
              {selected && selected} Login ID
            </label>
            <input
              type="number"
              id="eno"
              required
              className="bg-white outline-none border-2 text-black border-gray-400 py-2 px-4 rounded-md w-full focus:border-blue-500"
              {...register("loginid")}
            />
          </div>
          <div className="flex flex-col w-[70%] mt-3">
            <label className="mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="bg-white outline-none border-2 text-black border-gray-400 py-2 px-4 rounded-md w-full focus:border-blue-500"
              {...register("password")}
            />
          </div>
          {/* <div className="flex w-[70%] mt-3 justify-start items-center">
            <input type="checkbox" id="remember" className="accent-blue-500" />{" "}
            Remember Me
          </div> */}
          <button className="bg-teal-600 mt-5 text-white px-6 py-2 text-xl rounded-full hover:bg-cyan-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all flex justify-center items-center">
            Login
            <span className="ml-2">
              <FiLogIn />
            </span>
          </button>
        </form>
      </div>
      <div className="absolute top-4 left-4">
        <button
          className={`text-teal-500 mr-6 text-base font-semibold hover:text-cyan-300 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
            selected === "Student" && "border-b-2 border-green-500"
          }`}
          onClick={() => setSelected("Student")}
        >
          Student
        </button>
        <button
          className={`text-teal-500 mr-6 text-base font-semibold hover:text-cyan-300 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
            selected === "Faculty" && "border-b-2 border-green-500"
          }`}
          onClick={() => setSelected("Faculty")}
        >
          Faculty
        </button>
        <button
          className={`text-teal-500 mr-6 text-base font-semibold hover:text-cyan-300 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
            selected === "Admin" && "border-b-2 border-green-500"
          }`}
          onClick={() => setSelected("Admin")}
        >
          Admin
        </button>
      </div>
      {/* {<img
        className="w-[60%] h-[100vh] object-cover"
        src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hfihv"
        // src="`${bgcover}`"
      />} */}
      <div className="w-[60%] h-[100vh] object-none object-right-bottom"
      style={{ backgroundImage: `url(${bgcover})` }}>

      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Login;
