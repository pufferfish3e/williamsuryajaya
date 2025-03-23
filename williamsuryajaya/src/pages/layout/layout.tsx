import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';

export default function Layout() {
    return (
        <div className={styles.layoutContainer}>
            <main className={styles.mainContent}>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                <div className={styles.info}>
                    <p><i className="fa fa-phone"></i><b> (+65) 83828512</b></p>
                    <p><i className="fa fa-envelope"></i><b> sunvicstudio@gmail.com</b></p>
                </div>
                <div className={styles.cvbutton}>
                    <button>View CV</button>
                </div>
            </footer>
        </div>
    )
}