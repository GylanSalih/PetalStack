import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, User, Clock, Tag, Code, X } from 'lucide-react';
import { useDarkMode } from '../../../contexts/DarkModeContext';
import { BlogPost, BlogCategory, BlogFilters } from '../../../types/blog';
import { blogPosts, blogCategories, searchBlogPosts, getBlogPostsByCategory, getBlogPostsByTag } from '../../../data/blogData';
import { blogJsonData, getPostById, getAuthorById, getCategoryById } from '../../../data/blogJsonData';
import JsonViewer from '../../../components/JsonViewer/JsonViewer';
import styles from './blogGrid.module.scss';

const BlogGrid: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [filters, setFilters] = useState<BlogFilters>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'popular'>('newest');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [showJsonViewer, setShowJsonViewer] = useState(false);
  const postsPerPage = 6;

  // Get all unique tags from posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let filtered = [...blogPosts];

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = searchBlogPosts(searchQuery);
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Apply tag filter
    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case 'oldest':
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        case 'popular':
          // For demo purposes, we'll use readTime as a proxy for popularity
          return b.readTime - a.readTime;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? '' : tag);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as 'newest' | 'oldest' | 'popular');
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedTag('');
    setSortBy('newest');
  };

  const handlePostClick = (postId: string) => {
    setSelectedPostId(postId);
    setShowJsonViewer(true);
  };

  const handleCloseJsonViewer = () => {
    setShowJsonViewer(false);
    setSelectedPostId(null);
  };

  const getPostJsonData = () => {
    if (!selectedPostId) return null;
    
    const post = getPostById(selectedPostId);
    if (!post) return null;

    const author = getAuthorById(post.author.id);
    const category = getCategoryById(
      blogJsonData.categories.find(cat => cat.slug === post.category)?.id || ''
    );

    return {
      post: {
        ...post,
        author: author,
        category: category
      },
      metadata: {
        generatedAt: new Date().toISOString(),
        source: "PetalStack Blog System",
        version: "1.0.0"
      },
      analytics: {
        totalViews: blogJsonData.analytics.totalViews,
        totalPosts: blogJsonData.analytics.totalViews,
        engagementRate: blogJsonData.analytics.engagementRate
      }
    };
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const categoryData = blogCategories.find(cat => cat.slug === category);
    return categoryData?.color || '#6B7280';
  };

  return (
    <div className={`${styles.blogGrid} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>
            Discover insights, tutorials, and stories from our team
          </p>
        </div>

        {/* Filters */}
        <div className={styles.filters}>
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={handleSearch}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterControls}>
            <div className={styles.filterGroup}>
              <Filter className={styles.filterIcon} />
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className={styles.filterSelect}
              >
                <option value="">All Categories</option>
                {blogCategories.map(category => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.filterGroup}>
              <select
                value={sortBy}
                onChange={handleSortChange}
                className={styles.filterSelect}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>

            {(searchQuery || selectedCategory || selectedTag) && (
              <button onClick={clearFilters} className={styles.clearButton}>
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className={styles.tagsContainer}>
          <h3 className={styles.tagsTitle}>Popular Tags</h3>
          <div className={styles.tags}>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`${styles.tag} ${selectedTag === tag ? styles.tagActive : ''}`}
              >
                <Tag className={styles.tagIcon} />
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className={styles.resultsInfo}>
          <p>
            Showing {paginatedPosts.length} of {filteredPosts.length} articles
          </p>
        </div>

        {/* Blog Posts Grid */}
        {paginatedPosts.length > 0 ? (
          <div className={styles.postsGrid}>
            {paginatedPosts.map(post => (
              <article key={post.id} className={styles.postCard}>
                {post.featuredImage && (
                  <div className={styles.postImage}>
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      loading="lazy"
                    />
                    <div
                      className={styles.categoryBadge}
                      style={{ backgroundColor: getCategoryColor(post.category) }}
                    >
                      {blogCategories.find(cat => cat.slug === post.category)?.name}
                    </div>
                  </div>
                )}
                
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <div className={styles.metaItem}>
                      <User className={styles.metaIcon} />
                      <span>{post.author.name}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Calendar className={styles.metaIcon} />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Clock className={styles.metaIcon} />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  <h2 className={styles.postTitle}>
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className={styles.postExcerpt}>
                    {post.excerpt}
                  </p>

                  <div className={styles.postTags}>
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className={styles.postTag}>
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className={styles.postTag}>
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className={styles.postActions}>
                    <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                      Read More →
                    </Link>
                    <button
                      className={styles.jsonButton}
                      onClick={() => handlePostClick(post.id)}
                      title="View JSON Data"
                    >
                      <Code className={styles.jsonIcon} />
                      JSON
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <h3>No articles found</h3>
            <p>Try adjusting your search or filters</p>
            <button onClick={clearFilters} className={styles.clearButton}>
              Clear All Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={styles.paginationButton}
            >
              Previous
            </button>
            
            <div className={styles.paginationNumbers}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`${styles.paginationNumber} ${
                    currentPage === page ? styles.paginationNumberActive : ''
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={styles.paginationButton}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* JSON Viewer Modal */}
      {showJsonViewer && selectedPostId && (
        <div className={styles.jsonModal}>
          <div className={styles.jsonModalContent}>
            <div className={styles.jsonModalHeader}>
              <h3 className={styles.jsonModalTitle}>
                <Code className={styles.jsonModalIcon} />
                JSON Data for Post
              </h3>
              <button
                className={styles.jsonModalClose}
                onClick={handleCloseJsonViewer}
                title="Close JSON Viewer"
              >
                <X size={20} />
              </button>
            </div>
            <div className={styles.jsonModalBody}>
              <JsonViewer
                data={getPostJsonData()}
                title={`Post ID: ${selectedPostId}`}
                showCopyButton={true}
                showToggleButton={true}
                defaultExpanded={true}
                maxHeight="70vh"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;