import React, {  useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import List from "./list";

function ToDoList() {
  let navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [flag, setFlag] = useState(true);
  const [elId, setElID] = useState(0);
  const [text, setText] = useState([]);
  const [todoArr, setTodoArr] = useState([]);

  let token = localStorage.getItem("SavedToken");

  const handleSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:3010/api/list",
        {
          text: inputValue,
        },
        { headers: { Authorization: "Bearer " + token } }
      );
    } catch (error) {
      console.error(error);
    }
  };
  const addText = () => {
    if (!inputValue) return;
    setText(() => [
      ...text,
      {
        id: Map.random(),
        text: inputValue,
        checked: false,
      },
    ]);
    setInputValue("");
    setFlag(true);
    handleSubmit();
  };

  const saveText = async (e) => {
    todoArr.map(async (el) => {
      if (el._id === elId) {
        await axios.put(
          "http://localhost:3010/api/list",
          {
            _id: el._id,
            userId: el.userId,
            text: inputValue,
            checked: el.checked,
          },
          { headers: { Authorization: "Bearer " + token } }
        );
      } else
        await axios.put(
          "http://localhost:3010/api/list",
          {
            _id: el._id,
            userId: el.userId,
            text: el.text,
            checked: el.checked,
          },
          { headers: { Authorization: "Bearer " + token } }
        );
    });

    setFlag(true);

    setInputValue("");
  };

  const dec = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  const login = () => {
    navigate("/");
    localStorage.removeItem("SavedToken");
  };
  const editText = (el) => {
    setInputValue(el.text);
    setFlag(false);
    setElID(el._id);
  };
  return token ? (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
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
        <form
          style={{
            flexDirection: "column",
            width: 1300,
            padding: 30,
            color: "#008083",
            marginTop: "10px",
            alignItems: "center",
          }}
        >
          <input
            style={{ padding: "1px", fontSize: "15px", borderRadius: "15px" }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {flag ? (
            <button
              style={{ padding: "10px", fontSize: "15px", borderRadius: "5px" }}
              type="submit"
              className="button"
              onClick={addText}
            >
              add
            </button>
          ) : (
            <button
              style={{ padding: "10px", fontSize: "15px", borderRadius: "5px" }}
              type="submit"
              onClick={saveText}
            >
              save
            </button>
          )}
          <button
            style={{ padding: "10px", fontSize: "15px", borderRadius: "5px" }}
            className="button-dec"
            onClick={dec}
          >
            dec
          </button>
          <button
            style={{ padding: "10px", fontSize: "15px", borderRadius: "5px" }}
            onClick={login}
          >
            log
          </button>
        </form>
        <div>
          <List
            editText={editText}
            setTodoArr={setTodoArr}
            todoArr={todoArr}
            text={text}
            setText={setText}
          />
        </div>
      </div>
    </div>
  ) : (
    <div>ste piti user ylnes</div>
  );
}

export default ToDoList;
