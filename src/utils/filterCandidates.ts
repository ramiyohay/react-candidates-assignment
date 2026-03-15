import { Candidate } from "../types/Candidate";

// Define the shape of the filters
export interface Filters {
  name?: string;
  position?: string;
  status?: string;
  experience?: number;
}

// Function to filter candidates based on provided filters
export function filterCandidates(candidates: Candidate[], filters: Filters) {
  return candidates.filter((c) => {
    if ( // filter by name (case-insensitive, partial match)
      filters.name &&
      !c.name.toLowerCase().includes(filters.name.toLowerCase())
    )
      return false;

    if (filters.position && c.position !== filters.position) return false;
    if (filters.status && c.status !== filters.status) return false;
    if (filters.experience && c.experience < filters.experience) return false;

    return true;
  });
}
