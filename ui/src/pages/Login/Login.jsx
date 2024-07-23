// eslint-disable-next-line react/prop-types
/* eslint-disable react-hooks/exhaustive-deps */

import "./Login.scss";
import TextField from "../../components/LoginTextField/TextField";
import kvlogo from "../../assets/kv-logo.png";
import { useEffect, useRef, useState } from "react";
import Button from "../../components/button/button";
import { useLoginMutation } from "./login.api";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/toast/toast";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginFocus = useRef();
  const [login, { isSuccess, data, isError }] = useLoginMutation();
  const [toast, setToast] = useState({ status: true, message: "" });

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const toggleToast = (message) => {
    setTimeout(() => {
      setToast({ status: true });
    }, 2000);
    setToast({
      status: false,
      message,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email: username, password: password });
    const email = username.toLowerCase();
    if (!username.length || !password.length) toggleToast("Enter Credentials");

    if (!validateEmail(email)) toggleToast("Invalid Email");
  };

  const handleUsername = (text) => {
    if (text.length > 30) {
      toggleToast("Email shouldn't be lengthy");
    } else {
      setUsername(text);
    }
  };

  const handlePassWord = (text) => {
    if (text.length > 16) toggleToast("Password shouldn't be lengthy");
    else setPassword(text);
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("kvLogin", data.token);
      navigate("/profile");
    } else if (isError) toggleToast("Credentials Wrong, Try again!!");
  }, [isSuccess, isError, data, navigate]);

  useEffect(() => {
    loginFocus.current.focus();
  }, []);

  const user = localStorage.getItem("kvLogin");
  useEffect(() => {
    if (user) navigate(-1);
  }, [user, navigate]);

  return (
    <main className="loginMain">
      <Toast showToast={!toast.status} message={toast.message} status="fail" />
      <div className="login">
        <form onSubmit={handleLogin} className="loginForm">
          <img src={kvlogo} alt="Logo" className="kvlogo" />
          <TextField
            label="E-mail"
            id="uname"
            type="text"
            handleChange={handleUsername}
            value={username}
            ref={loginFocus}
          />
          <TextField
            label="Password"
            id="password"
            type="password"
            handleChange={handlePassWord}
            value={password}
          />
          <Button innerText="Log In" type="submit" />
        </form>
      </div>
    </main>
  );
};
export default Login;
