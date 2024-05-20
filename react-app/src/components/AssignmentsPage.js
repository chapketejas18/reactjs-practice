import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AssignmentsPage = ({ setSelectedDayName }) => {
  const navigate = useNavigate();

  const handleDaySelect = (day) => {
    const dayNames = [
      "Assignment Day 1",
      "Assignment Day 2",
      "Assignment Day 3",
      "Assignment Day 4",
      "Assignment Day 5",
      "Assignment Day 6",
    ];
    setSelectedDayName(dayNames[day - 1]);
    navigate(`/assignments/day${day}`);
  };

  return (
    <Box sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Assignments Overview
      </Typography>
      <Box sx={{ mt: 2 }}>
        {[1, 2, 3, 4, 5, 6].map((day) => (
          <Button
            key={day}
            variant="contained"
            sx={{ m: 1 }}
            onClick={() => handleDaySelect(day)}
          >
            Day {day}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default AssignmentsPage;
