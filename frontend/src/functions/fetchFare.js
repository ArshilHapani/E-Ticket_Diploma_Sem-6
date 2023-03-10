export async function generateFare(dist) {
  console.log(dist);
  const fare = await fetch("http://localhost:6565/generateFare", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      start: dist.source.st_id,
      dest: dist.destination.st_id,
    }),
  });
  const response = await fare.json();
  console.log(response);
  return response.amount;
}
