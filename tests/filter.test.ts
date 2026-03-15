import { describe, it, expect } from "vitest";
import { filterCandidates } from "../src/utils/filterCandidates";

// Sample candidates data for testing
const candidates = [
  {
    id: 1,
    name: "Danny",
    email: "danny@mail.com",
    position: "Frontend",
    status: "New",
    experience: 2,
  },
  {
    id: 2,
    name: "Meital",
    email: "meital@mail.com",
    position: "Backend",
    status: "Interview",
    experience: 5,
  },
  {
    id: 3,
    name: "Rami",
    email: "rami@mail.com",
    position: "Frontend",
    status: "Hired",
    experience: 4,
  },
];

describe("filterCandidates", () => {
  it("by name", () => {
    const res = filterCandidates(candidates, { name: "danny" });

    expect(res.length).toBe(1);
  });

  it("by position", () => {
    const res = filterCandidates(candidates, { position: "Backend" });

    expect(res.length).toBe(1);
  });

  it("by status", () => {
    const res = filterCandidates(candidates, { status: "Hired" });

    expect(res[0].name).toBe("Rami");
  });

  it("by experience", () => {
    const res = filterCandidates(candidates, { experience: 4 });

    expect(res.length).toBe(2);
  });
});
