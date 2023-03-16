async function usefetchUser() {
  console.log("usefetchUser invoked");
  const data = await fetch("http://localhost:6565/conductor/fetch", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authToken: localStorage?.getItem("user")?.toString(),
    },
  });

  const { conductor } = await data.json();
  console.log(conductor);
  return conductor;
}
export default usefetchUser;
