import styles from './home.module.css';
import FadeIn from '../../components/fadeIn';
import ProfilePhoto from '../../assets/profilephoto.jpeg';
import TopImage from '../../assets/unifieddesignsystem.jpeg';
import dbsImage from '../../assets/dbs.jpeg';
import tmrwImage from '../../assets/tmrw.jpeg';
import ocbImage from '../../assets/ocb.jpeg';
import imdaImage from '../../assets/imda.jpeg';
import circlesxImage from '../../assets/circlesx.jpeg';

export default function Home() {
    return(
        <>
        <section className={styles.heroContainer}>
            <FadeIn>
            <div className={styles.itemDiv}>
                <div className={styles.profileDiv}>
                    <div className={styles.loaderRing}></div>
                    <img src={ProfilePhoto} alt='placeholder image'></img>
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
            </FadeIn>
        </section>
        <section className={styles.heroTextContainer}>
            <div className={styles.textBox}>
            <FadeIn>
                <h3>Your go-to-wizard for digital transformation, impactful design and product innovation</h3>
            </FadeIn>
            <FadeIn>
                <p>With over 13 years of experience in digital products, my expertise and creative leadership spans various industries, including but not limited to retail banking, corporate banking, financial services, government projects, etc.</p>
            </FadeIn>
            </div>
        </section>
        <section className={styles.storyContainer}>
            <FadeIn>
                <div className={styles.storyLargeTextContainer}>
                    <span className={styles.gradientBlob}></span>
                    <div className={styles.storyLargeText}>STORY</div>
                </div>
            </FadeIn>
            <FadeIn>
                <div>
                    <img className={styles.storyImageTop} src={TopImage} alt='image1'></img>
                </div>
            </FadeIn>
            <FadeIn>
                <div className={styles.experienceImageContainer}>
                    <img src={dbsImage} alt='image2'/>
                    <img src={tmrwImage} alt='image3' />
                    <img src={ocbImage} alt='image4' />
                </div>
            </FadeIn>
        </section>
        <section>
            <div className={styles.experienceContainer}>
                <div className={styles.textBox}>
                <FadeIn>
                    <h3>Transformation always starts with the shift of <u>mindset.</u></h3>
                </FadeIn>
                <FadeIn>
                    <p>One of my personal joys is to see how my client's behavior, thought process and approach change after learning design thinking. As a self-taught design thinker, I run workshops and trainings to help multiple businesses achieve impactful outcomes.</p>
                </FadeIn>
                </div>
                <FadeIn>
                <span className={styles.experienceSpinner} /> 
                <img src={imdaImage} alt='image5'></img>
                </FadeIn>
            </div>
        </section>
        <section>
            <div className={styles.experienceContainer}>
                <div className={styles.textBox}>
                <FadeIn>
                    <h3>Concept powered with <u>research</u> is a magic in the making.</h3>
                </FadeIn>
                <FadeIn>
                    <p>I believe that understanding and analysis are the foundations of creative practice that lead to holistic end-to-end design solutions.</p>
                </FadeIn>
                </div>
                <FadeIn> 
                    <img src={circlesxImage} alt='image5'></img>
                </FadeIn>
            </div>
        </section>
        </>
    )
}