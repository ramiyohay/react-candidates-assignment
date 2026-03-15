import { useState } from "react";
import {
  Container,
  Stack,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useCandidates } from "./hooks/useCandidates";
import CandidatesTable from "./components/CandidatesTable";
import { filterCandidates } from "./utils/filterCandidates";

export default function App() {
  const { data = [] } = useCandidates(); // hook to fetch candidates data
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");
  const [experience, setExperience] = useState("");

  // Function to reset all filters
  const resetFilters: () => void = () => {
    setName("");
    setPosition("");
    setStatus("");
    setExperience("");
  };

  // Get the filtered candidates based on the current filter values
  const filtered = filterCandidates(data, {
    name,
    position,
    status,
    experience: experience ? Number(experience) : undefined,
  });

  return (
    <Container sx={{ mt: 4 }}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Select
          value={position}
          disabled={!name}
          onChange={(e) => setPosition(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">All Positions</MenuItem>
          <MenuItem value="Frontend">Frontend</MenuItem>
          <MenuItem value="Backend">Backend</MenuItem>
        </Select>

        <Select
          value={status}
          disabled={!position}
          onChange={(e) => setStatus(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">All Statuses</MenuItem>
          <MenuItem value="New">New</MenuItem>
          <MenuItem value="Interview">Interview</MenuItem>
          <MenuItem value="Hired">Hired</MenuItem>
        </Select>

        <TextField
          type="number"
          label="Minimum Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <Button variant="outlined" onClick={resetFilters}>
          Reset Filters
        </Button>
      </Stack>

      <div style={{ marginTop: 40 }}>
        <CandidatesTable candidates={filtered || []} />
      </div>
    </Container>
  );
}
