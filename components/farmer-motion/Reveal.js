import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./Reveal.module.css";

export const Reveal = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const mainControls = useAnimation();
    const slideContols = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideContols.start("visible");
        } else {
            mainControls.start("hidden");
            slideContols.start("hidden");
        }
    }, [isInView]);

    return (
        <div ref={ref} className={styles.wrapper}>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: '100%' }
                }}
                initial="hidden"
                animate={slideContols}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className={styles.backAnimation}
            >
            </motion.div>

            <motion.div variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
            }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>

        </div>
    )
}