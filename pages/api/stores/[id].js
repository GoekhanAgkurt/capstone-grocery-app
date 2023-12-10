import dbConnect from "@/db/connect";
import Store from "@/db/models/Store";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  // if (!id) {
  //   return;
  // }

  if (request.method === "GET") {
    const store = await Store.findById(id);
    if (!store) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(store);
  } else if (request.method === "PATCH") {
    try {
      const storeToUpdate = await Store.findByIdAndUpdate(id, {
        $set: request.body,
      });
      response
        .status(200)
        .json({ store: storeToUpdate, status: "Store updated" });
    } catch (error) {
      response.status(400).json({ error: error.message });
      console.error(error);
    }
  } else if (request.method === "DELETE") {
    try {
      const storeToDelete = await Store.findByIdAndDelete(id);
      response
        .status(200)
        .json({ store: storeToDelete, status: "Store deleted" });
    } catch (error) {
      response.status(400).json({ error: error.message });
      console.error(error);
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
