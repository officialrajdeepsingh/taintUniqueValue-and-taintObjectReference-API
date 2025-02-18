import { experimental_taintObjectReference as taintObjectReference } from "react";

export async function getDBUser() {
  const data = await fetch(`https://dummyjson.com/users/1`);
  const user = await data.json();

  taintObjectReference("Do not pass the whole user object to the client", user);

  return { user };
}
