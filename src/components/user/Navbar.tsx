'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import styled from 'styled-components';

// Styled components
const Nav = styled.nav`
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: #009688;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: gray;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.3s;

  &:hover {
    color: #009688;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: #009688;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: #f0f0f0;
  border-radius: 5px;
  padding: 0.5rem;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  padding: 0.5rem 1rem; /* Added padding for better UI */
  width: 200px;
`;

const MobileMenuButton = styled.button`
  display: none;

  @media (max-width: 640px) {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const AccountMenu = styled.div`
  position: absolute;
  right: 0;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 5px;
  display: ${props => (props.isOpen ? 'block' : 'none')}; // Control visibility based on prop
`;


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo href="/">
          <Phone className="h-8 w-8" />
          <span className="ml-2">Son Qiymət</span>
        </Logo>

        <NavLinks>
          <NavLink href="/buy">Al</NavLink>
          <NavLink href="/sell">Sat</NavLink>
          <NavLink href="/favorites">Sevimlilər</NavLink>
        </NavLinks>

        {/* <SearchContainer>
          <SearchInput type="text" placeholder="Telefonları axtar..." />
          <Search className="h-5 w-5 text-gray-400" />
        </SearchContainer> */}

        <AccountContainer onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}>
          <User className="h-6 w-6 text-gray-600" />
          {isAccountMenuOpen && (
            <AccountMenu>
              <NavLink href="/login">Giriş</NavLink>
              <NavLink href="/register">Qeydiyyat</NavLink>
            </AccountMenu>
          )}
        </AccountContainer>

        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </MobileMenuButton>
      </NavContainer>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink href="/buy">Al</NavLink>
            <NavLink href="/sell">Sat</NavLink>
            <NavLink href="/favorites">Sevimlilər</NavLink>
          </div>
        </div>
      )}
    </Nav>
  );
}