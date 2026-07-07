/**
 * competences.js
 * ─────────────────────────────
 * Data source pour les compétences du portfolio.
 *
 * Schéma calqué sur la structure attendue par le back-end :
 *   → Aucun changement nécessaire lors du passage à l'API.
 *   → Admin : suffit d'ajouter / modifier les objets dans la DB.
 *
 * Schema de chaque compétence :
 *   id          : number   — identifiant unique
 *   name        : string   — nom lisible
 *   icon        : string   — slug react-icons (e.g. "react", "nodedotjs")
 *   category    : "frontend" | "backend" | "tools"
 *   level       : number   — niveau de maîtrise : 1=Notions, 2=À l'aise, 3=Maîtrise
 *   preference  : booléen   — true/false
 *   description : string   — une phrase concise en français
 */

export const dataSkills = [
    // ─────────────────────────────────────────────
    // FRONTEND  (8 compétences)
    // ─────────────────────────────────────────────
    {
        id: 1,
        name: "HTML5",
        icon: "html5",
        category: "frontend",
        level: 3,
        preference: true,
        description: "Sémantique, accessibilité et structuration de pages web performantes.",
    },
    {
        id: 2,
        name: "CSS3",
        icon: "css3",
        category: "frontend",
        level: 3,
        preference: false,
        description: "Mise en page moderne (Flexbox, Grid), animations et responsive design.",
    },
    {
        id: 3,
        name: "Sass / SCSS",
        icon: "scss",
        category: "frontend",
        level: 2,
        preference: false,
        description: "Organisation via variables, mixins et partials pour des CSS maintenables.",
    },
    {
        id: 4,
        name: "JavaScript (ES6+)",
        icon: "javascript",
        category: "frontend",
        level: 2,
        preference: false,
        description: "Manipulation du DOM, async/await, arrow functions et patterns modernes.",
    },
    {
        id: 5,
        name: "React",
        icon: "react",
        category: "frontend",
        level: 2,
        preference: true,
        description: "Composants, hooks (useState, useEffect), context et state management.",
    },
    {
        id: 6,
        name: "React Router",
        icon: "react-router",
        category: "frontend",
        level: 2,
        preference: true,
        description: "Navigation SPA avec routes imbriquées, Outlet et NavLink.",
    },
    {
        id: 7,
        name: "Responsive Design",
        icon: "mobile",
        category: "frontend",
        level: 3,
        preference: false,
        description: "Mobile-first, breakpoints, images fluides et adaptation multi-supports.",
    },
    {
        id: 8,
        name: "Accessibilité",
        icon: "accessibility",
        category: "frontend",
        level: 2,
        preference: false,
        description: "WAVE, ARIA, navigation clavier et conformité WCAG.",
    },

    // ─────────────────────────────────────────────
    // BACKEND  (8 compétences)
    // ─────────────────────────────────────────────
    {
        id: 9,
        name: "Node.js",
        icon: "nodejs",
        category: "backend",
        level: 2,
        preference: true,
        description: "Écosystème NPM, modules CommonJS et script serveur asynchrone.",
    },
    {
        id: 10,
        name: "Express",
        icon: "express",
        category: "backend",
        level: 2,
        preference: false,
        description: "Routing, middleware et création d'API RESTful structurées.",
    },
    {
        id: 11,
        name: "MongoDB",
        icon: "mongodb",
        category: "backend",
        level: 1,
        preference: false,
        description: "Base NoSQL orientée document, schématisation et agrégation.",
    },
    {
        id: 12,
        name: "Mongoose",
        icon: "mongoose",
        category: "backend",
        level: 1,
        preference: false,
        description: "ODM pour définir des modèles, hooks et validation de données.",
    },
    {
        id: 13,
        name: "API REST",
        icon: "api",
        category: "backend",
        level: 2,
        preference: true,
        description: "Design d'endpoints RESTful, gestion des verbes HTTP et codes réponse.",
    },
    {
        id: 14,
        name: "JsonWebToken",
        icon: "jwt",
        category: "backend",
        level: 1,
        preference: false,
        description: "Authentification stateless, création et vérification de tokens.",
    },
    {
        id: 15,
        name: "bcrypt",
        icon: "bcrypt",
        category: "backend",
        level: 1,
        preference: false,
        description: "Hachage de mots de passe sécurisé avec salt automatique.",
    },
    {
        id: 16,
        name: "Multer",
        icon: "multer",
        category: "backend",
        level: 1,
        preference: false,
        description: "Gestion du téléversement de fichiers et validation des formats.",
    },

    // ─────────────────────────────────────────────
    // TOOLS  (7 compétences)
    // ─────────────────────────────────────────────
    {
        id: 17,
        name: "Git",
        icon: "git",
        category: "tools",
        level: 3,
        preference: false,
        description: "Versioning, branching, stash et gestion des conflits.",
    },
    {
        id: 18,
        name: "GitHub",
        icon: "github",
        category: "tools",
        level: 3,
        preference: false,
        description: "Pull requests, code review, projects et gestion de repo distant.",
    },
    {
        id: 19,
        name: "Vite",
        icon: "vite",
        category: "tools",
        level: 2,
        preference: false,
        description: "Build tool rapide : serveur de dev avec HMR et build optimisé pour la production.",
    },
    {
        id: 20,
        name: "Postman",
        icon: "api",
        category: "tools",
        level: 2,
        preference: false,
        description: "Test et debug d'API REST, environnements et collections.",
    },
    {
        id: 21,
        name: "npm",
        icon: "npm",
        category: "tools",
        level: 2,
        preference: false,
        description: "Gestion des dépendances et scripts de projet.",
    },
    {
        id: 22,
        name: "Figma",
        icon: "figma",
        category: "tools",
        level: 2,
        preference: false,
        description: "Lecture et intégration de maquettes : extraction des specs, couleurs et espacements.",
    },
    {
        id: 23,
        name: "Notion",
        icon: "notion",
        category: "tools",
        level: 2,
        preference: false,
        description: "Gestion Kanban, documentation et cadrage de projet.",
    },
];

// Export par défaut = tableau complet
export default dataSkills;