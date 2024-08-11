import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';

import '@fontsource/cinzel-decorative';
import '@fontsource/fira-sans';

const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '1024px',
};

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  background-color: #111;
  border-bottom: 3px solid #d4af37;
  position: relative;
  min-height: 140px;
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.15);

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px 15px;
    min-height: 80px;
    justify-content: flex-start;
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  padding: 5px;
  background: linear-gradient(45deg, #d4af37, #f2d472);
  box-shadow: 
    0 0 10px rgba(212, 175, 55, 0.5),
    0 0 20px rgba(212, 175, 55, 0.3),
    0 0 30px rgba(212, 175, 55, 0.1);

  @media (max-width: ${breakpoints.mobile}) {
    position: static;
    transform: none;
    margin: 0;
    width: fit-content;
  }
`;

const Logo = styled.img`
  height: 120px;
  width: auto;
  border-radius: 50%;
  display: block;

  @media (max-width: ${breakpoints.mobile}) {
    height: 60px; // Further reduced size for mobile
  }
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const NavGroup = styled.div`
  display: flex;
  gap: 40px;
`;

const NavItem = styled(Link)`
  color: #d4af37;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  font-family: 'Cinzel Decorative', cursive;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s ease, text-shadow 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #d4af37;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #fff;
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const ContactInfo = styled.div`
  color: #d4af37;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Fira Sans', sans-serif;
  text-shadow: 0 0 5px rgba(212, 175, 55, 0.3);

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }

  @media (max-width: ${breakpoints.mobile}) {
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.open ? '0' : '-100%'};
  width: 300px;
  height: 100%;
  background-color: #111;
  transition: right 0.3s ease-in-out;
  z-index: 1000;
  border-left: 3px solid #d4af37;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid #d4af37;
`;

const DrawerLogo = styled.div`
  img {
    height: 60px;
    width: auto;
    border-radius: 50%;
  }
`;

const DrawerCloseButton = styled.div`
  cursor: pointer;
  color: #d4af37;
`;

const DrawerNavItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const DrawerNavItem = styled(Link)`
  color: #d4af37;
  font-size: 22px;
  font-weight: 900;
  padding: 20px 0;
  text-decoration: none;
  border-bottom: 1px solid #333;
  font-family: 'Cinzel Decorative', cursive;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: color 0.3s ease, text-shadow 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #fff;
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  }
`;

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <NavbarContainer>
      <LogoWrapper>
        <Logo src={logo} alt="Teyung's Laser Removal, Tattoo & Piercing" />
      </LogoWrapper>
      <NavItems>
        <NavGroup>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
        </NavGroup>
        <NavGroup>
          <NavItem to="/gallery">Gallery</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <ContactInfo>+1 (234) 56-789</ContactInfo>
        </NavGroup>
      </NavItems>
      <MenuIcon onClick={toggleDrawer}>
        <Menu color="#d4af37" size={32} />
      </MenuIcon>
      <Drawer open={isDrawerOpen}>
        <DrawerHeader>
          <DrawerLogo>
            <img src={logo} alt="Teyung's Laser Removal, Tattoo & Piercing" />
          </DrawerLogo>
          <DrawerCloseButton onClick={toggleDrawer}>
            <X color="#d4af37" size={32} />
          </DrawerCloseButton>
        </DrawerHeader>
        <DrawerNavItems>
          <DrawerNavItem to="/" onClick={toggleDrawer}>Home</DrawerNavItem>
          <DrawerNavItem to="/about" onClick={toggleDrawer}>About</DrawerNavItem>
          <DrawerNavItem to="/gallery" onClick={toggleDrawer}>Gallery</DrawerNavItem>
          <DrawerNavItem to="/contact" onClick={toggleDrawer}>Contact</DrawerNavItem>
        </DrawerNavItems>
      </Drawer>
    </NavbarContainer>
  );
};

export default Navbar;