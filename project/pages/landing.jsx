import React from 'react';
import { motion } from 'framer-motion';
import { ResponsiveLine } from '@nivo/line';
import { Users, Calculator, Route, Activity, BarChart3, Clock, Shield } from 'lucide-react';
import './landing.css';

const revenueData = [
  {
    id: "daily revenue",
    data: [
      { x: 'Mon', y: 45000 },
      { x: 'Tue', y: 52000 },
      { x: 'Wed', y: 49000 },
      { x: 'Thu', y: 55000 },
      { x: 'Fri', y: 62000 },
      { x: 'Sat', y: 68000 },
      { x: 'Sun', y: 51000 }
    ]
  }
];

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
                <ResponsiveLine
                  data={revenueData}
                  margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
                  curve="monotoneX"
                  axisLeft={{
                    format: value => `KSh ${value/1000}k`
                  }}
                  enableArea={true}
                  areaOpacity={0.15}
                  useMesh={true}
                  enableSlices="x"
                  theme={LineChartTheme}
                  colors={['#3b82f6']}
                />
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
