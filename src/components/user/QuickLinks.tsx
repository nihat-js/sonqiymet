"use client"

import styled from "styled-components"
import { Search, Smartphone, ChevronRight } from "lucide-react"
import Link from "next/link"

const Nav = styled.nav`
  background-color: var(--mandarin);
  color: #ffffff;
  margin-top: 25px;
  margin-bottom: 25px;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--mandarin);
`

const QuickLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.75rem 1.5rem;
`

const QuickLink = styled(Link)`
  color: var(--obsidian-300);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    color: var(--mandarin-400);
    transform: translateX(2px);
  }
`

const PopularModels = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  width: 100%;
`

const ModelButton = styled.button`
  background-color: var(--obsidian-800);
  border: 1px solid var(--obsidian-700);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: #ffffff;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--obsidian-700);
    border-color: var(--mandarin-500);
  }
`

export default function QuickLinks2() {
  return (
    <Nav>
        <QuickLinks>
          <QuickLink href="/category/iphone">
            iPhone <ChevronRight size={16} />
          </QuickLink>
          <QuickLink href="/category/samsung">
            Samsung <ChevronRight size={16} />
          </QuickLink>
          <QuickLink href="/category/xiaomi">
            Xiaomi <ChevronRight size={16} />
          </QuickLink>
          <QuickLink href="/category/google">
            Google <ChevronRight size={16} />
          </QuickLink>
          <QuickLink href="/category/oneplus">
            OnePlus <ChevronRight size={16} />
          </QuickLink>
          <QuickLink href="/category/huawei">
            Huawei <ChevronRight size={16} />
          </QuickLink>
          <QuickLink href="/all-brands">
            All Brands <ChevronRight size={16} />
          </QuickLink>
        </QuickLinks>
    </Nav>
  )
}

