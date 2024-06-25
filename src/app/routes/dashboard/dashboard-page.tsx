import { useLoaderData } from "react-router-dom";

export function DashboardPage() {
  const data = useLoaderData();
  console.log(data);
  return <div>Dashboard Page</div>;
}
