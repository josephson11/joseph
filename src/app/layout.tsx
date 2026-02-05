import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: '포트폴리오 | Full-Stack Developer',
    description: '사용자 경험을 최우선으로 생각하는 개발자의 포트폴리오',
    keywords: ['포트폴리오', 'Full-Stack Developer', 'React', 'Next.js', 'TypeScript'],
    authors: [{ name: 'Your Name' }],
    openGraph: {
        title: '포트폴리오 | Full-Stack Developer',
        description: '사용자 경험을 최우선으로 생각하는 개발자의 포트폴리오',
        type: 'website',
        locale: 'ko_KR',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko" className="dark">
            <body className={`${inter.variable} ${poppins.variable} font-sans`}>
                {children}
            </body>
        </html>
    )
}
