import dbConnect from "@/db/connect";
import Store from "@/db/models/Store";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);
  const { id } = request.query;
  const store = await Store.findById(id);

  if (session) {
    if (session.user.email === store.user) {
      if (request.method === "GET") {
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
    } else {
      response.status(401).json({ message: "User not authorized" });
    }
  } else {
    response.status(401).json({ message: "User not logged in" });
  }
}
