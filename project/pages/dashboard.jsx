import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import DailySummaryCard from '../components/summaryCards/dailySummary';
import { motion } from 'framer-motion';

import MonthlySummaryCard from '../components/summaryCards/monthlySummary';
import StageContBar from '../components/charts/stageBar';
import StageInfo from '../components/tables/stage';
import VehicleCount from '../components/tables/vehicleCont';
import MatatuTables from '../components/tables/vehicleCont';

// Dummy data
const dummy_data = {
  totalPeople: 1250,
  activeVehicles: 85,
  averageOccupancy: 14.7,
  peopleCountHistory: [
    { time: " 08:00:00", passengers: 50 , rev:4000},
    { time: " 09:00:00", passengers: 75 , rev: 6000},
    { time: " 10:00:00", passengers: 120, rev: 13000 },
    { time: " 11:00:00", passengers: 90 , rev:9000},
  ],
  vehicleTypeDistribution: [
    { id: "Bus", label: "Bus", value: 60 },
    { id: "Van", label: "Van", value: 25 },
    { id: "Car", label: "Car", value: 15 },
  ],
  dailyActivity: [
    { reg: "KBA 111A", stage1: 100, stage2: 300, stage3: 450, stage4: 1600 },
    { reg: "KAU 981A", stage1: 60, stage2: 400, stage3: 500, stage4: 720 },
    { reg: "KAZ 512B", stage1: 40, stage2: 200, stage3: 600, stage4: 640 },
    { reg: "KBG 102B", stage1: 50, stage2: 145, stage3: 850, stage4: 400 },
    { reg: "KAZ 871H", stage1: 70, stage2: 234, stage3: 1350, stage4: 480 },
  ],
  Stats: [
    {
      date: "01/01/2024",
      people_count: 172,
      min_charge: 20,
      max_charge: 80,
      vehicles_used: 5,
      highest_earner: "KBA 111A",
      lowest_earner: "KAZ 111A",
      total_rev: 105000,
      total_costs: 10000,
    },
    {
      date: "02/01/2024",
      people_count: 142,
      min_charge: 20,
      max_charge: 80,
      vehicles_used: 5,
      highest_earner: "KBA 111A",
      lowest_earner: "KAZ 111A",
      total_rev: 80000,
      total_costs: 10000,
    },
    {
      date: "03/01/2024",
      people_count: 201,
      min_charge: 20,
      max_charge: 80,
      vehicles_used: 5,
      highest_earner: "KBE 121B",
      lowest_earner: "KAY 211B",
      total_rev: 168000,
      total_costs: 10000,
    },
    {
      date: "04/01/2024",
      people_count: 160,
      min_charge: 20,
      max_charge: 80,
      vehicles_used: 5,
      highest_earner: "KBA 111A",
      lowest_earner: "KAU 981A",
      total_rev: 90000,
      total_costs: 10000,
    },
    {
      date: "05/02/2024",
      people_count: 185,
      min_charge: 20,
      max_charge: 80,
      vehicles_used: 5,
      highest_earner: "KAZ 512B",
      lowest_earner: "KBA 111A",
      total_rev: 131000,
      total_costs: 10000,
    },
    {
      date: "05/03/2024",
      people_count: 205,
      min_charge: 20,
      max_charge: 80,
      vehicles_used: 5,
      highest_earner: "KAZ 512B",
      lowest_earner: "KAZ 111A",
      total_rev: 170000,
      total_costs: 10000,
    },
    {
      date: "05/04/2024",
      people_count: 400,
      min_charge: 20,
      max_charge: 80,
      vehicles_used: 10,
      highest_earner: "KBG 102B",
      lowest_earner: "KAZ 871H",
      total_rev: 321000,
      total_costs: 20000,
    },
    {
      date: "05/05/2024",
      people_count: 398,
      min_charge: 20,
      max_charge: 80,
      vehicles_used: 10,
      highest_earner: "KBG 102B",
      lowest_earner: "KAZ 871H",
      total_rev: 318000,
      total_costs: 10000,
    },
  ],
};

// Calculate monthly totals
const monthlyRevenue = dummy_data.Stats.reduce((acc, curr) => acc + curr.total_rev, 0);
const monthlyCosts = dummy_data.Stats.reduce((acc, curr) => acc + curr.total_costs, 0);
const monthlyProfit = monthlyRevenue - monthlyCosts;
const profitMargin = ((monthlyProfit / monthlyRevenue) * 100).toFixed(2);

// Format currency
const formatKsh = (amount) => {
  return `KSH ${amount.toLocaleString()}`;
};

function DashBoard() {
  const latestStats = dummy_data.Stats[dummy_data.Stats.length - 1];

  return (
    <>
      <Helmet>
        <title>Matatu Vision AI</title>
      </Helmet>
      
      <Container fluid className="dashboard-container">
        {/* Top Cards Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Row className="mb-4">
           <DailySummaryCard data={dummy_data.Stats}/>
          </Row>
        </motion.div>

        {/* Monthly Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Row className="mb-4">
           <MonthlySummaryCard data={dummy_data.Stats}/>
          </Row>
        </motion.div>

        {/* Revenue Trend and Vehicle Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Row className="mb-4" style={{display:"flex", flexWrap:"nowrap"}}>
            <Col md={6}>
              <Card className="dashboard-card">
                <Typography variant="h6" className="mb-3">Expected Revenue Trend</Typography>
                <div style={{ height: '300px' }}>
                  <ResponsiveLine
                    data={[{
                      id: "revenue",
                      data: dummy_data.peopleCountHistory.map(stat => ({
                        x: stat.time,
                        y: stat.rev
                      }))
                    }]}
                    margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                    yScale={{ type: 'linear' }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Revenue (KSH)',
                      legendOffset: -50,
                      legendPosition: 'middle'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    enableGridX={false}
                    curve="monotoneX"
                  />
                </div>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="dashboard-card">
                <Typography variant="h6" className="mb-3">PassengerTrend</Typography>
                <div style={{ height: '300px' }}>
                  <ResponsiveLine
                    data={[{
                      id: "revenue",
                      data: dummy_data.peopleCountHistory.map(stat => ({
                        x: stat.time,
                        y: stat.passengers
                      }))
                    }]}
                    margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                    yScale={{ type: 'linear' }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'No. of Passengers',
                      legendOffset: -50,
                      legendPosition: 'middle'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    enableGridX={false}
                    curve="monotoneX"
                  />
                </div>
              </Card>
            </Col>
        
          </Row>
        </motion.div>

        {/* Journey Stage Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Row>
            <Col md={8}>
              <StageContBar data={dummy_data.dailyActivity}/>
            </Col>
            <Col md={4}>
            <StageInfo/>
            </Col>
          </Row>
          <Row>
           <MatatuTables/>
          </Row>
        </motion.div>
      </Container>
    </>
  );
}

export default DashBoard;