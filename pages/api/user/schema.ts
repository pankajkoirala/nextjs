const mongoose = require("mongoose");
import Joi from "joi";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
});
const user = mongoose.model("user", userSchema);
const createUserValidator = (payload) => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .regex(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      .messages({
        "string.pattern.base": "Invalid Email",
        "string.empty": "Email is not allowed to be empty",
      }),
    fullName: Joi.string().required().messages({
      "string.empty": "FullName is not allowed to be empty",
    }),
    address: Joi.string().required().messages({
      "string.empty": "Address is not allowed to be empty",
    }),
    mobileNo: Joi.string().required().messages({
      "string.empty": "Mobile No is not allowed to be empty",
    }),
  });

  return schema.validate(payload);
};

const updateUserValidator = (payload) => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .regex(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      .messages({
        "string.pattern.base": "Invalid Email",
        "string.empty": "Email is not allowed to be empty",
      }),
    fullName: Joi.string().required().messages({
      "string.empty": "FullName is not allowed to be empty",
    }),
    address: Joi.string().required().messages({
      "string.empty": "Address is not allowed to be empty",
    }),
    mobileNo: Joi.string().required().messages({
      "string.empty": "Mobile No is not allowed to be empty",
    }),
  });

  return schema.validate(payload);
};

module.exports = {
  user,
  createUserValidator,
  updateUserValidator,
};
