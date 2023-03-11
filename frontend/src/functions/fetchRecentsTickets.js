export async function fetchRecentTickets() {
  const tickets = await fetch("http://localhost:6565/fetchTicket", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authToken: localStorage?.getItem("user")?.toString(),
    },
    body: JSON.stringify({
      limit: 4,
    }),
  });
  const response = await tickets?.json();
  console.log(response);
  return response;
}
