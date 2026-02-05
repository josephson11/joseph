import SectionTitle from '@/components/ui/SectionTitle'
import { personalInfo } from '@/lib/data'

export default function About() {
    return (
        <section id="about" className="section-container">
            <SectionTitle subtitle="당신이 알아야 할 것">
                About Me
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Profile Image/Avatar Placeholder */}
                <div className="flex justify-center">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-600 to-accent-cyan flex items-center justify-center text-9xl font-bold text-white shadow-2xl shadow-primary-900/50">
                        {personalInfo.name?.charAt(0) || 'P'}
                    </div>
                </div>

                {/* About Content */}
                <div className="space-y-6">
                    {personalInfo.bio.map((paragraph, index) => (
                        <p key={index} className="text-gray-300 text-lg leading-relaxed">
                            {paragraph}
                        </p>
                    ))}

                    <div className="flex flex-wrap gap-4 pt-6">
                        <div className="glass px-6 py-3 rounded-lg">
                            <p className="text-primary-400 font-semibold">위치</p>
                            <p className="text-white">{personalInfo.location}</p>
                        </div>
                        <div className="glass px-6 py-3 rounded-lg">
                            <p className="text-primary-400 font-semibold">역할</p>
                            <p className="text-white">{personalInfo.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
