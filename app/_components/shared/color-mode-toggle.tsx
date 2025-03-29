'use client'

import { useTheme } from 'next-themes'
import { Button } from '../ui/button/button'
import { TbSunHigh, TbMoonStars } from 'react-icons/tb'

export function ColorModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      variant="ghost"
      size="icon-sm"
      className={className}
    >
      <TbSunHigh className="scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <TbMoonStars className="absolute scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
    </Button>
  )
}
