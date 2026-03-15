import { Candidate } from "../types/Candidate";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Box,
  Typography,
} from "@mui/material";

interface Props {
  candidates: Candidate[];
}

export default function CandidatesTable({ candidates }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Experience</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {!candidates || candidates.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5}>
                <Box
                  sx={{
                    textAlign: "center",
                    py: 6,
                    color: "text.secondary",
                  }}
                >
                  <Typography variant="body1">
                    No candidates match the current filters
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ) : (
            candidates.map((c) => (
              <TableRow key={c.id} hover>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.email}</TableCell>
                <TableCell>{c.position}</TableCell>
                <TableCell>{c.status}</TableCell>
                <TableCell>{c.experience}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
