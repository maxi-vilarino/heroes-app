import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FavoriteHeroProvider } from "./heroes/context/FavoriteHeroContext";
// Create a client
const queryClient = new QueryClient();

export const HeroApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteHeroProvider>
        <RouterProvider router={appRouter} />
        <ReactQueryDevtools initialIsOpen={false} />
      </FavoriteHeroProvider>
    </QueryClientProvider>
  );
};
