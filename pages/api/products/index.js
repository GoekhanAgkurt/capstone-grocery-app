import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const products = await Product.find();
      return response.status(200).json(products);
    } catch (error) {
      response.status(400).json({ error: error.message });
      console.error(error);
    }
  } else if (request.method === "POST") {
    try {
      const productData = request.body;
      const addedProduct = await Product.create(productData);
      response
        .status(201)
        .json({ product: addedProduct, status: "Product created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
      console.error(error);
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
