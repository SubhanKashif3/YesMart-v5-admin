import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apollo-client.ts";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/auth/Auth.tsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path : "",
        element : <Login/>
      }
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={appRouter} />
    </ApolloProvider>
  </StrictMode>
);
