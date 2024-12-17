import { Sequelize } from "sequelize";
import { createUserModel } from "../model/userSchema.js";
import dotenv from "dotenv";

dotenv.config();
const sequelize = new Sequelize(
  process.env.name,
  process.env.user,
  process.env.password,
  {
    host: process.env.host,
    dialect: process.env.dialect
  }
);


let UserModel=null;
  
    const connection=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        UserModel= await createUserModel(sequelize)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

  export{
    connection,
    UserModel
  }