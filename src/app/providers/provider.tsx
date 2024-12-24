import { routes } from "@/pages";
import SonnerProvider from "@/shared/providers/sonnerProvider/sonnerProvider";
import { Loader } from "@/shared/ui";
import { FC, PropsWithChildren, Suspense } from "react";
import { RouterProvider } from "react-router-dom";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <RouterProvider router={routes} />
      <SonnerProvider />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};

export default Providers;
