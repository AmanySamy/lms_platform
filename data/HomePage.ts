export const homePageData = {
  hero: {
    tag: "New Courses Available",
    title: "Master English with Confidence from Anywhere",
    description:
      "Join thousands of students improving their skills through live classes, interactive quizzes, and expert-led video courses tailored to your level.",
    primaryButton: "Start Learning Now",
    secondaryButton: "View Pricing",
    trustedBy: "Trusted by 2,000+ students",
  },
  featureSection: {
    title: "Why Choose Our Platform",
    description:
      "We provide the comprehensive tools and expert guidance you need to succeed in your language learning journey.",
    features: [
      {
        icon: "schedule",
        title: "Flexible Learning",
        description:
          "Study at your own pace with 24/7 access to recorded materials and flexible live class scheduling.",
      },
      {
        icon: "badge",
        title: "Expert Instructors",
        description:
          "Learn directly from certified native speakers and industry experts with years of teaching experience.",
      },
      {
        icon: "groups",
        title: "Community Support",
        description:
          "Join a vibrant community of learners to practice your skills, share experiences, and stay motivated.",
      },
    ],
  },
  coursesSection: {
    title: "Popular Courses",
    description: "Explore our highest-rated learning paths.",
    viewButton: {
      text: "View All Courses",
      link: "/courses",
      icon: "arrow_forward",
    },
    courses: [
      {
        title: "Business English 101",
        description:
          "Master the vocabulary and etiquette needed for international business environments.",
        level: "Beginner",
        courseImage: "/courses/course1.png",
        category: "Business",
        instructor: { name: "Jane Smith", avatar: "/courses/instructor1.png" },
        rating: 4.8,
        viewCourse: {
          text: "View Course",
          link: "/courses/business-english-101",
        },
      },
      {
        icon: "work",
        title: "Career Advancement",
        description:
          "Boost your professional profile with skills that employers value.",
        category: "Career",
        courseImage: "/courses/course2.png",
        instructor: { name: "John Doe", avatar: "/courses/instructor2.png" },
        rating: 4.7,
        viewCourse: {
          text: "View Course",
          link: "/courses/career-advancement",
        },
      },
      {
        icon: "travel_explore",
        title: "Travel English",
        description:
          "Communicate effectively during your travels with essential phrases and cultural tips.",
        category: "Travel",
        courseImage: "/courses/course3.png",
        instructor: {
          name: "Emily Johnson",
          avatar: "/courses/instructor3.png",
        },
        rating: 4.9,
        viewCourse: {
          text: "View Course",
          link: "/courses/travel-english",
        },
      },
    ],
  },
  testimonialsSection: {
    title: "What Our Students Say",
    description: "Join a community of learners achieving their dreams.",
    testimonials: [
      {
        name: "Sarah J.",
        role: "TOEFL Student",
        avatar: "/testimonials/instructor1.png",
        rating: 5,
        feedback:
          "This platform helped me ace my TOEFL exam! The structured lessons and practice tests were exactly what I needed to boost my score.",
      },
      {
        name: "Michael B.",
        role: "Business Professional",
        avatar: "/testimonials/instructor2.png",
        rating: 4.5,
        feedback:
          "The business English course significantly improved my communication skills at work. The instructors were knowledgeable and supportive.",
      },
      {
        name: "Linda S.",
        role: "Frequent Traveler",
        avatar: "/testimonials/instructor3.png",
        rating: 4.8,
        feedback:
          "Learning travel English has made my trips so much more enjoyable. I feel confident navigating new places and interacting with locals.",
      },
    ],
  },
  ctaSection: {
    title: "Ready to Start Your Language Learning Journey?",
    description:
      "Join now and get unlimited access to all our courses, live sessions, and community features.",
    primaryButton: {
      text: "Get Started for Free",
      link: "/signup",
    },
    secondaryButton: {
      text: "Contact Sales",
      link: "/contact-sales",
    },
  },
};
export const footer = {
  company: "English LMS",
  description:
    "Empowering learners worldwide to master English with confidence.",
  menus: [
    {
      title: "Platform",
      links: [
        { text: "Browse Courses", href: "#" },
        { text: "Live Sessions", href: "#" },
        { text: "Instructors", href: "#" },
        { text: "Pricing", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: "#" },
        { text: "Careers", href: "#" },
        { text: "Blog", href: "#" },
        { text: "Contact", href: "#" },
      ],
    },
  ],
  newsletter: {
    title: "Subscribe to our Newsletter",
    description:
      "Get the latest courses, tips, and exclusive offers delivered straight to your inbox.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
  },
  socialMedia: [
    { platform: "Facebook", link: "#", icon: "facebook" },
    { platform: "Twitter", link: "#", icon: "twitter" },
    { platform: "LinkedIn", link: "#", icon: "linkedin" },
  ],
  copyright: "© 2024 English LMS. All rights reserved.",
};
