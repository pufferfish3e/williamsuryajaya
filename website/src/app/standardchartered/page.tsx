'use client';

import styles from './standardchartered.module.css';
import FadeIn from '@/components/fadeIn';
import Data from '@/data/data';
import Image from 'next/image';

const Image1 = "/images/st1.png";
const Image2 = "/images/st2.png";
const Image3 = "/images/st3.png";
const Image4 = "/images/st4.png";
const Image5 = "/images/st5.png";

export default function Page() {
    return (
        <>
        <section>
            <div className={styles.mainContainer}>
                <FadeIn>
                    <div className={styles.imageWrapper}>
                        <Image src={Image1} fill alt='image1' className={styles.image}/>
                    </div>
                </FadeIn>
                    
                <FadeIn>
                    <p>{Data.standardCharteredSection.description1}</p>
                    <p>{Data.standardCharteredSection.description2}</p>
                </FadeIn>
                    
                <FadeIn>
                    <div className={styles.imageWrapper}>
                        <Image src={Image2} fill alt='image2' className={styles.image} />
                    </div>
                </FadeIn>
                    
                <div className={styles.textContainer}>
                    <FadeIn>
                        <h5>PROBLEM STATEMENT</h5>
                        <h1>{Data.standardCharteredSection.title3}</h1>
                        <p>{Data.standardCharteredSection.description3}</p>
                    </FadeIn>
                </div>
                
                <FadeIn>
                    <div className={styles.imageWrapper}>
                        <Image src={Image3} fill alt='image3' className={styles.image} />
                    </div>
                </FadeIn>
                
                <div className={styles.textContainer}>
                    <FadeIn>
                        <h5>INSIGHTS</h5>
                        <h1>{Data.standardCharteredSection.title4}</h1>
                        <p>{Data.standardCharteredSection.description4}</p>
                    </FadeIn>
                </div>
                
                <FadeIn>
                    <div className={`${styles.imageWrapper} ${styles.image4Wrapper}`}>
                        <Image src={Image4} fill alt='image4' className={styles.image} />
                    </div>
                </FadeIn>
                
                <FadeIn>
                    <div className={styles.imageWrapper}>
                        <Image src={Image5} fill alt='image5' className={styles.image} />
                    </div>
                </FadeIn>
            </div>
        </section>
        </>
    )
}