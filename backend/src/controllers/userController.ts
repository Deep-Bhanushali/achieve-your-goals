import { Request, Response, NextFunction } from "express";
import User, { IUser } from "../models/User";
import { sendResponseToClient, sendContactFormToAdmin } from "../services/emailService";

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { firstName, lastName, email, phone, password, confirmPassword, agreeToTerms } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    if (!agreeToTerms) {
      return res.status(400).json({ message: "You must agree to the terms and conditions" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // Create new user
    const user = new User({
      firstName,
      lastName,
      email,
      phone,
      password,
      agreeToTerms,
    });

    await user.save();

    console.log("✓ New user registered and forwarded to admin for manual follow-up");
    console.log(`   Owner will manually review and reply to: ${email}`);

    // Notify admin about new user (optional)
    try {
      await sendContactFormToAdmin({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        subject: "New User Registration",
        message: `A new user has signed up: ${user.firstName} ${user.lastName} (${user.email})`,
        serviceType: "Other",
      });
    } catch (adminNotifyError) {
      console.error("Failed to notify admin about new user:", adminNotifyError);
    }

    // Send acknowledgement to the user
    try {
      await sendResponseToClient(user.email, user.firstName || user.email);
      console.log(`✓ Welcome/acknowledgement sent to new user: ${user.email}`);
    } catch (clientEmailError) {
      console.error("Failed to send welcome email to user:", clientEmailError);
    }

    res.status(201).json({
      message: "Account created successfully! We have received your information and will get back to you soon.",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, phone } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { firstName, lastName, phone },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};
