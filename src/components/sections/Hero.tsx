'use client'

import { ArrowDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import { personalInfo } from '@/lib/data'

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-bg to-accent-cyan/10 animate-gradient" />

            {/* Content */}
            <div className="relative z-10 section-container text-center">
                <div className="animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                        안녕하세요, <br />
                        <span className="text-gradient">
                            {personalInfo.name || '개발자'}
                        </span>
                        입니다
                    </h1>

                    <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-medium">
                        {personalInfo.role}
                    </p>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                        {personalInfo.bio[0]}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button href="#projects" variant="primary">
                            프로젝트 보기
                        </Button>
                        <Button href="#contact" variant="outline">
                            연락하기
                        </Button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ArrowDown className="text-gray-500" size={32} />
                </div>
            </div>
        </section>
    )
}
