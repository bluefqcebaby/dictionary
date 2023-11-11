import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/home";
import { ROUTES } from "@/constants/routes";
import { Dictionaries } from "@/pages/dictionaries";
import { NewDictionary } from "@/pages/new-dictionary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: ROUTES.DICTIONARIES.PATH,
        element: <Dictionaries />,
      },
      {
        path: ROUTES.NEW_DICTIONARY.PATH,
        element: <NewDictionary />,
      },
      {
        path: "*",
        element: <div>404</div>,
      },
    ],
  },
]);
