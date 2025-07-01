// Mock Data Module - Centralized location for all mock data

// Accounts data from accounts.ejs
const accounts = [
    {
        company: "Bilkent Universitesi",
        logo: "B",
        categories: ["Education"],
        linkedin: "bilkentunam",
        lastInteraction: "over 1 year ago",
        status: "Very weak",
        arr: 82969,
        renewalDate: "2025-07-15",
        mau: [450, 445, 440, 438, 435, 430, 428, 425, 420, 415, 410, 408],
        currentMau: 408,
        healthScore: [45, 44, 42, 41, 40, 38, 35, 33, 30, 28, 25, 22],
        currentHealth: 22,
        domain: "bilkent.edu.tr"
    },
    {
        company: "Flowla",
        logo: "F",
        categories: ["B2B", "IT", "SAAS"],
        linkedin: "flowlacom",
        lastInteraction: "5 months ago",
        status: "Very weak",
        arr: 26,
        renewalDate: "2025-07-05",
        mau: [15, 18, 22, 25, 28, 32, 35, 40, 38, 36, 35, 34],
        currentMau: 34,
        healthScore: [20, 25, 30, 35, 40, 45, 50, 55, 52, 48, 45, 42],
        currentHealth: 42,
        domain: "flowla.com"
    },
    {
        company: "SuccessNavigator",
        logo: "S",
        categories: ["Supplies", "PS"],
        linkedin: "successnavigator",
        lastInteraction: "5 days ago",
        status: "Very weak",
        arr: null,
        renewalDate: null,
        mau: [5, 5, 6, 7, 8, 12, 15, 14, 13, 12, 11, 10],
        currentMau: 10,
        healthScore: [30, 32, 35, 40, 45, 55, 65, 62, 58, 55, 52, 50],
        currentHealth: 50,
        domain: null
    },
    {
        company: "R2S",
        logo: "R",
        categories: ["Automation", "B2C", "PS"],
        linkedin: null,
        lastInteraction: "6 months ago",
        status: "Very weak",
        arr: null,
        renewalDate: null,
        mau: [2, 2, 2, 3, 3, 3, 2, 2, 2, 1, 1, 1],
        currentMau: 1,
        healthScore: [25, 25, 25, 28, 28, 28, 25, 22, 20, 15, 12, 10],
        currentHealth: 10,
        domain: null
    },
    {
        company: "Merge",
        logo: "M",
        categories: ["B2B", "IT", "SAAS"],
        linkedin: "merge-api",
        lastInteraction: "5 days ago",
        status: "Weak",
        arr: 1386,
        renewalDate: "2025-07-10",
        mau: [80, 85, 90, 88, 92, 95, 98, 102, 105, 110, 108, 112],
        currentMau: 112,
        healthScore: [60, 62, 65, 64, 66, 68, 70, 72, 74, 76, 75, 78],
        currentHealth: 78,
        domain: "merge.dev"
    },
    {
        company: "Yahoo",
        logo: "Y",
        categories: ["B2C", "Publishing"],
        linkedin: "yahoo",
        lastInteraction: "7 days ago",
        status: "Very weak",
        arr: 1424939,
        renewalDate: "2025-09-30",
        mau: [1200, 1180, 1150, 1140, 1120, 1100, 1080, 1050, 1020, 1000, 980, 950],
        currentMau: 950,
        healthScore: [40, 38, 35, 34, 32, 30, 28, 25, 22, 20, 18, 15],
        currentHealth: 15,
        domain: "yahoo.com"
    },
    {
        company: "Wingify",
        logo: "W",
        categories: ["B2B", "B2C", "IT"],
        linkedin: "vwo",
        lastInteraction: "No contact",
        status: "No communication",
        arr: 3342,
        renewalDate: "2025-10-15",
        mau: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        currentMau: 0,
        healthScore: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        currentHealth: 5,
        domain: "vwo.com"
    },
    {
        company: "Olympia Venture Advisory",
        logo: "O",
        categories: ["B2B", "PS"],
        linkedin: "olympia-venture-advisory",
        lastInteraction: "about 1 year ago",
        status: "Weak",
        arr: null,
        renewalDate: null,
        mau: [8, 8, 9, 10, 11, 12, 11, 10, 9, 8, 7, 6],
        currentMau: 6,
        healthScore: [35, 35, 38, 40, 42, 45, 42, 40, 38, 35, 32, 30],
        currentHealth: 30,
        domain: "olympiaventure.com"
    },
    {
        company: "Microsoft",
        logo: "M",
        categories: ["B2B", "Enterprise", "Software"],
        linkedin: "microsoft",
        lastInteraction: "No contact",
        status: "No communication",
        arr: 12814907,
        renewalDate: "2025-11-15",
        mau: [2500, 2520, 2550, 2580, 2600, 2650, 2700, 2680, 2660, 2640, 2620, 2600],
        currentMau: 2600,
        healthScore: [80, 82, 84, 86, 88, 90, 92, 90, 88, 86, 84, 82],
        currentHealth: 82,
        domain: "microsoft.com"
    }
];

// All contacts data from account-details.ejs
const allContacts = [
    {
        id: "mehmet-ozkan",
        name: "Dr. Mehmet Özkan",
        title: "IT Director",
        company: "Bilkent Universitesi",
        email: "mozkan@bilkent.edu.tr",
        phone: "+90 312 290 1234",
        linkedin: "mehmetozkan",
        lastInteraction: "2 days ago",
        status: "Active",
        type: "contact",
        tags: ["Economic buyer", "Admin"]
    },
    {
        id: "ayse-yilmaz",
        name: "Prof. Ayşe Yılmaz",
        title: "CTO",
        company: "Bilkent Universitesi",
        email: "ayilmaz@bilkent.edu.tr",
        phone: "+90 312 290 1235",
        linkedin: "ayseyilmaz",
        lastInteraction: "1 week ago",
        status: "Active",
        type: "contact",
        tags: ["Exec sponsor", "Economic buyer"]
    },
    {
        id: "alex-thompson",
        name: "Alex Thompson",
        title: "CEO",
        company: "Flowla",
        email: "alex@flowla.com",
        phone: "+1 415 555 0100",
        linkedin: "alexthompson",
        lastInteraction: "3 days ago",
        status: "Active",
        type: "contact",
        tags: ["Economic buyer", "Exec sponsor"]
    },
    {
        id: "emma-davis",
        name: "Emma Davis",
        title: "Head of Sales",
        company: "Flowla",
        email: "emma@flowla.com",
        phone: "+1 415 555 0101",
        linkedin: "emmadavis",
        lastInteraction: "5 days ago",
        status: "Active",
        type: "contact",
        tags: ["Champion", "Power user"]
    },
    {
        id: "ryan-park",
        name: "Ryan Park",
        title: "CTO",
        company: "Flowla",
        email: "ryan@flowla.com",
        phone: "+1 415 555 0102",
        linkedin: "ryanpark",
        lastInteraction: "1 week ago",
        status: "Active",
        type: "contact",
        tags: ["Admin", "Power user"]
    },
    {
        id: "emre-demir",
        name: "Emre Demir",
        title: "Lead Developer",
        company: "Bilkent Universitesi",
        email: "edemir@bilkent.edu.tr",
        phone: "+90 312 290 1236",
        linkedin: "emredemir",
        lastInteraction: "2 weeks ago",
        status: "Active",
        type: "contact",
        tags: ["Power user", "Champion"]
    },
    {
        id: "zeynep-kaya",
        name: "Zeynep Kaya",
        title: "System Admin",
        company: "Bilkent Universitesi",
        email: "zkaya@bilkent.edu.tr",
        phone: "+90 312 290 1237",
        linkedin: "zeynepkaya",
        lastInteraction: "3 days ago",
        status: "Active",
        type: "contact",
        tags: ["Admin"]
    },
    {
        id: "david-chen",
        name: "David Chen",
        title: "Engineering Manager",
        company: "Yahoo",
        email: "dchen@yahoo.com",
        phone: "+1 408 555 0200",
        linkedin: "davidchen",
        lastInteraction: "4 days ago",
        status: "Active",
        type: "contact",
        tags: ["Power user", "Admin"]
    },
    {
        id: "jennifer-wong",
        name: "Jennifer Wong",
        title: "Product Director",
        company: "Yahoo",
        email: "jwong@yahoo.com",
        phone: "+1 408 555 0201",
        linkedin: "jenniferwong",
        lastInteraction: "1 week ago",
        status: "Active",
        type: "contact",
        tags: ["Economic buyer", "Champion"]
    },
    {
        id: "michael-johnson",
        name: "Michael Johnson",
        title: "VP of Engineering",
        company: "Microsoft",
        email: "mjohnson@microsoft.com",
        phone: "+1 425 555 0300",
        linkedin: "michaeljohnson",
        lastInteraction: "3 days ago",
        status: "Active",
        type: "contact",
        tags: ["Exec sponsor", "Economic buyer"]
    },
    {
        id: "sarah-martinez",
        name: "Sarah Martinez",
        title: "Solutions Architect",
        company: "Microsoft",
        email: "smartinez@microsoft.com",
        phone: "+1 425 555 0301",
        linkedin: "sarahmartinez",
        lastInteraction: "5 days ago",
        status: "Active",
        type: "contact",
        tags: ["Power user", "Admin"]
    },
    {
        id: "robert-johnson",
        name: "Robert Johnson",
        title: "VP Operations",
        company: "ACME Corporation",
        email: "rjohnson@acme.com",
        phone: "+1 313 555 0400",
        linkedin: "robertjohnsonacme",
        lastInteraction: "Today",
        status: "Active",
        type: "contact",
        tags: ["Economic buyer", "Exec sponsor"]
    },
    {
        id: "lisa-chen",
        name: "Lisa Chen",
        title: "IT Director",
        company: "ACME Corporation",
        email: "lchen@acme.com",
        phone: "+1 313 555 0401",
        linkedin: "lisachenacme",
        lastInteraction: "1 day ago",
        status: "Active",
        type: "contact",
        tags: ["Admin", "Champion"]
    },
    {
        id: "mark-williams",
        name: "Mark Williams",
        title: "Production Manager",
        company: "ACME Corporation",
        email: "mwilliams@acme.com",
        phone: "+1 313 555 0402",
        linkedin: "markwilliamsacme",
        lastInteraction: "3 days ago",
        status: "Active",
        type: "contact",
        tags: ["Power user"]
    }
];

