"use client"

import styled from "styled-components"
import Link from "next/link"
import { Trash2, Edit } from "lucide-react"

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`

const ListingsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const ListingCard = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const ListingImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 1rem;
`

const ListingInfo = styled.div`
  flex-grow: 1;
`

const ListingTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

const ListingPrice = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`

const ListingStatus = styled.span<{ status: "active" | "sold" }>`
  background-color: ${(props) => (props.status === "active" ? props.theme.colors.success : props.theme.colors.error)};
  color: ${(props) => props.theme.colors.white};
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-size: 0.8rem;
`

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const myListings = [
  {
    id: 1,
    title: "iPhone 12 Pro",
    price: 799,
    image: "/placeholder.svg?height=100&width=100",
    status: "active" as const,
  },
  {
    id: 2,
    title: "Samsung Galaxy S21",
    price: 699,
    image: "/placeholder.svg?height=100&width=100",
    status: "sold" as const,
  },
  {
    id: 3,
    title: "Google Pixel 5",
    price: 599,
    image: "/placeholder.svg?height=100&width=100",
    status: "active" as const,
  },
]

export default function MyListingsPage() {
  const handleDelete = (id: number) => {
    // Here you would typically send a request to your backend to delete the listing
    console.log(`Delete listing ${id}`)
  }

  return (
    <Layout>
      <Title>My Listings</Title>
      <ListingsContainer>
        {myListings.map((listing) => (
          <ListingCard key={listing.id}>
            <ListingImage src={listing.image} alt={listing.title} />
            <ListingInfo>
              <ListingTitle>{listing.title}</ListingTitle>
              <ListingPrice>${listing.price}</ListingPrice>
              <ListingStatus status={listing.status}>{listing.status === "active" ? "Active" : "Sold"}</ListingStatus>
              <ActionButtons>
                <ActionButton as={Link} href={`/edit-listing/${listing.id}`}>
                  <Edit size={16} />
                  Edit
                </ActionButton>
                <ActionButton onClick={() => handleDelete(listing.id)}>
                  <Trash2 size={16} />
                  Delete
                </ActionButton>
              </ActionButtons>
            </ListingInfo>
          </ListingCard>
        ))}
      </ListingsContainer>
    </Layout>
  )
}

