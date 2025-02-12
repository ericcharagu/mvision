import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const stageData = {
  Destinations: {
    Nbo: [
      { stageName: "Westlands", price: 30 },
      { stageName: "Kangemi", price: 50 },
      { stageName: "Kinoo", price: 60 },
      { stageName: "Kikuyu", price: 80 },
    ],
    Kikuyu: [
      { stageName: "Kinoo", price: 30 },
      { stageName: "Kangemi", price: 50 },
      { stageName: "Westlands", price: 60 },
      { stageName: "Nairobi", price: 80 },
    ],
  },
};

// Transform the data into a combined format
const transformData = (data) => {
  const destinations = Object.keys(data.Destinations);
  const stages = {};

  destinations.forEach((destination) => {
    data.Destinations[destination].forEach((stage) => {
      if (!stages[stage.stageName]) {
        stages[stage.stageName] = { stageName: stage.stageName };
      }
      stages[stage.stageName][destination] = stage.price;
    });
  });

  return Object.values(stages);
};

const combinedData = transformData(stageData);

export default function  StageInfo()  {
  const destinations = Object.keys(stageData.Destinations);

  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" sx={{ padding: 2 }}>
        Stage Prices by Destination
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Stage Name</TableCell>
            {destinations.map((destination) => (
              <TableCell key={destination} align="right">
                {destination}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {combinedData.map((stage, index) => (
            <TableRow key={index}>
              <TableCell>{stage.stageName}</TableCell>
              {destinations.map((destination) => (
                <TableCell key={destination} align="right">
                  {stage[destination] || '-'}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

