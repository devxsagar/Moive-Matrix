import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import TVShows from "./pages/TVShows";
import Movies from "./pages/Movies";
import Explore from "./components/Explore";
import Details from "./pages/Details";
import PageNotFound from "./pages/PageNotFound";
import MyList from "./pages/MyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/tv-shows", element: <TVShows /> },
      { path: "/movies", element: <Movies /> },
      { path: "/explore/:mediaType/:category", element: <Explore /> },
      { path: "/details/:mediaType/:title/:id", element: <Details /> },
      { path: "/my-list", element: <MyList />},

      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

export default router;
