import User from "../model/user.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { validpassword, schema } from "../middlewaree/redex.js";

const AcToken = (id) => {
  const payload = {
    id,
  };
  return Jwt.sign(payload, process.env.SECRET, { expiresIn: "24h" });
};

class UserService {
  async create(U) {
    const { name, surname, password, email } = U;
    const dataEmail = {
      email: email,
    };

    const result_email = schema.validate(dataEmail);

    const dataPassword= {
      password:password
    }

    const result_Password = validpassword.validate(dataPassword)

    if (!name) throw new Error("The name field is required.");

    if (!surname) throw new Error("The surname field is required.");

    if (!password )throw new Error("The password field is required.");

    if (!email) throw new Error("The email field is required.");

    if( result_email.error) throw new Error("this email false")

    if(result_Password.error)throw new Error("this password false")

    const users = await User.findOne({ email });

    if (users) throw new Error("this is such a user");

    const hashPassword = bcrypt.hashSync(password, 7);
    const user = await User.create({
      name,
      surname,
      password: hashPassword,
      email,
    });
    await user.save()
    return user;
  }
  async getAll() {
    const user = await User.find();
    return user;
  }
  async getOne(id) {
    if(!id) throw new Error("Error")
    const user = await User.findById(id);
    if(!user)throw new Error("Error")
    return user;
  }
  async update(U) {
    const id = U._id
    const user = await User.findOne({_id: id});
    if(!user)throw new Error("Error")

    if(!id)throw new Error("Error")
    
    const updateUser = await User.findByIdAndUpdate(U._id, U, { new: true });
    return updateUser;
  }
  async delete(id) {
    const user = await User.findByIdAndDelete(id);
    return user;
  }
  async login(login) {
    const { email, password } = login;
    const user = await User.findOne({ email });
      if (!user){
        throw new  Error ("User not found")
      };
    const validPossword = bcrypt.compareSync(password, user.password);
    if (!validPossword ) throw new  Error("ther is no such user ");

    const token = AcToken(user);
    if(!token) throw new  Error("ther is no such user ");
    return token;

  
  }
}
export default new UserService();
