import styles from './page.module.css';
import GoBack from '../../components/goback';
import FadeIn from '../../components/fadeIn';
import Data from '../../data';
import PageTransition from '../../components/pageTransition';


const Image1 = "/images/st1.png";
const Image2 = "/images/st2.png";
const Image3 = "./images/st3.png";
const Image4 = "./images/st4.png";
const Image5 = "./images/st5.png";

export default function Page() {
    return (
        <PageTransition>
        <>
        <GoBack />
        <section>
            <div className={styles.mainContainer}>
                    <img src={Image1}></img>
                <FadeIn delay={0}>
                    <p>{Data.standardCharteredSection.description1}</p>
                    <p>{Data.standardCharteredSection.description2}</p>
                </FadeIn>
                <FadeIn>
                    <img className={styles.image} src={Image2}></img>
                </FadeIn>
                <FadeIn>
                    <div className={styles.textContainer}>
                        <h5>PROBLEM STATEMENT</h5>
                        <h1>{Data.standardCharteredSection.title3}</h1>
                        <p>{Data.standardCharteredSection.description3}</p>
                    </div>
                </FadeIn>
                <FadeIn>
                    <img src={Image3}></img>
                </FadeIn>
                <FadeIn>
                    <div className={styles.textContainer}>
                        <h5>INSIGHTS</h5>
                        <h1>{Data.standardCharteredSection.title4}</h1>
                        <p>{Data.standardCharteredSection.description4}</p>
                    </div>
                </FadeIn>
                <FadeIn>
                    <img className={`${styles.image4} ${styles.image}`} src={Image4}></img>
                </FadeIn>
                <FadeIn>
                    <img className={styles.image} src={Image5}></img>
                </FadeIn>
                    
            </div>
        </section>
        </>
        </PageTransition>
    )
}
