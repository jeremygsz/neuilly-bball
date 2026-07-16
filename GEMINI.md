# Projet : Neuilly Basketball (neuilly-bball)

Ce projet est une application web moderne développée avec **Next.js (App Router)** pour le club de basketball de Neuilly.

## 🛠️ Stack Technique & Architecture
- **Framework** : Next.js (TypeScript)
- **Base de données** : Prisma (PostgreSQL / MySQL)
- **Stylisation** : SCSS (SASS) Modules & Global CSS (TailwindCSS est importé mais secondaire)

---

## 🎨 Consignes de Style & UI (CRITIQUE)

### 1. Utilisation exclusive de SCSS Custom
- **Ne pas** écrire de classes utilitaires Tailwind ad-hoc pour les nouveaux composants ou pages. Le design doit être entièrement sur-mesure et soigné.
- Utilisez des **SCSS Modules** (`.module.scss`) pour chaque composant et page afin de garantir le cloisonnement des styles.

### 2. Réutilisation des Variables & Mixins
Tous les styles doivent réutiliser au maximum le système de design défini dans le fichier de variables :
- **Variables globales** : [src/styles/_vars.scss](file:///Applications/MAMP/htdocs/neuilly-basketball/src/styles/_vars.scss)
- **Importation** : Toujours importer les variables en haut de vos fichiers SCSS avec :
  ```scss
  @use '@/styles/vars' as *;
  ```

### 3. Palette de Couleurs & Design Tokens
Utilisez uniquement les variables définies :
- **Bleus (Couleur principale)** : `$blue` (`#1B3A8C`), `$blue-dark` (`#0D1B3E`), `$blue-light` (`#2550C0`)
- **Rouges (Accents/Alertes)** : `$red` (`#C8102E`), `$red-light` (`#E8314F`)
- **Gris** : `$grey-100`, `$grey-200`, `$grey-400`, `$grey-600`
- **Breakpoints (Responsive)** : `$bp-sm` (576px), `$bp-md` (768px), `$bp-lg` (1024px), `$bp-xl` (1280px)
- **Transitions / Animations** : `$ease` et `$ease-bounce`

### 4. Classes Globales Utilitaires
Avant d'écrire du CSS sur-mesure pour les structures communes, réutilisez les classes globales définies dans [src/styles/globals.scss](file:///Applications/MAMP/htdocs/neuilly-basketball/src/styles/globals.scss) :
- **Containers** : `.container-custom`
- **Boutons** : `.btn-primary` (Rouge), `.btn-secondary` (Bleu), `.btn-outline`, `.btn-outline-blue`
- **Badges** : `.badge-red`, `.badge-blue`, `.badge-white`
- **Animations** : `.animate-fade-up`, `.animate-fade-in`, `.animate-float`

---

## 📂 Organisation du Projet
- **Pages publiques** : `src/app/(public)/` (Actualités, Boutique, Contact, Équipes, Stages)
- **Composants partagés** : `src/components/public/`
- **Modèles de Données & API** : `prisma/schema.prisma` et `src/app/actions/`
