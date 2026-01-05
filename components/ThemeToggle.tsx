'use client'

import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      className="px-4 py-2 rounded-lg border
                 bg-gray-100 dark:bg-zinc-800
                 text-gray-900 dark:text-gray-100
                 transition"
    >
      {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
    </button>
  )
}
