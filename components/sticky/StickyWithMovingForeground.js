import styles from './StickyWithMovingForeground.module.css';

export default function StickyWithMovingForeground() {


    return (
        <>
            <div className={styles.spacer}></div>

            <div className={styles.wrap}>
                <div className={styles.bg}>
                    <h2 className={styles.bgText}>Platzhalter für Hintergrund</h2>
                </div>

                <div className={styles.fg}>
                    <div className={styles.fgContent}>
                        <div className={styles.child1}></div>
                        <div className={styles.child2}></div>
                        <div className={styles.child3}></div>
                        <div className={styles.child4}></div>
                    </div>
                </div>
            </div>

            <div className={styles.spacer}></div>
        </>
    );
}