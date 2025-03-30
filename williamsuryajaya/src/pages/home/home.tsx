import styles from './home.module.css';
import FadeIn from '../../components/fadeIn';
import ProfilePhoto from '../../assets/profilephoto.jpeg';
import TopImage from '../../assets/unifieddesignsystem.jpeg';
import dbsImage from '../../assets/dbs.jpeg';
import tmrwImage from '../../assets/tmrw.jpeg';
import ocbImage from '../../assets/ocb.jpeg';
import imdaImage from '../../assets/imda.jpeg';
import circlesxImage from '../../assets/circlesx.jpeg';
import Data from "../../data";

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
                <h3>{Data.heroSection.title}</h3>
            </FadeIn>
            <FadeIn>
                <p>{Data.heroSection.description}</p>
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
                <div className={styles.storyImage}>
                    <div className={styles.storyImageContainer}>
                        <img className={styles.storyImageTop} src={TopImage} alt='image1' />
                        <div className={styles.imageOverlay}>
                            <h3 className={styles.imageTitle}>{Data.experienceHoverSection.title1}</h3>
                            <button className={styles.imageButton}>View Story</button>
                        </div>
                    </div>
                </div>
            </FadeIn>
            <FadeIn>
                <div className={styles.experienceImageContainer}>
                <div className={styles.storyImageSmall}>
                    <div className={styles.storyImageContainerSmall}>
                        <img className={styles.storyImageTopSmall} src={dbsImage} alt='image2' />
                        <div className={styles.imageOverlaySmall}>
                            <h3 className={styles.imageTitleSmall}>{Data.experienceHoverSection.title2}</h3>
                            <button className={styles.imageButtonSmall}>View Story</button>
                        </div>
                    </div>
                </div>
                <div className={styles.storyImageSmall}>
                    <div className={styles.storyImageContainerSmall}>
                        <img className={styles.storyImageTopSmall} src={tmrwImage} alt='image3' />
                        <div className={styles.imageOverlaySmall}>
                            <h3 className={styles.imageTitleSmall}>{Data.experienceHoverSection.title3}</h3>
                            <button className={styles.imageButtonSmall}>View Story</button>
                        </div>
                    </div>
                </div>
                <div className={styles.storyImageSmall}>
                    <div className={styles.storyImageContainerSmall}>
                        <img className={styles.storyImageTopSmall} src={ocbImage} alt='image4' />
                        <div className={styles.imageOverlaySmall}>
                            <h3 className={styles.imageTitleSmall}>{Data.experienceHoverSection.title4}</h3>
                            <button className={styles.imageButtonSmall}>View Story</button>
                        </div>
                    </div>
                </div>
                </div>
            </FadeIn>
        </section>
        <section>
            <div className={styles.experienceContainer}>
                <div className={styles.textBox}>
                <FadeIn>
                    <h3>{Data.experienceSection.title1}</h3>
                </FadeIn>
                <FadeIn>
                    <p>{Data.experienceSection.description1}</p>
                </FadeIn>
                </div>
                <FadeIn>
                <span className={styles.experienceSpinner} /> 
                <div className={styles.storyImage}>
                    <div className={styles.storyImageContainer}>
                        <img className={styles.storyImageTop} src={imdaImage} alt='image5' />
                        <div className={styles.imageOverlay}>
                            <h3 className={styles.imageTitle}>{Data.experienceHoverSection.title5}</h3>
                            <button className={styles.imageButton}>View Story</button>
                        </div>
                    </div>
                </div>
                </FadeIn>
            </div>
        </section>
        <section>
            <div className={styles.experienceContainer}>
                <div className={styles.textBox}>
                <FadeIn>
                    <h3>{Data.experienceSection.title2}</h3>
                </FadeIn>
                <FadeIn>
                    <p>{Data.experienceSection.description2}</p>
                </FadeIn>
                </div>
                <FadeIn> 
                <div className={styles.storyImage}>
                    <div className={styles.storyImageContainer}>
                        <img className={styles.storyImageTop} src={circlesxImage} alt='image6' />
                        <div className={styles.imageOverlay}>
                            <h3 className={styles.imageTitle}>{Data.experienceHoverSection.title6}</h3>
                            <button className={styles.imageButton}>View Story</button>
                        </div>
                    </div>
                </div>
                </FadeIn>
            </div>
        </section>
        </>
    )
}