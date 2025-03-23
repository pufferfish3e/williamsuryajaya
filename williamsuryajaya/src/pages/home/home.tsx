import styles from './home.module.css';
import FadeIn from '../../components/fadeIn';

export default function Home() {
    return(
        <>
        <section className={styles.heroContainer}>
            <div className={styles.itemDiv}>
                <div className={styles.profileDiv}>
                    <div className={styles.loaderRing}></div>
                    <img src='/' alt='placeholder image'></img>
                    <span className={styles.profileBackground}></span>
                </div>
                <div className={styles.firstNameDiv}>
                    <h1 className={styles.heroTextFirstName}>WILLIAM</h1>
                </div>
                <div className={styles.lastNameDiv}>
                    <h2 className={styles.heroTextLastName}>SURYA</h2>
                    <h2 className={styles.heroTextLastName}>JAYA</h2>
                </div>
            </div>
        </section>
        <section className={styles.heroTextContainer}>
            <FadeIn>
            <div className={styles.textBox}>
                <h3>Your go-to-wizard for digital transformation, impactful design and product innovation</h3>
                <p>With over 13 years of experience in digital products, my expertise and creative leadership spans various industries, including but not limited to retail banking, corporate banking, financial services, government projects, etc.</p>
            </div>
            </FadeIn>
        <section className={styles.storyContainer}>
            <FadeIn>
                <div className={styles.storyLargeTextContainer}>
                    <span className={styles.gradientBlob}></span>
                    <h1 className={styles.storyLargeText}>STORY</h1>
                </div>
            </FadeIn>
        </section>
        </section>
        </>
    )
}