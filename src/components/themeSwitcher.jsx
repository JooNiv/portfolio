import { createSignal, onMount } from "solid-js"
import { css } from '../../styled-system/css'
import { flex } from '../../styled-system/patterns'

export const ThemeSwitcher = () => {
    const [theme, setTheme] = createSignal("light")

    onMount(() => {
        // Check localStorage or OS preference on mount
        const stored = localStorage.getItem("theme")
        if (stored) {
            setTheme(stored)
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
        }
        document.documentElement.setAttribute("data-theme", theme())
    })

    const toggleTheme = () => {
        const next = theme() === "dark" ? "light" : "dark"
        setTheme(next)
        document.documentElement.setAttribute("data-theme", next)
        localStorage.setItem("theme", next)
    }

    return (
        <button
            onClick={toggleTheme}
            className={flex({
                align: 'center',
                justify: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                cursor: 'pointer',
                bg: 'surface',
                _hover: { bg: 'hover' },
                shadow: 'md',
                _dark: {
                    border: '1px solid',
                    borderColor: 'faint',
                },
                transitionTimingFunction: 'linear',
                transitionDuration: '200ms',
                })
            }
            aria-label="Toggle theme"
        >
            {theme() === "dark" ? "☀️" : "🌙"}
        </button>
    )
}