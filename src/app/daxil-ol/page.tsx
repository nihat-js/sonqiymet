"use client"

import styled from "styled-components"
import Layout from "../components/Layout"
import Link from "next/link"
import { useState } from "react"

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  max-width: 400px;
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

const RegisterLink = styled.p`
  text-align: center;
  margin-top: 1rem;
`

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the login data to your backend
    console.log("Login submitted:", formData)
    // Handle login logic (e.g., set user session, redirect)
  }

  return (
    <Layout>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
      <RegisterLink>
        Don't have an account? <Link href="/register">Register here</Link>
      </RegisterLink>
    </Layout>
  )
}

