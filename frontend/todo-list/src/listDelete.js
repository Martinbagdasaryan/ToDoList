import axios from "axios";

const ListDelete =({todoArr,setTodoArr,el})=>{

  let token = localStorage.getItem("SavedToken");
  const textDelete = async (id) => {
    await axios.delete(`http://localhost:3010/api/list/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });
    const newData = todoArr.filter((el) => el._id !== id);
    setTodoArr(newData);
    }
    return(
        <button
          style={{ borderRadius: "50px" }}
          onClick={() => textDelete(el._id)}
        >
          delete
        </button>
        )
  
}
export default ListDelete