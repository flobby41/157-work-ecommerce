# 157 WORK - E-commerce Landing Page

Une landing page e-commerce fidèle au design 157 WORK, développée avec Next.js, React, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design fidèle** : Reproduction exacte de l'interface 157 WORK
- **Navigation sidebar** : Sidebar sombre avec catégories de produits
- **Grille de produits** : Affichage responsive des produits avec effets hover
- **Offres promotionnelles** : Cartes spéciales pour les deals et éditions limitées
- **Interface moderne** : Design clean avec typographie et espacement soignés
- **Responsive** : Adapté à tous les écrans (mobile, tablette, desktop)

## 🛠️ Technologies

- **Next.js 14+** avec App Router
- **React 18** avec TypeScript
- **Tailwind CSS** pour le styling
- **Lucide React** pour les icônes
- **ESLint** pour la qualité du code

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Compiler pour la production
npm run build

# Lancer en mode production
npm start
```

## 🎨 Structure du Projet

```
src/
├── app/
│   ├── globals.css      # Styles globaux
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Page d'accueil
├── components/
│   ├── Header.tsx       # Header avec navigation et recherche
│   ├── Sidebar.tsx      # Sidebar avec catégories
│   ├── ProductCard.tsx  # Carte produit individuelle
│   └── PromoCard.tsx    # Carte offre promotionnelle
├── data/
│   └── mockData.ts      # Données mockées
└── types/
    └── index.ts         # Types TypeScript
```

## 🎯 Composants Principaux

### Header
- Logo 157 WORK
- Barre de recherche
- Icônes utilisateur et panier
- Barre de livraison gratuite
- Breadcrumb de navigation

### Sidebar
- Navigation par catégories
- Filtres et tri
- Informations entreprise
- Newsletter et réseaux sociaux

### ProductCard
- Image produit avec hover
- Badges de réduction
- Sélection de couleurs
- Système de notation
- Prix avec réductions

### PromoCard
- Images avec overlay
- Badges "SUPERDEAL" et "LIMITED EDITION"
- Prix en grand format
- Descriptions détaillées

## 🚀 Lancement

1. Clonez le projet
2. Installez les dépendances : `npm install`
3. Démarrez le serveur : `npm run dev`
4. Ouvrez [http://localhost:3000](http://localhost:3000)

La landing page reproduit fidèlement le design de l'image fournie avec tous les éléments visuels et fonctionnels.

## 📱 Responsive Design

- **Mobile** : Navigation adaptée, grille 1 colonne
- **Tablette** : Grille 2-3 colonnes
- **Desktop** : Grille complète 4+ colonnes avec sidebar

## 🎨 Personnalisation

Les couleurs, styles et données peuvent être facilement modifiés dans :
- `tailwind.config.js` pour les couleurs
- `src/data/mockData.ts` pour les produits
- `src/components/` pour les composants
