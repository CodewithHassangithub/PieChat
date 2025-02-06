import Image from "next/image";

export const features = [
  {
    title: "Real-time Chat",
    description: "Experience instant messaging with zero lag. Send messages, emojis, and files in real-time.",
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: "Video Calls",
    description: "Crystal-clear HD video calls with up to 50 participants. Perfect for team meetings or catching up with friends.",
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "End-to-End Encryption",
    description: "Your conversations are secure with military-grade encryption. Privacy is our top priority.",
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Features",
    description: "Smart replies, automatic translations, and content moderation powered by advanced AI.",
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "File Sharing",
    description: "Share files of any type instantly. Built-in preview for images, documents, and media.",
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    title: "Cross-Platform",
    description: "Access your conversations from any device. Seamless sync across web, mobile, and desktop.",
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export const stats = [
  { value: "10M+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
  { value: "150+", label: "Countries" },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    quote: "PieChat has transformed how our team communicates. The AI features are game-changing!",
    avatar: "/avatars/sarah.jpg"
  },
  {
    name: "David Chen",
    role: "Software Engineer at InnovateLabs",
    quote: "The end-to-end encryption gives us peace of mind when discussing sensitive projects. Best chat platform for developers!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    company: "InnovateLabs",
  },
  {
    name: "Emma Williams",
    role: "Marketing Director at CreativeHub",
    quote: "The best chat platform I've ever used. Clean interface, amazing features, and the file sharing is seamless!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    company: "CreativeHub",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO at StartupX",
    quote: "PieChat's enterprise features have been a game-changer for our remote team. The security and admin controls are top-notch.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    company: "StartupX",
  },
  {
    name: "Lisa Zhang",
    role: "UX Designer at DesignPro",
    quote: "As a designer, I appreciate the attention to detail in PieChat's interface. The collaboration tools are perfectly integrated.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
    company: "DesignPro",
  },
  {
    name: "James Wilson",
    role: "Team Lead at GlobalTech",
    quote: "Managing international teams has never been easier. The translation features and time zone management are invaluable.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    company: "GlobalTech",
  },
];

export const trustLogos = [
  <Image 
    key="1" 
    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" 
    alt="Microsoft" 
    width={120} 
    height={40} 
    className="dark:filter dark:brightness-0 dark:invert"
  />,
  <Image 
    key="2" 
    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
    alt="Google" 
    width={100} 
    height={32} 
    className="dark:filter dark:brightness-0 dark:invert"
  />,
  <Image 
    key="3" 
    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
    alt="Amazon" 
    width={100} 
    height={32} 
    className="dark:filter dark:brightness-0 dark:invert"
  />,
  <Image 
    key="4" 
    src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" 
    alt="Meta" 
    width={90} 
    height={32} 
    className="dark:filter dark:brightness-0 dark:invert"
  />,
  <Image 
    key="5" 
    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
    alt="Apple" 
    width={30} 
    height={32} 
    className="dark:filter dark:brightness-0 dark:invert"
  />,
  <Image 
    key="6" 
    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
    alt="Netflix" 
    width={100} 
    height={32} 
    className="dark:filter dark:brightness-0 dark:invert"
  />,
];

export const footerLinks = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Security', href: '/security' },
    { label: 'Enterprise', href: '/enterprise' },
    { label: 'Customer Stories', href: '/stories' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Demo', href: '/demo' },
  ],
  Resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Tutorials', href: '/tutorials' },
    { label: 'Blog', href: '/blog' },
    { label: 'Support Center', href: '/support' },
    { label: 'API', href: '/api' },
    { label: 'Status', href: '/status' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
    { label: 'Partners', href: '/partners' },
    { label: 'Legal', href: '/legal' },
  ],
};

export const socialLinks = [
  { platform: 'Twitter', url: 'https://twitter.com/piechat', icon: 'twitter' },
  { platform: 'GitHub', url: 'https://github.com/piechat', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/piechat', icon: 'linkedin' },
  { platform: 'Discord', url: 'https://discord.gg/piechat', icon: 'discord' },
];

export const languages = [
  { code: 'en', label: 'English (US)' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ja', label: 'Japanese' },
  { code: 'ko', label: 'Korean' },
  { code: 'zh', label: 'Chinese' },
];

export const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'GDPR', href: '/gdpr' },
]; 