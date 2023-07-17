'use client'

import Form from "@/components/Form"
import ResponseSection from "@/components/ResponseSection"
import Container from "@/styles/Container.style"
import { GlobalStyle } from "@/styles/GlobalStyles"

export default function Home() {
  return (
      <Container>
        <GlobalStyle />
        <Form />
        <ResponseSection />
      </Container>
  )
}