// Account data from account-details.ejs
const accountData = {
    bilkent: {
        name: "Bilkent Universitesi",
        logo: "B",
        industry: "Education",
        website: "bilkent.edu.tr",
        employees: "1000-5000",
        plan: "Enterprise",
        billing: "Annual",
        revenue: "$82,969",
        renewalDate: "2025-07-15",
        location: "Ankara, Turkey",
        productSubscriptions: [
            { name: "Asyncro - Cryptonix Synergy", id: "asyncro-crypto" },
            { name: "DataFlow Analytics Pro", id: "dataflow-pro" }
        ],
        description: "Bilkent University is Turkey's first private, nonprofit university, established in 1984. Located in Ankara, the university is consistently ranked as one of the top institutions in Turkey and has gained international recognition for its academic excellence and research contributions. With over 13,000 students and 1,000 faculty members, Bilkent offers undergraduate and graduate programs across various disciplines including engineering, business, humanities, and sciences. The university is known for its English-medium instruction, modern campus facilities, and strong emphasis on research and innovation. hosting over 13,000 students across undergraduate, graduate, and doctoral programs xxxxxx  xxxxxxxx  rrrrrrr  sdfasdfasdf adsfasd fsadf asdf ads fad sfafdfsdfa asdfasdfa ty is Turkey's first private, nonprofit university, established in 1984. Located in Ankara, the university is consistently ranked as one of the top institutions in Turkey and has gained international recognition for its academic excellence and research contributions. With over 13,000 students and 1,000 faculty members, Bilkent offers undergraduate and graduate programs across various disciplines including engineering, business, humanities, and sciences. The university is known for its English-medium instruction, modern campus facilities, and strong emphasis on research and innovation. hosting over 13,000 students across undergraduate, graduate, and doctoral programs xxxxxx  xxxxxxxx  rrrrrrr  sdfasdfasdf adsfasd fsadf asdf ads fad sfafdfsdfa asdfasdfa",
        objectives: [
            "Modernize student information systems to improve administrative efficiency and student experience",
            "Enhance online learning capabilities to support hybrid and remote education models",
            "Implement comprehensive LMS integration for seamless course management",
            "Expand digital infrastructure to support growing student and faculty populations"
        ],
        summary: "Leading private university in Turkey focused on academic excellence and research. Primary contact is through their IT department for educational technology solutions. Recent discussions have focused on LMS integration requirements, student portal customization, and mobile app development for campus services. Their main objectives include modernizing student information systems, improving online learning capabilities, and enhancing campus-wide communication tools. Bilkent University, established in 1984, is recognized as one of Turkey's premier educational institutions, hosting over 13,000 students across undergraduate, graduate, and doctoral programs. The university's commitment to technological innovation extends beyond academics into comprehensive digital infrastructure modernization projects. Their current initiative involves implementing a unified student experience platform that integrates academic records, course management, library services, dormitory administration, and campus-wide communication systems. The IT department is particularly focused on creating seamless mobile experiences for students, faculty, and staff while ensuring robust security compliance with international education technology standards. Recent partnerships with leading tech companies have positioned Bilkent as a model for digital transformation in higher education across the region. transformation in higher education across the region. transformation in higher education across the region. transformation in higher education across the region. dfasdff asdfasdf asdf asdf asdf asd fasd fa df asdfzzzzzzzzzzzzz",
        highlights: [
            {
                type: "feature-request",
                title: "Feature Request",
                content: "Need bulk import functionality for student records with CSV support",
                date: "2024-01-15",
                source: "Email"
            },
            {
                type: "pain-point",
                title: "Pain Point",
                content: "Current system timeout issues when processing large batches of grade submissions",
                date: "2024-01-10",
                source: "Support Ticket"
            },
            {
                type: "competitor",
                title: "Competitor Mention",
                content: "Evaluating Blackboard and Canvas as alternative solutions",
                date: "2024-01-08",
                source: "Meeting Notes"
            }
        ],
        timeline: [
            {
                type: "email",
                title: "Follow-up on integration timeline",
                date: "2024-01-15",
                time: "14:30",
                description: "Discussed API requirements and timeline for Q1 implementation",
                participants: {
                    from: {name: "Dr. Mehmet Özkan", title: "IT Director", type: "contact", email: "mozkan@bilkent.edu.tr"},
                    to: [
                        {name: "Sarah Johnson", title: "Account Manager", type: "user", email: "sarah.johnson@company.com"},
                        {name: "Mike Chen", title: "Solutions Engineer", type: "user", email: "mike.chen@company.com"}
                    ],
                    cc: [{name: "Prof. Ayşe Yılmaz", title: "CTO", type: "contact", email: "ayilmaz@bilkent.edu.tr"}]
                }
            },
            {
                type: "meeting",
                title: "Technical Requirements Review",
                date: "2024-01-12",
                time: "10:00",
                description: "2-hour deep dive into system architecture and integration points",
                participants: {
                    organizer: {name: "Sarah Johnson", title: "Account Manager", type: "user", email: "sarah.johnson@company.com"},
                    attendees: [
                        {name: "Dr. Mehmet Özkan", title: "IT Director", type: "contact", email: "mozkan@bilkent.edu.tr"},
                        {name: "Emre Demir", title: "Lead Developer", type: "contact", email: "edemir@bilkent.edu.tr"},
                        {name: "Sarah Johnson", title: "Account Manager", type: "user", email: "sarah.johnson@company.com"},
                        {name: "Mike Chen", title: "Solutions Engineer", type: "user", email: "mike.chen@company.com"},
                        {name: "Lisa Park", title: "Product Manager", type: "user", email: "lisa.park@company.com"}
                    ]
                }
            },
            {
                type: "ticket",
                title: "Support Ticket #1234 - Login Issues",
                date: "2024-01-10",
                time: "09:15",
                description: "Resolved authentication problems affecting 200+ users",
                participants: {
                    reporter: {name: "Zeynep Kaya", title: "System Admin", type: "contact", email: "zkaya@bilkent.edu.tr"},
                    assignee: {name: "Tom Wilson", title: "Support Engineer", type: "user", email: "tom.wilson@company.com"},
                    watchers: [{name: "Dr. Mehmet Özkan", title: "IT Director", type: "contact", email: "mozkan@bilkent.edu.tr"}]
                }
            },
            {
                type: "email",
                title: "Contract renewal discussion",
                date: "2024-01-08",
                time: "11:00",
                description: "Initial discussion about contract renewal and expansion options",
                participants: {
                    from: {name: "Sarah Johnson", title: "Account Manager", type: "user", email: "sarah.johnson@company.com"},
                    to: [
                        {name: "Dr. Mehmet Özkan", title: "IT Director", type: "contact", email: "mozkan@bilkent.edu.tr"},
                        {name: "Prof. Ayşe Yılmaz", title: "CTO", type: "contact", email: "ayilmaz@bilkent.edu.tr"}
                    ],
                    cc: [
                        {name: "James Miller", title: "Sales Director", type: "user", email: "james.miller@company.com"},
                        {name: "John Smith", title: "Consultant", type: "third-party", email: "john@consultingfirm.com"}
                    ]
                }
            },
            {
                type: "call",
                title: "Quarterly Business Review",
                date: "2024-01-05",
                time: "15:00",
                description: "Reviewed Q4 performance and discussed Q1 roadmap",
                participants: {
                    attendees: [
                        {name: "Dr. Mehmet Özkan", title: "IT Director", type: "contact", email: "mozkan@bilkent.edu.tr"},
                        {name: "Prof. Ayşe Yılmaz", title: "CTO", type: "contact", email: "ayilmaz@bilkent.edu.tr"},
                        {name: "Sarah Johnson", title: "Account Manager", type: "user", email: "sarah.johnson@company.com"},
                        {name: "James Miller", title: "Sales Director", type: "user", email: "james.miller@company.com"}
                    ]
                }
            }
        ],
        journey: {
            startDate: "2023-08-15",
            healthScore: 45,
            currentStage: "onboarding",
            stages: {
                onboarding: { completed: 1, total: 3 },
                adoption: { completed: 0, total: 2 },
                growth: { completed: 0, total: 2 },
                expansion: { completed: 0, total: 1 }
            },
            milestones: [
                {
                    id: 1,
                    title: "University Account Setup",
                    description: "Initial configuration for academic institution",
                    stage: "onboarding",
                    status: "completed",
                    completedDate: "2023-08-22",
                    completedBy: "auto",
                    isAutomatic: true
                },
                {
                    id: 2,
                    title: "Student Information System Integration",
                    description: "Connect with university's existing SIS",
                    stage: "onboarding",
                    status: "in_progress",
                    targetDate: "2024-03-01",
                    isAutomatic: false
                },
                {
                    id: 3,
                    title: "Faculty Training Program",
                    description: "Comprehensive training for 200+ faculty members",
                    stage: "onboarding",
                    status: "pending",
                    targetDate: "2024-04-15",
                    isAutomatic: false
                },
                {
                    id: 4,
                    title: "Student Portal Launch",
                    description: "Deploy student-facing portal for 13,000+ students",
                    stage: "adoption",
                    status: "pending",
                    targetDate: "2024-05-01",
                    isAutomatic: true
                },
                {
                    id: 5,
                    title: "Academic Analytics Implementation",
                    description: "Enable learning analytics and student performance tracking",
                    stage: "adoption",
                    status: "pending",
                    targetDate: "2024-06-01",
                    isAutomatic: true
                },
                {
                    id: 6,
                    title: "Multi-Campus Deployment",
                    description: "Expand to all university campuses and departments",
                    stage: "growth",
                    status: "pending",
                    targetDate: "2024-09-01",
                    isAutomatic: false
                },
                {
                    id: 7,
                    title: "Research Collaboration Tools",
                    description: "Deploy advanced research collaboration features",
                    stage: "growth",
                    status: "pending",
                    targetDate: "2024-12-01",
                    isAutomatic: false
                },
                {
                    id: 8,
                    title: "Partner University Integration",
                    description: "Connect with partner institutions for academic exchange",
                    stage: "expansion",
                    status: "pending",
                    targetDate: "2025-03-01",
                    isAutomatic: false
                }
            ],
            businessGoals: [
                {
                    id: 1,
                    title: "Improve Student Engagement by 40%",
                    currentValue: 15,
                    targetValue: 40,
                    unit: "%",
                    status: "at_risk",
                    targetDate: "2024-08-31"
                },
                {
                    id: 2,
                    title: "Reduce Administrative Overhead by 25%",
                    currentValue: 8,
                    targetValue: 25,
                    unit: "%",
                    status: "in_progress",
                    targetDate: "2024-12-31"
                },
                {
                    id: 3,
                    title: "Deploy to 13,000 Students",
                    currentValue: 1200,
                    targetValue: 13000,
                    unit: "users",
                    status: "in_progress",
                    targetDate: "2024-09-01"
                },
                {
                    id: 4,
                    title: "Achieve 95% Faculty Adoption",
                    currentValue: 25,
                    targetValue: 95,
                    unit: "%",
                    status: "at_risk",
                    targetDate: "2024-06-30"
                }
            ]
        }
    },
    flowla: {
        name: "Flowla",
        logo: "F",
        industry: "Technology",
        website: "flowla.com",
        employees: "10-50",
        plan: "Starter",
        billing: "Monthly",
        revenue: "$26",
        renewalDate: "2024-07-05",
        location: "San Francisco, CA",
        productSubscriptions: [
            { name: "Starter Package", id: "starter-pkg" }
        ],
        description: "Flowla is an innovative B2B SaaS company that specializes in sales enablement and buyer experience platforms. Founded in 2021, the company is headquartered in San Francisco and serves growing businesses looking to modernize their sales processes. Flowla's platform helps sales teams create personalized, interactive buyer journeys that engage prospects and accelerate deal closure. With a team of 25 employees, the company has quickly gained traction in the competitive sales tech market, serving over 150 customers globally. The company's cutting-edge technology stack includes advanced analytics, AI-powered personalization engines, and seamless CRM integrations that enable sales teams to track prospect engagement in real-time. Their flagship product features dynamic content blocks, interactive pricing calculators, proposal automation, and comprehensive buyer experience tracking that provides deep insights into prospect behavior and preferences. Flowla has raised $3.2M in seed funding and is currently expanding into European markets while developing enterprise-grade features for Fortune 500 companies. Their innovative approach to sales enablement has earned them recognition in leading industry publications and positioned them as a rising star in the sales technology ecosystem.",
        objectives: [
            "Scale customer onboarding process to support rapid growth and reduce time-to-value",
            "Improve sales team efficiency through advanced automation and workflow optimization",
            "Enhance buyer engagement metrics with personalized content and interactive experiences",
            "Expand integrations with popular CRM and marketing automation platforms",
            "Develop advanced analytics capabilities for better sales forecasting and performance tracking",
            "Build out enterprise features to target larger customers and increase average deal size"
        ],
        summary: "B2B SaaS company focused on sales enablement and buyer experience platforms. They help sales teams create personalized buyer journeys. Recent conversations have centered around API integration capabilities, custom branding options, and analytics dashboard improvements. Their primary goals are to scale their customer onboarding process, improve sales team efficiency, and enhance buyer engagement metrics.",
        highlights: [
            {
                type: "feature-request",
                title: "Feature Request",
                content: "Requesting Salesforce CRM integration for automatic deal updates",
                date: "2024-01-14",
                source: "Email"
            },
            {
                type: "pain-point",
                title: "Pain Point",
                content: "Limited customization options for buyer portal templates",
                date: "2024-01-11",
                source: "Support Ticket"
            }
        ],
        timeline: [
            {
                type: "email",
                title: "Feature request follow-up",
                date: "2024-01-14",
                time: "11:30",
                description: "Discussed Salesforce integration requirements and timeline",
                participants: {
                    from: {name: "Alex Thompson", title: "CEO", type: "contact", email: "alex@flowla.com"},
                    to: [
                        {name: "Sarah Johnson", title: "Account Manager", type: "user", email: "sarah.johnson@company.com"},
                        {name: "Mike Chen", title: "Solutions Engineer", type: "user", email: "mike.chen@company.com"}
                    ],
                    cc: [{name: "Emma Davis", title: "Head of Sales", type: "contact", email: "emma@flowla.com"}]
                }
            },
            {
                type: "meeting",
                title: "Product Demo",
                date: "2024-01-10",
                time: "14:00",
                description: "Demonstrated new features and discussed customization needs",
                participants: {
                    organizer: {name: "Sarah Johnson", title: "Account Manager", type: "user", email: "sarah.johnson@company.com"},
                    attendees: [
                        {name: "Alex Thompson", title: "CEO", type: "contact", email: "alex@flowla.com"},
                        {name: "Emma Davis", title: "Head of Sales", type: "contact", email: "emma@flowla.com"},
                        {name: "Ryan Park", title: "CTO", type: "contact", email: "ryan@flowla.com"},
                        {name: "Sarah Johnson", title: "Account Manager", type: "user", email: "sarah.johnson@company.com"},
                        {name: "Mike Chen", title: "Solutions Engineer", type: "user", email: "mike.chen@company.com"}
                    ]
                }
            },
            {
                type: "call",
                title: "Initial Discovery Call",
                date: "2024-01-03",
                time: "10:00",
                description: "Understanding their sales process and buyer journey challenges",
                participants: {
                    attendees: [
                        {name: "Alex Thompson", title: "CEO", type: "contact", email: "alex@flowla.com"},
                        {name: "Emma Davis", title: "Head of Sales", type: "contact", email: "emma@flowla.com"},
                        {name: "Sarah Johnson", title: "Account Manager", type: "user", email: "sarah.johnson@company.com"}
                    ]
                }
            }
        ],
        journey: {
            startDate: "2024-01-03",
            healthScore: 72,
            currentStage: "adoption",
            stages: {
                onboarding: { completed: 2, total: 2 },
                adoption: { completed: 1, total: 2 },
                growth: { completed: 0, total: 2 },
                expansion: { completed: 0, total: 1 }
            },
            milestones: [
                {
                    id: 1,
                    title: "Account Setup Complete",
                    description: "Initial configuration and user onboarding",
                    stage: "onboarding",
                    status: "completed",
                    completedDate: "2024-01-05",
                    completedBy: "auto",
                    isAutomatic: true
                },
                {
                    id: 2,
                    title: "First Value Realization",
                    description: "Customer created their first buyer journey",
                    stage: "onboarding",
                    status: "completed",
                    completedDate: "2024-01-12",
                    completedBy: "Sarah Johnson (CSM)",
                    isAutomatic: false
                },
                {
                    id: 3,
                    title: "Team Expansion",
                    description: "Added 5+ users to the platform",
                    stage: "adoption",
                    status: "completed",
                    completedDate: "2024-01-20",
                    completedBy: "auto",
                    isAutomatic: true
                },
                {
                    id: 4,
                    title: "Integration Setup",
                    description: "Connect with Salesforce CRM",
                    stage: "adoption",
                    status: "in_progress",
                    targetDate: "2024-02-15",
                    isAutomatic: false
                },
                {
                    id: 5,
                    title: "Advanced Features Adoption",
                    description: "Using 3+ advanced platform features",
                    stage: "growth",
                    status: "pending",
                    targetDate: "2024-03-01",
                    isAutomatic: true
                },
                {
                    id: 6,
                    title: "Executive Sponsor Identified",
                    description: "C-level champion engaged and active",
                    stage: "expansion",
                    status: "pending",
                    targetDate: "2024-04-01",
                    isAutomatic: false
                }
            ],
            businessGoals: [
                {
                    id: 1,
                    title: "Reduce Sales Cycle by 20%",
                    currentValue: 15,
                    targetValue: 20,
                    unit: "%",
                    status: "in_progress",
                    targetDate: "2024-03-31"
                },
                {
                    id: 2,
                    title: "Increase Deal Velocity",
                    currentValue: 12,
                    targetValue: 25,
                    unit: "%",
                    status: "at_risk",
                    targetDate: "2024-02-28"
                },
                {
                    id: 3,
                    title: "Onboard 50 Sales Reps",
                    currentValue: 18,
                    targetValue: 50,
                    unit: "users",
                    status: "in_progress",
                    targetDate: "2024-05-01"
                }
            ]
        }
    },
    yahoo: {
        name: "Yahoo",
        logo: "Y",
        industry: "Internet & Media",
        website: "yahoo.com",
        employees: "5000+",
        plan: "Enterprise",
        billing: "Annual",
        revenue: "$1,424,939",
        renewalDate: "2025-09-30",
        location: "Sunnyvale, CA",
        description: "Yahoo is a global media and technology company that has been a pioneer in the internet industry since 1994. Headquartered in Sunnyvale, California, Yahoo operates one of the largest digital media networks worldwide, reaching over 900 million users monthly. The company provides a comprehensive suite of web services including search, email, news, sports, finance, and entertainment content. With a focus on mobile-first experiences and personalized content delivery, Yahoo continues to innovate in digital advertising, data analytics, and enterprise solutions while maintaining its position as a trusted source of information and services for millions of users globally.",
        objectives: [
            "Improve ad targeting capabilities through advanced machine learning and data analytics",
            "Enhance user engagement metrics across all digital properties and mobile applications",
            "Expand enterprise solutions and B2B service offerings",
            "Modernize infrastructure to support real-time data processing and analytics",
            "Strengthen mobile-first user experience and cross-platform integration",
            "Develop next-generation advertising technologies and programmatic solutions"
        ],
        summary: "Global media and technology company providing web services including search, email, news, and entertainment content.",
        recentTopics: [
            "Enterprise email solutions",
            "API rate limits",
            "Data analytics requirements"
        ],
        highlights: [
            {
                type: "feature-request",
                title: "Feature Request",
                content: "Need advanced analytics API for real-time user behavior tracking",
                date: "2024-01-16",
                source: "Email"
            },
            {
                type: "competitor",
                title: "Competitor Mention",
                content: "Comparing our solution with Google Workspace features",
                date: "2024-01-09",
                source: "Call Notes"
            }
        ],
        timeline: [
            {
                type: "email",
                title: "Enterprise plan discussion",
                date: "2024-01-16",
                time: "09:00",
                description: "Explored enterprise features and pricing options"
            },
            {
                type: "call",
                title: "Technical Architecture Review",
                date: "2024-01-09",
                time: "13:00",
                description: "Deep dive into API capabilities and integration options"
            }
        ]
    },
    microsoft: {
        name: "Microsoft",
        logo: "M",
        industry: "Technology",
        website: "microsoft.com",
        employees: "100,000+",
        revenue: "$12,814,907",
        renewalDate: "2025-11-15",
        location: "Redmond, WA",
        description: "Microsoft Corporation is one of the world's largest and most influential technology companies, founded in 1975 by Bill Gates and Paul Allen. Headquartered in Redmond, Washington, Microsoft employs over 200,000 people globally and serves billions of customers and businesses worldwide. The company is a leader in personal computing software, cloud computing, enterprise solutions, gaming, and productivity applications. With products and services spanning Windows operating systems, Microsoft 365, Azure cloud platform, Teams collaboration tools, and Xbox gaming, Microsoft continues to drive digital transformation across industries while maintaining its commitment to empowering every person and organization on the planet to achieve more. Microsoft's Azure cloud platform serves as the backbone for countless enterprise applications, providing scalable infrastructure, AI and machine learning services, data analytics, and IoT solutions that power digital transformation initiatives worldwide. The company's commitment to sustainability includes becoming carbon negative by 2030 and removing all historical carbon emissions by 2050. Microsoft's diverse portfolio includes Surface devices, LinkedIn professional networking, GitHub developer platform, and cutting-edge research in quantum computing, mixed reality through HoloLens, and artificial intelligence with OpenAI partnership. Their enterprise solutions serve Fortune 500 companies across every industry, from healthcare and finance to manufacturing and retail, providing mission-critical infrastructure that enables global business operations at unprecedented scale.",
        objectives: [
            "Streamline enterprise deployment processes to reduce implementation complexity and time-to-value",
            "Enhance security compliance features to meet evolving regulatory requirements and enterprise standards",
            "Improve integration with Azure services for seamless cloud-first enterprise solutions",
            "Expand AI and machine learning capabilities across all product lines and services",
            "Strengthen hybrid work solutions and collaboration tools for distributed teams",
            "Accelerate sustainability initiatives and carbon-neutral cloud infrastructure"
        ],
        summary: "Global technology leader providing software, cloud services, devices, and solutions for businesses and consumers worldwide.",
        recentTopics: [
            "Azure AD integration",
            "Compliance certifications",
            "Enterprise licensing models"
        ],
        highlights: [
            {
                type: "feature-request",
                title: "Feature Request",
                content: "Requesting native Azure Active Directory SSO integration",
                date: "2024-01-17",
                source: "Meeting Notes"
            },
            {
                type: "pain-point",
                title: "Pain Point",
                content: "Current deployment process requires too many manual steps for enterprise scale",
                date: "2024-01-15",
                source: "Email"
            }
        ],
        timeline: [
            {
                type: "meeting",
                title: "Enterprise Architecture Discussion",
                date: "2024-01-17",
                time: "10:00",
                description: "Reviewed integration requirements with Microsoft's enterprise team"
            },
            {
                type: "email",
                title: "Security compliance checklist",
                date: "2024-01-15",
                time: "14:30",
                description: "Received detailed security requirements for vendor approval"
            }
        ],
        journey: {
            startDate: "2023-03-01",
            healthScore: 95,
            currentStage: "expansion",
            stages: {
                onboarding: { completed: 2, total: 2 },
                adoption: { completed: 3, total: 3 },
                growth: { completed: 2, total: 2 },
                expansion: { completed: 1, total: 2 }
            },
            milestones: [
                {
                    id: 1,
                    title: "Enterprise Account Setup",
                    description: "Complete enterprise-grade security configuration",
                    stage: "onboarding",
                    status: "completed",
                    completedDate: "2023-03-15",
                    completedBy: "auto",
                    isAutomatic: true
                },
                {
                    id: 2,
                    title: "Azure AD Integration",
                    description: "Successfully integrated with Azure Active Directory",
                    stage: "onboarding",
                    status: "completed",
                    completedDate: "2023-04-01",
                    completedBy: "Technical Team",
                    isAutomatic: false
                },
                {
                    id: 3,
                    title: "Department Rollout Phase 1",
                    description: "Deployed to IT and Security departments",
                    stage: "adoption",
                    status: "completed",
                    completedDate: "2023-05-15",
                    completedBy: "auto",
                    isAutomatic: true
                },
                {
                    id: 4,
                    title: "User Training Completed",
                    description: "Comprehensive training for 500+ enterprise users",
                    stage: "adoption",
                    status: "completed",
                    completedDate: "2023-06-30",
                    completedBy: "Training Team",
                    isAutomatic: false
                },
                {
                    id: 5,
                    title: "Custom Workflow Implementation",
                    description: "Deployed enterprise-specific automation workflows",
                    stage: "adoption",
                    status: "completed",
                    completedDate: "2023-08-15",
                    completedBy: "auto",
                    isAutomatic: true
                },
                {
                    id: 6,
                    title: "Global Rollout",
                    description: "Deployed across all global Microsoft offices",
                    stage: "growth",
                    status: "completed",
                    completedDate: "2023-11-20",
                    completedBy: "auto",
                    isAutomatic: true
                },
                {
                    id: 7,
                    title: "Advanced Analytics Enabled",
                    description: "Implemented enterprise reporting and analytics",
                    stage: "growth",
                    status: "completed",
                    completedDate: "2024-01-10",
                    completedBy: "auto",
                    isAutomatic: true
                },
                {
                    id: 8,
                    title: "Executive Sponsor Program",
                    description: "C-suite sponsor actively engaged in success program",
                    stage: "expansion",
                    status: "completed",
                    completedDate: "2024-01-25",
                    completedBy: "Account Manager",
                    isAutomatic: false
                },
                {
                    id: 9,
                    title: "Additional Product Integration",
                    description: "Integrate additional enterprise products",
                    stage: "expansion",
                    status: "in_progress",
                    targetDate: "2024-03-15",
                    isAutomatic: false
                }
            ],
            businessGoals: [
                {
                    id: 1,
                    title: "Reduce Infrastructure Costs by 30%",
                    currentValue: 32,
                    targetValue: 30,
                    unit: "%",
                    status: "achieved",
                    achievedDate: "2023-12-01",
                    achievedBy: "auto"
                },
                {
                    id: 2,
                    title: "Achieve 99.99% Uptime SLA",
                    currentValue: 99.98,
                    targetValue: 99.99,
                    unit: "%",
                    status: "in_progress",
                    targetDate: "2024-06-30"
                },
                {
                    id: 3,
                    title: "Deploy to 50,000 Users",
                    currentValue: 48500,
                    targetValue: 50000,
                    unit: "users",
                    status: "in_progress",
                    targetDate: "2024-04-01"
                },
                {
                    id: 4,
                    title: "Implement Zero Trust Architecture",
                    currentValue: 85,
                    targetValue: 100,
                    unit: "%",
                    status: "in_progress",
                    targetDate: "2024-07-01"
                }
            ]
        }
    },
    acme: {
        name: "ACME Corporation",
        logo: "A",
        industry: "Manufacturing",
        website: "acme.com",
        employees: "1000-5000",
        plan: "Enterprise",
        billing: "Annual",
        revenue: "$2,500,000",
        renewalDate: "2025-06-30",
        location: "Detroit, MI",
        description: "ACME Corporation is a leading manufacturing company specializing in industrial equipment and automation solutions. Founded in 1985, ACME has grown to become a trusted partner for businesses across North America. With state-of-the-art facilities and a commitment to innovation, ACME delivers high-quality products that help companies optimize their production processes and increase efficiency.",
        objectives: [
            "Modernize production tracking systems for real-time visibility",
            "Implement predictive maintenance across all facilities",
            "Enhance supply chain integration with key partners",
            "Expand automation capabilities to reduce operational costs",
            "Improve customer portal for better self-service options"
        ],
        summary: "Leading manufacturing company focused on industrial equipment and automation. Recent email discussions indicate interest in modernizing their production tracking systems and improving supply chain integration. Key contacts are focused on operational efficiency and cost reduction initiatives.",
        highlights: [
            {
                type: "feature-request",
                title: "Feature Request",
                content: "Need real-time production tracking dashboard with mobile access",
                date: "2024-01-18",
                source: "Email"
            },
            {
                type: "pain-point",
                title: "Pain Point",
                content: "Current system lacks integration with supplier inventory systems",
                date: "2024-01-17",
                source: "Email"
            }
        ],
        timeline: [
            {
                type: "email",
                title: "Production tracking requirements",
                date: "2024-01-18",
                time: "09:30",
                description: "Discussed need for real-time visibility into production metrics",
                participants: {
                    from: {name: "Robert Johnson", title: "VP Operations", type: "contact", email: "rjohnson@acme.com"},
                    to: [
                        {name: "John Smith", title: "CSM", type: "user", email: "john@saasco.com"}
                    ]
                }
            },
            {
                type: "email",
                title: "Supplier integration inquiry",
                date: "2024-01-17",
                time: "14:15",
                description: "Asked about API capabilities for supplier system integration",
                participants: {
                    from: {name: "Lisa Chen", title: "IT Director", type: "contact", email: "lchen@acme.com"},
                    to: [
                        {name: "John Smith", title: "CSM", type: "user", email: "john@saasco.com"}
                    ]
                }
            }
        ]
    },
    default: {
        name: "Account",
        logo: "A",
        industry: "Technology",
        website: "example.com",
        employees: "50-200",
        plan: "Pro",
        billing: "Annual",
        revenue: "$1,000,000",
        renewalDate: "2025-12-01",
        location: "San Francisco, CA",
        description: "A technology company focused on delivering innovative solutions to help businesses modernize their operations and improve efficiency. Founded with a mission to bridge the gap between traditional business processes and cutting-edge technology, the company serves mid-market organizations looking to digital transformation initiatives.",
        objectives: [
            "Improve operational efficiency through process automation",
            "Expand market reach and customer acquisition",
            "Enhance product features based on customer feedback",
            "Scale technical infrastructure to support growth",
            "Develop strategic partnerships with industry leaders"
        ],
        summary: "Technology company focused on innovative solutions. Recent discussions have covered product updates, support issues, and contract negotiations. The company is looking to improve operational efficiency, expand market reach, and enhance product features to better serve their customers.",
        highlights: [],
        timeline: []
    }
};

