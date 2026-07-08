# 🎯 Portfolio — Yoann Doveze

> Développeur Web orienté Back-End. Parcours atypique : éducateur canin, policier municipal, développeur.  
> **Structurer pour résoudre.**

🔗 **Live démo** : [https://portfolio-eight-beige-xjvnl7rg1t.vercel.app](https://portfolio-eight-beige-xjvnl7rg1t.vercel.app)

---

## ✨ Fonctionnalités

- 🎨 Portfolio dynamique présentant projets et compétences
- 🔐 Interface d'administration sécurisée (AJAX, JWT)
- 🖼️ Upload et gestion d'images (Multer + optimisation Sharp)
- 📱 Design responsive, SEO-friendly (meta OG, favicon, sitemap)
- 🗂️ Architecture front/back découplée, CORS gérés

---

## 🛠 Stack technique

| Frontend | Backend | Outils & Déploiement |
|----------|---------|---------------------|
| React + Vite | Node.js + Express | MongoDB + Mongoose |
| CSS custom | JWT Auth | Sharp (optimisation) |
| React Router | Multer (upload images) | Vercel (Frontend) |
| | | Render (API) |

---

## 📁 Architecture
Portfolio/
├── frontend/          # React + Vite (déployé sur Vercel)
│   ├── public/│   │   └── pictures/  # Images statiques (OG, favicon, uploads)
│   ├── src/
│   └── ...
└── backend/           # API REST Node.js (déployé sur Render)
    ├── controllers/
    ├── models/
    ├── routes/
    └── ...

---

## 🚀 Prérequis

- [Node.js](https://nodejs.org/) (v18+ recommandé)
- Une base MongoDB (locale ou [MongoDB Atlas](https://www.mongodb.com/atlas))
- Un compte [Vercel](https://vercel.com) et [Render](https://render.com) pour le déploiement *(optionnel en local)*

---

## ⚙️ Installation

### 1. Cloner le repo
```bash
git clone https://github.com/ton-user/ton-repo.git
cd Portfolio
2. Backend
cd backend
npm install
Créer un fichier .env à la racine de backend/ :
MONGO_URI=mongodb+srv://...
FRONTEND_URL=https://portfolio-eight-beige-xjvnl7rg1t.vercel.app
EMAIL_ADMIN=ton.email@exemple.com
PASSWORD_ADMIN=votre_mot_de_passe_admin
PORT=3000

⚠️ Note CORS : en production, FRONTEND_URL doit pointer vers ton domaine Vercel. En local : http://localhost:5173.

Lancer le serveur :
npm run dev
# ou
nodemon server
3. Frontend
cd frontend
npm install
Créer un fichier .env à la racine de frontend/ :
VITE_API_URL=http://localhost:3000
Lancer l'application :
npm run dev
L'app sera disponible sur http://localhost:5173.

📚 Scripts disponibles
Frontend

npm run dev — serveur de développement Vite
npm run build — build de production
npm run preview — prévisualiser le build

Backend

npm run dev / nodemon server — serveur avec rechargement auto
npm start — serveur en production