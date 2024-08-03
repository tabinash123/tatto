import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px',
};

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #000;
  border-bottom: 2px solid #e53935;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #e53935;
  font-family: 'Brush Script MT', cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const NavItems = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  color: #fff;
  font-size: 16px;
  font-weight: 700; // Increased font weight
  cursor: pointer;
  text-decoration: none;
  position: relative;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #e53935;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const ContactInfo = styled.div`
  color: #e53935;
  font-size: 18px;
  font-weight: 700; // Increased font weight
  font-family: 'Courier New', monospace;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.open ? '0' : '-100%'};
  width: 250px;
  height: 100%;
  background-color: #000;
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  border-left: 2px solid #e53935;
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid #e53935;
`;

const DrawerLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #e53935;
  font-family: 'Brush Script MT', cursive;
`;

const DrawerCloseButton = styled.div`
  cursor: pointer;
  color: #e53935;
`;

const DrawerNavItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const DrawerNavItem = styled(Link)`
  color: #fff;
  font-size: 16px;
  font-weight: 700; // Increased font weight
  padding: 15px 0;
  text-decoration: none;
  border-bottom: 1px solid #333;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #e53935;
  }
`;

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <NavbarContainer>
      <Logo>Ink Masters</Logo>
      <NavItems>
        <NavItem to="/">HOME</NavItem>
        <NavItem to="/about">About Us</NavItem>
        <NavItem to="/contact">CONTACT</NavItem>
      </NavItems>
      <ContactInfo>+1 (234) 56-789</ContactInfo>
      <MenuIcon onClick={toggleDrawer}>
        <Menu color="#e53935" size={24} />
      </MenuIcon>
      <Drawer open={isDrawerOpen}>
        <DrawerHeader>
          <DrawerLogo>Ink Masters</DrawerLogo>
          <DrawerCloseButton onClick={toggleDrawer}>
            <X color="#e53935" size={24} />
          </DrawerCloseButton>
        </DrawerHeader>
        <DrawerNavItems>
          <DrawerNavItem to="/" onClick={toggleDrawer}>Home</DrawerNavItem>
          <DrawerNavItem to="/about" onClick={toggleDrawer}>About US</DrawerNavItem>
          <DrawerNavItem to="/contact" onClick={toggleDrawer}>Contact</DrawerNavItem>
        </DrawerNavItems>
      </Drawer>
    </NavbarContainer>
  );
};

export default Navbar;