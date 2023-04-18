import ListDelete from "./listDelete";
import Checkbox from "./checkbox";

const Itm = ({ editText, setTodoArr, todoArr, el,text,setText }) => {
   

  return (
    <div
    key={el._id}
    style={{
      padding: 10,
      fontSize: 20,
      color: "#060000 ",
      borderRadius: "8px",
      border: "1px solid #060000",
      marginTop: "10px",
      display: "flex",
      alignItems: "center",
    }}>
        <Checkbox todoArr={todoArr} setTodoArr={setTodoArr} el={el}
            text={text}
            setText={setText} 
            />
      <span
        style={{
          textDecorationLine: el.checked && "line-through",
        }}
      >{""}
        {el.text}{""}
      </span>
      <ListDelete todoArr={todoArr} setTodoArr={setTodoArr} el={el} />
      <button style={{ borderRadius: "50px" }} onClick={() => editText(el)}>
        edit
      </button>
    </div>
  );
};

export default Itm;
