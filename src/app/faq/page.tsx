"use client"

import styled from "styled-components"
import Layout from "../components/Layout"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`

const FAQQuestion = styled.button`
  width: 100%;
  text-align: left;
  padding: 1rem;
  background-color: #ffffff;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5 ;
  }
`

const FAQAnswer = styled.div<{ isOpen: boolean }>`
  padding: ${(props) => (props.isOpen ? "1rem" : "0 1rem")};
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-color: #ffffff;
`

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItemComponent: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <FAQItem>
      <FAQQuestion onClick={() => setIsOpen(!isOpen)}>
        {question}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </FAQQuestion>
      <FAQAnswer isOpen={isOpen}>{answer}</FAQAnswer>
    </FAQItem>
  )
}

const faqData = [
  {
    question: "How do I buy a phone on PhoneMarket?",
    answer:
      "To buy a phone, browse our listings and click on the phone you're interested in. You can then contact the seller or make an offer directly through our platform.",
  },
  {
    question: "How do I list my phone for sale?",
    answer:
      'To sell your phone, go to the "Sell" page, fill out the form with your phone\'s details, add photos, and set your price. Once submitted, your listing will be reviewed and published.',
  },
  {
    question: "Is there a fee for selling on PhoneMarket?",
    answer:
      'We charge a small commission on successful sales. The exact percentage can be found on our "Seller Fees" page.',
  },
  {
    question: "How is payment handled?",
    answer:
      "We use a secure escrow system. The buyer pays PhoneMarket, and we hold the funds until the buyer confirms receipt of the phone in the described condition.",
  },
  {
    question: "What if I receive a phone that's not as described?",
    answer:
      "If the phone you receive doesn't match the seller's description, you can open a dispute within 48 hours of delivery. Our team will review the case and help resolve the issue.",
  },
]

export default function FAQPage() {
  return (
    <main>
      <Title>Frequently Asked Questions</Title>
      <FAQList>
        {faqData.map((faq, index) => (
          <FAQItemComponent key={index} question={faq.question} answer={faq.answer} />
        ))}
      </FAQList>
    </main>
  )
}

