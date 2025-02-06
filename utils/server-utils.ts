"use server"

export const  getServerUser = async () => {
   const data = await fetch("https://dummyjson.com/users/1")
   const user = await data.json()
   console.log( user );
  return { server_user : user   };
};
