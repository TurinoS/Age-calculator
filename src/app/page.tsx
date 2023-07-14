'use client'

import Form from "@/components/Form"
import ResponseSection from "@/components/ResponseSection"
import Container from "@/styles/Container.style"

export default function Home() {
  return (
    <main>
      <Container>
        <Form />
        <ResponseSection />
      </Container>
    </main>
  )
}
