import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import TVShows from "./pages/TVShows";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/tv-shows", element: <TVShows /> },
    ],
  },
]);

export default router;
