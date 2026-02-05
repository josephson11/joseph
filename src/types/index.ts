export interface PersonalInfo {
    name: string
    role: string
    email: string
    github: string
    linkedin: string
    blog?: string
    location: string
    bio: string[]
}

export interface Project {
    id: number
    title: string
    description: string
    period: string
    role: string
    image: string
    tags: string[]
    github?: string
    demo?: string
    achievements: string[]
    learnings: string
}

export interface Skill {
    category: string
    items: string[]
}

export interface Experience {
    id: number
    company: string
    position: string
    period: string
    description: string
    achievements: string[]
}

export interface Education {
    school: string
    major: string
    period: string
    description?: string
}

export interface SocialLink {
    name: string
    url: string
    icon: string
}
