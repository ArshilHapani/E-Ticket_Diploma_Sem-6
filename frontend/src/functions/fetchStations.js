export async function fetchStation(setDropdownStations, showSnackBar) {
  //TODO setting loader
  const res = await fetch("http://localhost:6565/passenger/fetchStations", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authToken: localStorage.getItem("user"),
    },
  });
  const { stations, success } = await res.json();
  stations.map((st) => {
    st["label"] = st["st_name"];
    delete st["st_name"];
    return st;
  });
  setDropdownStations(stations);
  if (!success) {
    showSnackBar("Something went wrong while fetching stations", "error");
  }
}
