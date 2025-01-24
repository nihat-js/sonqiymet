"use client"

import styled from "styled-components"
import { useState } from "react"
import { Camera } from "lucide-react"

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
`

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.lightText};
  border-radius: 5px;
  font-size: 1rem;
`

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.lightText};
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
`

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.lightText};
  border-radius: 5px;
  font-size: 1rem;
`

const Button = styled.button`
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

const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const ImageUploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 2px dashed ${(props) => props.theme.colors.lightText};
  border-radius: 5px;
  cursor: pointer;
`

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
`

export default function SellPage() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    condition: "",
    price: "",
    description: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    images: [] as string[],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
      setFormData((prevData) => ({ ...prevData, images: [...prevData.images, ...newImages] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form or show success message
  }

  return (
    <main>
      <Title>Sell Your Phone</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="brand">Brand</Label>
          <Input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="model">Model</Label>
          <Input type="text" id="model" name="model" value={formData.model} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="condition">Condition</Label>
          <Select id="condition" name="condition" value={formData.condition} onChange={handleChange} required>
            <option value="">Select condition</option>
            <option value="like-new">Like New</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="price">Price ($)</Label>
          <Input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <TextArea id="description" name="description" value={formData.description} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="name">Your Name</Label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Phone Number</Label>
          <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="city">City</Label>
          <Input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
        </FormGroup>
        <ImageUploadContainer>
          <ImageUploadLabel htmlFor="images">
            <Camera size={48} />
            <span>Upload Images</span>
          </ImageUploadLabel>
          <Input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
          {formData.images.map((image, index) => (
            <ImagePreview key={index} src={image || "/placeholder.svg"} alt={`Uploaded image ${index + 1}`} />
          ))}
        </ImageUploadContainer>
        <Button type="submit">List Phone for Sale</Button>
      </Form>
    </main>
  )
}

