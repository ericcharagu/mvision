import React from 'react';
import { motion } from 'framer-motion';
import { ResponsiveLine } from '@nivo/line';
import { Users, Calculator, Route, Activity, BarChart3, Clock, Shield } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer , Legend} from 'recharts';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './landing.css';
const dailyRevenue=[ { x: 'Mon', y: 45000 },
  { x: 'Tue', y: 52000 },
  { x: 'Wed', y: 49000 },
  { x: 'Thu', y: 55000 },
  { x: 'Fri', y: 62000 },
  { x: 'Sat', y: 68000 },
  { x: 'Sun', y: 51000 }]

const LineChartTheme = {
  background: "#ffffff", // White background
  text: {
    fontSize: 12,
    fill: "#1e3a8a", // Dark blue for text
    outlineWidth: 0,
    outlineColor: "transparent",
  },
  axis: {
    domain: {
      line: {
        stroke: "#3b82f6", // Blue for axis lines
        strokeWidth: 1,
      },
    },
    ticks: {
      line: {
        stroke: "#3b82f6", // Blue for tick lines
        strokeWidth: 1,
      },
      text: {
        fill: "#1e3a8a", // Dark blue for tick labels
      },
    },
    legend: {
      text: {
        fill: "#1e3a8a", // Dark blue for axis legends
      },
    },
  },
  grid: {
    line: {
      stroke: "#d1d5db", // Light gray for grid lines
      strokeWidth: 1,
    },
  },
  legends: {
    text: {
      fill: "#1e3a8a", // Dark blue for legend text
    },
  },
  tooltip: {
    container: {
      background: "#ffffff", // White background for tooltips
      color: "#1e3a8a", // Dark blue for tooltip text
      fontSize: 12,
      borderRadius: 4,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  },
  crosshair: {
    line: {
      stroke: "#3b82f6", // Blue for crosshair lines
      strokeWidth: 1,
      strokeOpacity: 0.75,
    },
  },
};

// Theme configuration remains the same as previous version

const MatatuVisionLanding = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <motion.header className="hero-section">
        <div className="hero-banner">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="main-heading"
          >
            Track. Optimize. Grow.
          </motion.h1>
          <motion.div 
            className="subheading-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="subheading">
              Revolutionizing Matatu Operations with AI-Powered <span className="highlight">DeepTrack</span> Technology
            </h2>
          </motion.div>
        </div>

        <div className="hero-content">
          <div className="hero-features">
            <motion.div className="feature-list">
              {[
                {
                  icon: <Users />,
                  title: "Accurate Passenger Counting",
                  description: "Eliminate revenue leakages with real-time passenger tracking and automated counting systems.",
                  metric: "98% accuracy rate"
                },
                {
                  icon: <Calculator />,
                  title: "Financial Transparency",
                  description: "Generate trusted earnings reports for SACCO members with tamper-proof data collection.",
                  metric: "100% verifiable data"
                },
                {
                  icon: <Route />,
                  title: "Route Optimization",
                  description: "Leverage AI-powered insights to identify profitable routes and optimize schedules.",
                  metric: "30% revenue increase"
                },
                {
                  icon: <Activity />,
                  title: "Fleet Performance Analytics",
                  description: "Monitor vehicle efficiency, compliance, and driver behavior in real-time.",
                  metric: "24/7 monitoring"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    <span className="metric">{feature.metric}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="hero-analytics"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="analytics-card">
              <h3>Daily Revenue Tracking</h3>
              <div className="chart-container">
              <Row className="mt-4">
        <Col md={8}>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={dailyRevenue}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis
                tickFormatter={(value) => `KSh ${value / 1000}k`}
              />
              <Tooltip
                formatter={(value) => [`KSh ${value}`, 'Revenue']}
                labelFormatter={(label) => `Day: ${label}`}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="y"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Revenue"
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>How Revenue is Calculated</Card.Title>
              <Card.Text>
            
                <ul>
                  <li>
                    <strong>Geo-tagging Passenger Drop-off Points:</strong> 
                    Passengers' drop-off locations are geo-tagged to estimate the distance traveled.
                  </li>
                  <li>
                    <strong>Estimating Fare Paid:</strong> 
                    The fare is calculated based on the distance and predefined fare rates.
                  </li>
                  <li>
                    <strong>Aggregating Revenue per Car:</strong> 
                    Revenue is calculated for each car in the fleet and aggregated daily.
                  </li>
                  <li>
                    <strong>Real-Time Updates:</strong> 
                    Real-time revenue rates are computed to enable quicker business decisions.
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="cta-banner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2>Make Data-Driven Decisions. Maximize Your Revenue.</h2>
          <button className="cta-button">Get Started Today</button>
        </motion.div>
      </motion.header>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>Why Choose DeepTrack?</h2>
        <div className="benefits-grid">
          {[
            {
              icon: <Clock />,
              title: "Revenue Assurance",
              description: "Track every passenger and payment in real-time, ensuring no revenue is lost through leakage.",
              stats: ["35% increase in daily collections", "100% digital payment tracking"]
            },
            {
              icon: <BarChart3 />,
              title: "Data Analytics",
              description: "Transform raw data into actionable insights for better business decisions.",
              stats: ["Daily performance reports", "Custom analytics dashboard"]
            },
            {
              icon: <Clock />,
              title: "Real-Time Monitoring",
              description: "Monitor your entire fleet's performance, location, and status in real-time.",
              stats: ["Live vehicle tracking", "Instant alerts & notifications"]
            },
            {
              icon: <Shield />,
              title: "Compliance & Security",
              description: "Ensure regulatory compliance and maintain secure records of all operations.",
              stats: ["NTSA compliance ready", "Secure data storage"]
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
              <ul className="benefit-stats">
                {benefit.stats.map((stat, i) => (
                  <li key={i}>{stat}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CSS styles included separately for brevity */}
    </div>
  );
};

export default MatatuVisionLanding;
