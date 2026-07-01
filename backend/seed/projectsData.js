// ============================================================
//   PROJETS — Yoann Doveze
//   Données statiques / mock alignées sur le schéma API back-end
//   ============================================================

module.exports = [
    // ============================================================
    //   PROJET 1 — Booki
    // ============================================================
    {
        slug: "booki",
        title: "Booki",
        date: "2026-03",
        cover: "booki-1.webp",
        images: [],
        techs: [
            { name: "HTML", icon: "html5" },
            { name: "CSS", icon: "css3" },
            { name: "Figma", icon: "figma" },
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
        ],
        resume: "Intégration responsive multi-device d'un site d'hébergement touristique",
        context:
            "Premier projet d'alternance au sein de la start-up Booki, spécialisée dans la réservation d'hébergements et d'activités touristiques. L'objectif était d'intégrer l'interface du site à partir des maquettes Figma fournies par l'équipe design, en respectant un Cahier des Charges technique précis. Collaboration étroite avec Sarah (CTO) et Loïc (UI Designer) via échanges par mail et revue des livrables.",
        objectives: [
            "Intégrer les maquettes Figma en HTML/CSS sans framework",
            "Assurer un rendu responsive : desktop, tablette et mobile",
            "Respecter les contraintes techniques et d'accessibilité",
            "Travailler en autonomie avec git/GitHub",
        ],
        stacks: [
            "HTML5 sémantique",
            "CSS3 (Flexbox, Grid)",
            "Découverte et lecture de maquettes Figma",
            "Git / GitHub",
        ],
        skills: [
            "Intégration responsive (mobile-first)",
            "Mise en page Flexbox et Grid",
            "Sémantique HTML (header, nav, main, section, footer)",
            "Lecture et interprétation de maquettes Figma",
            "Versioning Git / GitHub",
        ],
        results: [
            "Site fonctionnel responsive desktop, tablette et mobile",
            "Maquettes Figma transposées en code HTML/CSS fidèle",
            "Dépôt GitHub structuré et commenté",
            "Respect des délais d'évaluation (11 mars 2026)",
        ],
        improvements: [
            "Passer à un préprocesseur CSS (Sass) pour maintenir des maquettes complexes",
            "Mettre en place un design system tokenisé pour la cohérence graphique",
            "Automatiser les tests responsive via Cypress ou Playwright",
        ],
        links: { github: "", demo: "" },
    },

    // ============================================================
    //   PROJET 2 — Sophie Bluel — Portfolio Architecte
    // ============================================================
    {
        slug: "sophie-buel",
        title: "Sophie Buel — Portfolio Architecte",
        date: "2026-03",
        cover: "sophiebuel-1.webp",
        images: [],
        techs: [
            { name: "HTML", icon: "html5" },
            { name: "CSS", icon: "css3" },
            { name: "JavaScript", icon: "javascript" },
            { name: "API REST", icon: "api" },
            { name: "Git", icon: "git" },
        ],
        resume: "Portfolio interactif avec galerie dynamique et back-office administrateur",
        context:
            "Projet d'intégration JavaScript au sein de la même start-up Booki. Sophie Bluel, architecte d'intérieur, avait besoin d'un portfolio en ligne pour présenter ses projets. Le back-end REST était fourni ; il fallait construire le front-end complet (pages publiques + back-office admin). Respect rigoureux des principes DRY, séparation claire des responsabilités et factorisation du code.",
        objectives: [
            "Développer les pages Galerie et Login admin en JavaScript Vanilla",
            "Intégrer et consommer l'API REST fournie avec gestion de l'authentification",
            "Implémenter la modale d'ajout/suppression de médias",
            "Appliquer le principe DRY et factoriser les fonctions",
        ],
        stacks: [
            "HTML5 / CSS3",
            "JavaScript Vanilla (ES6+)",
            "API REST (back-end fourni)",
            "localStorage pour la persistance du token d'authentification",
            "Git / GitHub",
        ],
        skills: [
            "Manipulation du DOM et événements",
            "Requêtes asynchrones (fetch API / async-await)",
            "Gestion de l'authentification par token",
            "Factorisation de fonctions et séparation des responsabilités",
            "Nommage cohérent et code auto-documenté",
        ],
        results: [
            "Galerie dynamique avec filtres fonctionnels et modale",
            "Back-office admin avec upload et suppression de médias",
            "Code factorisé respectant le principe DRY",
            "Évaluation réussie le 31 mars 2026",
        ],
        improvements: [
            "Sécuriser les appels API côté client (validation des entrées)",
            "Migrer vers un framework comme React pour une meilleure maintenabilité",
            "Ajouter des tests unitaires sur les fonctions de manipulation de données",
        ],
        links: { github: "", demo: "" },
    },

    // ============================================================
    //   PROJET 3 — Nina Carducci — Optimisation SEO
    // ============================================================
    {
        slug: "nina-carducci",
        title: "Nina Carducci — Optimisation SEO",
        date: "2026-04",
        cover: "ninacarducci-1.webp",
        images: [],
        techs: [
            { name: "HTML", icon: "html5" },
            { name: "CSS", icon: "css3" },
            { name: "JavaScript", icon: "javascript" },
            { name: "Lighthouse", icon: "lighthouse" },
            { name: "WAVE", icon: "accessibility" },
        ],
        resume: "Audit et optimisation complète : performance, accessibilité et référencement naturel",
        context:
            "Intervention d'optimisation sur le site vitrine de Nina Carducci, photographe professionnelle. Le site souffrait de lourdes lenteurs, de problèmes d'accessibilité et d'un référencement naturel quasi inexistant. L'objectif était de mener un audit complet, corriger les anomalies et documenter les résultats. Ce projet a été l'occasion de découvrir Lighthouse, WAVE, les données structurées Schema.org et les bonnes pratiques d'accessibilité web.",
        objectives: [
            "Réaliser un audit Lighthouse complet avant/après optimisation",
            "Corriger les bugs de navigation dans la modale galerie",
            "Résoudre l'absence de retour visuel sur le filtre actif",
            "Améliorer le référencement naturel (balises meta, Schema.org)",
            "Renforcer l'accessibilité (WAVE, ARIA, contrastes)",
        ],
        stacks: [
            "HTML5 / CSS3 / JavaScript Vanilla",
            "Outils Lighthouse et WAVE (audit avant/après)",
            "Données structurées JSON-LD (Schema.org LocalBusiness)",
            "Balises meta Open Graph / Twitter Cards",
            "Conversion WebP et lazy loading natif",
        ],
        skills: [
            "Audit de performance avec Google Lighthouse",
            "Audit d'accessibilité avec WAVE",
            "Optimisation du poids des images (WebP, compression, lazy loading)",
            "SEO technique : balises meta, Schema.org, hiérarchie des titres",
            "Accessibilité web : ARIA, sémantique HTML, contrastes",
            "Correction de bugs JavaScript (modale, filtres)",
        ],
        results: [
            "Score Lighthouse : Performance 98 / Accessibilité 96 / Best Practices 100 / SEO 100",
            "Réduction du poids des images de 29,4 Mo à 0,727 Mo — gain de 97,5 %",
            "Score AIM WAVE : 4,7/10 → 9,7/10 (avant/après) — erreurs d'accessibilité quasi éliminées",
            "Correction des 12 anomalies listées dans le cahier de recette (toutes Résolu)",
            "Navigation modale galerie et état filtre actif corrigés",
        ],
        improvements: [
            "Optimisation mobile (score actuellement ~80 % sur Lighthouse mobile)",
            "Implémentation de srcset pour servir des images adaptées à chaque écran",
            "Résoudre l'alerte de contraste restante sur les filtres actifs",
        ],
        links: { github: "", demo: "" },
    },

    // ============================================================
    //   PROJET 4 — Kasa
    // ============================================================
    {
        slug: "kasa",
        title: "Kasa",
        date: "2026-05",
        cover: "kasa-1.webp",
        images: [],
        techs: [
            { name: "React", icon: "react" },
            { name: "Vite", icon: "vite" },
            { name: "React Router", icon: "react-router" },
            { name: "Sass", icon: "scss" },
            { name: "Git", icon: "git" },
        ],
        resume: "Application React complète de location de logements avec navigation multi-pages",
        context:
            "Premier projet d'ampleur avec React. Kasa, plateforme de location de logements entre particuliers, avait besoin d'une refonte de son application web. Découverte de l'écosystème React (Vite, composants réutilisables, routing) et du préprocesseur Sass/SCSS. Données fournies via un fichier JSON statique contenant 20 logements. Approche composant réutilisable et structure modulaire.",
        objectives: [
            "Développer une application SPA React multi-pages",
            "Mettre en place le routing avec React Router (Outlet)",
            "Créer des composants réutilisables (Gallery, Collapse, Header, Footer)",
            "Appliquer Sass/SCSS avec variables, nesting et partials",
        ],
        stacks: [
            "React 18 + Vite",
            "React Router v6 (Routes, Outlet, NavLink)",
            "Sass/SCSS (partials, variables, mixins)",
            "Données JSON statiques (20 logements)",
            "Git / GitHub",
        ],
        skills: [
            "React : composants, props, state",
            "Routing SPA multi-pages avec Outlet",
            "Architecture modulaire avec partials SCSS",
            "Composants réutilisables (Collapse, carrousel Gallery)",
            "Déploiement et build Vite",
        ],
        results: [
            "Application fonctionnelle avec navigation fluide entre les pages",
            "Composants réutilisables : Collapse (accordéon) et Gallery (carrousel en boucle)",
            "Structure de projet propre avec séparations composants / hooks / styles",
            "Évaluation réussie le 13 mai 2026",
        ],
        improvements: [
            "Remplacer le JSON statique par un vrai back-end Express/MongoDB",
            "Ajout d'un formulaire de contact et d'un système d'avis",
            "Internationalisation (i18n) pour gérer plusieurs langues",
        ],
        links: { github: "", demo: "" },
    },

    // ============================================================
    //   PROJET 5 — Mon Vieux Grimoire
    // ============================================================
    {
        slug: "mon-vieux-grimoire",
        title: "Mon Vieux Grimoire",
        date: "2026-06",
        cover: "monvieuxgrimoire-1.webp",
        images: [],
        techs: [
            { name: "Node.js", icon: "nodejs" },
            { name: "Express", icon: "express" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "Mongoose", icon: "mongoose" },
            { name: "JWT", icon: "jwt" },
        ],
        resume: "API REST back-end complète de notation de livres avec authentification sécurisée",
        context:
            "Premier projet back-end full-stack. Mon Vieux Grimoire est une plateforme web permettant aux utilisateurs de noter des livres. Développement complet de l'API REST côté serveur avec Node.js et Express, base de données MongoDB via Mongoose, gestion sécurisée des images (Multer + Sharp), et système d'authentification par JWT et bcrypt. Approche axée sur la sécurité, la validation des données et les bonnes pratiques Green Code pour le traitement d'images.",
        objectives: [
            "Développer une API REST complète avec Node.js et Express",
            "Mettre en place MongoDB/Mongoose pour la persistence des données",
            "Implémenter l'authentification sécurisée par JWT et bcrypt",
            "Optimiser les images uploadées selon les pratiques Green Code (Sharp)",
            "Respecter les principes de sécurité (validation, hashing, middleware)",
        ],
        stacks: [
            "Node.js + Express",
            "MongoDB + Mongoose (schémas, modèles)",
            "Multer (upload de fichiers)",
            "Sharp (optimisation/conversion WebP des images)",
            "JWT + bcrypt (authentification et hashage)",
            "API REST (CRUD complet)",
        ],
        skills: [
            "Architecture API REST (controllers, routes, middleware)",
            "Modélisation de données MongoDB avec Mongoose",
            "Sécurité back-end : JWT, bcrypt, validation des entrées",
            "Traitement d'images (upload, redimensionnement, conversion WebP)",
            "Bonnes pratiques Green Code (Sharp, format WebP)",
            "Déploiement serveur Node.js",
        ],
        results: [
            "API REST fonctionnelle avec CRUD complet sur les livres",
            "Authentification sécurisée par token JWT",
            "Optimisation d'images conforme Green Code (conversion WebP automatique)",
            "Évaluation réussie le 4 juin 2026",
        ],
        improvements: [
            "Implémenter un système de pagination et de filtrage sur les endpoints",
            "Ajouter la vérification par e-mail (Nodemailer) pour l'inscription",
            "Développer un cache Redis pour optimiser les requêtes fréquentes",
        ],
        links: { github: "", demo: "" },
    },

    // ============================================================
    //   PROJET 6 — Menu Maker — Gestion de Projet
    // ============================================================
    {
        slug: "menu-maker",
        title: "Menu Maker — Gestion de Projet",
        date: "2026-06",
        cover: "menumaker-1.webp",
        images: [],
        techs: [
            { name: "Notion", icon: "notion" },
            { name: "Feedly", icon: "feedly" },
            { name: "PowerPoint", icon: "powerpoint" },
            { name: "React", icon: "react" },
            { name: "Node.js", icon: "nodejs" },
        ],
        resume: "Gestion de projet complète : cadrage, specs techniques et gestion de l'équipe de dev",
        context:
            "Premier projet centré exclusivement sur la gestion de projet. L'application Menu Maker (Qwenta) est un outil SAAS permettant aux restaurateurs de créer, personnaliser et exporter leurs cartes de menus. Mon rôle : PM sur l'ensemble du projet, de la rédaction du cadrage et des spécifications techniques à la gestion quotidienne de l'équipe de développement via Kanban Notion. Collaboration avec un mentor, veilles technologiques (Feedly) et présentation PowerPoint du produit.",
        objectives: [
            "Rédiger le cadrage fonctionnel complet et les specs techniques",
            "Définir les choix technologiques (stack, hébergement, sécurité)",
            "Gérer le projet via Kanban Notion : découpage US → tâches techniques",
            "Assurer la veille technologique et rédiger les présentations",
        ],
        stacks: [
            "Notion (Kanban, gestion US/tâches, suivi sprint)",
            "Feedly (veille technologique)",
            "PowerPoint (présentation produit / soutenance)",
            "Rédaction specs techniques (Markdown / Word)",
            "Stack dev retenue : React + Vercel (front), Node.js/Express + Render (back), MongoDB Atlas (base NoSQL)",
        ],
        skills: [
            "Rédaction de cadrage fonctionnel et de spécifications techniques",
            "Découpage user stories → tâches techniques avec story points",
            "Gestion de projet Kanban (Notion)",
            "Choix architecturaux (front, back, base de données, hébergement)",
            "Veille technologique structurée (Feedly)",
            "Sécurité applicative (JWT, HTTPS, XSS, RGPD)",
            "Présentation PowerPoint et soutenance client",
        ],
        results: [
            "Livrable complet : 6 specs techniques validées (hébergement, sécurité, accessibilité, maintenance, API, SEO)",
            "Découpage fonctionnel complet : 20+ user stories → tâches avec story points",
            "Stack technique validée avec justification : React + Vercel + Node.js/Express + Render + MongoDB Atlas",
            "API REST interne documentée (7 routes principales : menus, dishes, categories, users, auth, contact)",
            "Hébergement recommandé : Vercel (front), Render (back), MongoDB Atlas (données)",
            "Conformité WCAG AA, navigation clavier, HTTPS, JWT httpOnly cookie, RGPD (email only)",
            "Évaluation réussie le 25 juin 2026",
        ],
        improvements: [
            "Passer au mode Kanban collaboratif en temps réel avec Notion Teams",
            "Mettre en place un pipeline CI/CD sur Vercel/Render avec tests automatisés",
            "Planifier la scalabilité (cache Redis, CDN, monitoring Sentry)",
        ],
        links: { github: "", demo: "" },
    },
];
