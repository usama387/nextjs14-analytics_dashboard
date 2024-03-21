import { User } from "./models";
import { connectToDb } from "./utils";

// #1 function that fetches users from db
export const fetchUsers = async (q, page) => {
  //  #2 The q is the query passed into this function from searchParams coming from search component in usersPage and then from there in this function regex is used to search by every letter

  // passing q and i means case insenstive into regex which is then passed into find query to search by taking username
  const regex = new RegExp(q, "i");

  // 2 users will be shown on each page
  const USER_PER_PAGE = 2;

  // #3 limit ensures only 2 users per page and skip renders the next 2 users avoiding last page users with this logic i am updating the pagination

  try {
    connectToDb();

    // returns the number of users
    const count = await User.find({ username: { $regex: regex } }).count();
    
    const users = await User.find({ username: { $regex: regex } })
      .limit(USER_PER_PAGE)
      .skip(USER_PER_PAGE * (page - 1));
    return  { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Error getting users!");
  }
};
