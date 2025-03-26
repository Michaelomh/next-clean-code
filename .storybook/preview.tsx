import * as React from 'react'
import '../app/globals.css'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ColorModeToggle } from '../app/_components/shared/color-mode-toggle'

export const parameters = {
  layout: 'centered',
  options: {
    bottomPanelHeight: 500,
    storySort: { method: 'alphabetical' },
  },
  controls: {
    expanded: true,
    disableSaveFromUI: true,
  },
}

export const decorators = [
  (Story) => {
    return (
      <NextThemesProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
        <ColorModeToggle className="absolute top-1 right-1" />
        <Story />
      </NextThemesProvider>
    )
  },
]
