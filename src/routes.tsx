import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ClusterView, FileViewByLabel, FileViewer } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <FileViewer />,
      },
      {
        path: "/group",
        element: <ClusterView />,
      },
      {
        path: "/group/:id",
        element: <FileViewByLabel />,
      },
    ],
  },
]);
