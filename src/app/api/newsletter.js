function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      res.status(400).json({ status: "ERROR", message: "Invalid email" });
      return;
    }
    console.log("Email:", email);
    res.status(201).json({ status: "OK", message: "Email saved" });
  }
}

export default handler;
