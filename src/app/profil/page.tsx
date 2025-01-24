"use client"

import styled from "styled-components"
import { useState } from "react"
import { User, Mail, Phone, MapPin, Edit } from "lucide-react"

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`

const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ProfileSection = styled.section`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const ProfileTitle = styled.h2`
  font-size: 1.5rem;
`

const EditButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const InfoLabel = styled.span`
  font-weight: bold;
  min-width: 100px;
`

const Input = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.lightText};
  border-radius: 5px;
  font-size: 1rem;
`

const SaveButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    location: "New York, NY",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSave = () => {
    // Here you would typically send the updated profile data to your backend
    console.log("Updated profile:", profileData)
    setIsEditing(false)
  }

  return (
    <main>
      <Title>User Profile</Title>
      <ProfileContainer>
        <ProfileSection>
          <ProfileHeader>
            <ProfileTitle>Personal Information</ProfileTitle>
            <EditButton onClick={() => setIsEditing(!isEditing)}>
              <Edit size={16} />
              {isEditing ? "Cancel" : "Edit"}
            </EditButton>
          </ProfileHeader>
          <ProfileInfo>
            <InfoItem>
              <User size={20} />
              <InfoLabel>Name:</InfoLabel>
              {isEditing ? (
                <Input type="text" name="name" value={profileData.name} onChange={handleChange} />
              ) : (
                profileData.name
              )}
            </InfoItem>
            <InfoItem>
              <Mail size={20} />
              <InfoLabel>Email:</InfoLabel>
              {isEditing ? (
                <Input type="email" name="email" value={profileData.email} onChange={handleChange} />
              ) : (
                profileData.email
              )}
            </InfoItem>
            <InfoItem>
              <Phone size={20} />
              <InfoLabel>Phone:</InfoLabel>
              {isEditing ? (
                <Input type="tel" name="phone" value={profileData.phone} onChange={handleChange} />
              ) : (
                profileData.phone
              )}
            </InfoItem>
            <InfoItem>
              <MapPin size={20} />
              <InfoLabel>Location:</InfoLabel>
              {isEditing ? (
                <Input type="text" name="location" value={profileData.location} onChange={handleChange} />
              ) : (
                profileData.location
              )}
            </InfoItem>
            {isEditing && <SaveButton onClick={handleSave}>Save Changes</SaveButton>}
          </ProfileInfo>
        </ProfileSection>
      </ProfileContainer>
    </main>
  )
}

