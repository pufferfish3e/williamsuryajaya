import styles from './page.module.css';
import GoBack from '../../components/goback';
import FadeIn from '../../components/fadeIn';
import Data from '../../data';
import { ScrollRestoration } from 'react-router-dom';


const Image1 = "/images/st1.png";
const Image2 = "/images/st2.png";
const Image3 = "./images/st3.png";
const Image4 = "./images/st4.png";
const Image5 = "./images/st5.png";

export default function Page() {
    return (
        <>
        <ScrollRestoration />
        <GoBack />
        <section>
            <div className={styles.mainContainer}>
                    <FadeIn>
                    <img src={Image1}></img>
                    </FadeIn>
                    <FadeIn>
                    <p>{Data.standardCharteredSection.description1}</p>
                    <p>{Data.standardCharteredSection.description2}</p>
                    </FadeIn>
                    <FadeIn>
                    <img className={styles.image} src={Image2}></img>
                    </FadeIn>
                    

                    <div className={styles.textContainer}>
                        <FadeIn>
                        <h5>PROBLEM STATEMENT</h5>
                        <h1>{Data.standardCharteredSection.title3}</h1>
                        <p>{Data.standardCharteredSection.description3}</p>
                        </FadeIn>
                    </div>
                
                    <FadeIn><img src={Image3}></img></FadeIn>
                
                    <div className={styles.textContainer}>
                        <FadeIn>
                        <h5>INSIGHTS</h5>
                        <h1>{Data.standardCharteredSection.title4}</h1>
                        <p>{Data.standardCharteredSection.description4}</p>
                        </FadeIn>
                    </div>
                
                    <FadeIn><img className={`${styles.image4} ${styles.image}`} src={Image4}></img></FadeIn>
                
                    <FadeIn><img className={styles.image} src={Image5}></img></FadeIn>
                    
            </div>
        </section>
        </>
    )
}
