import mongoose from "mongoose";

const { Schema } = mongoose;

const storeSchema = new Schema({
  name: { type: String, required: true },
  note: { type: String },
  address: { type: String },
  lat: { type: Number },
  lon: { type: Number },
});

const Store = mongoose.models.Store || mongoose.model("Store", storeSchema);

export default Store;
