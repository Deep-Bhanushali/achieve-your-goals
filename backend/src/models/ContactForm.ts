import mongoose, { Schema, Document } from "mongoose";

export interface IContactForm extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
  serviceType?: string;
  createdAt: Date;
  updatedAt: Date;
}

const contactFormSchema = new Schema<IContactForm>(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\d{10,15}$/, "Please provide a valid phone number"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      minlength: [10, "Message must be at least 10 characters"],
    },
    subject: {
      type: String,
      trim: true,
    },
    serviceType: {
      type: String,
      enum: ["Individual", "Business", "Combo", "Investments", "1-1", "Other"],
      default: "Other",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IContactForm>("ContactForm", contactFormSchema);
