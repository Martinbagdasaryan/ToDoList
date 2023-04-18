import ToDoLlistService from "../service/ToDoListService.js";
import jwt from "jsonwebtoken";

class ToDoListControler {
  async create(req, res) {
      const jwtToken =  req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.decode(jwtToken, { complete: true });
      const id = decodedToken.payload.id._id;
      const list = await ToDoLlistService.create(req.body,id);
      
      return res.json(list);
  }

  async getAll(req, res) {

      const jwtToken =  req.headers.authorization.split(' ')[1];
      
      const decodedToken = jwt.decode(jwtToken, { complete: true });
      
      const id = decodedToken.payload.id._id;
      const list = await ToDoLlistService.getAll(id);
      return res.json(list);
  }

  async getOne(req, res) {
      const list = await ToDoLlistService.getOne(req.params.id);
      return res.json(list)
  }

  async update(req, res) {
      const list = await ToDoLlistService.update(req.body);
      return res.json(list);
  }

  async delete(req, res) {
      const list = await ToDoLlistService.delete(req.params.id);
      return res.json(list);
  }
}

export default new ToDoListControler();
