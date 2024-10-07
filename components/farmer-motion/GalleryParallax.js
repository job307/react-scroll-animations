import { useEffect, useRef, useState } from 'react';
import styles from './GalleryParallax.module.css';
import Image from 'next/image';
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
]

export default function GalleryParallax() {

    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    })
    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

    useEffect(() => {
        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight })
        }

        window.addEventListener("resize", resize)
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])

    return (
        <main className={styles.main}>
            <div className={styles.spacer}></div>
            <div ref={gallery} className={styles.gallery}>
                <div className={styles.galleryWrapper}>
                    <Column images={[images[0], images[1], images[2]]} y={y} offset={30} /> {/* the top is not set; Idk why yet */}
                    <Column images={[images[3], images[4], images[5]]} y={y2} offset={70} />
                    <Column images={[images[6], images[7], images[8]]} y={y3} offset={30} />
                    <Column images={[images[9], images[10], images[11]]} y={y4} offset={60} />
                </div>
            </div>
            <div className={styles.spacer}></div>
        </main>
    )
}

const Column = ({ images, y, offset }) => {
    return (
        <motion.div
            className={styles.column}
            style={{
                y,
                top: '-' + offset + '%',
            }}
        >
            {
                images.map((src, i) => {
                    return <div key={i} className={styles.imageContainer}>
                        <Image
                            className={styles.img}
                            src={`/images/${src}`}
                            alt='image'
                            fill
                        />
                    </div>
                })
            }
        </motion.div>
    )
}