// Contacts data from contact-details.ejs
const contactsData = {
    "mehmet-ozkan": {
        name: "Dr. Mehmet Özkan",
        title: "IT Director",
        company: "Bilkent Universitesi",
        companyId: "bilkent",
        email: "mozkan@bilkent.edu.tr",
        phone: "+90 312 290 1234",
        mobile: "+90 532 555 1234",
        linkedin: "mehmetozkan",
        location: "Ankara, Turkey",
        timezone: "GMT+3",
        avatar: "MÖ",
        bio: "IT Director at Bilkent University with over 15 years of experience in educational technology. Leading digital transformation initiatives and overseeing all IT operations for the university.",
        tags: ["Decision Maker", "Technical", "Education Sector"],
        preferredChannel: "Email",
        lastInteraction: "2 days ago",
        status: "Active",
        notes: [
            {
                date: "2024-01-15",
                author: "Sarah Johnson",
                content: "Very interested in the LMS integration. Wants to schedule a technical deep dive next week."
            },
            {
                date: "2024-01-10",
                author: "Mike Chen",
                content: "Mentioned they're evaluating Canvas and Blackboard as alternatives. Need to emphasize our advantages."
            }
        ],
        interactions: [
            {
                type: "email",
                title: "Follow-up on integration timeline",
                date: "2024-01-15",
                description: "Discussed API requirements and timeline for Q1 implementation"
            },
            {
                type: "meeting",
                title: "Technical Requirements Review",
                date: "2024-01-12",
                description: "2-hour deep dive into system architecture and integration points"
            },
            {
                type: "call",
                title: "Initial discovery call",
                date: "2024-01-05",
                description: "Understanding their current challenges and requirements"
            }
        ]
    },
    "sarah-johnson": {
        name: "Sarah Johnson",
        title: "Account Manager",
        company: "Internal",
        email: "sarah.johnson@company.com",
        phone: "+1 555 0123",
        mobile: "+1 555 9876",
        linkedin: "sarahjohnson",
        location: "San Francisco, CA",
        timezone: "PST",
        avatar: "SJ",
        bio: "Senior Account Manager managing strategic enterprise accounts in the education and technology sectors. Focused on building long-term partnerships and driving customer success.",
        tags: ["Internal", "Account Management", "Enterprise"],
        preferredChannel: "Slack",
        lastInteraction: "Today",
        status: "Active",
        notes: [],
        interactions: []
    },
    "alex-thompson": {
        name: "Alex Thompson",
        title: "CEO",
        company: "Flowla",
        companyId: "flowla",
        email: "alex@flowla.com",
        phone: "+1 415 555 0100",
        mobile: "+1 415 555 9100",
        linkedin: "alexthompson",
        location: "San Francisco, CA",
        timezone: "PST",
        avatar: "AT",
        bio: "Founder and CEO of Flowla. Serial entrepreneur with background in sales and marketing technology. Passionate about improving the B2B buying experience.",
        tags: ["Decision Maker", "Executive", "SaaS"],
        preferredChannel: "Phone",
        lastInteraction: "3 days ago",
        status: "Active",
        notes: [
            {
                date: "2024-01-14",
                author: "Sarah Johnson",
                content: "Very hands-on CEO. Likes to be involved in product decisions. Best to reach by phone for urgent matters."
            }
        ],
        interactions: [
            {
                type: "email",
                title: "Feature request follow-up",
                date: "2024-01-14",
                description: "Discussed Salesforce integration requirements"
            },
            {
                type: "meeting",
                title: "Product Demo",
                date: "2024-01-10",
                description: "Demonstrated new features and discussed customization needs"
            }
        ]
    },
    "robert-johnson": {
        name: "Robert Johnson",
        title: "VP Operations",
        company: "ACME Corporation",
        companyId: "acme",
        email: "rjohnson@acme.com",
        phone: "+1 313 555 0400",
        mobile: "+1 313 555 9400",
        linkedin: "robertjohnsonacme",
        location: "Detroit, MI",
        timezone: "EST",
        avatar: "RJ",
        bio: "Vice President of Operations at ACME Corporation with 20+ years of experience in manufacturing and supply chain management. Leading digital transformation initiatives across all production facilities.",
        tags: ["Decision Maker", "Executive", "Manufacturing"],
        preferredChannel: "Email",
        lastInteraction: "Today",
        status: "Active",
        notes: [
            {
                date: "2024-01-18",
                author: "John Smith",
                content: "Very interested in real-time production tracking. Wants mobile access for floor managers."
            }
        ],
        interactions: [
            {
                type: "email",
                title: "Production tracking requirements",
                date: "2024-01-18",
                description: "Discussed need for real-time visibility into production metrics"
            }
        ]
    },
    "lisa-chen": {
        name: "Lisa Chen",
        title: "IT Director",
        company: "ACME Corporation",
        companyId: "acme",
        email: "lchen@acme.com",
        phone: "+1 313 555 0401",
        mobile: "+1 313 555 9401",
        linkedin: "lisachenacme",
        location: "Detroit, MI",
        timezone: "EST",
        avatar: "LC",
        bio: "IT Director at ACME Corporation responsible for enterprise systems and digital initiatives. Focus on modernizing legacy systems and improving integration across the technology stack.",
        tags: ["Technical", "Admin", "Champion"],
        preferredChannel: "Email",
        lastInteraction: "1 day ago",
        status: "Active",
        notes: [
            {
                date: "2024-01-17",
                author: "John Smith",
                content: "Main technical contact. Very knowledgeable about their current systems and integration needs."
            }
        ],
        interactions: [
            {
                type: "email",
                title: "Supplier integration inquiry",
                date: "2024-01-17",
                description: "Asked about API capabilities for supplier system integration"
            }
        ]
    }
};

