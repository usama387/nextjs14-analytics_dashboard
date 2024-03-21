import { User } from "./models";
import { connectToDb } from "./utils";

// #1 function that fetches users from db
export const fetchUsers = async (q) => {
  //  #2 The q is the query passed into this function from searchParams coming from search component in usersPage and then from there in this function and search every single letter of this query i will be using regex

  // passing q and i means case insenstive into regex which is then pased into find query to search by taking username
  const regex = new RegExp(q, "i");
  try {
    connectToDb();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting users!");
  }
};
