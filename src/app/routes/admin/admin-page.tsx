import { useUserInfo } from "@/app/routes/admin/api/get-user.ts";

export function AdminPage() {
  const { data, error, isFetching } = useUserInfo();

  if (isFetching) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return <p>{JSON.stringify(data, null, 2)}</p>;
}
