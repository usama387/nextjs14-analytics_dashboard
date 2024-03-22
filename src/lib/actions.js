import { User } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// This is the first server action to addUser in the db and is being used in addUser page form
export const addUser = async (formData) => {
  "use server";
  // taking all user details in one instance AS an object destructuring it from formData to add the user in the db

  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    // first i will connect to the database
    connectToDb();

    // creating newUser instance passing all destructured data and save it
    const newUser = new User({
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }

  // this route contains users data which is refreshed once user is created to show it on the page
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users")
};
