import dbConnect from "@/db/connect";
import Store from "@/db/models/Store";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const stores = await Store.find();
      return response.status(200).json(stores);
    } catch (error) {
      response.status(400).json({ error: error.message });
      console.error(error);
    }
  } else if (request.method === "POST") {
    try {
      const storeData = request.body;
      const addedStore = await Store.create(storeData);
      response.status(201).json({ store: addedStore, status: "Store created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
      console.error(error);
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
