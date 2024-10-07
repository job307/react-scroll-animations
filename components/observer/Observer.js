import { useEffect, useState, useRef } from 'react';
import styles from './Observer.module.css';

export default function Observer({ children }) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(callbackFunction, options);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        }
    }, [containerRef]);

    return (
        <div className={styles.body}>
            <div ref={containerRef} className={styles.spacer}>
                <section className={isVisible ? styles.show : styles.hidden}>
                    {children}
                </section>
            </div>
        </div>
    );
}
