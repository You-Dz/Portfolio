import './SkillCard.scss'
function SkillCard({ data }) {
    const { name, icon, level, preference, description } = data;

    return (
        <article className='skill-card'>
            {preference && <span className="skill-card_heart" aria-label="Compétence préférée">❤️</span>}
            <div className='skill-card_header'>
                <img className="skill-card_logo" src={`/logos/${icon}.svg`} alt={`Logo ${name}`} />
                <h3 className="skill-card_name">{name}</h3>
            </div>
            <div className='skill-card_level'>
                <span className="skill-card_level-text">Niveau</span>
                <div className="skill-card_level-bar" aria-label="Niveau : 2 sur 3">
                    <div className="skill-card_level-fill" data-level={level}></div>
                </div>
            </div>
            <p className='skill-card_description'>{description}</p>
        </article>
    )
}
export default SkillCard