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
        description: "Bilkent University is Turkey's first private, nonprofit university, established in 1984. Located in Ankara, the university is consistently ranked as one of the top institutions in Turkey and has gained international recognition for its academic excellence and research contributions. With over 13,000 students and 1,000 faculty members, Bilkent offers undergraduate and graduate programs across various disciplines including engineering, business, humanities, and sciences. The university is known for its English-medium instruction, modern campus facilities, and strong emphasis on research and innovation.",
        objectives: [
            "Modernize student information systems to improve administrative efficiency and student experience",
            "Enhance online learning capabilities to support hybrid and remote education models",
            "Implement comprehensive LMS integration for seamless course management",
            "Expand digital infrastructure to support growing student and faculty populations"
        ],
        summary: "Leading private university in Turkey focused on academic excellence and research. Primary contact is through their IT department for educational technology solutions. Recent discussions have focused on LMS integration requirements, student portal customization, and mobile app development for campus services. Their main objectives include modernizing student information systems, improving online learning capabilities, and enhancing campus-wide communication tools.",
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
        ]
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
        description: "Flowla is an innovative B2B SaaS company that specializes in sales enablement and buyer experience platforms. Founded in 2021, the company is headquartered in San Francisco and serves growing businesses looking to modernize their sales processes. Flowla's platform helps sales teams create personalized, interactive buyer journeys that engage prospects and accelerate deal closure. With a team of 25 employees, the company has quickly gained traction in the competitive sales tech market, serving over 150 customers globally.",
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
        ]
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
        description: "Microsoft Corporation is one of the world's largest and most influential technology companies, founded in 1975 by Bill Gates and Paul Allen. Headquartered in Redmond, Washington, Microsoft employs over 200,000 people globally and serves billions of customers and businesses worldwide. The company is a leader in personal computing software, cloud computing, enterprise solutions, gaming, and productivity applications. With products and services spanning Windows operating systems, Microsoft 365, Azure cloud platform, Teams collaboration tools, and Xbox gaming, Microsoft continues to drive digital transformation across industries while maintaining its commitment to empowering every person and organization on the planet to achieve more.",
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
    }
};

// Export all data
module.exports = {
    accounts,
    allContacts,
    accountData,
    contactsData
};