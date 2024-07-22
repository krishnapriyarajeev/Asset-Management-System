/* eslint-disable react-hooks/exhaustive-deps */
import "./Login.scss";
import Button from "../../components/Button/Button";
import TextField from "../../components/LoginTextField/TextField";
import kvlogo from "../../assets/kv-logo.png";
import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Login = () => {
  // const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginFocus = useRef();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = (e) => {
    // login({ email: username, password: password });
    const email = username.toLowerCase();
    if (!username.length || !password.length) console.log("Enter Credentials");
    if (!validateEmail(email)) console.log("Invalide Email");
    e.preventDefault();
  };

  const handleUsername = (text) => {
    console.log(username);
    if (text.length > 100) console.log("length");
    else {
      console.log("<5");
      setUsername(text);
    }
  };

  const handlePassWord = (text) => {
    if (text.length > 100) console.log("length");
    else setPassword(text);
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     localStorage.setItem("token", data.token);
  //     navigate("/employees");
  //   }
  // }, [isSuccess]);

  // useEffect(() => {
  //   console.log("isError: ", isError);
  // }, [isError]);

  useEffect(() => {
    console.log(username, password);
  }, [username, password]);

  useEffect(() => {
    loginFocus.current.focus();
    // if (localStorage.getItem("token"))
  }, []);

  return (
    <main className="loginMain">
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
          <Button text="Log In" className="loginButton" />
        </form>
      </div>
    </main>
  );
};
export default Login;
