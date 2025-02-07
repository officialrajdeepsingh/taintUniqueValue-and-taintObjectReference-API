export async function getServerUser() {
  const userID = process.env.USER_ID;
  const data = await fetch(`https://dummyjson.com/users/${userID}`);
  const user = await data.json();
  console.log(user);
  return { server_user: user };
}
