import UserService from "../service/Userservice.js";

class UserControler {
  async create(req, res) {
      const user = await UserService.create(req.body);
      
      return res.json(user);

  }

  async getAll(req, res) {
      const user = await UserService.getAll();
      return res.json(user);

  }

  async getOne(req, res) {
      const user = await UserService.getOne(req.params.id);
      return res.json(user);
  }

  async update(req, res) {
      const user = await UserService.update(req.body);
      return res.json(user);
  }
  async delete(req, res) {
      const user = await UserService.delete(req.params.id);
      return res.json(user);
  }
async Login(req,res){

    const login =await UserService.login(req.body)
    return res.json(login)
  
}

}
export default new UserControler();
