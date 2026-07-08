import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getUrl } from '../../api/http';
import ProjectCard from '../../components/ProjectsCard/ProjectsCard';
import ProjectModal from '../../components/Modal/ProjectModal/ProjectModal';
import AddProjectModal from '../../components/Modal/AddProjectModal/AddProjectModal';
import './Projects.scss'

function Projects() {
    const { isLoggedIn } = useOutletContext();
    const url = import.meta.env.VITE_API_URL;

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshKey, setRefreshKey] = useState(0); // ← force le re-fetch

    // États modales 
    const [selectedProject, setSelectedProject] = useState(null);
    const openProjectModal = (project) => setSelectedProject(project);
    const closeProjectModal = () => setSelectedProject(null);

    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const openEditorModal = () => setIsEditorOpen(true);
    const closeEditorModal = () => setIsEditorOpen(false);

    // appel API : aucune fonction externe, pas de setState synchrone direct
    useEffect(() => {
        let cancelled = false;

        getUrl(`${url}projects`)
            .then(data => {
                if (!cancelled) {
                    setProjects(data);
                    setLoading(false);
                }
            })
            .catch(err => {
                if (!cancelled) {
                    console.error("Erreur chargement projets :", err);
                    setLoading(false);
                }
            });

        return () => { cancelled = true; };
    }, [url, refreshKey]);

    const handleProjectDeleted = (deletedId) => {
        setProjects((prev) => prev.filter((p) => p._id !== deletedId));
    };

    return (
        <main className='project-container'>
            <section className='projects-header'>
                <h1 className='page-title'>Mes projets</h1>
                {isLoggedIn && !loading && (
                    <button className="editor-button" onClick={openEditorModal}>
                        Ajouter un projet
                    </button>
                )}
            </section>

            <section className='projects-gallery' aria-label='Galerie de projets'>
                {loading ? (
                    <p>Chargement des projets...</p>
                ) : (
                    projects.map((project, index) => (
                        <ProjectCard
                            key={project._id}
                            project={project}
                            onOpen={() => openProjectModal(project)}
                            isFirst={index === 0}
                        />
                    ))
                )}
            </section>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={closeProjectModal}
                onDeleted={handleProjectDeleted}
            />

            {/* on incrémente refreshKey pour re-trigger le useEffect */}
            <AddProjectModal
                isOpen={isEditorOpen}
                onClose={closeEditorModal}
                onProjectCreated={() => setRefreshKey(k => k + 1)}
            />
        </main>
    )
}
export default Projects;
