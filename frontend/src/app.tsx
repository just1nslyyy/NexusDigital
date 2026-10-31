import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Header } from "./components/layout/Header";
import { Hero } from "./components/home/Hero";
import { PopularCategories } from "./components/home/PopularCategories";

export default function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30_000,
            gcTime: 5 * 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-[#0B0E14] text-[#F4F6FC]">
          <Header />

          <main className="mx-auto w-full max-w-[1440px] px-4 pb-20 sm:px-6 lg:px-8">
            <Hero />
            <PopularCategories />
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}