export async function createTicket(dist, showSnackBar) {
  console.log("create ticket invoked");
  console.log(dist);
  console.log(dist.quantity);
  const ticket = await fetch("http://localhost:6565/ticket/create", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authToken: localStorage.getItem("user").toString(),
    },
    body: JSON.stringify({
      quantity: dist.quantity,
      start: dist.source.st_id,
      dest: dist.destination.st_id,
    }),
  });

  const response = await ticket.json();
  if (!response.success) {
    showSnackBar("Insufficient balance", "error");
  } else {
    showSnackBar("Ticket purchased successfully", "success");
  }
  console.log(response);
}
