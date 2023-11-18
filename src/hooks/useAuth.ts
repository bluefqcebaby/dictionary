import { getSession } from "@/api/auth";
import { KEYS } from "@/constants/keys";
import { useQuery } from "@tanstack/react-query";

export const useAuth = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [KEYS.SESSION],
    queryFn: getSession,
  });

  return { isLoading, isError, data };
};
