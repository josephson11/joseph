import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'
import { skills } from '@/lib/data'

export default function Skills() {
    return (
        <section id="skills" className="section-container bg-dark-surface/30">
            <SectionTitle subtitle="제가 사용하는 기술들">
                Skills
            </SectionTitle>

            <div className="grid md:grid-cols-3 gap-8">
                {skills.map((skillCategory, index) => (
                    <Card key={index}>
                        <h3 className="text-2xl font-bold text-primary-400 mb-6 font-display">
                            {skillCategory.category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skillCategory.items.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="px-4 py-2 bg-dark-bg rounded-lg text-gray-300 text-sm hover:bg-primary-900/30 hover:text-primary-300 transition-all duration-200 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}
