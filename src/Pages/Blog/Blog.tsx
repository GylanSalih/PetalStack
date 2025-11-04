import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Calendar } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { blogPosts, blogCategories } from '../../data/blogData';
import styles from './blog.module.scss';

const Blog = (): React.ReactElement => {
  const { isDarkMode } = useDarkMode();
  
  // Get latest posts
  const latestPosts = blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

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
    <div className={`${styles.blog} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Discover Insights & Stories
            </h1>
            <p className={styles.heroSubtitle}>
              Explore our collection of articles covering technology, design, business, and more. 
              Stay updated with the latest trends and insights from our team.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <BookOpen className={styles.statIcon} />
                <span className={styles.statNumber}>{blogPosts.length}</span>
                <span className={styles.statLabel}>Articles</span>
              </div>
              <div className={styles.stat}>
                <Users className={styles.statIcon} />
                <span className={styles.statNumber}>{new Set(blogPosts.map(p => p.author.name)).size}</span>
                <span className={styles.statLabel}>Authors</span>
              </div>
              <div className={styles.stat}>
                <Calendar className={styles.statIcon} />
                <span className={styles.statNumber}>{blogCategories.length}</span>
                <span className={styles.statLabel}>Categories</span>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Posts */}
        <section className={styles.latestPosts}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Latest Articles</h2>
          </div>
          
          <div className={styles.postsGrid}>
            {latestPosts.map(post => (
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
                    <span className={styles.postAuthor}>{post.author.name}</span>
                    <span className={styles.postDate}>{formatDate(post.publishedAt)}</span>
                    <span className={styles.postReadTime}>{post.readTime} min read</span>
                  </div>
                  
                  <h3 className={styles.postTitle}>
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className={styles.postExcerpt}>
                    {post.excerpt}
                  </p>
                  
                  <div className={styles.postTags}>
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className={styles.postTag}>
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className={styles.postTag}>
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                    Read More
                    <ArrowRight className={styles.readMoreIcon} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
