import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);
  const { id } = request.query;

  if (session) {
    if (request.method === "GET") {
      const product = await Product.findById(id);
      if (!product) {
        return response.status(404).json({ status: "Not found" });
      }
      response.status(200).json(product);
    } else if (request.method === "PATCH") {
      try {
        const productToUpdate = await Product.findByIdAndUpdate(id, {
          $set: request.body,
        });
        response
          .status(200)
          .json({ product: productToUpdate, status: "Product updated" });
      } catch (error) {
        response.status(400).json({ error: error.message });
        console.error(error);
      }
    } else if (request.method === "DELETE") {
      try {
        const productToDelete = await Product.findByIdAndDelete(id);
        response
          .status(200)
          .json({ product: productToDelete, status: "Product deleted" });
      } catch (error) {
        response.status(400).json({ error: error.message });
        console.error(error);
      }
    } else {
      return response.status(405).json({ message: "Method not allowed" });
    }
  } else {
    response.status(401).json({ message: "User not logged in" });
  }
}
