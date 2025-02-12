import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { Col, Row } from 'react-bootstrap';

// Sample data
const dailyPassengerCount = [
  { day: 'Monday', passengers: 1200 },
  { day: 'Tuesday', passengers: 1100 },
  { day: 'Wednesday', passengers: 1300 },
  { day: 'Thursday', passengers: 1400 },
  { day: 'Friday', passengers: 1500 },
  { day: 'Saturday', passengers: 1000 },
  { day: 'Sunday', passengers: 900 },
];

const vehicleContribution = [
  { vehicle: 'KAA 123A', passengers: 300 },
  { vehicle: 'KBB 456B', passengers: 250 },
  { vehicle: 'KCC 789C', passengers: 280 },
  { vehicle: 'KDD 012D', passengers: 270 },
  { vehicle: 'KEE 345E', passengers: 320 },
];

const revenueCollected = [
  { vehicle: 'KAA 123A', revenue: 15000 },
  { vehicle: 'KBB 456B', revenue: 12500 },
  { vehicle: 'KCC 789C', revenue: 14000 },
  { vehicle: 'KDD 012D', revenue: 13500 },
  { vehicle: 'KEE 345E', revenue: 16000 },
];

const MatatuTables = () => {
  return (
    <div className='container-fluid'>
        <Row>
            <Col>
              {/* Table 1: Daily Passenger Count Total */}
      <Typography variant="h6" gutterBottom>
        Daily Passenger Count Total
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell align="right">Passengers</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dailyPassengerCount.map((row) => (
              <TableRow key={row.day}>
                <TableCell>{row.day}</TableCell>
                <TableCell align="right">{row.passengers}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
            </Col>
            <Col>
            
      {/* Table 2: Vehicle Contribution to Total Passengers */}
      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
        Vehicle Contribution to Total Passengers
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vehicle</TableCell>
              <TableCell align="right">Passengers</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicleContribution.map((row) => (
              <TableRow key={row.vehicle}>
                <TableCell>{row.vehicle}</TableCell>
                <TableCell align="right">{row.passengers}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
            </Col>
            <Col>
            
      {/* Table 3: Revenue Collected by Matatu */}
      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
        Revenue Collected by Matatu
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vehicle</TableCell>
              <TableCell align="right">Revenue (Ksh)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {revenueCollected.map((row) => (
              <TableRow key={row.vehicle}>
                <TableCell>{row.vehicle}</TableCell>
                <TableCell align="right">{row.revenue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
            </Col>
        </Row>
    


    </div>
  );
};

export default MatatuTables;