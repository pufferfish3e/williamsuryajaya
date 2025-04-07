'use client';

import styles from './home.module.css';
import FadeIn from '@/components/fadeIn';
import Data from "@/data/data";
import Image from "next/image";
import Link from "next/link";
const ProfilePhoto = "/images/profilephoto.jpeg";
const hero1 = "/images/hero1.png";
const hero2 = "/images/hero2.png";
const hero3 = "/images/hero3.png";
const hero4 = "/images/hero4.png";
const hero5 = "/images/hero5.png";
const hero6 = "/images/hero6.png";

export default function Home() {
    return(
        <>
        <section className={styles.heroContainer}>
            <FadeIn>
            <div className={styles.itemDiv}>
                <div className={styles.profileDiv}>
                    <div className={styles.loaderRing}></div>
                    <div className={styles.profilePhotoContainer}>
                    <Image src={ProfilePhoto} alt='placeholder image' fill style={{ objectFit: 'cover'}} />
                    </div> 
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
                        <Image className={`${styles.storyImageTop} ${styles.storyImage1}`} src={hero1} width={1000} height={450} alt='image1' id='image1'/>
                        <div className={styles.imageOverlay}>
                            <h3 className={styles.imageTitle}>{Data.heroSection.title2}</h3>
                            <Link href="/standardchartered"><button className={styles.imageButton}>View Story</button></Link>
                        </div>
                    </div>
                </div>
            </FadeIn>
            <FadeIn>
                <div className={styles.experienceImageContainer}>
                <div className={styles.storyImageSmall}>
                    <div className={styles.storyImageContainerSmall}>
                        <Image className={styles.storyImageTopSmall} src={hero2} fill alt='image2' />
                        <div className={styles.imageOverlaySmall}>
                            <h3 className={styles.imageTitleSmall}>{Data.heroSection.title3}</h3>
                            <button className={styles.imageButtonSmall}>View Story</button>
                        </div>
                    </div>
                </div>
                <div className={styles.storyImageSmall}>
                    <div className={styles.storyImageContainerSmall}>
                        <Image className={styles.storyImageTopSmall} fill src={hero3} alt='image3' />
                        <div className={styles.imageOverlaySmall}>
                            <h3 className={styles.imageTitleSmall}>{Data.heroSection.title4}</h3>
                            <button className={styles.imageButtonSmall}>View Story</button>
                        </div>
                    </div>
                </div>
                <div className={styles.storyImageSmall}>
                    <div className={styles.storyImageContainerSmall}>
                        <Image className={styles.storyImageTopSmall} fill src={hero4} alt='image4' />
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
                        <Image className={styles.storyImageTop} width={800} height={800} src={hero5} alt='image5' id='image5'/>
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
                        <Image className={styles.storyImageTop} width={1000} height={1000} src={hero6} alt='image6' id='image6'/>
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