import { Link } from "react-router-dom";
import testImage from '../../assets/images/test-image.webp';
import HomeCard from "../../components/HomeCard/HomeCard";
import './Home.scss';
function Home() {
    return (
        <main className="home-body">

            <section className="section-hero">
                <div className="hero-text">
                    <h1 className="page-title" >Yoann Doveze Développeur Web</h1>
                    <p>Développeur web, orienté logique et architecture.
                        Éducateur canin, puis policier municipal, aujourd'hui développeur : un même réflexe me suit depuis toujours — structurer pour résoudre.</p>
                    <div className="hero-cta">
                        <button className="cta-button">Mes projets</button>
                        <button className="cta-button">À propos</button>
                    </div>
                </div>
                <img className="hero-img" src={testImage} alt="Image portrait de Yoann" />
            </section>
            <section className="section-cards">
                <Link className="section-card_link" to='/projects' >
                    <HomeCard img={testImage} alt="Image descriptive de la page du site visée" title="Nom page visée" text="Description sommaire page visée" />
                </Link>
                <Link className="section-card_link" to='/about'>
                    <HomeCard img={testImage} alt="Image descriptive de la page du site visée" title="Nom page visée" text="Description sommaire page visée" />
                </Link>
                <Link className="section-card_link" to='/skills'>
                    <HomeCard img={testImage} alt="Image descriptive de la page du site visée" title="Nom page visée" text="Description sommaire page visée" />
                </Link>
            </section>
        </main>
    );
}
export default Home;