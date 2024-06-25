import { createBrowserRouter, RouterProvider } from "react-router-dom";

const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      lazy: async () => {
        const { DashboardPage } = await import("@/app/routes/");
        return { Component: DashboardPage };
      },
    },
    {
      path: "/profile",
      lazy: async () => {
        const { ProfilePage } = await import("@/app/routes/");
        return { Component: ProfilePage };
      },
    },
    {
      path: "/admin",
      lazy: async () => {
        const { AdminPage } = await import("@/app/routes/");
        return { Component: AdminPage };
      },
    },
  ]);

export default function AppRouter() {
  const router = createRouter();

  return <RouterProvider router={router} />;
}
