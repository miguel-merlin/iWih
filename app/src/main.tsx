import { ConvexProvider, ConvexReactClient } from "convex/react";
import App from "./App.tsx";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const deploymentURL = import.meta.env.VITE_CONVEX_URL;
const convex = new ConvexReactClient(deploymentURL);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConvexProvider client={convex}>
        <App />
      </ConvexProvider>
    </BrowserRouter>
  </React.StrictMode>
);
