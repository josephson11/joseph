import SectionTitle from '@/components/ui/SectionTitle'
import Card from '@/components/ui/Card'
import { projects } from '@/lib/data'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
    return (
        <section id="projects" className="section-container">
            <SectionTitle subtitle="제가 작업한 프로젝트들">
                Projects
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <Card key={project.id} className="flex flex-col h-full">
                        {/* Project Image Placeholder */}
                        <div className="w-full h-48 bg-gradient-to-br from-primary-800 to-accent-teal rounded-lg mb-6 flex items-center justify-center text-6xl font-bold text-white/20">
                            {project.title.charAt(0)}
                        </div>

                        <div className="flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-2 font-display">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-4">
                                {project.period} | {project.role}
                            </p>

                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-primary-900/30 text-primary-300 rounded-full text-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Achievements */}
                            <div className="mb-6 flex-1">
                                <h4 className="text-sm font-semibold text-primary-400 mb-2">주요 성과</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                                    {project.achievements.slice(0, 2).map((achievement, index) => (
                                        <li key={index}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                                    >
                                        <Github size={20} />
                                        <span className="text-sm">GitHub</span>
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                        <span className="text-sm">Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}
