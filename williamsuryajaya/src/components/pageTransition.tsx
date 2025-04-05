import { useEffect, useLayoutEffect, useRef, PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }: PropsWithChildren) {
  const location = useLocation();
  const scrollingEnabledRef = useRef(false);
  
  // Use useLayoutEffect for immediate scroll before paint
  useLayoutEffect(() => {
    // First approach: standard scrollTo
    window.scrollTo(0, 0);
    
    // Second approach: documentElement scrollTo
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use instant for immediate scroll
    });
    
    // Third approach: direct property setting
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
    
    // Mark scrolling as enabled
    scrollingEnabledRef.current = true;
  }, [location.pathname]);
  
  // Additional useEffect to ensure scrolling is enabled
  useEffect(() => {
    // Explicitly enable scrolling
    const enableScrolling = () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      document.body.style.height = 'auto';
      document.documentElement.style.height = 'auto';
    };
    
    // Run immediately
    enableScrolling();
    
    // Also run after a short delay to handle any race conditions
    const timer = setTimeout(enableScrolling, 10);
    
    return () => {
      clearTimeout(timer);
      // Always ensure scrolling is enabled when unmounting
      enableScrolling();
    };
  }, [location.pathname]);
  
  return (
    <div style={{ 
      // Ensure the content doesn't do anything that prevents scrolling
      minHeight: '100%',
      position: 'relative', 
      overflow: 'visible' 
    }}>
      {children}
    </div>
  );
}