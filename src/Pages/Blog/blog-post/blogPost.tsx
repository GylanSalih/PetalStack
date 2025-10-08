import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Bookmark, Heart } from 'lucide-react';
import { useDarkMode } from '../../../contexts/darkModeContext';
import { BlogPost as BlogPostType } from '../../../types/blog';
import { getBlogPostBySlug, blogPosts, blogCategories } from '../../../data/blogData';
import styles from './blogPost.module.scss';

const BlogPost = (): React.ReactElement => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    if (slug) {
      const foundPost = getBlogPostBySlug(slug);
      if (foundPost) {
        setPost(foundPost);
        setLikeCount(Math.floor(Math.random() * 100) + 10); // Random like count for demo
        
        // Find related posts (same category, excluding current post)
        const related = blogPosts
          .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
          .slice(0, 3);
        setRelatedPosts(related);
      } else {
        // Post not found, redirect to blog grid
        navigate('/blog');
      }
    }
  }, [slug, navigate]);

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

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // In a real app, you would save this to a backend or localStorage
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    // In a real app, you would save this to a backend
  };

  const renderMarkdownContent = (content: string) => {
    // Simple markdown rendering for demo purposes
    // In a real app, you would use a proper markdown parser like react-markdown
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h1 key={index} className={styles.contentH1}>{line.substring(2)}</h1>;
        } else if (line.startsWith('## ')) {
          return <h2 key={index} className={styles.contentH2}>{line.substring(3)}</h2>;
        } else if (line.startsWith('### ')) {
          return <h3 key={index} className={styles.contentH3}>{line.substring(4)}</h3>;
        } else if (line.startsWith('- ')) {
          return <li key={index} className={styles.contentLi}>{line.substring(2)}</li>;
        } else if (line.startsWith('**') && line.endsWith('**')) {
          return <strong key={index} className={styles.contentStrong}>{line.substring(2, line.length - 2)}</strong>;
        } else if (line.trim() === '') {
          return <br key={index} />;
        } else if (line.startsWith('```')) {
          return <div key={index} className={styles.contentCodeBlock}>Code block</div>;
        } else {
          return <p key={index} className={styles.contentP}>{line}</p>;
        }
      });
  };

  if (!post) {
    return (
      <div className={`${styles.blogPost} ${isDarkMode ? styles.dark : ''}`}>
        <div className={styles.container}>
          <div className={styles.loading}>
            <h2>Loading...</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.blogPost} ${isDarkMode ? styles.dark : ''}`}>
      <div className={styles.container}>
        {/* Back Button */}
        <div className={styles.backButton}>
          <Link to="/blog" className={styles.backLink}>
            <ArrowLeft className={styles.backIcon} />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className={styles.articleHeader}>
          <div className={styles.categoryBadge} style={{ backgroundColor: getCategoryColor(post.category) }}>
            {blogCategories.find(cat => cat.slug === post.category)?.name}
          </div>
          
          <h1 className={styles.articleTitle}>{post.title}</h1>
          
          <p className={styles.articleExcerpt}>{post.excerpt}</p>
          
          <div className={styles.articleMeta}>
            <div className={styles.authorInfo}>
              {post.author.avatar && (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className={styles.authorAvatar}
                />
              )}
              <div className={styles.authorDetails}>
                <span className={styles.authorName}>{post.author.name}</span>
                {post.author.bio && (
                  <span className={styles.authorBio}>{post.author.bio}</span>
                )}
              </div>
            </div>
            
            <div className={styles.metaInfo}>
              <div className={styles.metaItem}>
                <Calendar className={styles.metaIcon} />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className={styles.metaItem}>
                <Clock className={styles.metaIcon} />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>

          <div className={styles.articleActions}>
            <button
              onClick={handleLike}
              className={`${styles.actionButton} ${isLiked ? styles.actionButtonActive : ''}`}
            >
              <Heart className={styles.actionIcon} />
              <span>{likeCount}</span>
            </button>
            
            <button
              onClick={handleBookmark}
              className={`${styles.actionButton} ${isBookmarked ? styles.actionButtonActive : ''}`}
            >
              <Bookmark className={styles.actionIcon} />
              <span>Save</span>
            </button>
            
            <button onClick={handleShare} className={styles.actionButton}>
              <Share2 className={styles.actionIcon} />
              <span>Share</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className={styles.featuredImage}>
            <img
              src={post.featuredImage}
              alt={post.title}
              className={styles.featuredImageImg}
            />
          </div>
        )}

        {/* Article Content */}
        <article className={styles.articleContent}>
          <div className={styles.content}>
            {renderMarkdownContent(post.content)}
          </div>
        </article>

        {/* Tags */}
        <div className={styles.tagsSection}>
          <h3 className={styles.tagsTitle}>Tags</h3>
          <div className={styles.tags}>
            {post.tags.map(tag => (
              <span key={tag} className={styles.tag}>
                <Tag className={styles.tagIcon} />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        {post.author.bio && (
          <div className={styles.authorBioSection}>
            <h3 className={styles.authorBioTitle}>About the Author</h3>
            <div className={styles.authorBioContent}>
              {post.author.avatar && (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className={styles.authorBioAvatar}
                />
              )}
              <div className={styles.authorBioText}>
                <h4 className={styles.authorBioName}>{post.author.name}</h4>
                <p className={styles.authorBioDescription}>{post.author.bio}</p>
              </div>
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className={styles.relatedPosts}>
            <h3 className={styles.relatedPostsTitle}>Related Articles</h3>
            <div className={styles.relatedPostsGrid}>
              {relatedPosts.map(relatedPost => (
                <article key={relatedPost.id} className={styles.relatedPostCard}>
                  {relatedPost.featuredImage && (
                    <div className={styles.relatedPostImage}>
                      <img
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className={styles.relatedPostContent}>
                    <h4 className={styles.relatedPostTitle}>
                      <Link to={`/blog/${relatedPost.slug}`}>
                        {relatedPost.title}
                      </Link>
                    </h4>
                    <p className={styles.relatedPostExcerpt}>
                      {relatedPost.excerpt}
                    </p>
                    <div className={styles.relatedPostMeta}>
                      <span className={styles.relatedPostDate}>
                        {formatDate(relatedPost.publishedAt)}
                      </span>
                      <span className={styles.relatedPostReadTime}>
                        {relatedPost.readTime} min read
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogPost;