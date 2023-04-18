import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { validEmail, validPassword } from "./redex.js";

function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [Err, setErr] = useState(false);
  const [flag, setflag] = useState(false);
  const [emailflag,setEmailFlag] =useState(true)
  const [passwordFlag,setPasswordFlag] = useState(true)

  const validE=validEmail.test(email)
  useEffect(() => {
    if (validE) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
  }, [validE,flag]);

  useEffect(()=>{
    if(emailErr===false && flag===true){
      
      setEmailFlag(false)
    }
  },[emailErr,flag])

  useEffect(() => {
    if (validPassword.test(password)) {
      setPwdError(true);
    } else {
      setPwdError(false);
    }
  }, [flag, password, pwdError]);

  useEffect(()=>{
    if(pwdError===false && flag===true){
      setPasswordFlag(false)
    }
  },[pwdError,flag])

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) setErr(true);
    if (!surname) setErr(true);
    if (!email) setErr(true);
    if (!password) setErr(true);
    if (!confirmPassword) setErr(true);
    setflag(true);

    try {
      if (password === confirmPassword) {
        if (pwdError === true && emailErr === true) {
          console.log(4);
          await axios.post("http://localhost:3010/api/user", {
            name: name,
            surname: surname,
            email: email,
            password: password,
          });
          navigate("/todolist");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 300,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 700,
          padding: 60,
          marginTop: "10px",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: 400,
            padding: 30,
            marginTop: "10px",
            alignItems: "center",
          }}
        >
          {Err ? (
            <h1 style={{ color: "#060000" }}> lracreq sax</h1>
          ) : (
            <h1> </h1>
          )}
          <div className="input-row">
            <span style={{ color: "#008083" }}>name</span>
            <input
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-row1">
            <span style={{ color: "#008083" }}>surname</span>
            <input
              placeholder="surname"
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div style={{ display:'flex', gap: emailflag ? "79px" : "50px",  alignItems: 'center'  }}>
            {emailflag ? (
              <span style={{ color: "#008083",   }}>email</span>
              ) : (
              <span style={{ color: "red" }}>sxal  email</span>
            )}
            <input
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ display:'flex', gap: emailflag ? "56px" : "26px" ,alignItems: 'center' }}>
            {passwordFlag ? (
              <span style={{ color: "#008083" }}>password</span>
              ) : (
              <span style={{ color:"red" }}>sxal password</span>
            )}
            <input
              placeholder="password"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-row5">
            <span style={{ color: "#008083" }}>confirm password</span>
            <input
              placeholder="confirm password"
              type={"password"}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </div >
          <button
            style={{
              borderRadius: "6px",
              width: "350px",
              height: "40px",
              border: "1px solid",
              margin: "15px",
            }}
          >
            register
          </button>
        </form>
      </div>
    </div>
  );
}
export default Register;
