import { useEffect, useState } from "react";
// import { useStateContext } from "../context/stateContext";

export default async function usePostRequest(url, data) {
  //   const { setLoader } = useStateContext();
  const [response, setResponse] = useState(null);
  const [serverError, setServerError] = useState(null);
  useEffect(() => {
    // setLoader(true);
    async function fetchData() {
      try {
        const res = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify(data),
        });
        const resData = await res.json();
        setResponse(resData);
        // setLoader(false);
      } catch (error) {
        setServerError(error);
        // setLoader(false);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return {
    response,
    serverError,
  };
}
