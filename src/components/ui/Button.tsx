import { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'outline'
    href?: string
    onClick?: () => void
    className?: string
}

export default function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    className = ''
}: ButtonProps) {
    const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-block text-center'

    const variants = {
        primary: 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white shadow-lg shadow-primary-900/50 hover:shadow-xl hover:shadow-primary-900/60',
        secondary: 'bg-gradient-to-r from-accent-cyan to-accent-teal hover:from-accent-cyan/80 hover:to-accent-teal/80 text-white shadow-lg shadow-accent-cyan/30',
        outline: 'border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white'
    }

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`

    if (href) {
        return (
            <a href={href} className={combinedClassName}>
                {children}
            </a>
        )
    }

    return (
        <button onClick={onClick} className={combinedClassName}>
            {children}
        </button>
    )
}
