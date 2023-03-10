export async function generateFare(dist) {
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
  const { amount } = await fare.json();
  return amount;
}
