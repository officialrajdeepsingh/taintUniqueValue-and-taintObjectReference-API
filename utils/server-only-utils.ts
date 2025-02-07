import "server-only";

export async function getServerOnlyUser() {
  const SecondUserID = process.env.SECOND_USER_ID;
  const data = await fetch(`https://dummyjson.com/users/${SecondUserID}`);
  const user = await data.json();
  console.log(user);
  return { server_only_user: user };
}