// Schedule data for home page
const scheduleData = {
    today: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    currentTime: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    meetingCount: 4,
    
    schedule: [
        {
            time: "9:00 AM",
            type: "available",
            duration: 60,
            title: "Available Time (1 hour)",
            description: "Suggested focus time before your first meeting",
            suggestions: [
                {
                    id: 1,
                    title: "Respond to Yahoo payment issue",
                    priority: "high",
                    estimatedTime: 15,
                    revenue: "$50K at risk",
                    severity: "P0 Severity",
                    icon: "🔥",
                    account: "Yahoo",
                    accountId: "yahoo"
                },
                {
                    id: 2,
                    title: "Follow up on Merge contract renewal",
                    priority: "medium",
                    estimatedTime: 20,
                    revenue: "$120K renewal",
                    escalation: "CEO escalation",
                    icon: "💼",
                    account: "Merge",
                    accountId: "merge"
                },
                {
                    id: 3,
                    title: "Review QBR prep for Microsoft",
                    priority: "medium",
                    estimatedTime: 25,
                    meeting: "Meeting at 10 AM",
                    icon: "📊",
                    account: "Microsoft",
                    accountId: "microsoft"
                }
            ]
        },
        {
            time: "10:00 AM",
            type: "meeting",
            duration: 60,
            title: "Quarterly Business Review - Microsoft",
            description: "Strategic review and planning session",
            attendees: 5,
            meetingType: "QBR",
            features: ["Q2 metrics review", "Roadmap discussion"],
            account: "Microsoft",
            accountId: "microsoft",
            status: "confirmed"
        },
        {
            time: "11:00 AM",
            type: "available",
            duration: 45,
            title: "Available Time (45 minutes)",
            description: "Perfect time for focused work before lunch",
            suggestions: [
                {
                    id: 4,
                    title: "Follow up on Flowla API integration",
                    priority: "high",
                    estimatedTime: 30,
                    risk: "Churn risk",
                    blocker: "Technical blocker",
                    icon: "⚠️",
                    account: "Flowla",
                    accountId: "flowla"
                },
                {
                    id: 5,
                    title: "Update account notes from morning calls",
                    priority: "low",
                    estimatedTime: 15,
                    count: 3,
                    icon: "📝"
                }
            ]
        },
        {
            time: "12:00 PM",
            type: "break",
            duration: 60,
            title: "Lunch Break",
            description: "1 hour"
        },
        {
            time: "1:00 PM",
            type: "meeting",
            duration: 45,
            title: "Onboarding Call - Wingify",
            description: "Initial setup and platform training",
            attendees: 3,
            meetingType: "Onboarding",
            features: ["Training session", "Setup checklist"],
            account: "Wingify",
            accountId: "wingify",
            status: "confirmed"
        },
        {
            time: "2:00 PM",
            type: "available",
            duration: 30,
            title: "Available Time (30 minutes)",
            description: "Quick wins before afternoon meetings",
            suggestions: [
                {
                    id: 6,
                    title: "Compile Bilkent product feedback",
                    priority: "medium",
                    estimatedTime: 25,
                    features: "Feature requests",
                    due: "Due today",
                    icon: "📋",
                    account: "Bilkent Universitesi",
                    accountId: "bilkent"
                }
            ]
        },
        {
            time: "2:30 PM",
            type: "meeting",
            duration: 30,
            title: "Escalation Review - Yahoo",
            description: "Address critical payment processing issue",
            attendees: 4,
            meetingType: "Escalation",
            priority: "critical",
            revenue: "$50K at risk",
            account: "Yahoo",
            accountId: "yahoo",
            status: "confirmed"
        },
        {
            time: "3:30 PM",
            type: "meeting",
            duration: 30,
            title: "CSM Team Standup",
            description: "Weekly team sync and updates",
            attendees: "Team meeting",
            meetingType: "Internal",
            features: ["Status updates"],
            status: "confirmed"
        },
        {
            time: "4:00 PM",
            type: "available",
            duration: 90,
            title: "Wrap-up Time (1.5 hours)",
            description: "End of day tasks and preparation",
            suggestions: [
                {
                    id: 7,
                    title: "Prepare tomorrow's QBR deck for Merge",
                    priority: "high",
                    estimatedTime: 45,
                    meeting: "QBR tomorrow 9 AM",
                    icon: "🎯",
                    account: "Merge",
                    accountId: "merge"
                },
                {
                    id: 8,
                    title: "Send follow-up emails from today's meetings",
                    priority: "medium",
                    estimatedTime: 30,
                    count: 4,
                    icon: "✉️"
                },
                {
                    id: 9,
                    title: "Update CRM with today's meeting notes",
                    priority: "low",
                    estimatedTime: 15,
                    icon: "💾"
                }
            ]
        }
    ]
};

