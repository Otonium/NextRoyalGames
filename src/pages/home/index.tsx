import Header from "@/src/components/header/header"
import styles from "./home.module.css"//import de estilos

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <section id={styles.banner}>
                    <div className={`${styles.container_banner} layout_guide`}>
                        <h1>Boas vindas</h1>
                        <img src="" alt="" />
                        <div id={styles.botoes_banner_hamburguer}>
                            <button className={styles.btn_catalogo}>
                                <a href="#catalogo">Ver catalogo</a>
                            </button>
                        </div>
                    </div>
                </section>
                <section className={styles.destaques} id="destaques" >
                    <div className={`${styles.container_destaques} layout_guide`}>
                        <article className={styles.card_destaque_mais_pedidos}>
                            <p>Destaques</p>
                        </article>
                    </div>
                </section>
                <section className={styles.catalogo} id="catalogo">
                    <div className={`${styles.container_atalogo} layout_guide`}>
                        <h2>Catalogo</h2>
                        {/* chamar componente da lista */}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home