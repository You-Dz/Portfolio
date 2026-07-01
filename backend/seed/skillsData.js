/**
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

module.exports = [
    // ─────────────────────────────────────────────
    // FRONTEND  (8 compétences)
    // ─────────────────────────────────────────────
    {
        name: "HTML5",
        icon: "html5",
        category: "frontend",
        level: 3,
        preference: true,
        description: "Sémantique, accessibilité et structuration de pages web performantes.",
    },
    {
        name: "CSS3",
        icon: "css3",
        category: "frontend",
        level: 3,
        preference: false,
        description: "Mise en page moderne (Flexbox, Grid), animations et responsive design.",
    },
    {
        name: "Sass / SCSS",
        icon: "scss",
        category: "frontend",
        level: 2,
        preference: false,
        description: "Organisation via variables, mixins et partials pour des CSS maintenables.",
    },
    {
        name: "JavaScript (ES6+)",
        icon: "javascript",
        category: "frontend",
        level: 2,
        preference: false,
        description: "Manipulation du DOM, async/await, arrow functions et patterns modernes.",
    },
    {
        name: "React",
        icon: "react",
        category: "frontend",
        level: 2,
        preference: true,
        description: "Composants, hooks (useState, useEffect), context et state management.",
    },
    {
        name: "React Router",
        icon: "react-router",
        category: "frontend",
        level: 2,
        preference: true,
        description: "Navigation SPA avec routes imbriquées, Outlet et NavLink.",
    },
    {
        name: "Responsive Design",
        icon: "mobile",
        category: "frontend",
        level: 3,
        preference: false,
        description: "Mobile-first, breakpoints, images fluides et adaptation multi-supports.",
    },
    {
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
        name: "Node.js",
        icon: "nodejs",
        category: "backend",
        level: 2,
        preference: true,
        description: "Écosystème NPM, modules CommonJS et script serveur asynchrone.",
    },
    {
        name: "Express",
        icon: "express",
        category: "backend",
        level: 2,
        preference: false,
        description: "Routing, middleware et création d'API RESTful structurées.",
    },
    {
        name: "MongoDB",
        icon: "mongodb",
        category: "backend",
        level: 1,
        preference: false,
        description: "Base NoSQL orientée document, schématisation et agrégation.",
    },
    {
        name: "Mongoose",
        icon: "mongoose",
        category: "backend",
        level: 1,
        preference: false,
        description: "ODM pour définir des modèles, hooks et validation de données.",
    },
    {
        name: "API REST",
        icon: "api",
        category: "backend",
        level: 2,
        preference: true,
        description: "Design d'endpoints RESTful, gestion des verbes HTTP et codes réponse.",
    },
    {
        name: "JsonWebToken",
        icon: "jwt",
        category: "backend",
        level: 1,
        preference: false,
        description: "Authentification stateless, création et vérification de tokens.",
    },
    {
        name: "bcrypt",
        icon: "bcrypt",
        category: "backend",
        level: 1,
        preference: false,
        description: "Hachage de mots de passe sécurisé avec salt automatique.",
    },
    {
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
        name: "Git",
        icon: "git",
        category: "tools",
        level: 3,
        preference: false,
        description: "Versioning, branching, stash et gestion des conflits.",
    },
    {
        name: "GitHub",
        icon: "github",
        category: "tools",
        level: 3,
        preference: false,
        description: "Pull requests, code review, projects et gestion de repo distant.",
    },
    {
        name: "Vite",
        icon: "vite",
        category: "tools",
        level: 2,
        preference: false,
        description: "Build tool rapide : serveur de dev avec HMR et build optimisé pour la production.",
    },
    {
        name: "Postman",
        icon: "api",
        category: "tools",
        level: 2,
        preference: false,
        description: "Test et debug d'API REST, environnements et collections.",
    },
    {
        name: "npm",
        icon: "npm",
        category: "tools",
        level: 2,
        preference: false,
        description: "Gestion des dépendances et scripts de projet.",
    },
    {
        name: "Figma",
        icon: "figma",
        category: "tools",
        level: 2,
        preference: false,
        description: "Lecture et intégration de maquettes : extraction des specs, couleurs et espacements.",
    },
    {
        name: "Notion",
        icon: "notion",
        category: "tools",
        level: 2,
        preference: false,
        description: "Gestion Kanban, documentation et cadrage de projet.",
    },
];

