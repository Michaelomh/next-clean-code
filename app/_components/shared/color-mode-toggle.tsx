'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button/button'

export function ColorModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant="ghost" size="icon">
      <Sun className="scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
    </Button>
  )
}
