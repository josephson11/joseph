import { PersonalInfo, Project, Skill, Experience, Education, SocialLink } from '@/types'

// 개인 정보
export const personalInfo: PersonalInfo = {
    name: '손승환',
    role: '한의학도 · 농구 선수 · 수학 교육자',
    email: 'seunghwan.son@example.com',
    github: 'https://github.com/seunghwanson',
    linkedin: 'https://linkedin.com/in/seunghwan-son',
    blog: 'https://blog.sonseunghwan.com',
    location: '대한민국',
    bio: [
        '안녕하세요! 한의학과에 재학 중인 손승환입니다.',
        '한의학을 전공하며 인체와 건강에 대한 깊은 이해를 쌓아가고 있습니다. 전통 한의학의 지혜와 현대 의학의 과학적 접근을 융합하여, 사람들의 건강과 웰빙에 기여하는 한의사가 되는 것이 목표입니다.',
        '농구를 매우 좋아하며 슈팅 가드 포지션에서 활동하고 있습니다. 코트 위에서의 경험은 팀워크와 순간적인 판단력을 키워주었고, 이는 한의학 진단과 치료에도 큰 도움이 되고 있습니다.',
        '수학 교육에 대한 열정을 가지고 학생들을 가르치고 있으며, 논리적 사고와 문제 해결 능력은 모든 분야에서 저의 강점이 되고 있습니다.',
    ]
}

// 프로젝트 및 연구 활동
export const projects: Project[] = [
    {
        id: 1,
        title: '스포츠 손상 한의학 치료 연구',
        description: '운동선수들의 부상 예방 및 재활을 위한 한의학적 접근 연구',
        period: '2024.03 - 현재',
        role: '연구원',
        image: '/images/project1.jpg',
        tags: ['한의학', '스포츠 의학', '침구 치료', '재활'],
        achievements: [
            '농구 선수 특화 부상 패턴 분석 및 예방 프로토콜 개발',
            '경혈 자극을 통한 운동 능력 향상 연구',
            '한약 처방을 활용한 빠른 회복 사례 연구',
            '팀 동료들에게 부상 예방 교육 및 간단한 혈자리 자극법 전수',
        ],
        learnings: '직접 농구를 하면서 경험한 부상들을 한의학적 관점에서 분석하고 치료하는 과정에서, 스포츠 한의학의 중요성과 가능성을 깊이 이해하게 되었습니다.',
    },
    {
        id: 2,
        title: '수학 교육 플랫폼 운영',
        description: '중고등학생을 위한 맞춤형 수학 교육 프로그램',
        period: '2021 - 현재',
        role: '수학 강사 / 교육 프로그램 기획자',
        image: '/images/project2.jpg',
        tags: ['수학 교육', '문제 해결', '논리적 사고', '학습 컨설팅'],
        achievements: [
            '담당 학생 30명 이상의 수학 성적 평균 20% 이상 향상',
            '개념 중심 학습법으로 수학에 대한 흥미와 자신감 향상',
            '학생별 맞춤 커리큘럼 설계 및 학습 진도 관리',
            '학부모 상담을 통한 효과적인 학습 환경 조성',
        ],
        learnings: '각 학생의 학습 스타일을 파악하고 맞춤형 교육을 제공하는 과정은, 한의학에서 환자 개개인의 체질과 증상을 파악하여 맞춤 치료를 하는 것과 매우 유사하다는 것을 깨달았습니다.',
    },
    {
        id: 3,
        title: '농구 팀 전술 분석 프로젝트',
        description: '수학적 모델링을 활용한 농구 경기 전략 분석',
        period: '2023.06 - 2023.12',
        role: '데이터 분석가 / 슈팅 가드',
        image: '/images/project3.jpg',
        tags: ['데이터 분석', '농구', '전략 수립', '통계'],
        achievements: [
            '팀원들의 슛 성공률 및 포지션별 득점 패턴 데이터 수집 및 분석',
            '상대 팀 수비 전략 분석을 통한 공격 루트 최적화',
            '개인 및 팀 경기력 향상을 위한 훈련 계획 수립',
            '팀 승률 15% 향상에 기여',
        ],
        learnings: '농구에서의 데이터 기반 의사결정은 한의학에서 임상 데이터를 바탕으로 치료 효과를 검증하는 것과 같은 맥락이며, 수학적 사고가 스포츠와 의학 모두에 적용될 수 있음을 배웠습니다.',
    },
    {
        id: 4,
        title: '건강 증진 교육 봉사',
        description: '지역 주민 대상 기초 한의학 건강 상담 및 교육',
        period: '2022.09 - 현재',
        role: '한의학 교육 봉사자',
        image: '/images/project4.jpg',
        tags: ['한의학', '건강 교육', '봉사 활동', '지역 사회'],
        achievements: [
            '월 1회 지역 주민 대상 건강 강좌 진행 (참여자 평균 40명)',
            '간단한 혈자리 자극법 및 생활 한의학 지식 전달',
            '계절별 건강 관리법 및 질병 예방 교육',
            '주민 만족도 조사 결과 95% 이상의 긍정적 평가',
        ],
        learnings: '한의학 지식을 일반인들이 이해하기 쉽게 전달하는 과정에서, 수학 교육에서 배운 설명 능력과 소통 기술이 큰 도움이 되었습니다.',
    },
]