// Chat data for AI assistant
const chatData = {
    messages: [
        {
            id: 1,
            type: "ai",
            content: "Good morning! I see you have a busy day with 4 meetings scheduled. Would you like me to help you prepare for your QBR with Microsoft at 10 AM?",
            timestamp: "9:05 AM",
            avatar: "🤖"
        },
        {
            id: 2,
            type: "user",
            content: "Yes, what should I prepare for the Microsoft meeting?",
            timestamp: "9:06 AM"
        },
        {
            id: 3,
            type: "ai",
            content: "Based on Microsoft's account data, I'd suggest reviewing:\n\n• Their Q2 metrics and growth trajectory\n• Recent expansion milestones completed\n• Enterprise features they've been requesting\n• Renewal discussion for November 2025\n\nWould you like me to pull up their account details?",
            timestamp: "9:06 AM",
            avatar: "🤖",
            accountLinks: ["microsoft"]
        },
        {
            id: 4,
            type: "user",
            content: "Great! Also remind me about the Yahoo escalation later",
            timestamp: "9:07 AM"
        },
        {
            id: 5,
            type: "ai",
            content: "I'll remind you about the Yahoo escalation meeting at 2:30 PM. It's marked as critical with $50K at risk - I'll make sure you have all the payment processing issue details ready before then.",
            timestamp: "9:07 AM",
            avatar: "🤖",
            isTyping: false
        }
    ],
    quickActions: [
        { id: "prepare", text: "📄 Prepare", action: "prepare-meeting" },
        { id: "insights", text: "📊 Insights", action: "show-insights" },
        { id: "schedule", text: "📅 Schedule", action: "optimize-schedule" }
    ]
};

