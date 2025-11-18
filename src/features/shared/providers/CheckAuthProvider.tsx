import { atuhCheckStattus } from "@/core/auth/actions/auth-actions";
import { useQuery } from "@tanstack/react-query";
import { ThemedFullScreenLoading } from "../components/ThemedFullScreenLoading";
import type { PropsWithChildren } from "react";

export const CheckAuthProvider = ({ children }: PropsWithChildren) => {

  const { isLoading } = useQuery({
    queryKey: ['auth'],
    queryFn: atuhCheckStattus,
    retry: false,
    refetchInterval: 1000 * 60 * 1.5,
  })

  if (isLoading) return <ThemedFullScreenLoading />

  return children;
}