import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { CssBaseline, GeistProvider } from "@geist-ui/core";

export const App = () => {
  return (
    <GeistProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </GeistProvider>
  );
};
