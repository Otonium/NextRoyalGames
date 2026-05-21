import styles from "./header.module.css";

const Header = () => {
    return (
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
                <img src="img/Logo-Header.png" alt="Logo do Royal games" id={styles.logo} />
                <nav id={styles.nav_menu}>
                    <a href="#catalogo">Catalogo</a>
                    <a href="/login">Login</a>
                </nav>
                <button id={styles.btn_icon}>
                    <img src="" alt="" />
                </button>
            </div>
        </header>
    )
}

export default Header;