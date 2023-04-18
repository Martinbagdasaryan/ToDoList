import axios from "axios";

const Checkbox = ({ todoArr, el, setTodoArr }) => {
  let token = localStorage.getItem("SavedToken");

  const checkText = (cr) => {
    todoArr.map(async (crl) => {
      console.log(1, crl);
      console.log(2, crl._id);
      console.log(crl.text);
      if (crl._id === cr._id) {
        await axios.put(
          "http://localhost:3010/api/list",
          {
            _id: crl._id,
            userId: crl.userId,
            text: crl.text,
            checked: !crl.checked,
          },
          { headers: { Authorization: "Bearer " + token } }
        );
      }
    });
    const checkedData = todoArr.map((crl) => {
      console.log(3, cr._id);
      return crl._id === cr._id
        ? {
            _id: crl._id,
            text: crl.text,
            userId: crl.userId,
            checked: !crl.checked,
          }
        : {
            _id: crl._id,
            text: crl.text,
            userId: crl.userId,
            checked: crl.checked,
          };
    });
    console.log(4, checkedData);
    setTodoArr(checkedData);
  };

  return (
    <input
    key={el._id}
      type="checkbox"
      checked={el.checked}
      onChange={() => checkText(el)}
    />
  );
};

export default Checkbox;
