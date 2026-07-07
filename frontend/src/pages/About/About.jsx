import aboutImage from '../../assets/images/about-image.webp';
import './About.scss'
function About() {
    return (
        <div className="about-main">
            <h1 className='page-title'>Développeur web, orienté logique et architecture</h1>
            <section className="section-presentation">
                <img src={aboutImage} alt='portrait de Yoann' className="hero-img" fetchPriority="high" />
                <div className='section-presentation_text'>
                    <p>
                        Je m'appelle Yoann Doveze. Avant le code, j'ai exercé deux métiers qui ont façonné ma façon de travailler :
                        éducateur canin, puis agent de police municipale. Deux univers très différents, mais une même exigence : la <span className='important'>rigueur, la structure, et l'adaptation permanente.</span>
                    </p>
                    <p>
                        L'informatique m'a toujours attiré. Curieux du développement depuis longtemps, j'ai fini par franchir le pas  et j'y ai retrouvé ce que j'aime profondément :
                        décomposer un problème, le <span className='important'>structurer</span>, et construire une solution claire et durable.
                    </p>
                    <p>
                        Ce qui me motive dans le code, ce n'est pas l'effet visuel : c'est <span className='important'>l'architecture, la factorisation, la logique métier.</span>
                        Ranger les choses pour qu'elles soient <span className='important'>lisibles, réutilisables, et compréhensibles</span> par d'autres que moi. C'est cette dimension back-end que je souhaite développer aujourd'hui.
                    </p>
                </div>
            </section>
            <section className="section-parcours">
                <h2>Un fil conducteur : structurer pour résoudre</h2>
                <div className='section-parcours_content'>
                    <p className='section-parcours_content_subtitle'>Éducateur canin : 2015 – 2022</p>
                    <p className='section-parcours_content_text'>Mon métier reposait sur une méthode simple et exigeante : identifier le besoin, avancer par un travail progressif et répétitif, mesurer chaque progrès, et s'adapter à chaque binôme.
                        Aucun cas n'est identique — ce qui fonctionne pour l'un échoue pour l'autre.
                        J'y ai appris l'<span className='important'>adaptation méthodique</span>, une qualité que je retrouve aujourd'hui face à chaque problème de code.</p>
                </div>
                <div className='section-parcours_content'>
                    <p className='section-parcours_content_subtitle'>Agent de police municipale : depuis 2022</p>
                    <p className='section-parcours_content_text'>Un métier de procédure, où chaque acte — qu'il s'agisse de rédaction ou d'action sur le terrain — doit être <span className='important'>rigoureux</span> : tout acte mal cadré a des conséquences réelles.
                        J'y ai développé un réflexe que j'applique aujourd'hui au code : comprendre, répondre et transmettre, de façon concise, structurée et claire.
                        J'ai aussi appris à gérer des situations sous pression, en <span className='important'>coordination</span> étroite avec une équipe.</p>
                </div>
                <div className='section-parcours_content'>
                    <p className='section-parcours_content_subtitle'>Développeur web — OpenClassrooms : Reconversion</p>
                    <p className='section-parcours_content_text'>J'ai saisi l'opportunité de me lancer dans un domaine qui m'attirait depuis toujours.
                        La formation m'a confirmé mon attrait pour la logique métier et le back-end, au point que c'est cette voie que je veux approfondir.</p>
                </div>
            </section>
        </div>

    )
}
export default About