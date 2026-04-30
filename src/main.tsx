import { createRoot } from "react-dom/client";
import "./app/styles/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./app/i18n/i18n.ts";
import { ThemeProvider } from "next-themes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Suspense fallback={null}>
          <App />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>,
);
