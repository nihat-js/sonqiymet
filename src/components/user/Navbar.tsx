'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Search, ShoppingCart, Menu, X, User, PlusCircleIcon, LogInIcon, Smartphone, Settings, LogOut } from 'lucide-react';
import styled from 'styled-components';
import AuthModal from '../auth/AuthModal';
import useAuthStore from '@/stores/authStore';

// Styled components
const Nav = styled.nav`

  // background-color: #1a1a1a;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding : 10px 6px;
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

const UserMenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 126, 0, 0.1);
  }
`;

const UserDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s;
  z-index: 30;

  ${UserMenuContainer}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const DropdownItem = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--obsidian);
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 126, 0, 0.1);
    color: var(--mandarin);
  }

  &:first-child {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  &:last-child {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--mandarin);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

const UserName = styled.span`
  font-weight: 500;
  color: var(--obsidian);
`;

const UserEmail = styled.span`
  font-size: 0.75rem;
  color: #666;
`;

const LogoText = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  // background: linear-gradient(135deg, #007bff, #00ff88);
  background: var(--mandarin);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  span {
    font-family: 'Righteous', cursive;
    color: #1a1a1a;
    // -webkit-text-fill-color: #1a1a1a;
    -webkit-text-fill-color: var(--obsidian);
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
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register'>('login');
  const { user, logout } = useAuthStore();

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleLogout = () => {
    logout();
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 2);
  };

  return (
    <>
      <Nav>
        <NavContainer>
          <Link href="/">
            <div className='flex items-center gap-1'>
              <Smartphone className="h-8 w-8 text-obsidian font-extrabold" />
              <LogoText className="ml-2">
                <span>Son</span>Qiymət
              </LogoText>
            </div>
          </Link>

          {/* <SearchContainer>
            <SearchInput type="text" placeholder="Telefonları axtar..." />
            <Search className="h-5 w-5 text-gray-400" />
          </SearchContainer> */}

          <AccountContainer>
            <NavLinks>
              <NavLink href="/sat"> <PlusCircleIcon className="h-5 w-5" /> </NavLink>
              <NavLink href="/faq">FAQ</NavLink>
              <NavLink href="/favorites">Sevimlilər</NavLink>
              
              {user ? (
                <UserMenuContainer>
                  <UserAvatar>
                    {user.name ? getInitials(user.name) : <User className="h-5 w-5" />}
                  </UserAvatar>
                  <UserInfo>
                    <UserName>{user.name || 'İstifadəçi'}</UserName>
                    {user.email && <UserEmail>{user.email}</UserEmail>}
                  </UserInfo>
                  
                  <UserDropdown>
                    <DropdownItem as={Link} href="/profile">
                      <User className="h-4 w-4" />
                      Mənim Profilim
                    </DropdownItem>
                    <DropdownItem as={Link} href="/my-posts">
                      <PlusCircleIcon className="h-4 w-4" />
                      Mənim Elanlarım
                    </DropdownItem>
                    <DropdownItem as={Link} href="/settings">
                      <Settings className="h-4 w-4" />
                      Tənzimləmələr
                    </DropdownItem>
                    <DropdownItem onClick={handleLogout}>
                      <LogOut className="h-4 w-4" />
                      Çıxış
                    </DropdownItem>
                  </UserDropdown>
                </UserMenuContainer>
              ) : (
                <div 
                  className='relative flex items-center gap-2 cursor-pointer bg-mandarin hover:bg-mandarin2 transition-all duration-500 transform hover:scale-110 rounded-xl px-2 py-2 shadow-md hover:shadow-xl'
                  onClick={() => handleAuthClick('login')}
                >
                  <LogInIcon className="h-6 w-6 text-white" />
                  <span className="transition-all duration-500 text-white">Daxil ol</span>
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl'></div>
                  <div className='absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full animate-ping'></div>
                </div>
              )}
            </NavLinks>
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
                <NavLink href="/sat">Sat</NavLink>
                <NavLink href="/favorites">Sevimlilər</NavLink>
              </div>
            </div>
          )
        }
      </Nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authModalMode}
      />
    </>
  );
}