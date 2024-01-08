import dbConnect from "@/db/connect";
import Store from "@/db/models/Store";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getServerSession(request, response, authOptions);

  if (session) {
    if (request.method === "GET") {
      try {
        const stores = await Store.find({ user: session.user.email });
        return response.status(200).json(stores);
      } catch (error) {
        response.status(400).json({ error: error.message });
        console.error(error);
      }
    } else if (request.method === "POST") {
      try {
        const storeData = request.body;
        const addedStore = await Store.create({
          ...storeData,
          user: session.user.email,
        });
        response
          .status(201)
          .json({ store: addedStore, status: "Store created" });
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
