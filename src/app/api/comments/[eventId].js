async function handle(req, res) {
  const { eventId } = req.query;
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(400).json({ status: "ERROR", message: "Invalid input" });
      return;
    }
    console.log(name, email, text);
    res.status(201).json({ status: "OK", message: "Comment saved" });
  }
  if (req.method === "GET") {
    // const comments = await fetch(
    //   `https://jsonplaceholder.typicode.com/comments?postId=${eventId}`
    // ).then((response) => response.json());
    const comments = [
      {
        id: "1",
        name: "Test",
        text: "This is a test comment",
      },
    ];
    res.status(200).json(comments);
  }
}
