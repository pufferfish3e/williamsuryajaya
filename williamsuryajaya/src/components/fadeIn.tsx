import {useState, useRef, useEffect} from 'react';

export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setVisible(true);
                if (domRef.current) {
                    observer.unobserve(domRef.current);
                }
            }
        });
        if (domRef.current) {
            observer.observe(domRef.current);
        }
        return () => {observer.disconnect()};
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