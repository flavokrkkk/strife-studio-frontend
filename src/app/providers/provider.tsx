import { routes } from "@/pages";
import SonnerProvider from "@/shared/providers/sonnerProvider/sonnerProvider";
import { Loader } from "@/shared/ui";
import { FC, PropsWithChildren, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { queryClient } from "@app/config";
import { QueryClientProvider } from "@tanstack/react-query";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
      <SonnerProvider />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </QueryClientProvider>
  );
};

export default Providers;