// Account-specific chat data for SQL-focused conversations
const accountChatData = {
    flowla: {
        messages: [
            {
                id: 1,
                type: "ai",
                content: "Hi! I'm here to help you with Flowla. I can help you generate SQL queries, analyze account data, and answer questions about this customer.",
                timestamp: "Just now",
                avatar: "🤖"
            }
        ],
        quickActions: [
            { id: "generate-sql", text: "🔍 Generate SQL", action: "generate-sql" },
            { id: "analyze-account", text: "📊 Analyze Account", action: "analyze-account" },
            { id: "show-contacts", text: "👥 Show Contacts", action: "show-contacts" }
        ],
        suggestedQueries: [
            "Show me all active customers that have more than $10K ARR and have a renewal in 90 days",
            "Find accounts similar to Flowla with low health scores",
            "Show me all contacts for this account with their last interaction date",
            "Find all accounts in the B2B/SaaS category with similar ARR"
        ]
    },
    microsoft: {
        messages: [
            {
                id: 1,
                type: "ai",
                content: "Hi! I'm here to help you with Microsoft. I can help you generate SQL queries, analyze account data, and answer questions about this customer.",
                timestamp: "Just now",
                avatar: "🤖"
            }
        ],
        quickActions: [
            { id: "generate-sql", text: "🔍 Generate SQL", action: "generate-sql" },
            { id: "analyze-account", text: "📊 Analyze Account", action: "analyze-account" },
            { id: "show-contacts", text: "👥 Show Contacts", action: "show-contacts" }
        ],
        suggestedQueries: [
            "Show me all enterprise accounts with ARR > $1M",
            "Find accounts in expansion stage like Microsoft",
            "Show renewal timeline for all high-value accounts",
            "Find accounts with similar enterprise features and integrations"
        ]
    },
    "bilkent-universitesi": {
        messages: [
            {
                id: 1,
                type: "ai",
                content: "Hi! I'm here to help you with Bilkent Universitesi. I can help you generate SQL queries, analyze account data, and answer questions about this customer.",
                timestamp: "Just now",
                avatar: "🤖"
            }
        ],
        quickActions: [
            { id: "generate-sql", text: "🔍 Generate SQL", action: "generate-sql" },
            { id: "analyze-account", text: "📊 Analyze Account", action: "analyze-account" },
            { id: "show-contacts", text: "👥 Show Contacts", action: "show-contacts" }
        ],
        suggestedQueries: [
            "Show me all education sector accounts",
            "Find accounts with declining health scores like Bilkent",
            "Show accounts that haven't had interactions in over 6 months",
            "Find all university and education customers with similar patterns"
        ]
    }
};

