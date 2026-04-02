import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("amansingh@gmail.com");
  const [password, setPassword] = useState("Qwerty@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      // console.log(res.data);
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex justify-center my-50">
      <div className="card bg-base-300 w-100 shadow-sm">
        <div className="card-body">
          <fieldset className="fieldset my-4 py-2">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="dev.syncup@gmail.com"
            />
          </fieldset>

          <fieldset className="fieldset my-4 py-2">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="text"
              className="input"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <div className="card-actions justify-center my-3">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
