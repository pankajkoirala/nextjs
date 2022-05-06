export default function handler(req, res) {
  const { method } = req;
  res.status(200).json({ name: "John Doe" });
  switch (method) {
    case "POST":
      break;

    default:
      break;
  }
}
