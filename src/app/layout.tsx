import { GlobalStyle } from '@/styles/GlobalStyles'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Qual sua idade?',
  description: 'Desenvolvido por Paulo Turino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body>{children}</body>
    </html>
  )
}
