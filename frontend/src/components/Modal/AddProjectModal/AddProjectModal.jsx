import { useState } from "react";
import FormModal from "../FormModal/FormModal";
import useFormSubmit from "../useFormSubmit";
import { addProject } from "../../../api/project";
import './AddProjectModal.scss';

function AddProjectModal({ isOpen, onClose }) {
    const [form, setForm] = useState({
        title: '', date: '', excerpt: '', context: '',
        objectives: '', stacks: '', skills: '',
        results: '', improvements: '', github: '', demo: '',
    });
    const [techs, setTechs] = useState([{ name: '', icon: '' }]);
    const [cover, setCover] = useState(null);
    const [success, setSuccess] = useState("");

    const { submit, error } = useFormSubmit(addProject, () => {
        setSuccess("Projet ajouté avec succès !");
        setForm({
            title: '', date: '', excerpt: '', context: '',
            objectives: '', stacks: '', skills: '',
            results: '', improvements: '', github: '', demo: '',
        });
        setTechs([{ name: '', icon: '' }]);
        setCover(null);
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleCoverChange = (e) => setCover(e.target.files[0]);

    const handleTechChange = (index, field, value) => {
        setTechs(techs.map((tech, i) =>
            i === index ? { ...tech, [field]: value } : tech
        ));
    };
    const addTech = () => setTechs([...techs, { name: '', icon: '' }]);
    const removeTech = (index) => setTechs(techs.filter((_, i) => i !== index));

    // texte multi-ligne → tableau
    const toArray = (str) => str.split('\n').map(s => s.trim()).filter(Boolean);

    const handleSubmit = () => {
        const payload = {
            title: form.title,
            date: form.date,
            excerpt: form.excerpt,
            context: form.context,
            objectives: toArray(form.objectives),
            stacks: toArray(form.stacks),
            skills: toArray(form.skills),
            results: toArray(form.results),
            improvements: toArray(form.improvements),
            // on retire les lignes techs vides
            techs: techs.filter(t => t.name.trim()),
            links: { github: form.github, demo: form.demo },
            cover, // le fichier (à brancher en FormData côté API plus tard)
        };
        submit(payload);
    };

    return (
        <FormModal
            isOpen={isOpen}
            onClose={onClose}
            title="Ajouter un projet"
            className="add-project-modal"
            onSubmit={handleSubmit}
            error={error}
            submitLabel="Ajouter">

            {success && <p className="form-success">{success}</p>}

            <label className="form-label">
                Titre
                <input className="form-input_text" name="title" value={form.title} onChange={handleChange} />
            </label>

            <label className="form-label">
                Date <small>(format AAAA-MM)</small>
                <input className="form-input_text" name="date" value={form.date} onChange={handleChange} />
            </label>

            <label className="form-label">
                Image de couverture (cover)
                <input className="form-input_file" type="file" name="cover" accept="image/*" onChange={handleCoverChange} />
            </label>
            {cover && <p className="form-hint">Fichier : {cover.name}</p>}



            <label className="form-label">
                Contexte
                <textarea className="form-input_text" name="context" value={form.context} onChange={handleChange} />
            </label>

            {/* ---- TECHNOLOGIES (name + icon) ---- */}
            <fieldset className="form-techs">
                <legend className="form-label">Technologies utilisées</legend>
                {techs.map((tech, index) => (
                    <div key={index} className="form-techs_row">
                        <input className="form-input_text form-input_grow"
                            placeholder="Nom (ex: React)"
                            value={tech.name}
                            onChange={(e) => handleTechChange(index, 'name', e.target.value)}
                        />
                        <input className="form-input_text form-input_grow"
                            placeholder="Icon (ex: react)"
                            value={tech.icon}
                            onChange={(e) => handleTechChange(index, 'icon', e.target.value)}
                        />
                        {techs.length > 1 && (
                            <button className="form-button" type="button" onClick={() => removeTech(index)}>✕</button>
                        )}
                    </div>
                ))}
                <button className="form-button" type="button" onClick={addTech}>+ Ajouter une techno</button>
            </fieldset>

            <label className="form-label">
                Objectifs <small>(un par ligne)</small>
                <textarea className="form-input_text" name="objectives" value={form.objectives} onChange={handleChange} />
            </label>

            <label className="form-label">
                Stack technique <small>(un par ligne)</small>
                <textarea className="form-input_text" name="stacks" value={form.stacks} onChange={handleChange} />
            </label>

            <label className="form-label">
                Compétences développées <small>(un par ligne)</small>
                <textarea className="form-input_text" name="skills" value={form.skills} onChange={handleChange} />
            </label>

            <label className="form-label">
                Résultats <small>(un par ligne)</small>
                <textarea className="form-input_text" name="results" value={form.results} onChange={handleChange} />
            </label>

            <label className="form-label">
                Perspectives d'amélioration <small>(un par ligne)</small>
                <textarea className="form-input_text" name="improvements" value={form.improvements} onChange={handleChange} />
            </label>

            <label className="form-label">
                Lien GitHub
                <input className="form-input_text" name="github" value={form.github} onChange={handleChange} />
            </label>

            <label className="form-label">
                Lien démo
                <input className="form-input_text" name="demo" value={form.demo} onChange={handleChange} />
            </label>

        </FormModal>
    );
}

export default AddProjectModal;