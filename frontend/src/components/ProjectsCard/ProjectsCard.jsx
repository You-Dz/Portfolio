import './ProjectsCard.scss';
function ProjectCard({ project, onOpen, isFirst }) {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpen();
        }
    };
    const displayTags = project.techs.slice(0, 3);

    return (
        <article className="project-card" onClick={onOpen} onKeyDown={handleKeyDown} role="button" tabIndex={0} aria-label={`Voir le projet ${project.title}`}>
            {project.cover ? (
                <img src={`/images/projects/${project.cover}`} alt={project.title} className="project-card_cover" loading={isFirst ? "eager" : "lazy"} fetchPriority={isFirst ? "high" : "auto"} />
            ) : (
                <div className="project-card_cover project-card_cover_empty" aria-hidden="true" />
            )}
            <div className='project-card_resume'>{project.resume}</div>
            <div className="project-card_tags">
                {displayTags.map((tech) => (
                    <span key={tech.name} className="tag">{tech.name}</span>
                ))}
            </div>
        </article>
    )
}
export default ProjectCard