// 전문 역량
export const skills: Skill[] = [
    {
        category: '한의학 전문 지식',
        items: ['한의학 기초 이론', '진단학 (망문문절)', '침구학', '본초학', '방제학', '한방생리학', '경락학설', '스포츠 한의학']
    },
    {
        category: '수학 및 교육',
        items: ['중학 수학', '고등 수학', '수능 수학', '문제 해결 전략', '맞춤형 학습 설계', '학습 동기 부여', '교육 상담']
    },
    {
        category: '농구 및 스포츠',
        items: ['슈팅 가드 포지션', '외곽 슈팅', '드라이브', '수비 전략', '팀 전술', '경기 분석', '체력 관리', '부상 예방']
    },
    {
        category: '핵심 역량',
        items: ['분석적 사고', '문제 해결', '커뮤니케이션', '팀워크', '리더십', '시간 관리', '자기주도 학습', '멀티태스킹']
    },
    {
        category: '기타 기술',
        items: ['데이터 분석', '통계 활용', 'MS Office', 'Google Workspace', '한의학 문헌 연구', '임상 연구 설계']
    }
]

// 경력 및 활동
export const experience: Experience[] = [
    {
        id: 1,
        company: '수학 교육 센터',
        position: '수학 강사',
        period: '2021 - 현재',
        description: '중학생 및 고등학생 대상 수학 과외 및 그룹 수업',
        achievements: [
            '개념 중심 교육으로 학생들의 수학적 사고력 향상',
            '담당 학생 30명 이상의 평균 성적 20% 이상 향상',
            '학생별 맞춤 커리큘럼 설계 및 학습 진도 관리',
            '학부모 상담 및 효과적인 학습 환경 조성',
            '수학에 대한 흥미와 자신감 회복 사례 다수',
        ]
    },
    {
        id: 2,
        company: '대학 농구 동아리',
        position: '슈팅 가드 / 팀 전략 분석가',
        period: '2020 - 현재',
        description: '대학 농구 동아리 및 지역 리그 활동',
        achievements: [
            '슈팅 가드 포지션에서 팀 득점 2위 기록',
            '외곽 슛 성공률 42% 달성',
            '팀 전술 분석 및 데이터 기반 전략 수립',
            '신입 부원 교육 및 멘토링',
            '지역 리그 준우승 (2024)',
        ]
    },
    {
        id: 3,
        company: '한의과대학 부속 한방병원',
        position: '임상 실습생',
        period: '2023.06 - 2024.02',
        description: '한방병원 임상 실습 및 한의학 진료 보조',
        achievements: [
            '외래 환자 진단 및 치료 과정 참관',
            '침구 치료 및 한약 처방 실습',
            '환자 문진 및 기초 진단 보조',
            '스포츠 재활 클리닉 참여 및 운동 손상 치료 학습',
        ]
    },
]

// 교육
export const education: Education[] = [
    {
        school: '○○대학교 한의과대학',
        major: '한의학 전공',
        period: '2020.03 - 현재 (재학)',
        description: '한의학 기초 이론, 진단학, 침구학, 본초학, 방제학, 한방생리학, 병리학 등 체계적인 한의학 교육 이수 중. 전통 한의학과 현대 의학의 융합을 목표로 학습하고 있으며, 특히 스포츠 한의학 분야에 관심을 가지고 연구 중.'
    }
]

// 소셜 링크
export const socialLinks: SocialLink[] = [
    {
        name: 'Email',
        url: 'mailto:seunghwan.son@example.com',
        icon: 'mail'
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/seunghwan_son',
        icon: 'instagram'
    },
    {
        name: 'Blog',
        url: 'https://blog.sonseunghwan.com',
        icon: 'book'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/seunghwanson',
        icon: 'github'
    }
]
