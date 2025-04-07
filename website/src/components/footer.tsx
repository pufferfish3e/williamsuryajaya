import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Layout() {
    return (
        <div className={styles.layoutContainer}>
            <main className={styles.mainContent}>
            </main>
            <footer className={styles.footer}>
                <div className={styles.info}>
                    <a><FontAwesomeIcon icon={faPhone} className={styles.Icon}/><b> (+65) 83828512</b></a>
                    <a><FontAwesomeIcon icon={faEnvelope} className={styles.Icon} /><b> sunvicstudio@gmail.com</b></a>
                </div>
                <div className={styles.cvbutton}>
                    <button>View CV</button>
                </div>
            </footer>
        </div>
    )
}