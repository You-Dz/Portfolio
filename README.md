# 🎯 Portfolio — Yoann Doveze

> Développeur Web orienté Back-End. Parcours atypique : éducateur canin, policier municipal, développeur.  
> **Structurer pour résoudre.**

🔗 **Live démo** : [https://portfolio-eight-beige-xjvnl7rg1t.vercel.app](https://portfolio-eight-beige-xjvnl7rg1t.vercel.app)

---

## ✨ Fonctionnalités

- 🎨 Portfolio dynamique présentant projets et compétences
- 🔐 Interface d'administration sécurisée (AJAX, JWT)
- 🖼️ Upload et gestion d'images (optimisation, stockage statique)
- 📱 Design responsive, SEO-friendly
- 🗂️ Architecture front/back découplée, CORS gérés

---

## 🛠 Stack technique

| Frontend | Backend | Outils & Déploiement |
|----------|---------|---------------------|
| React + Vite | Node.js + Express | MongoDB + Mongoose |
| CSS custom | JWT Auth | Vercel (Front) |
| React Router | Multer (upload images) |Sharp | Render (API) |


---

## 📁 Architecture
Portfolio/
├── frontend/          # React + Vite (déployé sur Vercel)
│   ├── public/        # Images statiques (OG image, favicon...)
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
- Un compte [Cloudinary](https://cloudinary.com/) ou un stockage local configuré *(si applicable)*

---

## ⚙️ Installation

### 1. Cloner le repo


git clone https://github.com/ton-user/ton-repo.git
cd Portfolio
### 2. Backend
cd backend
npm install
### Créer un fichier .env à la racine de backend/ :
MONGO_URI=mongodb+srv://...ou_mongodb://localhost:27017/portfolio
FRONTEND_URL=https://portfolio-eight-beige-xjvnl7rg1t.vercel.app
EMAIL_ADMIN=ton.email@exemple.com
PASSWORD_ADMIN=mot_de_passe_hash_ou_clair_selon_ton_implémentation
PORT=3000

### ⚠️ Note CORS : en production, FRONTEND_URL doit pointer vers ton domaine Vercel. En local, utilise http://localhost:5173.

Lancer le serveur :
npm run dev   # ou npm start selon tes scripts
### 3. Frontend
cd frontend
npm install
### Créer un fichier .env à la racine de frontend/ :
VITE_API_URL=http://localhost:3000   # en développement
### Lancer l'application :
npm run dev
### L'app sera disponible sur http://localhost:5173.