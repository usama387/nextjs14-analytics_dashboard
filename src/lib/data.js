import { User } from "./models";
import { connectToDb } from "./utils";


// #1 function that fetches users from db
export const fetchUsers = async () => {
    try {
      connectToDb();
      const users = await User.find();
      return users;
    } catch (error) {
      console.log(error);
      throw new Error("Error getting users!");
    }
  };