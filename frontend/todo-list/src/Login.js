import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const create = (e) => {
    e.preventDefault();
    setLogin({
      email: email,
      password: password,
    });
    handleSubmit();
    todolists()
  };
  let token;
  const handleSubmit = async () => {
    try {
      await axios
        .post(
          "http://localhost:3010/api/login",
          {
            email: email,
            password: password,
          },
          { headers: { Authorization: localStorage.getItem("jwtToken") } }
        )
        .then((response) => {
          token = response.data;
          localStorage.setItem("SavedToken", token);
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        });
    } catch (error) {
      console.error(error);
    }
  };
  let navigate = useNavigate();

  let cat = localStorage.getItem("SavedToken");


  const todolists=()=> {

    if (cat) {
      navigate("/todolist");
    }
  }

  function registion() {
    navigate("/registration");
  }

  return (
    <div style={{display:'flex', borderRadius: "50px",alignItems: "center", justifyContent: "center", padding:300,   }}>
      <div style={{
          display: "flex",
          flexDirection: "column",
           width: 700,
          padding: 60,
          borderRadius: "50px",
          marginTop: "10px",
          alignItems: "center"}}>

      <form      
      onSubmit={create}
      style={{  
          display: "flex",
          flexDirection: "column",
           width: 400,
          padding: 30,
          borderRadius: "50px",
          marginTop: "10px",
          alignItems: "center",
         }}
      >

        <div className="input-Log">
         <span style={{ color: "#008083" }}>email</span>
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-Log1">
         <span style={{ color: "#008083" }}>password</span>
        <input  placeholder="password" type={"password"} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button style={{ 
              borderRadius: "6px",
              width: "290px",
              height: "40px",
              border: "1px solid",
              margin: 5,}} onClick={create}>enter</button>
        <button style={{
              borderRadius: "6px",
              width: "290px",
              height: "40px",
              border: "1px solid",
              margin: 0}} onClick={registion}>registion</button>
      </form>
      </div>
    </div>
  );
}
export default Login;
