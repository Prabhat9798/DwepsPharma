import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  fullName: { 
    type: String, 
    required: [true, "Please provide your full name"] 
  },
  email: { 
    type: String, 
    required: [true, "Please provide your email"] 
  },
  phone: { 
    type: String, 
    required: [true, "Please provide your phone number"] 
  },
  message: { 
    type: String, 
    required: [true, "Please provide a message"] 
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);