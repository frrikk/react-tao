import AppRouter from "./app.router.tsx";
import { AppLayout } from "@/app/app.layout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <div>her er jeg på alle</div>
        <AppRouter />
      </AppLayout>
    </QueryClientProvider>
  );
}
