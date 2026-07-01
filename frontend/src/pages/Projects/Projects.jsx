import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { dataProjects } from '../../data/projects';
import ProjectCard from '../../components/ProjectsCard/ProjectsCard';
import ProjectModal from '../../components/Modal/ProjectModal/ProjectModal';
import AddProjectModal from '../../components/Modal/AddProjectModal/AddProjectModal';
import './Projects.scss'


function Projects() {
    const { isLoggedIn } = useOutletContext();
    const [selectedProject, setSelectedProject] = useState(null);
    const openProjectModal = (project) => setSelectedProject(project);
    const closeProjectModal = () => setSelectedProject(null);

    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const openEditorModal = () => setIsEditorOpen(true);
    const closeEditorModal = () => setIsEditorOpen(false);
    return (
        <main>
            <section className='projects-header'>
                <h1 className='page-title'>Mes projets</h1>
                {isLoggedIn && (
                    <button className="editor-button" onClick={openEditorModal}>
                        Editer
                    </button>
                )}
            </section>
            <section className='projects-gallery' aria-label='Galerie de projets'>
                {dataProjects.map((project) => (
                    <ProjectCard key={project.slug} data={project} onOpen={() => openProjectModal(project)} />
                ))}
            </section>
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={closeProjectModal}
            />
            <AddProjectModal
                isOpen={isEditorOpen}
                onClose={closeEditorModal}
            />
        </main>

    )
}
export default Projects;