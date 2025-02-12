import React from 'react';
//import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const PageHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleLogout = () => {
    // Add your logout logic here
    navigate('/');
  };

  return (
    <Navbar className="bg-white border-b px-4 py-2">
      <div className="container-fluid">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="mr-8">
          <img
            src="/mv_logo_2.png"
            alt="Company Logo"
            className="h-8"
            style={{height:"50px"}}

          />
        </Navbar.Brand>

        {/* Navigation Tabs */}
       {/*  <Nav className="me-auto">
          <div className="relative">
            <Nav className="space-x-4">
              <Nav.Link
                as={Link}
                to="/"
                className={`relative px-3 py-2 ${
                  currentPath === '/' ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                Summary
                {currentPath === '/' && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/livestreams"
                className={`relative px-3 py-2 ${
                  currentPath === '/livestreams' ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                Livestreams
                {currentPath === '/livestreams' && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Nav.Link>
            </Nav>
          </div>
        </Nav> */}
        <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link href="/livestreams">Livestreams</Nav.Link>
        </Nav.Item> */}
      </Nav>

        {/* User Menu */}
        <Box className="flex items-center">
          <NavDropdown 
            title={
             
                <PersonOutlineIcon  />
              
            }
            id="user-nav-dropdown"
            align="end"
          >
            <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Box>
      </div>
    </Navbar>
  );
};

export default PageHeader;