import { BlogPost, BlogCategory } from '../types/blog';

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Technology',
    slug: 'technology',
    description: 'Latest tech trends and innovations',
    color: '#3B82F6'
  },
  {
    id: '2',
    name: 'Web Development',
    slug: 'web-development',
    description: 'Frontend and backend development',
    color: '#10B981'
  },
  {
    id: '3',
    name: 'Design',
    slug: 'design',
    description: 'UI/UX and graphic design',
    color: '#F59E0B'
  },
  {
    id: '4',
    name: 'Business',
    slug: 'business',
    description: 'Business insights and strategies',
    color: '#8B5CF6'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to new frameworks.',
    content: `# The Future of Web Development: Trends to Watch in 2024

The web development landscape is constantly evolving, and 2024 promises to bring exciting new technologies and methodologies. In this comprehensive guide, we'll explore the key trends that are shaping the future of web development.

## 1. Artificial Intelligence Integration

AI is becoming increasingly integrated into web development workflows. From code generation tools like GitHub Copilot to automated testing and deployment, AI is revolutionizing how developers work.

### Key AI Tools for Developers:
- **GitHub Copilot**: AI-powered code completion
- **ChatGPT for Development**: Code review and debugging assistance
- **Automated Testing**: AI-driven test generation and execution

## 2. Modern JavaScript Frameworks

The JavaScript ecosystem continues to evolve with new frameworks and improvements to existing ones.

### Popular Frameworks in 2024:
- **React 18+**: Concurrent features and server components
- **Vue 3**: Composition API and improved performance
- **Svelte/SvelteKit**: Compile-time optimizations
- **Next.js 14**: App Router and server components

## 3. Web Performance Optimization

Performance remains a critical factor in web development, with new tools and techniques emerging regularly.

### Performance Best Practices:
- **Core Web Vitals**: Focus on LCP, FID, and CLS
- **Image Optimization**: Next-gen formats and lazy loading
- **Code Splitting**: Dynamic imports and route-based splitting
- **Caching Strategies**: Service workers and CDN optimization

## 4. Progressive Web Apps (PWAs)

PWAs continue to gain traction as they bridge the gap between web and native applications.

### PWA Features:
- **Offline Functionality**: Service workers for offline support
- **Push Notifications**: Engage users even when the app is closed
- **App-like Experience**: Native app feel in the browser
- **Installation**: Add to home screen functionality

## 5. WebAssembly (WASM)

WebAssembly is enabling high-performance applications to run in the browser.

### WASM Use Cases:
- **Game Development**: High-performance games in the browser
- **Scientific Computing**: Complex calculations and simulations
- **Image/Video Processing**: Real-time media manipulation
- **Cryptocurrency Mining**: Browser-based mining applications

## Conclusion

The future of web development is bright, with exciting technologies and methodologies emerging regularly. By staying up-to-date with these trends and continuously learning, developers can build better, faster, and more engaging web experiences.

The key is to embrace change while maintaining a solid foundation in core web technologies. Happy coding!`,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      bio: 'Senior Frontend Developer with 8+ years of experience in React and modern web technologies.'
    },
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-16T14:30:00Z',
    tags: ['web-development', 'javascript', 'react', 'trends'],
    category: 'technology',
    readTime: 8,
    featuredImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    slug: 'future-web-development-trends-2024',
    status: 'published'
  },
  {
    id: '2',
    title: 'Building Scalable React Applications: Best Practices',
    excerpt: 'Learn how to structure and scale React applications for long-term maintainability and performance.',
    content: `# Building Scalable React Applications: Best Practices

Building scalable React applications requires careful planning and adherence to best practices. In this guide, we'll explore the key principles and patterns that help create maintainable, performant React applications.

## 1. Project Structure

A well-organized project structure is the foundation of a scalable application.

### Recommended Structure:
\`\`\`
src/
├── components/
│   ├── common/
│   ├── forms/
│   └── layout/
├── pages/
├── hooks/
├── services/
├── utils/
├── types/
└── constants/
\`\`\`

## 2. Component Design Principles

### Single Responsibility Principle
Each component should have one clear purpose and responsibility.

### Composition over Inheritance
Use composition to build complex components from simpler ones.

### Props Interface Design
Define clear, minimal interfaces for component props.

## 3. State Management

Choose the right state management solution for your application's complexity.

### Local State
Use useState and useReducer for component-level state.

### Global State
Consider Context API, Redux, or Zustand for application-wide state.

### Server State
Use React Query or SWR for server state management.

## 4. Performance Optimization

### React.memo
Use React.memo for expensive components that don't need frequent re-renders.

### useMemo and useCallback
Optimize expensive calculations and prevent unnecessary re-renders.

### Code Splitting
Implement lazy loading for route-based code splitting.

## 5. Testing Strategy

### Unit Tests
Test individual components and functions in isolation.

### Integration Tests
Test component interactions and data flow.

### End-to-End Tests
Test complete user workflows.

## Conclusion

Building scalable React applications is an ongoing process that requires continuous learning and adaptation. By following these best practices, you can create applications that are maintainable, performant, and ready for future growth.`,
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'Full-stack developer specializing in React and Node.js with expertise in scalable architecture.'
    },
    publishedAt: '2024-01-10T09:00:00Z',
    tags: ['react', 'javascript', 'best-practices', 'scalability'],
    category: 'web-development',
    readTime: 12,
    featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    slug: 'building-scalable-react-applications',
    status: 'published'
  },
  {
    id: '3',
    title: 'The Art of UI/UX Design: Creating Intuitive User Experiences',
    excerpt: 'Discover the principles and techniques behind creating user-friendly interfaces that delight users.',
    content: `# The Art of UI/UX Design: Creating Intuitive User Experiences

Great UI/UX design is about creating interfaces that are not only beautiful but also functional and intuitive. In this comprehensive guide, we'll explore the principles and techniques that make for exceptional user experiences.

## 1. Understanding User-Centered Design

User-centered design puts the user at the heart of every design decision.

### Key Principles:
- **Empathy**: Understand your users' needs and pain points
- **Usability**: Make interfaces easy to use and navigate
- **Accessibility**: Ensure designs work for all users
- **Consistency**: Maintain visual and interaction consistency

## 2. Visual Design Principles

### Color Theory
- **Color Psychology**: How colors affect user emotions
- **Contrast**: Ensuring readability and accessibility
- **Color Harmony**: Creating visually pleasing combinations

### Typography
- **Font Selection**: Choosing appropriate typefaces
- **Hierarchy**: Creating clear information hierarchy
- **Readability**: Optimizing text for different screen sizes

### Layout and Spacing
- **Grid Systems**: Creating balanced, organized layouts
- **White Space**: Using space effectively to guide attention
- **Alignment**: Creating visual order and structure

## 3. Interaction Design

### Microinteractions
Small animations and feedback that enhance user experience.

### Navigation Design
- **Information Architecture**: Organizing content logically
- **Navigation Patterns**: Common navigation solutions
- **Breadcrumbs**: Helping users understand their location

### Form Design
- **Input Types**: Choosing appropriate input methods
- **Validation**: Providing clear feedback and error messages
- **Progressive Disclosure**: Revealing information gradually

## 4. Responsive Design

### Mobile-First Approach
Designing for mobile devices first, then scaling up.

### Breakpoints
Defining responsive breakpoints for different screen sizes.

### Touch-Friendly Design
Ensuring interfaces work well on touch devices.

## 5. Accessibility

### WCAG Guidelines
Following Web Content Accessibility Guidelines.

### Inclusive Design
Creating designs that work for users with diverse abilities.

### Testing for Accessibility
Tools and techniques for accessibility testing.

## Conclusion

Great UI/UX design is a combination of art and science. By understanding user needs, following design principles, and continuously testing and iterating, you can create interfaces that not only look great but also provide exceptional user experiences.`,
    author: {
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      bio: 'Senior UX Designer with 10+ years of experience creating user-centered digital experiences.'
    },
    publishedAt: '2024-01-05T11:00:00Z',
    tags: ['design', 'ui', 'ux', 'user-experience'],
    category: 'design',
    readTime: 10,
    featuredImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop',
    slug: 'art-of-ui-ux-design',
    status: 'published'
  },
  {
    id: '4',
    title: 'Digital Marketing Strategies for Modern Businesses',
    excerpt: 'Learn effective digital marketing strategies to grow your business in the digital age.',
    content: `# Digital Marketing Strategies for Modern Businesses

In today's digital-first world, having a strong online presence is crucial for business success. This guide explores proven digital marketing strategies that can help businesses reach their target audience and achieve their goals.

## 1. Content Marketing

Content marketing is about creating and distributing valuable content to attract and engage your target audience.

### Content Types:
- **Blog Posts**: Regular, valuable articles
- **Videos**: Educational and promotional content
- **Infographics**: Visual data representation
- **Podcasts**: Audio content for on-the-go consumption

### Content Strategy:
- **Audience Research**: Understanding your target audience
- **Content Calendar**: Planning and scheduling content
- **SEO Optimization**: Making content discoverable
- **Performance Tracking**: Measuring content effectiveness

## 2. Social Media Marketing

Social media platforms offer powerful tools for reaching and engaging with customers.

### Platform Selection:
- **Facebook**: Broad audience reach
- **Instagram**: Visual content and younger demographics
- **LinkedIn**: B2B networking and professional content
- **Twitter**: Real-time updates and customer service

### Engagement Strategies:
- **Consistent Posting**: Regular content updates
- **Community Building**: Fostering brand communities
- **Influencer Partnerships**: Collaborating with industry influencers
- **User-Generated Content**: Encouraging customer content creation

## 3. Search Engine Optimization (SEO)

SEO helps your website rank higher in search engine results.

### On-Page SEO:
- **Keyword Research**: Finding relevant search terms
- **Content Optimization**: Creating SEO-friendly content
- **Meta Tags**: Optimizing title and description tags
- **Internal Linking**: Connecting related content

### Technical SEO:
- **Site Speed**: Optimizing page load times
- **Mobile Optimization**: Ensuring mobile-friendly design
- **Schema Markup**: Adding structured data
- **Site Architecture**: Organizing content logically

## 4. Email Marketing

Email marketing remains one of the most effective digital marketing channels.

### Email Types:
- **Newsletters**: Regular updates and content
- **Promotional Emails**: Sales and special offers
- **Transactional Emails**: Order confirmations and receipts
- **Welcome Series**: Onboarding new subscribers

### Best Practices:
- **Personalization**: Tailoring content to individual recipients
- **Segmentation**: Targeting specific audience groups
- **A/B Testing**: Optimizing email performance
- **Compliance**: Following email marketing regulations

## 5. Paid Advertising

Paid advertising can provide immediate visibility and results.

### Google Ads:
- **Search Ads**: Text ads in search results
- **Display Ads**: Visual ads on websites
- **Shopping Ads**: Product listings in search results
- **YouTube Ads**: Video advertising on YouTube

### Social Media Ads:
- **Facebook Ads**: Targeted advertising on Facebook
- **Instagram Ads**: Visual advertising on Instagram
- **LinkedIn Ads**: Professional advertising on LinkedIn
- **Twitter Ads**: Promoted content on Twitter

## Conclusion

Digital marketing is an ever-evolving field that requires continuous learning and adaptation. By implementing these strategies and staying up-to-date with industry trends, businesses can build strong online presences and achieve their marketing goals.`,
    author: {
      name: 'David Thompson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      bio: 'Digital Marketing Director with 12+ years of experience in growth marketing and brand development.'
    },
    publishedAt: '2024-01-01T08:00:00Z',
    tags: ['marketing', 'digital-marketing', 'business', 'strategy'],
    category: 'business',
    readTime: 15,
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    slug: 'digital-marketing-strategies',
    status: 'published'
  },
  {
    id: '5',
    title: 'Getting Started with TypeScript: A Developer\'s Guide',
    excerpt: 'Learn the fundamentals of TypeScript and how it can improve your JavaScript development workflow.',
    content: `# Getting Started with TypeScript: A Developer's Guide

TypeScript is a powerful superset of JavaScript that adds static type checking and other features to help developers write more robust and maintainable code. This guide will help you get started with TypeScript.

## 1. What is TypeScript?

TypeScript is a programming language developed by Microsoft that extends JavaScript with static type definitions.

### Key Benefits:
- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Improved Documentation**: Types serve as inline documentation
- **Easier Refactoring**: Safe code changes with type checking

## 2. Setting Up TypeScript

### Installation
\`\`\`bash
npm install -g typescript
npm install --save-dev typescript @types/node
\`\`\`

### Configuration
Create a \`tsconfig.json\` file:
\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
\`\`\`

## 3. Basic Types

### Primitive Types
\`\`\`typescript
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
\`\`\`

### Arrays and Objects
\`\`\`typescript
let numbers: number[] = [1, 2, 3];
let user: { name: string; age: number } = { name: "John", age: 30 };
\`\`\`

### Interfaces
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
}
\`\`\`

## 4. Functions and Classes

### Function Types
\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

const add = (a: number, b: number): number => a + b;
\`\`\`

### Classes
\`\`\`typescript
class User {
  private id: number;
  public name: string;
  
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  
  public getName(): string {
    return this.name;
  }
}
\`\`\`

## 5. Advanced Features

### Generics
\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("Hello");
\`\`\`

### Union Types
\`\`\`typescript
let value: string | number;
value = "Hello";
value = 42;
\`\`\`

### Type Guards
\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}
\`\`\`

## Conclusion

TypeScript is a powerful tool that can significantly improve your JavaScript development experience. By adding static type checking and other features, TypeScript helps you write more robust, maintainable, and error-free code. Start with the basics and gradually incorporate more advanced features as you become comfortable with the language.`,
    author: {
      name: 'Alex Kim',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      bio: 'Senior Software Engineer specializing in TypeScript and modern JavaScript frameworks.'
    },
    publishedAt: '2023-12-28T16:00:00Z',
    tags: ['typescript', 'javascript', 'programming', 'web-development'],
    category: 'web-development',
    readTime: 7,
    featuredImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    slug: 'getting-started-typescript',
    status: 'published'
  },
  {
    id: '6',
    title: 'Mastering CSS Grid: Modern Layout Techniques',
    excerpt: 'Learn advanced CSS Grid techniques to create complex, responsive layouts with ease.',
    content: `# Mastering CSS Grid: Modern Layout Techniques

CSS Grid is a powerful two-dimensional layout system that revolutionizes how we create web layouts. This comprehensive guide will teach you everything you need to know about CSS Grid.

## 1. Understanding CSS Grid

CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns.

### Key Concepts:
- **Grid Container**: The parent element that contains grid items
- **Grid Items**: The direct children of the grid container
- **Grid Lines**: The dividing lines that make up the grid structure
- **Grid Tracks**: The space between two adjacent grid lines

## 2. Basic Grid Setup

### Creating a Grid Container
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
}
\`\`\`

### Grid Template Areas
\`\`\`css
.grid-container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
\`\`\`

## 3. Advanced Grid Techniques

### Responsive Grids
\`\`\`css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

### Grid Alignment
\`\`\`css
.grid-item {
  justify-self: center;
  align-self: start;
}
\`\`\`

## 4. Real-World Examples

### Card Layout
\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
\`\`\`

### Dashboard Layout
\`\`\`css
.dashboard {
  display: grid;
  grid-template-areas: 
    "sidebar header"
    "sidebar main"
    "sidebar footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}
\`\`\`

## Conclusion

CSS Grid is an incredibly powerful tool for creating modern, responsive layouts. With practice, you'll be able to create complex layouts that were previously difficult or impossible with traditional CSS methods.`,
    author: {
      name: 'Lisa Wang',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      bio: 'Frontend Developer specializing in CSS and modern layout techniques with 6+ years of experience.'
    },
    publishedAt: '2023-12-20T14:00:00Z',
    tags: ['css', 'grid', 'layout', 'responsive'],
    category: 'web-development',
    readTime: 9,
    featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    slug: 'mastering-css-grid',
    status: 'published'
  },
  {
    id: '7',
    title: 'The Psychology of Color in Web Design',
    excerpt: 'Understand how colors affect user behavior and learn to use color psychology in your designs.',
    content: `# The Psychology of Color in Web Design

Color is one of the most powerful tools in a designer's arsenal. Understanding color psychology can help you create more effective and engaging web designs.

## 1. Understanding Color Psychology

Color psychology is the study of how colors affect human behavior and emotions.

### Primary Color Associations:
- **Red**: Energy, passion, urgency, danger
- **Blue**: Trust, stability, professionalism, calm
- **Green**: Growth, nature, money, success
- **Yellow**: Happiness, optimism, creativity, warning
- **Purple**: Luxury, creativity, mystery, wisdom
- **Orange**: Enthusiasm, warmth, energy, fun

## 2. Color in Branding

### Brand Personality
Colors help establish brand personality and emotional connection with users.

### Industry Standards:
- **Healthcare**: Blues and greens for trust and healing
- **Finance**: Blues and grays for stability and professionalism
- **Technology**: Blues and purples for innovation and creativity
- **Food**: Reds and oranges for appetite and energy

## 3. Color Accessibility

### Contrast Ratios
Ensure sufficient contrast between text and background colors.

### Color Blindness
Consider users with color vision deficiencies when choosing color schemes.

### WCAG Guidelines:
- **AA Level**: 4.5:1 contrast ratio for normal text
- **AAA Level**: 7:1 contrast ratio for normal text

## 4. Color Schemes

### Monochromatic
Using variations of a single color for a cohesive, elegant look.

### Analogous
Using colors that are adjacent on the color wheel for harmony.

### Complementary
Using colors opposite on the color wheel for high contrast and energy.

### Triadic
Using three colors evenly spaced on the color wheel for vibrant designs.

## 5. Practical Applications

### Call-to-Action Buttons
Use high-contrast colors that stand out and encourage action.

### Navigation
Use consistent colors to help users understand the interface.

### Error States
Use red or orange to indicate errors or warnings.

### Success States
Use green to indicate successful actions or positive feedback.

## Conclusion

Color psychology is a powerful tool that can significantly impact user experience and conversion rates. By understanding how colors affect emotions and behavior, you can create more effective and engaging web designs that resonate with your target audience.`,
    author: {
      name: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      bio: 'Senior UI/UX Designer with expertise in color theory and user psychology.'
    },
    publishedAt: '2023-12-15T11:30:00Z',
    tags: ['design', 'color', 'psychology', 'ui'],
    category: 'design',
    readTime: 11,
    featuredImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop',
    slug: 'psychology-color-web-design',
    status: 'published'
  },
  {
    id: '8',
    title: 'Building a Successful SaaS Business: Key Strategies',
    excerpt: 'Learn the essential strategies for building and scaling a successful Software as a Service business.',
    content: `# Building a Successful SaaS Business: Key Strategies

The Software as a Service (SaaS) model has revolutionized how businesses deliver software to customers. This guide covers the essential strategies for building a successful SaaS business.

## 1. Understanding the SaaS Model

SaaS is a software distribution model where applications are hosted by a service provider and made available to customers over the internet.

### Key Characteristics:
- **Subscription-based**: Recurring revenue model
- **Cloud-hosted**: No installation required
- **Scalable**: Easy to add/remove users
- **Maintenance-free**: Provider handles updates and security

## 2. Market Research and Validation

### Identify Your Target Market
- Research your target audience's pain points
- Analyze competitor solutions
- Validate demand through surveys and interviews

### MVP Development
- Build a Minimum Viable Product
- Focus on core features that solve the main problem
- Gather user feedback early and often

## 3. Pricing Strategy

### Pricing Models:
- **Per-user pricing**: Charge based on number of users
- **Tiered pricing**: Different feature sets at different price points
- **Usage-based pricing**: Charge based on usage or consumption
- **Freemium model**: Free tier with premium features

### Value-Based Pricing:
- Price based on the value you provide to customers
- Consider customer's willingness to pay
- Test different price points to find optimal pricing

## 4. Customer Acquisition

### Content Marketing:
- Create valuable content that addresses customer pain points
- Use SEO to attract organic traffic
- Build thought leadership in your industry

### Product-Led Growth:
- Make your product the primary driver of growth
- Focus on user experience and product quality
- Implement viral features and referral programs

### Sales and Marketing:
- Build a strong sales team
- Use data-driven marketing approaches
- Implement customer success programs

## 5. Customer Retention

### Onboarding:
- Create a smooth onboarding experience
- Provide clear value from day one
- Offer training and support resources

### Customer Success:
- Monitor customer health and usage
- Proactively reach out to at-risk customers
- Provide ongoing value and support

### Product Development:
- Continuously improve based on customer feedback
- Add features that customers actually want
- Maintain high product quality and reliability

## Conclusion

Building a successful SaaS business requires careful planning, execution, and continuous improvement. Focus on solving real problems for your customers, maintain high product quality, and always prioritize customer success. With the right strategies and execution, your SaaS business can achieve sustainable growth and success.`,
    author: {
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      bio: 'SaaS entrepreneur and business strategist with 10+ years of experience in building and scaling software companies.'
    },
    publishedAt: '2023-12-10T09:15:00Z',
    tags: ['saas', 'business', 'entrepreneurship', 'strategy'],
    category: 'business',
    readTime: 13,
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    slug: 'building-successful-saas-business',
    status: 'published'
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getBlogPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

export const searchBlogPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.author.name.toLowerCase().includes(lowercaseQuery)
  );
};
