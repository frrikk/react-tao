import { useQuery } from "@tanstack/react-query";

const fetchUser = () =>
  fetch("http://localhost:8000/me").then((res) => res.json());

const userQuery = {
  queryKey: ["user"],
  queryFn: fetchUser,
  staleTime: 5000,
};

export const useUserInfo = () => useQuery(userQuery);