// SQL query templates for different use cases
const sqlTemplates = {
    highValueRenewals: `SELECT 
    company_name,
    arr,
    renewal_date,
    health_score,
    DATEDIFF(renewal_date, CURRENT_DATE) as days_to_renewal
FROM accounts 
WHERE arr > 10000 
    AND renewal_date BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '90 days'
    AND health_score < 75
ORDER BY renewal_date ASC;`,
    
    similarAccounts: `SELECT 
    a1.company_name as similar_account,
    a1.arr,
    a1.health_score,
    a1.industry,
    a1.employees
FROM accounts a1
CROSS JOIN accounts a2
WHERE a2.company_name = 'TARGET_ACCOUNT'
    AND a1.company_name != a2.company_name
    AND ABS(a1.arr - a2.arr) / a2.arr < 0.5
    AND a1.industry = a2.industry
ORDER BY ABS(a1.health_score - a2.health_score) ASC
LIMIT 10;`,
    
    contactInteractions: `SELECT 
    c.name,
    c.email,
    c.title,
    COUNT(i.id) as interaction_count,
    MAX(i.interaction_date) as last_interaction,
    AVG(i.sentiment_score) as avg_sentiment
FROM contacts c
JOIN accounts a ON c.account_id = a.id
LEFT JOIN interactions i ON c.id = i.contact_id
WHERE a.company_name = 'TARGET_ACCOUNT'
GROUP BY c.id, c.name, c.email, c.title
ORDER BY last_interaction DESC;`,
    
    atRiskAccounts: `SELECT 
    company_name,
    arr,
    health_score,
    mau_current,
    renewal_date,
    CASE 
        WHEN health_score < 30 THEN 'High Risk'
        WHEN health_score < 50 THEN 'Medium Risk'
        ELSE 'Low Risk'
    END as risk_level
FROM accounts
WHERE health_score < 60
    AND arr > 5000
    AND renewal_date <= CURRENT_DATE + INTERVAL '180 days'
ORDER BY health_score ASC, renewal_date ASC;`
};

// Home v2 page data with new layout
const home2Data = {
    currentDate: "Today - June 26, 2025",
    aiSuggestion: {
        text: "Focus on the client presentation next - it's due soon and will have high impact. I've blocked 2 hours in your calendar.",
        type: "priority"
    },
    priorityQueue: [
        {
            id: 1,
            title: "Client Presentation",
            due: "Today 4PM",
            priority: "High",
            priorityColor: "#ef4444"
        },
        {
            id: 2,
            title: "Code Review",
            due: "Tomorrow",
            priority: "Medium",
            priorityColor: "#f59e0b"
        },
        {
            id: 3,
            title: "Team Sync Notes",
            due: "Friday",
            priority: "Low",
            priorityColor: "#10b981"
        }
    ],
    todaysFocus: {
        productivityScore: 85,
        tasksCompleted: 3,
        deepWorkHours: 2,
        progressColor: "#10b981"
    },
    schedule: [
        {
            time: "8:00 AM",
            title: "Free Time",
            subtitle: "8:00 - 9:00 AM • Available for booking",
            type: "free",
            color: "#e5e7eb"
        },
        {
            time: "9:00 AM",
            title: "Daily Standup",
            subtitle: "9:00 - 9:30 AM • Team Meeting",
            type: "meeting",
            color: "#8b5cf6"
        },
        {
            time: "9:30 AM",
            title: "Free Time",
            subtitle: "9:30 - 10:00 AM • Available for booking",
            type: "free",
            color: "#e5e7eb"
        },
        {
            time: "10:00 AM",
            title: "Focus Block: Client Presentation",
            subtitle: "10:00 AM - 12:00 PM • Suggested by AI",
            type: "focus",
            color: "#ef4444",
            aiSuggested: true,
            progress: 45,
            aiConfidence: 92,
            aiReasoning: "Based on your calendar, this is your most important deadline today. I've blocked 2 hours when you're typically most productive.",
            aiCategory: "priority-optimization"
        },
        {
            time: "12:00 PM",
            title: "Lunch Break",
            subtitle: "12:00 - 1:00 PM • Personal",
            type: "break",
            color: "#8b5cf6"
        },
        {
            time: "1:00 PM",
            title: "Email Processing",
            subtitle: "1:00 - 1:30 PM • Routine Task",
            type: "task",
            color: "#10b981"
        },
        {
            time: "1:30 PM",
            title: "Free Time",
            subtitle: "1:30 - 2:00 PM • Available for booking",
            type: "free",
            color: "#e5e7eb"
        },
        {
            time: "2:00 PM",
            title: "Code Review Session",
            subtitle: "2:00 - 3:00 PM • Moved up by AI",
            type: "meeting",
            color: "#f59e0b",
            aiSuggested: true,
            aiConfidence: 87,
            aiReasoning: "Moved from 4PM to avoid conflict with your presentation. This timing works better with your team's availability.",
            aiCategory: "scheduling-optimization"
        },
        {
            time: "3:00 PM",
            title: "Free Time",
            subtitle: "3:00 - 4:00 PM • Available for booking",
            type: "free",
            color: "#e5e7eb"
        },
        {
            time: "4:00 PM",
            title: "Client Presentation",
            subtitle: "4:00 - 5:00 PM • High Priority",
            type: "meeting",
            color: "#8b5cf6"
        },
        {
            time: "5:00 PM",
            title: "Free Time",
            subtitle: "5:00 - 6:00 PM • Available for booking",
            type: "free",
            color: "#e5e7eb"
        }
    ]
};

// Predefined task tags
const predefinedTags = [
    'Customer Outreach',
    'Contract Review', 
    'Technical Support',
    'Onboarding',
    'Renewal',
    'Upsell Opportunity',
    'Risk Mitigation',
    'Executive Business Review',
    'Product Training',
    'Integration Support'
];

// Mock users for task assignment
const systemUsers = [
    { id: 'sarah-johnson', name: 'Sarah Johnson', avatar: 'SJ', email: 'sarah.johnson@company.com' },
    { id: 'mike-chen', name: 'Mike Chen', avatar: 'MC', email: 'mike.chen@company.com' },
    { id: 'emily-davis', name: 'Emily Davis', avatar: 'ED', email: 'emily.davis@company.com' },
    { id: 'alex-rivera', name: 'Alex Rivera', avatar: 'AR', email: 'alex.rivera@company.com' }
];

