import { useQuery } from "@tanstack/react-query";
import { getCandidates } from "../api/candidatesApi";

// Hook for fetching candidates data using tanstack
export const useCandidates = () => {
  return useQuery({
    queryKey: ["candidates"], // unique key for this query
    queryFn: getCandidates, // api function to fetch candidates data
    staleTime: 1000 * 60 * 5, // data is considered fresh for 5 minutes
  });
};
