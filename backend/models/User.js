import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "customer"], required: true },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String },
});

export default mongoose.model("User", UserSchema);
