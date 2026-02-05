import { ReactNode } from 'react'

interface SectionTitleProps {
    children: ReactNode
    subtitle?: string
}

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
    return (
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                <span className="text-gradient">{children}</span>
            </h2>
            {subtitle && (
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
