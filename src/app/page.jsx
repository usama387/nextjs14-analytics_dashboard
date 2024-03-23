import React from "react";
import { UserButton } from "@clerk/nextjs";

const HomePage = async () => {
  return (
    <div>
      <UserButton />
      HomePage
    </div>
  );
};

export default HomePage;
