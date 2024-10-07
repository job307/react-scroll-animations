import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styles from './MultiLayerParallax.module.css';

export default function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "450%"]);

    return (
        <div ref={ref} className={styles.wrapper} >
            <motion.h1 className={styles.heading} style={{ y: textY }} >
                PARALLAX
            </motion.h1>

            <motion.div className={styles.backgroundImage}
                style={{ y: backgroundY }} />
            <div className={styles.foregroundImage} />
        </div>
    );
}
