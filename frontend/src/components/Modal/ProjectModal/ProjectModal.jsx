import BaseModal from "../BaseModal/BaseModal";
import './ProjectModal.scss';

function ProjectModal({ project, isOpen, onClose }) {
    if (!project) return null;

    return (
        <BaseModal isOpen={isOpen} onClose={onClose} className="project-modal">
            <section className="modal-header">
                <h2 className="modal-title">{project.title}</h2>
                <span className="modal-date">{project.date}</span>
            </section>
            <div className="modal-body">
                <div className="carousel">
                    {project.cover ? (
                        <img src={project.cover} alt={`Aperçu ${project.title}`} className="modal-screenshot" />
                    ) : (
                        <div className="modal-screenshot modal-screenshot_empty" aria-hidden="true" />
                    )}
                </div>
                <section className="modal-body_tech">
                    <span className="modal-body_tech_title">Technologies utilisées</span>
                    <div className="modal-body_tech_logos">
                        {project.techs.map((tech) => (
                            <span key={tech.name} className="modal-body_tech_name">
                                <img src={`/logos/${tech.icon}.svg`} alt={tech.name}
                                    onError={(e) => { e.target.style.display = 'none'; }} />
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </section>
                <div className="modal-body_sections">
                    <section className="modal-section">
                        <h3 className="modal-section_title">Contexte</h3>
                        <p className="modal-section_text">{project.context}</p>
                    </section>


                    <section className="modal-section">
                        <h3 className="modal-section_title">Objectifs</h3>
                        <ul className="modal-section_list">
                            {project.objectives.map((obj, i) => (
                                <li key={i}><span className="dot" />{obj}</li>
                            ))}
                        </ul>
                    </section>


                    <section className="modal-section">
                        <h3 className="modal-section_title">Stack technique</h3>
                        <ul className="modal-section_list">
                            {project.stacks.map((stack, i) => (
                                <li key={i}>{stack}</li>
                            ))}
                        </ul>
                    </section>


                    <section className="modal-section">
                        <h3 className="modal-section_title">Compétences développées</h3>
                        <ul className="modal-section_list">
                            {project.skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </section>


                    <section className="modal-section">
                        <h3 className="modal-section_title">Résultats</h3>
                        <ul className="modal-section_list">
                            {project.results.map((result, i) => (
                                <li key={i}>{result}</li>
                            ))}
                        </ul>
                    </section>


                    <section className="modal-section">
                        <h3 className="modal-section_title">Perspectives d'amélioration</h3>
                        <ul className="modal-section_list">
                            {project.improvements.map((improvement, i) => (
                                <li key={i}>{improvement}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>

            <section className="modal-footer">
                <a href={project.links?.demo} target="_blank" rel="noreferrer" className="link-button">Voir le projet</a>
                <a href={project.links?.github} target="_blank" rel="noreferrer" className="link-button">Code source</a>
            </section>
        </BaseModal>
    );
}
export default ProjectModal;