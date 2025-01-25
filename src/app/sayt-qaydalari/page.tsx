"use client"

import styled from "styled-components"

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Section = styled.section`
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary};
`

const RulesList = styled.ul`
  list-style-type: disc;
  padding-left: 2rem;
`

const RuleItem = styled.li`
  margin-bottom: 0.5rem;
`

export default function SiteRulesPage() {
  return (
    <Layout>
      <Title>Site Rules</Title>
      <RulesContainer>
        <Section>
          <SectionTitle>General Rules</SectionTitle>
          <RulesList>
            <RuleItem>Be respectful to other users and staff members.</RuleItem>
            <RuleItem>Do not post offensive, discriminatory, or illegal content.</RuleItem>
            <RuleItem>Do not spam or post repetitive content.</RuleItem>
            <RuleItem>Use appropriate language and maintain a professional demeanor.</RuleItem>
          </RulesList>
        </Section>
        <Section>
          <SectionTitle>Listing Rules</SectionTitle>
          <RulesList>
            <RuleItem>Only list genuine and legally obtained phones.</RuleItem>
            <RuleItem>Provide accurate descriptions and images of the phones you're selling.</RuleItem>
            <RuleItem>Set fair and reasonable prices for your listings.</RuleItem>
            <RuleItem>Do not list the same phone multiple times.</RuleItem>
            <RuleItem>Remove listings promptly once a phone has been sold.</RuleItem>
          </RulesList>
        </Section>
        <Section>
          <SectionTitle>Transaction Rules</SectionTitle>
          <RulesList>
            <RuleItem>Use the platform's messaging system for all communications.</RuleItem>
            <RuleItem>Do not share personal contact information in public listings.</RuleItem>
            <RuleItem>Meet in safe, public locations for in-person transactions.</RuleItem>
            <RuleItem>Use secure payment methods provided by the platform.</RuleItem>
            <RuleItem>Report any suspicious activity or fraud attempts to the site administrators.</RuleItem>
          </RulesList>
        </Section>
        <Section>
          <SectionTitle>Consequences</SectionTitle>
          <p>
            Violation of these rules may result in warnings, temporary suspension, or permanent banning from the
            platform. We reserve the right to remove any content or listings that violate these rules without notice.
          </p>
        </Section>
      </RulesContainer>
    </Layout>
  )
}

