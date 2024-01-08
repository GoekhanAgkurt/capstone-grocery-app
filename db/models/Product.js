import mongoose from "mongoose";
import "./Store";
const { Schema } = mongoose;

const productShema = new Schema({
  name: { type: String, required: true },
  note: { type: String },
  selectedStore: { type: Schema.Types.ObjectId, ref: "Store" },
  imageURL: { type: String },
  onShoppingList: { type: Boolean },
  checkedProduct: { type: Boolean },
  user: { type: String },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productShema);
export default Product;
