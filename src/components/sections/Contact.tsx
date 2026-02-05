import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { personalInfo, socialLinks } from '@/lib/data'
import { Github, Linkedin, Mail, BookOpen, Instagram } from 'lucide-react'

const iconMap: Record<string, any> = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
    book: BookOpen,
    instagram: Instagram,
}

export default function Contact() {
    return (
        <section id="contact" className="section-container">
            <SectionTitle subtitle="함께 일하고 싶으시다면">
                Contact
            </SectionTitle>

            <div className="max-w-2xl mx-auto text-center">
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    새로운 프로젝트나 협업 기회에 대해 이야기 나누는 것을 환영합니다. <br />
                    언제든지 연락주세요!
                </p>

                {/* Email Button */}
                <div className="mb-12">
                    <Button href={`mailto:${personalInfo.email}`} variant="primary">
                        이메일 보내기
                    </Button>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6">
                    {socialLinks.map((link) => {
                        const Icon = iconMap[link.icon]
                        return (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass p-4 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                                aria-label={link.name}
                            >
                                <Icon
                                    size={32}
                                    className="text-gray-400 group-hover:text-primary-400 transition-colors"
                                />
                            </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
