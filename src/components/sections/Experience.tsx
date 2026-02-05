import SectionTitle from '@/components/ui/SectionTitle'
import { experience } from '@/lib/data'

export default function Experience() {
    return (
        <section id="experience" className="section-container bg-dark-surface/30">
            <SectionTitle subtitle="저의 업무 경험">
                Experience
            </SectionTitle>

            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-900" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-dark-bg" />

                                {/* Content */}
                                <div className="flex-1 md:w-1/2 ml-8 md:ml-0">
                                    <div className={`glass p-6 rounded-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                        <div className="mb-4">
                                            <h3 className="text-2xl font-bold text-white font-display">
                                                {exp.position}
                                            </h3>
                                            <p className="text-primary-400 font-medium">
                                                {exp.company}
                                            </p>
                                            <p className="text-gray-500 text-sm mt-1">
                                                {exp.period}
                                            </p>
                                        </div>

                                        <p className="text-gray-300 mb-4">
                                            {exp.description}
                                        </p>

                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, achIndex) => (
                                                <li
                                                    key={achIndex}
                                                    className="flex items-start gap-2 text-gray-400 text-sm"
                                                >
                                                    <span className="text-primary-400 mt-1">▸</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block flex-1 md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
