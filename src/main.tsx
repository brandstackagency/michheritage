import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <main>
      <h1>Mich Heritage</h1>
      <p>Bespoke asoebi and custom pieces, made by appointment.</p>
    </main>
  );
}

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element was not found");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
