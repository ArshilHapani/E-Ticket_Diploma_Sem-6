export async function fetchTicketHistory(showSnackBar) {
  const tickets = await fetch("http://localhost:6565/fetchAllTickets", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authToken: localStorage.getItem("user").toString(),
    },
  });
  const response = await tickets.json();
  if (!response.success) {
    showSnackBar("Something went wrong", "error");
    return;
  }
  return response.tickets;
}
