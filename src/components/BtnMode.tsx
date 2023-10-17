"use client"
import { useTheme } from "next-themes";
export default function BtnMode() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme
    return (
        <button onClick={() => theme == "dark" ? setTheme('light') : setTheme('dark')} className="text-white">Test</button>
    )
}