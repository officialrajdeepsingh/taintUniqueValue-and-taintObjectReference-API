import { experimental_taintObjectReference as taintObjectReference } from "react";

export async function getDBUser() {
  const userID = process.env.USER_ID;

  const data = await fetch(`https://dummyjson.com/users/${userID}`);
  const user = await data.json();

  taintObjectReference(
    "Do not pass ALL environment variables to the client.",
    process.env,
  );
  return { user };
}
