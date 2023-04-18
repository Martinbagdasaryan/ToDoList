import ToDoList from "../model/ToDoList.js";

// import User from "../model/user"

class ToDoListService {
  async create(todo, id) {
    const { text} = todo;
    const list = await ToDoList.create({
      text,
      userId: id,
      checked:false
    });
    return list;
  }

  async getAll(userId) {
    if (!userId) throw new Error("this false user")
    const list = await ToDoList.find({userId});
    return list;
  }

  async getOne(id) {
    if(!id) throw new Error("false  list text ")
    const list = await ToDoList.findById(id);
    return list;
  }
  async update(list) {
    if(!list && !list._id) throw new Error("Error")
    const updateList = await ToDoList.findByIdAndUpdate(list._id, list, {
      new: true,
    });
    return updateList;
  }

  async delete(id) {
    if(!id)throw new Error('not user')
    const list = await ToDoList.findByIdAndDelete(id);

    return list;
  }
}

export default new ToDoListService();
