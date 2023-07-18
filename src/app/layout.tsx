import { AppContextProvider } from '@/context/AppContext'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../../registry'

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
      <AppContextProvider>
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>  
        </body>
      </AppContextProvider>
    </html>
  )
}
