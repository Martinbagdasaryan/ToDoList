import { useEffect } from "react";
import axios from "axios";
import Itm from "./itm";

const List = ({ editText, setTodoArr, todoArr,text,setText }) => {
  let token = localStorage.getItem("SavedToken");

  useEffect(() => {
    hand();
  }, []);

  const hand = async () => {
    try {
      const res = await axios.get("http://localhost:3010/api/list", {
        headers: { Authorization: "Bearer " + token },
      });
      const data = res.data;
      const arr = [...data];
      let textarr = [];
      arr.map((el) => textarr.push(el));
      setTodoArr(textarr);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div  style={{ fontSize: "10px" }}>
      {todoArr.map((el) => (
        <div
        key={el.id}
          >
          <Itm editText={editText}    
            setTodoArr={setTodoArr}
            todoArr={todoArr}
            el={el}
            text={text}
            setText={setText}
            />
        </div>
      ))}
    </div>
  );
};

export default List;
