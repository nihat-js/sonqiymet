"use client"

import styled from "styled-components"
import { useParams } from "next/navigation"
import { useState } from "react"
import { Phone, User, MapPin, DollarSign } from "lucide-react"

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`

const PhoneDetails = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`

const ImageContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`

const InfoContainer = styled.div`
  flex: 1;
`

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
`

const DetailsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`

const Description = styled.p`
  margin-bottom: 1rem;
`

const ContactButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`

const phoneData = {
  1: {
    brand: "iPhone",
    model: "12 Pro",
    price: 799,
    image: "/placeholder.svg?height=400&width=400",
    description: "Excellent condition iPhone 12 Pro with 128GB storage.",
    seller: "John Doe",
    location: "New York, NY",
  },
  2: {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 699,
    image: "/placeholder.svg?height=400&width=400",
    description: "Like-new Samsung Galaxy S21 with 256GB storage.",
    seller: "Jane Smith",
    location: "Los Angeles, CA",
  },
}

export default function PhoneDetailsPage() {
  const params = useParams()
  const id = params?.id as string
  const phone = phoneData[id as keyof typeof phoneData]

  const [showContact, setShowContact] = useState(false)

  if (!phone) {
    return <Layout>Phone not found</Layout>
  }

  return (
    <Layout>
      <Title>{`${phone.brand} ${phone.model}`}</Title>
      <PhoneDetails>
        <ImageContainer>
          <Image src={phone.image || "/placeholder.svg"} alt={`${phone.brand} ${phone.model}`} />
        </ImageContainer>
        <InfoContainer>
          <Price>${phone.price}</Price>
          <DetailsItem>
            <Phone size={16} />
            {`${phone.brand} ${phone.model}`}
          </DetailsItem>
          <DetailsItem>
            <User size={16} />
            {phone.seller}
          </DetailsItem>
          <DetailsItem>
            <MapPin size={16} />
            {phone.location}
          </DetailsItem>
          <Description>{phone.description}</Description>
          <ContactButton onClick={() => setShowContact(!showContact)}>
            {showContact ? "Hide Contact" : "Show Contact"}
          </ContactButton>
          {showContact && (
            <DetailsItem>
              <Phone size={16} />
              123-456-7890
            </DetailsItem>
          )}
        </InfoContainer>
      </PhoneDetails>
    </Layout>
  )
}

