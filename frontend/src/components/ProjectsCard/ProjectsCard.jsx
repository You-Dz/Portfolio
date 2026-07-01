import './ProjectsCard.scss';
function ProjectCard({ data, onOpen }) {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpen();
        }
    };
    const displayTags = data.techs.slice(0, 3);

    return (
        <article className="project-card" onClick={onOpen} onKeyDown={handleKeyDown} role="button" tabIndex={0} aria-label={`Voir le projet ${data.title}`}>
            {data.cover ? (
                <img src={`/images/${data.cover}`} alt={data.title} className="project-card_cover" />
            ) : (
                <div className="project-card_cover project-card_cover_empty" aria-hidden="true" />
            )}
            <div className="project-card_tags">
                {displayTags.map((tech) => (
                    <span key={tech.name} className="tag">{tech.name}</span>
                ))}
            </div>
        </article>
    )
}
export default ProjectCard