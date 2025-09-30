import { BlogPost, BlogCategory } from '../types/blog';

// Enhanced JSON structure for blog posts with comprehensive metadata
export const blogJsonData = {
  metadata: {
    version: "1.0.0",
    lastUpdated: "2024-01-20T10:00:00Z",
    totalPosts: 8,
    totalCategories: 4,
    totalAuthors: 8,
    generatedBy: "PetalStack Blog System"
  },
  
  categories: [
    {
      id: "1",
      name: "Technology",
      slug: "technology",
      description: "Latest tech trends and innovations",
      color: "#3B82F6",
      icon: "💻",
      postCount: 2,
      metadata: {
        created: "2024-01-01T00:00:00Z",
        updated: "2024-01-15T10:00:00Z",
        seo: {
          title: "Technology Articles",
          description: "Explore the latest technology trends and innovations",
          keywords: ["technology", "innovation", "tech trends", "digital transformation"]
        }
      }
    },
    {
      id: "2",
      name: "Web Development",
      slug: "web-development",
      description: "Frontend and backend development",
      color: "#10B981",
      icon: "🌐",
      postCount: 2,
      metadata: {
        created: "2024-01-01T00:00:00Z",
        updated: "2024-01-10T09:00:00Z",
        seo: {
          title: "Web Development Tutorials",
          description: "Learn frontend and backend development techniques",
          keywords: ["web development", "frontend", "backend", "programming", "coding"]
        }
      }
    },
    {
      id: "3",
      name: "Design",
      slug: "design",
      description: "UI/UX and graphic design",
      color: "#F59E0B",
      icon: "🎨",
      postCount: 1,
      metadata: {
        created: "2024-01-01T00:00:00Z",
        updated: "2024-01-05T11:00:00Z",
        seo: {
          title: "Design Articles",
          description: "UI/UX design principles and graphic design techniques",
          keywords: ["design", "ui", "ux", "graphic design", "user experience"]
        }
      }
    },
    {
      id: "4",
      name: "Business",
      slug: "business",
      description: "Business insights and strategies",
      color: "#8B5CF6",
      icon: "💼",
      postCount: 1,
      metadata: {
        created: "2024-01-01T00:00:00Z",
        updated: "2024-01-01T08:00:00Z",
        seo: {
          title: "Business Strategy Articles",
          description: "Business insights, strategies, and growth techniques",
          keywords: ["business", "strategy", "marketing", "growth", "entrepreneurship"]
        }
      }
    }
  ],

  authors: [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bio: "Senior Frontend Developer with 8+ years of experience in React and modern web technologies.",
      social: {
        twitter: "@sarahjohnson",
        linkedin: "sarah-johnson-dev",
        github: "sarahjohnson"
      },
      expertise: ["React", "JavaScript", "TypeScript", "Web Development"],
      postCount: 1,
      joinDate: "2023-06-01T00:00:00Z",
      metadata: {
        verified: true,
        role: "Senior Developer",
        company: "TechCorp Inc."
      }
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "michael.chen@example.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Full-stack developer specializing in React and Node.js with expertise in scalable architecture.",
      social: {
        twitter: "@michaelchen",
        linkedin: "michael-chen-dev",
        github: "michaelchen"
      },
      expertise: ["React", "Node.js", "TypeScript", "Architecture"],
      postCount: 1,
      joinDate: "2023-07-15T00:00:00Z",
      metadata: {
        verified: true,
        role: "Full-Stack Developer",
        company: "DevSolutions Ltd."
      }
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      email: "emma.rodriguez@example.com",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bio: "Senior UX Designer with 10+ years of experience creating user-centered digital experiences.",
      social: {
        twitter: "@emmarodriguez",
        linkedin: "emma-rodriguez-ux",
        github: "emmarodriguez"
      },
      expertise: ["UX Design", "UI Design", "User Research", "Prototyping"],
      postCount: 1,
      joinDate: "2023-05-20T00:00:00Z",
      metadata: {
        verified: true,
        role: "Senior UX Designer",
        company: "DesignStudio Pro"
      }
    },
    {
      id: "4",
      name: "David Thompson",
      email: "david.thompson@example.com",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Digital Marketing Director with 12+ years of experience in growth marketing and brand development.",
      social: {
        twitter: "@davidthompson",
        linkedin: "david-thompson-marketing",
        github: "davidthompson"
      },
      expertise: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
      postCount: 1,
      joinDate: "2023-04-10T00:00:00Z",
      metadata: {
        verified: true,
        role: "Marketing Director",
        company: "GrowthMarketing Co."
      }
    },
    {
      id: "5",
      name: "Alex Kim",
      email: "alex.kim@example.com",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      bio: "Senior Software Engineer specializing in TypeScript and modern JavaScript frameworks.",
      social: {
        twitter: "@alexkim",
        linkedin: "alex-kim-dev",
        github: "alexkim"
      },
      expertise: ["TypeScript", "JavaScript", "React", "Node.js"],
      postCount: 1,
      joinDate: "2023-08-01T00:00:00Z",
      metadata: {
        verified: true,
        role: "Senior Software Engineer",
        company: "CodeCraft Inc."
      }
    },
    {
      id: "6",
      name: "Lisa Wang",
      email: "lisa.wang@example.com",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      bio: "Frontend Developer specializing in CSS and modern layout techniques with 6+ years of experience.",
      social: {
        twitter: "@lisawang",
        linkedin: "lisa-wang-dev",
        github: "lisawang"
      },
      expertise: ["CSS", "HTML", "JavaScript", "Responsive Design"],
      postCount: 1,
      joinDate: "2023-09-15T00:00:00Z",
      metadata: {
        verified: true,
        role: "Frontend Developer",
        company: "WebCraft Studio"
      }
    },
    {
      id: "7",
      name: "Maria Garcia",
      email: "maria.garcia@example.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      bio: "Senior UI/UX Designer with expertise in color theory and user psychology.",
      social: {
        twitter: "@mariagarcia",
        linkedin: "maria-garcia-design",
        github: "mariagarcia"
      },
      expertise: ["UI Design", "UX Design", "Color Theory", "User Psychology"],
      postCount: 1,
      joinDate: "2023-10-01T00:00:00Z",
      metadata: {
        verified: true,
        role: "Senior UI/UX Designer",
        company: "DesignStudio Pro"
      }
    },
    {
      id: "8",
      name: "James Wilson",
      email: "james.wilson@example.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "SaaS entrepreneur and business strategist with 10+ years of experience in building and scaling software companies.",
      social: {
        twitter: "@jameswilson",
        linkedin: "james-wilson-business",
        github: "jameswilson"
      },
      expertise: ["SaaS", "Business Strategy", "Entrepreneurship", "Growth"],
      postCount: 1,
      joinDate: "2023-11-01T00:00:00Z",
      metadata: {
        verified: true,
        role: "Business Strategist",
        company: "GrowthStrategy Inc."
      }
    }
  ],

  posts: [
    {
      id: "1",
      title: "The Future of Web Development: Trends to Watch in 2024",
      slug: "future-web-development-trends-2024",
      excerpt: "Explore the latest trends shaping the future of web development, from AI integration to new frameworks.",
      content: "# The Future of Web Development: Trends to Watch in 2024\n\nThe web development landscape is constantly evolving, and 2024 promises to bring exciting new technologies and methodologies...",
      author: {
        id: "1",
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        bio: "Senior Frontend Developer with 8+ years of experience in React and modern web technologies."
      },
      publishedAt: "2024-01-15T10:00:00Z",
      updatedAt: "2024-01-16T14:30:00Z",
      tags: ["web-development", "javascript", "react", "trends"],
      category: "technology",
      readTime: 8,
      featuredImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      status: "published",
      metadata: {
        views: 1250,
        likes: 45,
        shares: 12,
        comments: 8,
        seo: {
          title: "Future of Web Development: 2024 Trends",
          description: "Discover the latest web development trends for 2024 including AI integration, new frameworks, and performance optimization.",
          keywords: ["web development", "trends", "2024", "javascript", "react", "AI"],
          canonical: "https://petalstack.com/blog/future-web-development-trends-2024"
        },
        analytics: {
          avgReadTime: 7.5,
          bounceRate: 0.15,
          engagement: 0.78
        },
        relatedPosts: ["2", "5"],
        difficulty: "intermediate",
        prerequisites: ["JavaScript", "React basics"]
      }
    },
    {
      id: "2",
      title: "Building Scalable React Applications: Best Practices",
      slug: "building-scalable-react-applications",
      excerpt: "Learn how to structure and scale React applications for long-term maintainability and performance.",
      content: "# Building Scalable React Applications: Best Practices\n\nBuilding scalable React applications requires careful planning and adherence to best practices...",
      author: {
        id: "2",
        name: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        bio: "Full-stack developer specializing in React and Node.js with expertise in scalable architecture."
      },
      publishedAt: "2024-01-10T09:00:00Z",
      tags: ["react", "javascript", "best-practices", "scalability"],
      category: "web-development",
      readTime: 12,
      featuredImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      status: "published",
      metadata: {
        views: 980,
        likes: 32,
        shares: 8,
        comments: 5,
        seo: {
          title: "Scalable React Applications: Best Practices Guide",
          description: "Learn how to build scalable React applications with proven best practices for maintainability and performance.",
          keywords: ["react", "scalability", "best practices", "architecture", "performance"],
          canonical: "https://petalstack.com/blog/building-scalable-react-applications"
        },
        analytics: {
          avgReadTime: 11.2,
          bounceRate: 0.12,
          engagement: 0.82
        },
        relatedPosts: ["1", "5"],
        difficulty: "advanced",
        prerequisites: ["React", "JavaScript", "State Management"]
      }
    },
    {
      id: "3",
      title: "The Art of UI/UX Design: Creating Intuitive User Experiences",
      slug: "art-of-ui-ux-design",
      excerpt: "Discover the principles and techniques behind creating user-friendly interfaces that delight users.",
      content: "# The Art of UI/UX Design: Creating Intuitive User Experiences\n\nGreat UI/UX design is about creating interfaces that are not only beautiful but also functional and intuitive...",
      author: {
        id: "3",
        name: "Emma Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        bio: "Senior UX Designer with 10+ years of experience creating user-centered digital experiences."
      },
      publishedAt: "2024-01-05T11:00:00Z",
      tags: ["design", "ui", "ux", "user-experience"],
      category: "design",
      readTime: 10,
      featuredImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop",
      status: "published",
      metadata: {
        views: 1450,
        likes: 67,
        shares: 15,
        comments: 12,
        seo: {
          title: "UI/UX Design: Creating Intuitive User Experiences",
          description: "Learn the principles and techniques for creating user-friendly interfaces that delight users.",
          keywords: ["ui design", "ux design", "user experience", "interface design", "usability"],
          canonical: "https://petalstack.com/blog/art-of-ui-ux-design"
        },
        analytics: {
          avgReadTime: 9.8,
          bounceRate: 0.18,
          engagement: 0.85
        },
        relatedPosts: ["1", "2"],
        difficulty: "beginner",
        prerequisites: ["Basic design knowledge"]
      }
    },
    {
      id: "4",
      title: "Digital Marketing Strategies for Modern Businesses",
      slug: "digital-marketing-strategies",
      excerpt: "Learn effective digital marketing strategies to grow your business in the digital age.",
      content: "# Digital Marketing Strategies for Modern Businesses\n\nIn today's digital-first world, having a strong online presence is crucial for business success...",
      author: {
        id: "4",
        name: "David Thompson",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        bio: "Digital Marketing Director with 12+ years of experience in growth marketing and brand development."
      },
      publishedAt: "2024-01-01T08:00:00Z",
      tags: ["marketing", "digital-marketing", "business", "strategy"],
      category: "business",
      readTime: 15,
      featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      status: "published",
      metadata: {
        views: 2100,
        likes: 89,
        shares: 23,
        comments: 18,
        seo: {
          title: "Digital Marketing Strategies for Modern Businesses",
          description: "Learn effective digital marketing strategies to grow your business in the digital age.",
          keywords: ["digital marketing", "business strategy", "marketing", "growth", "online presence"],
          canonical: "https://petalstack.com/blog/digital-marketing-strategies"
        },
        analytics: {
          avgReadTime: 14.2,
          bounceRate: 0.22,
          engagement: 0.76
        },
        relatedPosts: ["1", "3"],
        difficulty: "intermediate",
        prerequisites: ["Basic business knowledge"]
      }
    },
    {
      id: "5",
      title: "Getting Started with TypeScript: A Developer's Guide",
      slug: "getting-started-typescript",
      excerpt: "Learn the fundamentals of TypeScript and how it can improve your JavaScript development workflow.",
      content: "# Getting Started with TypeScript: A Developer's Guide\n\nTypeScript is a powerful superset of JavaScript that adds static type checking and other features...",
      author: {
        id: "5",
        name: "Alex Kim",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        bio: "Senior Software Engineer specializing in TypeScript and modern JavaScript frameworks."
      },
      publishedAt: "2023-12-28T16:00:00Z",
      tags: ["typescript", "javascript", "programming", "web-development"],
      category: "web-development",
      readTime: 7,
      featuredImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
      status: "published",
      metadata: {
        views: 890,
        likes: 28,
        shares: 6,
        comments: 4,
        seo: {
          title: "Getting Started with TypeScript: Complete Developer Guide",
          description: "Learn TypeScript fundamentals and improve your JavaScript development workflow with static typing.",
          keywords: ["typescript", "javascript", "programming", "static typing", "web development"],
          canonical: "https://petalstack.com/blog/getting-started-typescript"
        },
        analytics: {
          avgReadTime: 6.8,
          bounceRate: 0.14,
          engagement: 0.79
        },
        relatedPosts: ["1", "2"],
        difficulty: "beginner",
        prerequisites: ["JavaScript basics"]
      }
    },
    {
      id: "6",
      title: "Mastering CSS Grid: Modern Layout Techniques",
      slug: "mastering-css-grid",
      excerpt: "Learn advanced CSS Grid techniques to create complex, responsive layouts with ease.",
      content: "# Mastering CSS Grid: Modern Layout Techniques\n\nCSS Grid is a powerful two-dimensional layout system that revolutionizes how we create web layouts...",
      author: {
        id: "6",
        name: "Lisa Wang",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        bio: "Frontend Developer specializing in CSS and modern layout techniques with 6+ years of experience."
      },
      publishedAt: "2023-12-20T14:00:00Z",
      tags: ["css", "grid", "layout", "responsive"],
      category: "web-development",
      readTime: 9,
      featuredImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      status: "published",
      metadata: {
        views: 1200,
        likes: 42,
        shares: 9,
        comments: 6,
        seo: {
          title: "Mastering CSS Grid: Modern Layout Techniques",
          description: "Learn advanced CSS Grid techniques to create complex, responsive layouts with ease.",
          keywords: ["css grid", "layout", "responsive design", "frontend", "web development"],
          canonical: "https://petalstack.com/blog/mastering-css-grid"
        },
        analytics: {
          avgReadTime: 8.5,
          bounceRate: 0.16,
          engagement: 0.81
        },
        relatedPosts: ["1", "2"],
        difficulty: "intermediate",
        prerequisites: ["CSS basics", "HTML"]
      }
    },
    {
      id: "7",
      title: "The Psychology of Color in Web Design",
      slug: "psychology-color-web-design",
      excerpt: "Understand how colors affect user behavior and learn to use color psychology in your designs.",
      content: "# The Psychology of Color in Web Design\n\nColor is one of the most powerful tools in a designer's arsenal. Understanding color psychology can help you create more effective and engaging web designs...",
      author: {
        id: "7",
        name: "Maria Garcia",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        bio: "Senior UI/UX Designer with expertise in color theory and user psychology."
      },
      publishedAt: "2023-12-15T11:30:00Z",
      tags: ["design", "color", "psychology", "ui"],
      category: "design",
      readTime: 11,
      featuredImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop",
      status: "published",
      metadata: {
        views: 1800,
        likes: 78,
        shares: 18,
        comments: 14,
        seo: {
          title: "The Psychology of Color in Web Design",
          description: "Understand how colors affect user behavior and learn to use color psychology in your designs.",
          keywords: ["color psychology", "web design", "ui design", "user experience", "design"],
          canonical: "https://petalstack.com/blog/psychology-color-web-design"
        },
        analytics: {
          avgReadTime: 10.2,
          bounceRate: 0.19,
          engagement: 0.87
        },
        relatedPosts: ["3", "1"],
        difficulty: "beginner",
        prerequisites: ["Basic design knowledge"]
      }
    },
    {
      id: "8",
      title: "Building a Successful SaaS Business: Key Strategies",
      slug: "building-successful-saas-business",
      excerpt: "Learn the essential strategies for building and scaling a successful Software as a Service business.",
      content: "# Building a Successful SaaS Business: Key Strategies\n\nThe Software as a Service (SaaS) model has revolutionized how businesses deliver software to customers...",
      author: {
        id: "8",
        name: "James Wilson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        bio: "SaaS entrepreneur and business strategist with 10+ years of experience in building and scaling software companies."
      },
      publishedAt: "2023-12-10T09:15:00Z",
      tags: ["saas", "business", "entrepreneurship", "strategy"],
      category: "business",
      readTime: 13,
      featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      status: "published",
      metadata: {
        views: 2400,
        likes: 95,
        shares: 25,
        comments: 20,
        seo: {
          title: "Building a Successful SaaS Business: Key Strategies",
          description: "Learn the essential strategies for building and scaling a successful Software as a Service business.",
          keywords: ["saas", "business strategy", "entrepreneurship", "software business", "growth"],
          canonical: "https://petalstack.com/blog/building-successful-saas-business"
        },
        analytics: {
          avgReadTime: 12.8,
          bounceRate: 0.24,
          engagement: 0.83
        },
        relatedPosts: ["4", "3"],
        difficulty: "intermediate",
        prerequisites: ["Basic business knowledge"]
      }
    }
  ],

  analytics: {
    totalViews: 12070,
    totalLikes: 476,
    totalShares: 116,
    totalComments: 87,
    averageReadTime: 10.4,
    topPerformingPost: "8",
    mostPopularCategory: "technology",
    engagementRate: 0.78,
    monthlyGrowth: 0.15
  },

  seo: {
    siteName: "PetalStack Blog",
    siteDescription: "Discover insights, tutorials, and stories about web development, design, and technology",
    siteUrl: "https://petalstack.com",
    defaultImage: "https://petalstack.com/assets/og-image.jpg",
    twitterHandle: "@petalstack",
    facebookAppId: "123456789",
    googleAnalyticsId: "GA-XXXXXXXXX"
  }
};

