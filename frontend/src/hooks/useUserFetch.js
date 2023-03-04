import { useStateContext } from "../context/stateContext";

const useUserFetch = () => {
  const { setLoader, setNewUser } = useStateContext();

  async function fetchUser() {
    setLoader(true);
    const data = await fetch("http://localhost:6565/fetchPassenger", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.getItem("user").toString(),
      },
    });
    const response = await data.json();
    const { passenger } = response;
    setNewUser(passenger);
    setLoader(false);
  }

  return { fetchUser };
};

export default useUserFetch;
