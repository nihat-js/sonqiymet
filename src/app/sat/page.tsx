"use client"

import styled from "styled-components"
import { useState } from "react"
import { Camera } from "lucide-react"

// Define theme colors directly to avoid the undefined error
const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#0051af",
    white: "#ffffff",
    border: "#e1e1e1",
    background: "#f5f5f5",
  },
}

const Container = styled.main`
  padding: 2rem;
  background-color: ${theme.colors.background};
  min-height: 100vh;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
  border: 1px solid ${theme.colors.border};
  border-radius: 5px;
  font-size: 1rem;
`

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${theme.colors.border};
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
`

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid ${theme.colors.border};
  border-radius: 5px;
  font-size: 1rem;
`

const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.secondary};
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
  border: 2px dashed ${theme.colors.border};
  border-radius: 5px;
  cursor: pointer;
`

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
`

const CheckboxGroup = styled.div`
  margin: 0.5rem 0;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  input[type="checkbox"] {
    width: 1.2rem;
    height: 1.2rem;
  }
`

export default function SellPage() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    ram: "",
    storage: "",
    batteryHealth: "",
    color: "",
    price: "",
    repairedDetails: "",
    phoneNumber: "",
    hasBox: false,
    hasCharger: false,
    hasWarranty: false,
    barter: false,
    description: "",
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
    <Container>
      <Title>Sell Your Phone</Title>
      <Form onSubmit={handleSubmit}>
        <FormGrid>
          <FormGroup>
            <Label htmlFor="brand">Brand *</Label>
            <Select id="brand" name="brand" value={formData.brand} onChange={handleChange} required>
              <option value="">Select Brand</option>
              <option value="apple">Apple</option>
              <option value="samsung">Samsung</option>
              <option value="google">Google</option>
              <option value="other">Other</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="model">Model *</Label>
            <Input type="text" id="model" name="model" value={formData.model} onChange={handleChange} required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="ram">RAM *</Label>
            <Select id="ram" name="ram" value={formData.ram} onChange={handleChange} required>
              <option value="">Select RAM</option>
              <option value="2">2 GB</option>
              <option value="4">4 GB</option>
              <option value="6">6 GB</option>
              <option value="8">8 GB</option>
              <option value="12">12 GB</option>
              <option value="16">16 GB</option>
            </Select>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="storage">Storage *</Label>
            <Select id="storage" name="storage" value={formData.storage} onChange={handleChange} required>
              <option value="">Select Storage</option>
              <option value="32">32 GB</option>
              <option value="64">64 GB</option>
              <option value="128">128 GB</option>
              <option value="256">256 GB</option>
              <option value="512">512 GB</option>
              <option value="1024">1 TB</option>
            </Select>
          </FormGroup>

          {formData.brand === "apple" && (
            <FormGroup>
              <Label htmlFor="batteryHealth">Battery Health (%)</Label>
              <Input
                type="number"
                id="batteryHealth"
                name="batteryHealth"
                value={formData.batteryHealth}
                onChange={handleChange}
                min="0"
                max="100"
              />
            </FormGroup>
          )}

          <FormGroup>
            <Label htmlFor="color">Color *</Label>
            <Input type="text" id="color" name="color" value={formData.color} onChange={handleChange} required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="price">Price ($) *</Label>
            <Input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phoneNumber">Phone Number *</Label>
            <Input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </FormGroup>
        </FormGrid>

        <FormGroup>
          <Label htmlFor="repairedDetails">Repair History</Label>
          <TextArea
            id="repairedDetails"
            name="repairedDetails"
            value={formData.repairedDetails}
            onChange={handleChange}
            placeholder="List any repairs or replacements..."
          />
        </FormGroup>

        <FormGrid>
          <CheckboxGroup>
            <CheckboxLabel>
              <input
                type="checkbox"
                name="hasBox"
                checked={formData.hasBox}
                onChange={(e) => setFormData({ ...formData, hasBox: e.target.checked })}
              />
              Includes Original Box
            </CheckboxLabel>
          </CheckboxGroup>

          <CheckboxGroup>
            <CheckboxLabel>
              <input
                type="checkbox"
                name="hasCharger"
                checked={formData.hasCharger}
                onChange={(e) => setFormData({ ...formData, hasCharger: e.target.checked })}
              />
              Includes Charger
            </CheckboxLabel>
          </CheckboxGroup>

          <CheckboxGroup>
            <CheckboxLabel>
              <input
                type="checkbox"
                name="hasWarranty"
                checked={formData.hasWarranty}
                onChange={(e) => setFormData({ ...formData, hasWarranty: e.target.checked })}
              />
              Under Warranty
            </CheckboxLabel>
          </CheckboxGroup>

          <CheckboxGroup>
            <CheckboxLabel>
              <input
                type="checkbox"
                name="barter"
                checked={formData.barter}
                onChange={(e) => setFormData({ ...formData, barter: e.target.checked })}
              />
              Open to Barter
            </CheckboxLabel>
          </CheckboxGroup>
        </FormGrid>

        <FormGroup>
          <Label htmlFor="description">Description *</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Describe the condition and any additional details about your phone..."
          />
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
    </Container>
  )
}

