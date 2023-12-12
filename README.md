# My Grocery

## Project

This app was developed in the course of the capstone project that is the final project of the 3 months full time web-development bootcamp from [neue fische](https://www.neuefische.de/bootcamp/web-development#kursinhalte).

My Grocery is a shopping list app for groceries with the option of linking created products and stores with each other while also saving and displaying additional information such as locations or product photos.

Users can decide in which of the created stores they want to buy the products that they created in the app. When a product is then put on the shopping list, users can click on a product to see where they need to go to get this product.

Sometimes a product needs to be a special type, from a specific brand or is just hard to find by it's name or label. In this case users can upload a product photo to always remember what it looks like.

## Technologies and Tools

[React](https://react.dev/) 🍌 [Next.js](https://nextjs.org/) 🍎 [styled-components](https://styled-components.com/) 🥦 [Node.js](https://nodejs.org/en) 🥐 [SWR](https://swr.vercel.app/) 🍒 [useLocalStorageState](https://github.com/astoilkov/use-local-storage-state) 🍑 [Vercel](https://vercel.com/) 🍍 [MongoDB](https://www.mongodb.com/) 🫐 [Mongoose](https://mongoosejs.com/) 🥝 [Cloudinary](https://cloudinary.com/) 🥬 [Leaflet](https://leafletjs.com/) 🥚 [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API) 🍐 [Lottie for React](https://lottiereact.com/)

## Team

- [Lüder Budde](https://github.com/luederb)
- [Lennart Kaminsky](https://github.com/lennart-kaminsky)
- [Gökhan Agkurt](https://github.com/GoekhanAgkurt)

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Add local environment variables for Cloudinary and the MongoDB connection string.
To do so create `.env.local` file in the project's root.
Check the `env.example` file, copy paste the variables into the `.env.local` and complete it with the corresponding values

Run `npm run dev` to start a development server and open the displayed URL in a browser.
