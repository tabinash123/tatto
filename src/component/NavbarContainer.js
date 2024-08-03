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
  padding: 20px;
  background-color: #1c1c1c;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #d4a056;
`;

const NavItems = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #d4a056;
    transition: width 0.3s ease, left 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

const ContactInfo = styled.div`
  color: #fff;
  font-size: 16px;

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
  background-color: #1c1c1c;
  transition: right 0.3s ease-in-out;
  z-index: 1000;
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const DrawerLogo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #d4a056;
`;

const DrawerCloseButton = styled.div`
  cursor: pointer;
  color: #fff;
`;

const DrawerNavItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const DrawerNavItem = styled(Link)`
  color: #fff;
  font-size: 16px;
  padding: 10px 0;
  text-decoration: none;
  border-bottom: 1px solid #333;

  &:last-child {
    border-bottom: none;
  }
`;

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <NavbarContainer>
      <Logo>TattooStudio</Logo>
      <NavItems>
        <NavItem to="/">HOME</NavItem>
        <NavItem to="/about">ABOUT US</NavItem>
        <NavItem to="/contact">CONTACT</NavItem>
      </NavItems>
      <ContactInfo>+1 (234) 56-789</ContactInfo>
      <MenuIcon onClick={toggleDrawer}>
        <Menu color="#fff" size={24} />
      </MenuIcon>
      <Drawer open={isDrawerOpen}>
        <DrawerHeader>
          <DrawerLogo>Castato</DrawerLogo>
          <DrawerCloseButton onClick={toggleDrawer}>
            <X color="#fff" size={24} />
          </DrawerCloseButton>
        </DrawerHeader>
        <DrawerNavItems>
          <DrawerNavItem to="/" onClick={toggleDrawer}>Home</DrawerNavItem>
          <DrawerNavItem to="/about" onClick={toggleDrawer}>About</DrawerNavItem>
          <DrawerNavItem to="/contact" onClick={toggleDrawer}>Contact</DrawerNavItem>
        </DrawerNavItems>
      </Drawer>
    </NavbarContainer>
  );
};

export default Navbar;