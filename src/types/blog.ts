export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
  readTime: number; // in minutes
  featuredImage?: string;
  slug: string;
  status: 'published' | 'draft' | 'archived';
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

export interface BlogFilters {
  search?: string;
  category?: string;
  tags?: string[];
  author?: string;
  dateRange?: {
    start: string;
    end: string;
  };
}

export interface BlogPagination {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
}

export interface BlogState {
  posts: BlogPost[];
  categories: BlogCategory[];
  filters: BlogFilters;
  pagination: BlogPagination;
  loading: boolean;
  error?: string;
}
