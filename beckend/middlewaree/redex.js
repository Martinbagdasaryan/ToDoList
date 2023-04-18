import Joi from "joi";
export const validpassword = Joi.object({
    password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/)
})

export const schema = Joi.object({
  email: Joi.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
});