// Helper functions to work with the JSON data
export const getPostById = (id: string) => {
  return blogJsonData.posts.find(post => post.id === id);
};

export const getAuthorById = (id: string) => {
  return blogJsonData.authors.find(author => author.id === id);
};

export const getCategoryById = (id: string) => {
  return blogJsonData.categories.find(category => category.id === id);
};

export const getPostsByCategory = (categorySlug: string) => {
  return blogJsonData.posts.filter(post => post.category === categorySlug);
};

export const getPostsByAuthor = (authorId: string) => {
  return blogJsonData.posts.filter(post => post.author.id === authorId);
};

export const searchPosts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return blogJsonData.posts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.author.name.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getRelatedPosts = (postId: string) => {
  const post = getPostById(postId);
  if (!post || !post.metadata.relatedPosts) return [];
  
  return post.metadata.relatedPosts
    .map(relatedId => getPostById(relatedId))
    .filter(Boolean);
};

export const getBlogStats = () => {
  return {
    totalPosts: blogJsonData.metadata.totalPosts,
    totalCategories: blogJsonData.metadata.totalCategories,
    totalAuthors: blogJsonData.metadata.totalAuthors,
    totalViews: blogJsonData.analytics.totalViews,
    totalLikes: blogJsonData.analytics.totalLikes,
    averageReadTime: blogJsonData.analytics.averageReadTime,
    engagementRate: blogJsonData.analytics.engagementRate
  };
};
