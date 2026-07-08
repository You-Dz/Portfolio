import { useState, useEffect } from 'react';
import { getUrl } from '../../api/http';
import SkillCard from '../../components/SkillCard/SkillCard';
import './Skills.scss';
function Skills() {
    const [skills, setSkills] = useState([]);
    const url = import.meta.env.VITE_API_URL;
    useEffect(() => {
        async function fetchSkills() {
            const data = await getUrl(`${url}skills`);
            setSkills(data);
        }
        fetchSkills();
    }, [url]);
    return (
        <>
            <div className="skills-header">
                <h1 className="page-title skills-header_title">Mes compétences</h1>
            </div>
            <div className="skills-body">
                <p className="skills-body_intro">  Voici les technologies avec lesquelles je travaille, du front au back.
                    Les niveaux indiqués reflètent mon aisance sur chacune — de la découverte à la pratique confortable.</p>
                <p className="skills-body_legend">
                    <span className="dot dot--filled" /> Plus il y a de points, plus la techno m'est familière.
                </p>
                <div className="skills-body_grid" aria-label="Galerie de mes compétences">
                    {skills.map((skill) => (
                        <SkillCard key={skill._id} data={skill} />
                    ))}
                </div>
                <div className="skills-body_favorite">
                    <h2>Ce que j'aime faire</h2>
                    <p>Factoriser et structurer — organiser le code pour qu'il soit maintenable et lisible par tous.</p>
                    <p>Penser l'architecture — anticiper les évolutions,concevoir des solutions évolutives.</p>
                    <p>Logique métier & back-end — là où le vrai problème se cache, et où je prends plaisir à résoudre.</p>
                </div>
            </div >
            <div className="skills-footer">
                <h2>Mes 3 mots</h2>
                <div className="skills-footer_tags">
                    <span className="skills-footer_tags--tag">Adaptable</span>
                    <span className="skills-footer_tags--tag">Logique</span>
                    <span className="skills-footer_tags--tag">Structuré</span>
                </div>
            </div>

        </>
    )
}
export default Skills