import styles from '../styles/Layout.module.css';
import Meta from './Meta';
import Navbar from './Navbar/Nav';
import Footer from './Footer';

function Layout({children}) {
    return (
        <>
            <Meta />
            <Navbar />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main> 
            </div>
            <Footer />
        </>
    )
}

export default Layout
