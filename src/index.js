import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="657242746922-36ja12efog1oq1e7da8i422cvqrbee12.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
