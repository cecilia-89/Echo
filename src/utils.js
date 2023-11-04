const features = [

    {
        id: 0,
        title: 'Video conferencing',
        image: 'video_conferencing.svg',
        description: 'Echo allows users to host and join video meetings\
            with high-quality video and audio.'
    },

    {
        id: 1,
        title: 'Polls and Surveys',
        image: 'polls_and_surveys.svg',
        description: ' You can conduct polls and surveys during meetings\
            to gather feedback and opinions.'
    },

    {
        id: 2,
        title: 'Screen sharing',
        image: 'screen-sharing.svg',
        description: 'Participants can share their screens for presentations,\
            collaboration, or troubleshooting..'
    },

    {
        id: 3,
        title: 'Chat',
        image: 'chat.svg',
        description: 'Echo offers a built-in chat feature for text-based\
            communication during meetings.'
    },

    {
        id: 4,
        title: 'White boarding',
        image: 'whiteboarding.svg',
        description: 'Echo includes a virtual whiteboard for real-time\
            collaboration and drawing.'
    },

    {
        id: 5,
        title: 'Webinars',
        image: 'webinars.svg',
        description: 'Echo offers webinar capabilities for hosting and\
            managing webinars and virtual events.'
    },
    
]

const reviews = [
    {
        id: 0,
        name: 'Atabong Cecilia',
        image: 'albany-capture-Yn0u53lDNMU-unsplash.jpg',
        subject: 'A Remarkable Platform for Connection',
        description: "EchoConvo is a remarkable platform for video conferencing. It offers crystal clear video and audio quality, intuitive screen sharing, and a user-friendly interface. It's transformed the way I work and connect with friends and family. Highly recommended!",

    },

    {
        id: 1,
        name: 'John Doe',
        image: 'reza-biazar-eSjmZW97cH8-unsplash.jpg',
        subject: 'Exceptional Video Quality and Features',
        description: "I've been using EchoConvo for a while now, and it never disappoints. The video quality is exceptional, and the screen-sharing feature is top-notch.",

    },

    {
        id: 2,
        name: 'Grace Williams',
        image: 'michael-dam-mEZ3PoFGs_k-unsplash.jpg',
        subject: 'A Valuable Asset for My Business',
        description: "Echo has become a valuable asset for my business. It's secure, user-friendly, and my team loves it. The breakout rooms feature is a game-changer for our brainstorming sessions. I can't imagine working without it.",

    },

    {
        id: 3,
        name: 'Emily Davis',
        image: 'gabriel-silverio-u3WmDyKGsrY-unsplash.jpg',
        subject: 'Outstanding Quality for Virtual Events',
        description: "Echo is a remarkable platform for video conferencing. It offers crystal clear video and audio quality, intuitive screen sharing, and a user-friendly interface. It's transformed the way I work and connect with friends and family. Highly recommended!",

    },

    {
        id: 4,
        name: 'Alex Smith',
        image: 'mika-ruusunen-W0i1N6FdCWA-unsplash.jpg',
        subject: 'Reliable and Feature-Packed',
        description: "EchoConvo is not only reliable but feature-packed. I've used it extensively for both business and personal meetings, and it has consistently delivered. It's an indispensable tool for staying connected.",

    }
]

const pricings = [
    {
        id: 0,
        package: 'Echo Free',
        description: 'Ideal for casual users and small teams, enjoy unlimited 1-on-1 meetings\
                and 40-minute group meetings with essential features.',
        price: 'Free',
        per: '',
        bannerText: 'All free plans include',
        Features: [
            "Unlimited 1-on-1 meetings",
            '40-minute limit on group meetings',
            "Basic video conferencing features",
            "Group meetings limited to 100 participants",
            "Online support"
        ],
        popular: false
    },

    {
        id: 1,
        package: 'Echo Pro',
        description: 'For businesses and professionals, get unlimited group meetings with no time limits,\
         advanced user management, reporting, and integrations.',
        price: '$14.99',
        per: 'per host per month',
        bannerText: 'Everything in Pro',
        Features: [
            "All features of the Free plan",
            'No time limit on group meetings',
            "Unlimited group meetings",
            "User management and admin controls",
            "Reporting and analytics",
            "Integrations with productivity apps"
        ],
        popular: true
    },

    {
        id: 2,
        package: 'Echo Business',
        description: 'Tailored for larger organizations, offering dedicated support, managed domains, single sign-on (SSO), \
            branding, and custom emails for seamless communication and collaboration.',
        price: '$19.99',
        per: 'per host per month (minimum of 10 hosts)',
        bannerText: 'Everything in Business',
        Features: [
            "All features of the Pro plan",
            'Dedicated phone support',
            "Managed domains",
            "Company branding and custom emails",
            "Advanced user management"
        ],
        popular: false
    }
]

export { features, reviews, pricings }