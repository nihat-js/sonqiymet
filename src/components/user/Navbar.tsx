'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Search, ShoppingCart, Menu, X, User, PlusCircleIcon, LogInIcon, Smartphone } from 'lucide-react';
import styled from 'styled-components';

// Styled components
const Nav = styled.nav`

  // background-color: #1a1a1a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding-top: 10px;
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
    color: var(--mandarin);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: var(--mandarin);
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

const LogoText = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  background: linear-gradient(135deg, #007bff, #00ff88);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  span {
    font-family: 'Righteous', cursive;
    color: #1a1a1a;
    -webkit-text-fill-color: #1a1a1a;
    margin-right: 4px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(135deg, #007bff, #00ff88);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <div className='flex items-center gap-1'>
          <Smartphone className="h-6 w-6 text-obsidian" />
          <LogoText className="ml-2">
            <span>Son</span>Qiymət
          </LogoText>
        </div>
        {/* <span className="ml-2 text-obsidian" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>Son Qiymət</span> */}



        {/* <SearchContainer>
          <SearchInput type="text" placeholder="Telefonları axtar..." />
          <Search className="h-5 w-5 text-gray-400" />
        </SearchContainer> */}

        <AccountContainer onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}>
          <NavLinks>
            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/sell"> <PlusCircleIcon className="h-5 w-5" /> </NavLink>
            <NavLink href="/favorites">Sevimlilər</NavLink>
            {/* <NavLink href="/login">  <LogInIcon className="h-5 w-5" /> Daxil ol  </NavLink> */}
            <div className='relative flex items-center gap-2 cursor-pointer bg-mandarin hover:bg-mandarin2 transition-all duration-500 transform hover:scale-110 rounded-xl px-2 py-2 shadow-md hover:shadow-xl'>
              <LogInIcon className="h-6 w-6 text-white" />
              <span className="transition-all duration-500 text-white">Daxil ol</span>
              <div className='absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl'></div>
              <div className='absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping'></div>
            </div>
          </NavLinks>
          {/* <NavLink href="/register">  </NavLink> */}
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

      {
        isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink href="/buy">Al</NavLink>
              <NavLink href="/sell">Sat</NavLink>
              <NavLink href="/favorites">Sevimlilər</NavLink>
            </div>
          </div>
        )
      }
    </Nav >
  );
}