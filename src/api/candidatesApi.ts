import axios from "axios";
import { Candidate } from "../types/Candidate";

// get candidates from the server
// can use ENV file for the URL, but for simplicity, we will hardcode the URL here
export const getCandidates = async (): Promise<Candidate[]> => {
  const res = await axios.get("http://localhost:3001/candidates");

  return res.data || [];
};
