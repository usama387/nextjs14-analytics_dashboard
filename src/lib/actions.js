"use server";
import { Product, User } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

// This is the first server action to addUser in the db and is being used in addUser page form
export const addUser = async (formData) => {
  "use server";
  // taking all user details in one instance AS an object destructuring it from formData to add the user in the db

  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    // first i will connect to the database
    connectToDb();

    // an instance to generate salt to hash password
    const salt = await bcrypt.genSalt(10);

    //now hash the password with the hash method by passing user password and salt as parameters
    const hashedPassword = await bcrypt.hash(password, salt);

    // creating newUser instance passing all destructured data and save it
    const newUser = new User({
      username,
      email,
      // here i pass the hashed password to be saved in the database
      password: hashedPassword,
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
  redirect("/dashboard/users");
};

// This is the second server action to addProduct in the db and is being used in addProduct page form
export const addProduct = async (formData) => {
  // taking all user details in one instance AS an object destructuring it from formData to add the user in the db

  const { title, desc, color, price, size, stock } =
    Object.fromEntries(formData);

  try {
    // first i will connect to the database
    connectToDb();

    // creating newProduct instance passing all destructured data and save it
    const newProduct = new Product({
      title,
      desc,
      color,
      price,
      size,
      stock,
    });

    await newProduct.save();
  } catch (error) {
    throw new Error("Error creating product: " + error.message);
  }

  // this route contains users data which is refreshed once user is created to show it on the page
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// This is the third server action to delete a Product in the db and is being used in products page in delete button wrapped with form to call this action
export const deleteProduct = async (formData) => {
  
  // destructuring id from formData and then passing it to delete query to perform operations
  const { id } = Object.fromEntries(formData);

  try {
    // first i will connect to the database
    connectToDb();
    
    // deleting product while taking query
    await Product.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to delete the product: " + error.message);
  }

  // this route contains products data which is refreshed once product is deleted
  revalidatePath("/dashboard/products");
};


// This is the fourth server action to delete a user in the db and is being used in users page in delete button wrapped with form to call this action
export const deleteUser = async (formData) => {
  
  // destructuring id from formData and then passing it to delete query to perform operations
  const { id } = Object.fromEntries(formData);

  try {
    // first i will connect to the database
    connectToDb();
    
    // deleting product while taking query
    await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to delete the user: " + error.message);
  }

  // this route contains products data which is refreshed once product is deleted
  revalidatePath("/dashboard/products");
};
