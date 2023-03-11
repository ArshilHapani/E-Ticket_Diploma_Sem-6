export async function fetchStation(setDropdownStations, showSnackBar) {
  const data = await fetch("http://localhost:6565/fetchAllStations", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authToken: localStorage?.getItem("user")?.toString(),
    },
  });
  const { stations, success } = await data?.json();
  stations.map((st) => {
    st["label"] = st["st_name"];
    delete st["st_name"];
    return st;
  });
  setDropdownStations(stations);
  if (!success) {
    showSnackBar("Something went wrong", "error");
    return;
  }
}
