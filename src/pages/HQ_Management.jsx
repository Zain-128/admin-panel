import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const HQ_Management = () => {
  return (
    <Box variant="main" sx={{ minHeight: "75vh" }}>
      <Box sx={{ backgroundColor: "#fff", p: 3, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          HQ LIST
        </Typography>

        <TableContainer
          component={Paper}
          sx={{ marginTop: 2, boxShadow: "none" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="a simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{ color: "#A3AED0", fontSize: 14, cursor: "pointer" }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{ color: "#A3AED0", fontSize: 14, cursor: "pointer" }}
                  align="left"
                >
                  REG_NUMBER
                </TableCell>
                <TableCell
                  sx={{ color: "#A3AED0", fontSize: 14, cursor: "pointer" }}
                  align="left"
                >
                  MOBILE NUMBER
                </TableCell>
                <TableCell
                  sx={{ color: "#A3AED0", fontSize: 14, cursor: "pointer" }}
                  align="left"
                >
                  EMAIL
                </TableCell>
                <TableCell
                  sx={{ color: "#A3AED0", fontSize: 14, cursor: "pointer" }}
                  align="left"
                >
                  ADDRESS
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default HQ_Management;
