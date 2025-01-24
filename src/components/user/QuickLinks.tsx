"use client"

import styled from "styled-components"
import { Search, Smartphone, ChevronRight } from "lucide-react"
import Link from "next/link"

const Nav = styled.nav`
  background-color: #1a1a1a;
  color: #ffffff;
  // padding: 1rem 2rem;
  margin-top : 25px;
  margin-bottom : 25px;
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
  color: #00ff00;
`


const QuickLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  // justify-content: center;
  width: 100%;
`

const QuickLink = styled(Link)`
  color: #888888;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    color: #00ff00;
  }
`

const PopularModels = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  // justify-content: center;
  width: 100%;
`

const ModelButton = styled.button`
  background-color: #2a2a2a;
  border: 1px solid #3a3a3a;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: #ffffff;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3a3a3a;
    border-color: #00ff00;
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
          {/* <QuickLink href="/all-brands">
            All Brands <ChevronRight size={16} />
          </QuickLink> */}
        </QuickLinks>
        {/* <PopularModels>
          <ModelButton>iPhone 12</ModelButton>
          <ModelButton>iPhone 13</ModelButton>
          <ModelButton>Samsung A52</ModelButton>
          <ModelButton>Xiaomi Redmi Note 10</ModelButton>
        </PopularModels> */}
    </Nav>
  )
}

