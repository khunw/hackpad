import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import Tutorial from "./pages/Tutorial.mdx";
import Submission from "./pages/Submission.mdx";
import ApprovedParts from "./pages/ApprovedParts.mdx";
import Faq from "./pages/Faq.mdx";

import DocPage from "./layouts/DocPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/guide",
    element: (
      <DocPage Tutorial={Tutorial} />
    ),
  },
  {
    path: "/submitting",
    element: <DocPage Tutorial={Submission} />,
  },
  {
    path: "/parts",
    element: <DocPage Tutorial={ ApprovedParts } />,
  },
  {
    path: "/faq",
    element: <DocPage Tutorial={ Faq } />,
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);