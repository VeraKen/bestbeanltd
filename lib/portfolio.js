export const portfolio = [
  {
    number: "01", slug: "examsphere", title: "Exansphere.APP", label: "AI Learning Platform",
    short: "BestBean's flagship AI learning platform for students, parents and schools.",
    description: "Adaptive exam preparation, personalized learning, student intelligence, parent visibility and AI tutoring for Africa's examination markets.",
    audience: "Students • Parents • Schools", featured: true, external: "https://examsphere.app",
    outcome: "Improve readiness, expose learning gaps early and turn practice activity into actionable student intelligence.",
    capabilities: ["Adaptive practice and exam simulation", "Weak-topic and readiness analysis", "Student Success reporting", "Parent progress visibility", "Ask Ade AI tutoring", "Multi-exam expansion across WAEC, JAMB, NECO, IGCSE, SAT and Common Entrance"],
    engagement: ["School and institutional partnerships", "Parent and student subscriptions", "Content and examination expansion", "Analytics and reporting integrations"]
  },
  {
    number: "02", slug: "education-device-management", title: "Education Device Management Platform", label: "Ministry Solution",
    short: "National-scale oversight for education devices and digital-learning deployments.",
    description: "A centralized platform for enrollment, location visibility, policy control, device health, classroom oversight and ministry reporting.",
    audience: "Ministries • Agencies • School Systems",
    outcome: "Protect public investment, improve device accountability and give decision-makers real-time operational visibility.",
    capabilities: ["Device enrollment and inventory", "GPS and lost-device visibility", "Remote policy and security controls", "Battery, health and connectivity monitoring", "School and classroom reporting", "Android and Windows deployment support"],
    engagement: ["Pilot and proof-of-concept deployment", "National or state rollout planning", "Hosting and infrastructure design", "Training, governance and support"]
  },
  {
    number: "03", slug: "government-ai", title: "Government AI Solutions", label: "Public-Sector Transformation",
    short: "Responsible AI and digital transformation for ministries, agencies and public institutions.",
    description: "AI strategy, executive dashboards, workflow automation, citizen-service modernization, governance and implementation support.",
    audience: "Federal • State • Public Institutions",
    outcome: "Reduce administrative friction, improve decision quality and modernize public services with accountable implementation.",
    capabilities: ["AI readiness and opportunity assessment", "Executive dashboards and decision intelligence", "Workflow and document automation", "Citizen-service modernization", "Responsible-AI policy and governance", "Procurement and implementation oversight"],
    engagement: ["Executive strategy workshops", "Priority-use-case design", "Pilot implementation", "Institution-wide transformation programmes"]
  },
  {
    number: "04", slug: "benq-education", title: "BenQ Education Solutions", label: "Smart Classroom Delivery",
    short: "Interactive classroom technology delivered as a complete institutional solution.",
    description: "Deployment planning, supply, installation, teacher enablement and rollout support built around BenQ education technology.",
    audience: "Schools • Universities • Training Centres",
    outcome: "Create reliable, engaging digital classrooms while improving adoption, teacher confidence and return on investment.",
    capabilities: ["BenQ interactive displays", "Classroom and campus deployment planning", "Installation and configuration", "Teacher onboarding and training", "Device and content ecosystem integration", "Warranty and lifecycle support coordination"],
    engagement: ["Single-campus modernization", "Multi-school deployment", "Government education programmes", "Demonstration and pilot classrooms"]
  },
  {
    number: "05", slug: "enterprise-ai-consulting", title: "Enterprise AI Consulting", label: "Strategy to Implementation",
    short: "Board-level AI strategy translated into operating results.",
    description: "AI readiness, operating-model redesign, workflow automation, technology selection, governance and transformation support.",
    audience: "Boards • Executives • Enterprises",
    outcome: "Move from fragmented AI experimentation to governed, measurable and scalable enterprise adoption.",
    capabilities: ["Board and executive AI advisory", "AI readiness and value-pool assessment", "Operating-model and workflow redesign", "Technology and vendor selection", "Implementation governance", "Adoption, capability building and performance measurement"],
    engagement: ["Executive diagnostic", "90-day AI roadmap", "Use-case implementation", "Transformation office support"]
  },
  {
    number: "06", slug: "future-saas", title: "Future SaaS Products", label: "Venture & Product Pipeline",
    short: "Africa-first software products designed around recurring institutional problems.",
    description: "A disciplined product pipeline focused on validated demand, recurring revenue, measurable user outcomes and global scalability.",
    audience: "Africa-First • Globally Scalable",
    outcome: "Convert repeatable market problems into scalable software businesses with defensible product intelligence.",
    capabilities: ["Problem and market validation", "Product strategy and business-model design", "Rapid MVP development", "Institutional pilot programmes", "Usage and outcome analytics", "Commercial scaling and partnership design"],
    engagement: ["Co-development partnerships", "Institutional pilot sponsorship", "Strategic investment discussions", "Distribution and market-entry partnerships"]
  }
];

export function getPortfolioItem(slug) { return portfolio.find((item) => item.slug === slug); }
