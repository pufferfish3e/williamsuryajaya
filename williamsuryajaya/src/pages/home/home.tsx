import styles from './home.module.css';

export default function Home() {
    return(
        <section className={styles.heroContainer}>
            <div className={styles.itemDiv}>
                <div className={styles.firstNameDiv}>
                    <h1 className={styles.heroTextFirstName}>WILLIAM</h1>
                </div>
                <div className={styles.lastNameDiv}>
                    <h2 className={styles.heroTextLastName}>SURYA</h2>
                    <h2 className={styles.heroTextLastName}>JAYA</h2>
                </div>
            </div>
        </section>
    )
}