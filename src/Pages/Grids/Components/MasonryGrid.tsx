import React from 'react';
import { Heart, MessageCircle, Share, Bookmark } from 'lucide-react';
import styles from './masonryGrid.module.scss';

const MasonryGrid = (): React.ReactElement => {
  const pins = [
    {
      id: 1,
      image: "/public/assets/img/placeholder.svg",
      title: "Modern Web Design Inspiration",
      description: "Kreative Ansätze für moderne Webentwicklung",
      likes: 234,
      comments: 12,
      user: {
        name: "Max Designer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
      }
    },
    {
      id: 2,
      image: "/public/assets/img/placeholder.svg",
      title: "UI/UX Best Practices",
      description: "Sammlung von bewährten Design-Prinzipien für benutzerfreundliche Interfaces",
      likes: 189,
      comments: 8,
      user: {
        name: "Anna UI",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
      }
    },
    {
      id: 3,
      image: "/public/assets/img/placeholder.svg",
      title: "Color Palette Ideas",
      description: "Inspirierende Farbkombinationen",
      likes: 567,
      comments: 23,
      user: {
        name: "Tom Colors",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
      }
    },
    {
      id: 4,
      image: "/public/assets/img/placeholder.svg",
      title: "Typography Trends 2024",
      description: "Die neuesten Trends in der Typografie für digitale Medien und Print-Design",
      likes: 342,
      comments: 19,
      user: {
        name: "Lisa Type",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
      }
    },
    {
      id: 5,
      image: "/public/assets/img/placeholder.svg",
      title: "Mobile App Interface",
      description: "Elegante mobile UI Designs",
      likes: 445,
      comments: 15,
      user: {
        name: "David Mobile",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
      }
    },
    {
      id: 6,
      image: "/public/assets/img/placeholder.svg",
      title: "Minimalist Design",
      description: "Weniger ist mehr - minimalistische Design-Ansätze für moderne Websites",
      likes: 678,
      comments: 31,
      user: {
        name: "Sarah Minimal",
        avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
      }
    },
    {
      id: 7,
      image: "/public/assets/img/placeholder.svg",
      title: "Icon Design Systems",
      description: "Konsistente Icon-Systeme für bessere UX",
      likes: 123,
      comments: 7,
      user: {
        name: "Mike Icons",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
      }
    },
    {
      id: 8,
      image: "/public/assets/img/placeholder.svg",
      title: "Dark Mode Designs",
      description: "Elegante Dark Mode Implementierungen für verschiedene Anwendungen",
      likes: 789,
      comments: 42,
      user: {
        name: "Nina Dark",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face&auto=format&q=60"
      }
    }
  ];

  return (
    <div className={styles.masonryGrid}>
      {pins.map((pin) => (
        <div 
          key={pin.id} 
          className={styles.pin}
        >
          <div className={styles.imageContainer}>
            <img src={pin.image} alt={pin.title} />
            <div className={styles.overlay}>
              <button className={styles.saveBtn}>
                <Bookmark size={18} />
                Speichern
              </button>
            </div>
          </div>
          
          <div className={styles.content}>
            <h3>{pin.title}</h3>
            <p>{pin.description}</p>
            
            <div className={styles.actions}>
              <button className={styles.actionBtn}>
                <Heart size={16} />
                <span>{pin.likes}</span>
              </button>
              <button className={styles.actionBtn}>
                <MessageCircle size={16} />
                <span>{pin.comments}</span>
              </button>
              <button className={styles.actionBtn}>
                <Share size={16} />
              </button>
            </div>
            
            <div className={styles.user}>
              <img src={pin.user.avatar} alt={pin.user.name} />
              <span>{pin.user.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
