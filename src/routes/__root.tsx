import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <>
    <div className="flex flex-col w-full h-screen">
      <main className="flex-1 overflow-auto bg-green-400">
        <Outlet />
      </main>
    </div>
    <TanStackRouterDevtools />
  </>
);

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-4xl font-bold">404</h1>
    <p className="text-lg text-muted-foreground">Page not found</p>
  </div>
);

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});
