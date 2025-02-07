import "server-only";

export async function getServerOnlyUser() {
   const data = await fetch("https://dummyjson.com/users/2")
   const user = await data.json()
   console.log( user );
  return { server_only_user : user };
};