// Task templates for AI suggestions
const taskTemplates = {
    email: {
        prefixes: ['Email', 'Send email to', 'Follow up with', 'Reach out to'],
        actions: [
            {
                type: 'draft_email',
                title: 'Draft Email',
                template: 'Subject: [Subject]\n\nDear [Contact Name],\n\nI hope this email finds you well. I wanted to follow up on our recent discussion about [topic].\n\n[Your message here]\n\nBest regards,\n[Your name]'
            },
            {
                type: 'schedule_followup',
                title: 'Schedule Follow-up',
                template: 'Schedule a follow-up email for [X days] from now'
            }
        ]
    },
    call: {
        prefixes: ['Schedule call with', 'Call', 'Set up meeting with', 'Book time with'],
        actions: [
            {
                type: 'meeting_agenda',
                title: 'Prepare Agenda',
                template: 'Meeting Agenda:\n1. Current status update\n2. Address any concerns or questions\n3. Discuss next steps\n4. Timeline and deliverables\n5. Action items'
            },
            {
                type: 'calendar_invite',
                title: 'Send Calendar Invite',
                template: 'Send calendar invitation with meeting details'
            }
        ]
    },
    review: {
        prefixes: ['Review', 'Check', 'Analyze', 'Evaluate'],
        actions: [
            {
                type: 'summary',
                title: 'Create Summary',
                template: 'Key Points:\n• [Point 1]\n• [Point 2]\n• [Point 3]\n\nRecommendations:\n• [Recommendation 1]\n• [Recommendation 2]'
            },
            {
                type: 'checklist',
                title: 'Review Checklist',
                template: '☐ Review terms and conditions\n☐ Check pricing and discounts\n☐ Verify deliverables\n☐ Confirm timeline\n☐ Identify risks'
            }
        ]
    },
    followup: {
        prefixes: ['Follow up on', 'Check in about', 'Touch base regarding'],
        actions: [
            {
                type: 'quick_message',
                title: 'Draft Message',
                template: 'Hi [Name],\n\nJust wanted to check in on [topic]. Let me know if you need any assistance or have questions.\n\nThanks!'
            },
            {
                type: 'reminder',
                title: 'Set Reminder',
                template: 'Set reminder to follow up in [X days] if no response'
            }
        ]
    }
};

// Tasks data
const tasks = [
    {
        id: 'task-1',
        title: 'Email Dr. Mehmet Özkan about LMS integration timeline',
        description: 'Follow up on the recent discussion about LMS integration timeline and next steps for Q1 implementation.',
        priority: 'high',
        dueDate: '2024-01-20',
        status: 'pending',
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z',
        createdBy: 'sarah-johnson',
        assignees: ['sarah-johnson'],
        companyId: 'bilkent',
        companyName: 'Bilkent Universitesi',
        tags: ['Customer Outreach', 'Integration Support'],
        isAiGenerated: false,
        taskType: 'email',
        aiSuggestedActions: taskTemplates.email.actions,
        activityLog: [
            {
                id: 'log-1',
                type: 'created',
                user: 'Sarah Johnson',
                timestamp: '2024-01-15T10:00:00Z',
                details: 'Task created'
            }
        ],
        comments: []
    },
    {
        id: 'task-2',
        title: 'Schedule call with Yahoo team about renewal',
        description: 'Set up renewal discussion meeting with Yahoo stakeholders to address contract terms and pricing.',
        priority: 'high',
        dueDate: '2024-01-18',
        status: 'pending',
        createdAt: '2024-01-14T14:30:00Z',
        updatedAt: '2024-01-14T14:30:00Z',
        createdBy: 'ai-system',
        assignees: ['mike-chen', 'emily-davis'],
        companyId: 'yahoo',
        companyName: 'Yahoo',
        tags: ['Renewal', 'Executive Business Review'],
        isAiGenerated: true,
        aiConfidence: 92,
        taskType: 'call',
        aiSuggestedActions: taskTemplates.call.actions,
        activityLog: [
            {
                id: 'log-2',
                type: 'created',
                user: 'AI Assistant',
                timestamp: '2024-01-14T14:30:00Z',
                details: 'Task auto-generated based on renewal date approaching'
            }
        ],
        comments: []
    },
    {
        id: 'task-3',
        title: 'Review Merge API contract for Q1',
        description: 'Complete legal and technical review of the Merge API integration contract before Q1 kickoff.',
        priority: 'medium',
        dueDate: '2024-01-22',
        status: 'completed',
        createdAt: '2024-01-10T09:00:00Z',
        updatedAt: '2024-01-16T11:00:00Z',
        createdBy: 'alex-rivera',
        assignees: ['alex-rivera'],
        companyId: 'merge',
        companyName: 'Merge',
        tags: ['Contract Review'],
        isAiGenerated: false,
        taskType: 'review',
        aiSuggestedActions: taskTemplates.review.actions,
        activityLog: [
            {
                id: 'log-3',
                type: 'created',
                user: 'Alex Rivera',
                timestamp: '2024-01-10T09:00:00Z',
                details: 'Task created'
            },
            {
                id: 'log-4',
                type: 'completed',
                user: 'Alex Rivera',
                timestamp: '2024-01-16T11:00:00Z',
                details: 'Task marked as complete'
            }
        ],
        comments: [
            {
                id: 'comment-1',
                user: 'Alex Rivera',
                timestamp: '2024-01-15T16:00:00Z',
                text: 'Contract looks good. Approved for Q1.'
            }
        ]
    },
    {
        id: 'task-4',
        title: 'Follow up on Flowla pricing discussion',
        description: 'Connect with Flowla team about their pricing concerns and explore potential solutions.',
        priority: 'medium',
        dueDate: '2024-01-19',
        status: 'pending',
        createdAt: '2024-01-13T11:00:00Z',
        updatedAt: '2024-01-13T11:00:00Z',
        createdBy: 'ai-system',
        assignees: ['emily-davis'],
        companyId: 'flowla',
        companyName: 'Flowla',
        tags: ['Upsell Opportunity', 'Customer Outreach'],
        isAiGenerated: true,
        aiConfidence: 85,
        taskType: 'followup',
        aiSuggestedActions: taskTemplates.followup.actions,
        activityLog: [
            {
                id: 'log-5',
                type: 'created',
                user: 'AI Assistant',
                timestamp: '2024-01-13T11:00:00Z',
                details: 'Task suggested based on recent pricing inquiry'
            }
        ],
        comments: []
    },
    {
        id: 'task-5',
        title: 'Send onboarding resources to SuccessNavigator team',
        description: 'Compile and send comprehensive onboarding documentation and training materials.',
        priority: 'low',
        dueDate: '2024-01-25',
        status: 'pending',
        createdAt: '2024-01-12T15:00:00Z',
        updatedAt: '2024-01-12T15:00:00Z',
        createdBy: 'sarah-johnson',
        assignees: ['sarah-johnson', 'mike-chen'],
        companyId: 'successnavigator',
        companyName: 'SuccessNavigator',
        tags: ['Onboarding', 'Product Training'],
        isAiGenerated: false,
        taskType: 'email',
        aiSuggestedActions: taskTemplates.email.actions,
        activityLog: [
            {
                id: 'log-6',
                type: 'created',
                user: 'Sarah Johnson',
                timestamp: '2024-01-12T15:00:00Z',
                details: 'Task created'
            },
            {
                id: 'log-7',
                type: 'assigned',
                user: 'Sarah Johnson',
                timestamp: '2024-01-12T15:05:00Z',
                details: 'Assigned Mike Chen to help with technical resources'
            }
        ],
        comments: [
            {
                id: 'comment-2',
                user: 'Mike Chen',
                timestamp: '2024-01-13T10:00:00Z',
                text: 'I\'ll prepare the technical documentation section.'
            }
        ]
    },
    {
        id: 'task-6',
        title: 'Check in about R2S automation implementation',
        description: 'Follow up on automation project status and address any blockers or technical issues.',
        priority: 'high',
        dueDate: '2024-01-17',
        status: 'pending',
        createdAt: '2024-01-15T08:00:00Z',
        updatedAt: '2024-01-15T08:00:00Z',
        createdBy: 'ai-system',
        assignees: ['alex-rivera'],
        companyId: 'r2s',
        companyName: 'R2S',
        tags: ['Risk Mitigation', 'Technical Support'],
        isAiGenerated: true,
        aiConfidence: 88,
        taskType: 'followup',
        aiSuggestedActions: taskTemplates.followup.actions,
        activityLog: [
            {
                id: 'log-8',
                type: 'created',
                user: 'AI Assistant',
                timestamp: '2024-01-15T08:00:00Z',
                details: 'Task generated due to low usage and no recent contact'
            }
        ],
        comments: []
    }
];

// Export all data
module.exports = {
    accounts,
    allContacts,
    accountData,
    contactsData,
    scheduleData,
    chatData,
    accountChatData,
    sqlTemplates,
    home2Data,
    predefinedTags,
    systemUsers,
    taskTemplates,
    tasks
};