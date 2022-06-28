import styles from '../styles/Layout.module.css';
import Navbar from './Navbar/Nav';
import Footer from './Footer';

export default function Layout({children}) {
    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <div className={styles.main}>
                    {children}
                </div> 
            </main>
            <Footer />
        </>
    )
}


