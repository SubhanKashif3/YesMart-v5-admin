import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apollo-client.ts";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Auth from "./pages/auth/Auth.tsx";
import Dashboard from "./pages/Dashboard.tsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path : "",
        element : <Auth/>
      },
      {
        path : "/d",
        element : <Dashboard/>
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
