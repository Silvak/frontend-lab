import { createBrowserRouter } from "react-router-dom";
import { CvPage } from "@/CvPage";
import Mock from "./Mock";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CvPage />,
  },
  {
    path: "/mock",
    element: <Mock />,
  },
]);
