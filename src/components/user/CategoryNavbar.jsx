'use client'

import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Smartphone, Headphones, SmartphoneIcon as Smartphone2, Tablet, Watch, Laptop, MoreHorizontal } from 'lucide-react'

// Kateqoriyalar massivi
const categories = [
  { name: 'Telefonlar', icon: Smartphone, href: '/category/phones' },
  { name: 'Qulaqlıqlar', icon: Headphones, href: '/category/earphones' },
  { name: 'Qablar', icon: Smartphone2, href: '/category/cases' },
  { name: 'Planşetlər', icon: Tablet, href: '/category/tablets' },
  { name: 'Ağıllı Saatlar', icon: Watch, href: '/category/smartwatches' },
  { name: 'Noutbuklar', icon: Laptop, href: '/category/laptops' },
]

// Styled Components
const NavContainer = styled.nav`
  // background: linear-gradient(to right, #ffffff, #f8f9fa);
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  // padding: 1rem 0;
  margin-top : 30px;
  padding : 0;
`

const NavWrapper = styled.div`
  // max-width: 1200px;
  // margin: 0 auto;
  // padding: 0 1rem;
`

const CategoryList = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const CategoryButton = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: ${props => props.$isActive ? 'var(--obsidian)' : 'white'};
  color: ${props => props.$isActive ? 'white' : '#4b5563'};
  box-shadow: ${props => props.$isActive ? '0 4px 12px rgba(37, 99, 235, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.05)'};
  
  &:hover {
    transform: translateY(-2px);
    background: ${props => props.$isActive ? 'var(--obsidian)' : '#f3f4f6'};
  }
`

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`

const MoreButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  background: white;
  color: #4b5563;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #f3f4f6;
    transform: translateY(-2px);
  }
`

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 0.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  min-width: 200px;
  z-index: 50;
`

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: #4b5563;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
    color: #2563eb;
  }
`

const CategoryTab = ({ category, isActive, onClick }) => (
  <CategoryButton href={category.href} $isActive={isActive} onClick={onClick}>
    <IconWrapper>
      <category.icon size={20} />
    </IconWrapper>
    <span className="hidden sm:inline">{category.name}</span>
  </CategoryButton>
)

export default function CategoryNavbar() {
  const [activeCategory, setActiveCategory] = useState('Telefonlar')
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  const visibleCategories = categories.slice(0, 5)
  const moreCategories = categories.slice(5)

  return (
    <NavContainer>
      <NavWrapper>
        <CategoryList>
          {visibleCategories.map((category) => (
            <CategoryTab
              key={category.name}
              category={category}
              isActive={activeCategory === category.name}
              onClick={() => setActiveCategory(category.name)}
            />
          ))}
          
          {moreCategories.length > 0 && (
            <div className="relative">
              <MoreButton onClick={() => setIsMoreOpen(!isMoreOpen)}>
                <MoreHorizontal size={20} />
                <span className="hidden sm:inline ml-2">Daha çox</span>
              </MoreButton>
              
              {isMoreOpen && (
                <DropdownMenu>
                  {moreCategories.map((category) => (
                    <DropdownItem
                      key={category.name}
                      href={category.href}
                      onClick={() => {
                        setActiveCategory(category.name)
                        setIsMoreOpen(false)
                      }}
                    >
                      <category.icon size={20} className="mr-2" />
                      {category.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
            </div>
          )}
        </CategoryList>
      </NavWrapper>
    </NavContainer>
  )
}

