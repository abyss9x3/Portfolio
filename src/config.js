module.exports = {
  email: 'abyss9x3@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/abyss9x3',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/asharmaa011',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'What I Do',
      url: '/#what-i-do',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Social Respponsibilities',
      url: '/#social-responsibilities',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),

  skillsSection: {
    title: 'What I Do',
    skills: [
      {
        id: '1',
        title: 'Full Stack Development',
        lottie: {
          light: '/lotties/frontend.json',
          dark: '/lotties/frontend-dark.json',
        },
        points: [
          'Designing and developing scalable full-stack applications with modern JavaScript frameworks and backend technologies.',
          'Building and optimizing APIs and databases to ensure seamless communication and efficient data management.',
          'Deploying, maintaining, and enhancing web applications with a focus on performance, security, and user experience.',
        ],
        softwareSkills: [
          { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
          { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
          { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
          { name: 'TypeScript', icon: 'vscode-icons:file-type-typescript-official' },
          { name: 'Node.js', icon: 'logos:nodejs-icon' },
          { name: 'React.js', icon: 'logos:react' },
          { name: 'AWS', icon: 'logos:aws' },
          { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
          { name: 'Redux', icon: 'logos:redux' },
          { name: 'Database', icon: 'vscode-icons:file-type-sql' },
          { name: 'Docker', icon: 'logos:docker-icon' },
        ],
      },
    ],
  },
};
