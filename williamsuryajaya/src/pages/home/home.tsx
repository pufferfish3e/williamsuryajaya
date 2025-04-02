import styles from './home.module.css';
import FadeIn from '../../components/fadeIn';
import Data from "../../data";
import {Link} from 'react-router-dom';

const ProfilePhoto = "/images/profilephoto.jpeg";
const circlesxImage = "/images/hero6.png";
const dbsImage = "/images/hero2.png";
const imdaImage = "/images/hero5.png";
const ocbImage = "/images/hero4.png";
const tmrwImage = "/images/hero3.png";
const TopImage = "/images/hero1.png";


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
                <h3>{Data.heroSection.title1}</h3>
            </FadeIn>
            <FadeIn>
                <p>{Data.heroSection.description1}</p>
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
                            <h3 className={styles.imageTitle}>{Data.heroSection.title2}</h3>
                            <Link to='/standardchartered' ><button className={styles.imageButton}>View Story</button></Link>
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
                            <h3 className={styles.imageTitleSmall}>{Data.heroSection.title3}</h3>
                            <button className={styles.imageButtonSmall}>View Story</button>
                        </div>
                    </div>
                </div>
                <div className={styles.storyImageSmall}>
                    <div className={styles.storyImageContainerSmall}>
                        <img className={styles.storyImageTopSmall} src={tmrwImage} alt='image3' />
                        <div className={styles.imageOverlaySmall}>
                            <h3 className={styles.imageTitleSmall}>{Data.heroSection.title4}</h3>
                            <button className={styles.imageButtonSmall}>View Story</button>
                        </div>
                    </div>
                </div>
                <div className={styles.storyImageSmall}>
                    <div className={styles.storyImageContainerSmall}>
                        <img className={styles.storyImageTopSmall} src={ocbImage} alt='image4' />
                        <div className={styles.imageOverlaySmall}>
                            <h3 className={styles.imageTitleSmall}>{Data.heroSection.title5}</h3>
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
                    <h3>{Data.heroSection.title6}</h3>
                </FadeIn>
                <FadeIn>
                    <p>{Data.heroSection.description6}</p>
                </FadeIn>
                </div>
                <FadeIn>
                <span className={styles.experienceSpinner} /> 
                <div className={styles.storyImage}>
                    <div className={styles.storyImageContainer}>
                        <img className={styles.storyImageTop} src={imdaImage} alt='image5' />
                        <div className={styles.imageOverlay}>
                            <h3 className={styles.imageTitle}>{Data.heroSection.title7}</h3>
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
                    <h3>{Data.heroSection.title8}</h3>
                </FadeIn>
                <FadeIn>
                    <p>{Data.heroSection.description8}</p>
                </FadeIn>
                </div>
                <FadeIn> 
                <div className={styles.storyImage}>
                    <div className={styles.storyImageContainer}>
                        <img className={styles.storyImageTop} src={circlesxImage} alt='image6' />
                        <div className={styles.imageOverlay}>
                            <h3 className={styles.imageTitle}>{Data.heroSection.title9}</h3>
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