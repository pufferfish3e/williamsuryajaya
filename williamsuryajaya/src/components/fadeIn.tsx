import {useState, useRef, useEffect} from 'react';

export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const currentRef = domRef.current;
        if (!currentRef) return;
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            });
        }, { threshold: 0.4 });
        
        observer.observe(currentRef);
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    
    return (
        <div
            className={`fadeIn ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}