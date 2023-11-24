import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Mongo from "./Home/Mongo/Mongo";
import AddItem from "./Home/Mongo/AddItem";
import Mongoose from "./Home/Mongoose/Mongoose";
import AddIemsMgs from "./Home/Mongoose/AddIemsMgs";
import UpdateItem from "./Home/Mongo/UpdateItem";
import UpdateIteMgs from "./Home/Mongoose/UpdateIteMgs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/mongoView",
    element: <Mongo></Mongo>,
    loader: () =>
      fetch("https://mongo-mongoose-test-server.vercel.app/mongoRoomCategory"),
  },
  {
    path: "/mongoAdd",
    element: <AddItem></AddItem>,
  },
  {
    path: "/update/:id",
    element: <UpdateItem></UpdateItem>,
    loader: ({ params }) =>
      fetch(
        `https://mongo-mongoose-test-server.vercel.app/mongoRoomCategory/${params.id}`
      ),
  },
  {
    path: "/mongooseView",
    element: <Mongoose></Mongoose>,
    loader: () =>
      fetch(
        "https://mongo-mongoose-test-server.vercel.app/mongoose/mongooseRoomCategory"
      ),
  },
  {
    path: "/mongooseAdd",
    element: <AddIemsMgs></AddIemsMgs>,
  },
  {
    path: "/updateMgs/:id",
    element: <UpdateIteMgs></UpdateIteMgs>,
    loader: ({ params }) =>
      fetch(
        `https://mongo-mongoose-test-server.vercel.app/mongoose/mongooseRoomCategory/${params.id}`
      ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
