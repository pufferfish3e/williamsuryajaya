import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './loader';
import styles from './pageTransition.module.css';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    
    setLoading(true);
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });

    const loadingTimer = setTimeout(() => {
      setLoading(false);
      
      // One more scroll check after content is visible
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, 1000);
    
    return () => clearTimeout(loadingTimer);
  }, [pathname]);
  
  return (
    <>
      {loading && (
        <div className={styles.loaderOverlay}>
          <Loader />
        </div>
      )}
      
      <div className={loading ? styles.hidden : ''}>
        {children}
      </div>
    </>
  );
}