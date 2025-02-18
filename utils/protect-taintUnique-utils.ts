import { experimental_taintUniqueValue as taintUniqueValue } from "react";

export async function getDBUser() {
  const data = await fetch(`https://dummyjson.com/users/1`);
  const user = await data.json();

  taintUniqueValue(
    "Do not pass the user's bank information to the client",
    user,
    user.bank,
  );

  return { user };
}
