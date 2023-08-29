import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email address."],
    unique: true,
  },
});

const Newsletter =
  mongoose.models.Newsletter || mongoose.model("Newsletter", newsletterSchema);

export default Newsletter;
