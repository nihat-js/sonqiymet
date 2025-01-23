"use client";
import React from 'react';
import styled from 'styled-components';

// Define application color
const primaryColor = '#009688'; // Bluish-greenish primary color

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #6a11cb, #2575fc);
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #ced4da;
  border-radius: 8px;
  font-size: 16px;

  &:focus {
    border-color: ${primaryColor};
    outline: none;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: ${primaryColor};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00796b; // Darker shade on hover
  }
`;

export default function Page() {
  return (
    <Container>
      <Title>Qeydiyyat</Title>
      <Form>
        <Input type="text" placeholder="Ad" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Şifrə" required />
        <Button type="submit">Qeydiyyatdan Keç</Button>
      </Form>
    </Container>
  );
}