import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  
  // ✅ This matches your JSON "about"
  about: { type: String, required: true },

  // ✅ NEW FIELD: Stores "1*10 Tablets", "30 GM", etc.
  packSize: { type: String, required: true },

  // ✅ Updated to include 'Gel' for the ointment
  form: { 
    type: String, 
    enum: ["Tablet", "Injection", "Gel", "Sachet", "Softgel"], 
    required: true 
  },

  category: { type: String, default: "General" },
  
  description: {
    whatIsIt: { type: String, required: true },
    whenAndHow: { type: String, required: true },
    keyUses: [String]
  }
}, { timestamps: true });

// Prevent "OverwriteModelError"
const Medicine = mongoose.models.Medicine || mongoose.model("Medicine", medicineSchema);

export default Medicine;