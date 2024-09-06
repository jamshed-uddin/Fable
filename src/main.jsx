import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddBasicInfo from "./pages/AddBasicInfo.jsx";
import AddStory from "./pages/AddStory.jsx";
import AddSections from "./pages/AddSections.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "add-story",
    element: <AddStory />,
    children: [
      {
        index: true,
        element: <AddBasicInfo />,
      },
      {
        path: "Add-sections/:id",
        element: <AddSections />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </StrictMode>
);
