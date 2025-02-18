import "server-only";
import {
  experimental_taintObjectReference as taintObjectReference,
  experimental_taintUniqueValue as taintUniqueValue,
} from "react";

export async function getDBUser() {
  const data = await fetch(`https://dummyjson.com/users/1`);
  const user = await data.json();

  taintObjectReference("Do not pass the whole user object to the client", user);

  // taintUniqueValue(
  //   "Do not pass the user's bank information to the client",
  //   user,
  //   user.bank,
  // );

  const {
    firstName,
    lastName,
    maidenName,
    age,
    gender,
    email,
    phone,
    username,
    password,
    birthDate,
    company: { department, address },
  } = user;

  return {
    user: {
      firstName,
      lastName,
      maidenName,
      age,
      gender,
      email,
      phone,
      username,
      password,
      birthDate,
      department,
      address: address.address,
    },
  };
}
