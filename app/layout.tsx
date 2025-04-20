import type { Metadata } from 'next'
import { Roboto_Flex, Roboto_Mono } from 'next/font/google'
import './globals.css'
import { TailwindIndicator } from './_components/shared/tailwind-indicator'
import { ThemeProvider } from './_components/shared/theme-provider'
import { Toaster } from './_components/ui'
import { ColorModeToggle } from './_components/shared/color-mode-toggle'

const robotoFlex = Roboto_Flex({
  variable: '--font-roboto-flex',
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Next Clean Code',
  description: 'Website to test how to write clean nextjs 15 code.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoFlex.variable} ${robotoMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <TailwindIndicator />
          <ColorModeToggle className="absolute top-1 right-1" />
          <Toaster closeButton position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
