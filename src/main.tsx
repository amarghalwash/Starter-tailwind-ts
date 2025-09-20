import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex justify-center bg-red-400 p-4 text-3xl text-red-950 md:text-5xl">
      Ammar starter
    </div>
  </StrictMode>,
);
