import { Github, Linkedin, Mail, BookOpen, Instagram } from 'lucide-react'
import { socialLinks } from '@/lib/data'

const iconMap: Record<string, any> = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
    book: BookOpen,
    instagram: Instagram,
}

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-dark-surface border-t border-dark-border py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center gap-6">
                    {/* Social Links */}
                    <div className="flex gap-6">
                        {socialLinks.map((link) => {
                            const Icon = iconMap[link.icon]
                            return (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                                    aria-label={link.name}
                                >
                                    <Icon size={24} />
                                </a>
                            )
                        })}
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-500 text-sm text-center">
                        © {currentYear} All rights reserved. Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    )
}
