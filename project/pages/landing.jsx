import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Activity, Bus, BarChart3, Eye, Camera, Brain, Database, Cloud } from 'lucide-react';
import './landing.css';

const sampleData = [
  { name: 'Mon', vehicles: 240 },
  { name: 'Tue', vehicles: 300 },
  { name: 'Wed', vehicles: 280 },
  { name: 'Thu', vehicles: 320 },
  { name: 'Fri', vehicles: 380 },
  { name: 'Sat', vehicles: 400 },
  { name: 'Sun', vehicles: 290 }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const MatatuVisionLanding = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <motion.header 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1 {...fadeIn}>
              Matatu Vision AI
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              {...fadeIn}
              transition={{ delay: 0.2 }}
            >
              Revolutionary AI-powered tracking system for Kenya's transport sector. Count, track, and optimize your matatu fleet in real-time.
            </motion.p>
            <motion.div 
              className="button-group"
              {...fadeIn}
              transition={{ delay: 0.4 }}
            >
              <button className="primary-button">Get Started</button>
              <button className="secondary-button">Watch Demo</button>
            </motion.div>
          </div>
          
          <motion.div 
            className="chart-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={sampleData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                    labelStyle={{ color: '#9CA3AF' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="vehicles" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    dot={{ stroke: '#3B82F6', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Features Section */}
      <section className="features-section">
        <motion.h2 
          className="section-title"
          {...fadeIn}
        >
          Key Features
        </motion.h2>
        
        <div className="features-grid">
          {[
            {
              icon: <Eye className="feature-icon" />,
              title: "Real-time Tracking",
              description: "Monitor your entire fleet in real-time with advanced DeepSORT tracking technology."
            },
            {
              icon: <Activity className="feature-icon" />,
              title: "Vehicle Counting",
              description: "Accurate automated counting system for comprehensive fleet management."
            },
            {
              icon: <BarChart3 className="feature-icon" />,
              title: "Analytics Dashboard",
              description: "Detailed insights and analytics to optimize your operations."
            },
            {
              icon: <Bus className="feature-icon" />,
              title: "Route Optimization",
              description: "AI-powered route suggestions for maximum efficiency."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section className="tech-section">
        <motion.h2 
          className="section-title"
          {...fadeIn}
        >
          Technology Stack
        </motion.h2>
        
        <div className="tech-grid">
          {[
            {
              icon: <Camera className="tech-icon" />,
              title: "Computer Vision",
              description: "DeepSORT algorithm for real-time object detection and tracking, powered by YOLO for accurate vehicle identification.",
              details: ["Multi-object tracking", "Real-time processing", "High accuracy detection"]
            },
            {
              icon: <Brain className="tech-icon" />,
              title: "AI & Machine Learning",
              description: "Advanced neural networks trained on Kenyan transport data for precise matatu identification and behavior analysis.",
              details: ["Custom trained models", "Behavioral analysis", "Pattern recognition"]
            },
            {
              icon: <Database className="tech-icon" />,
              title: "Data Processing",
              description: "Robust backend infrastructure for processing and analyzing massive amounts of vehicle data in real-time.",
              details: ["Real-time analytics", "Historical data analysis", "Predictive modeling"]
            },
            {
              icon: <Cloud className="tech-icon" />,
              title: "Cloud Infrastructure",
              description: "Scalable cloud architecture ensuring reliable performance and data accessibility across Kenya.",
              details: ["Edge computing", "Distributed processing", "24/7 availability"]
            }
          ].map((tech, index) => (
            <motion.div
              key={index}
              className="tech-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="tech-icon-wrapper">
                {tech.icon}
              </div>
              <h3>{tech.title}</h3>
              <p>{tech.description}</p>
              <ul className="tech-details">
                {tech.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Ready to Transform Your Fleet?</h2>
        <p>
          Join the future of transport management with Matatu Vision AI. Get started today and see the difference.
        </p>
        <button className="primary-button">Schedule a Demo</button>
      </motion.section>
    </div>
  );
};

export default MatatuVisionLanding;
