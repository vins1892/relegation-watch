# ⚽ Relegation Watch

Rapport hebdomadaire automatique des matchs des 3 dernières équipes au classement de 7 championnats européens de 1ère division.

**Championnats couverts (tier gratuit football-data.org) :**
- 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League
- 🇩🇪 Bundesliga
- 🇪🇸 La Liga
- 🇮🇹 Serie A
- 🇫🇷 Ligue 1
- 🇵🇹 Primeira Liga
- 🇳🇱 Eredivisie

---

## 🚀 Déploiement sur Vercel (5 minutes)

### Étape 1 — Obtenir la clé API football-data.org
1. Va sur https://www.football-data.org/client/register
2. Crée un compte gratuit
3. Ta clé API apparaît dans le tableau de bord (onglet "API Key")

### Étape 2 — Mettre le projet sur GitHub
1. Va sur https://github.com/new
2. Crée un nouveau dépôt (ex: `relegation-watch`), laisse-le **Public** ou **Private**
3. Upload les fichiers de ce dossier (glisser-déposer sur la page GitHub)
   OU utilise Git :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TON_USERNAME/relegation-watch.git
   git push -u origin main
   ```

### Étape 3 — Déployer sur Vercel
1. Va sur https://vercel.com et connecte-toi avec ton compte GitHub
2. Clique sur **"Add New Project"**
3. Sélectionne ton dépôt `relegation-watch`
4. Vercel détecte automatiquement Next.js — clique **Deploy**

### Étape 4 — Ajouter la clé API comme variable d'environnement
1. Dans Vercel, va dans ton projet → **Settings → Environment Variables**
2. Ajoute :
   - **Name:** `FOOTBALL_API_KEY`
   - **Value:** ta clé API copiée à l'étape 1
   - **Environment:** Production, Preview, Development (coche les 3)
3. Clique **Save**
4. Va dans **Deployments** → clique les 3 points → **Redeploy**

✅ **Ton app est en ligne !** Vercel te donne une URL du type `relegation-watch.vercel.app`

---

## 🔄 Utilisation hebdomadaire

Ouvre simplement l'URL de ton app chaque **jeudi soir** — les données se chargent automatiquement.

- Les matchs affichés couvrent toujours la fenêtre **Vendredi → Lundi** suivant
- Clique **🔄 Rafraîchir** pour recharger les données
- Clique **🤖 Analyse IA** pour un résumé des enjeux de la semaine

---

## 💻 Lancer en local (optionnel)

```bash
# Installe les dépendances
npm install

# Crée un fichier .env.local avec ta clé
echo "FOOTBALL_API_KEY=ta_cle_ici" > .env.local

# Lance le serveur de développement
npm run dev

# Ouvre http://localhost:3000
```

---

## 📁 Structure du projet

```
relegation-watch/
├── pages/
│   ├── index.js              # Dashboard principal
│   └── api/
│       └── football/
│           └── [...path].js  # Proxy serveur → football-data.org (pas de CORS)
├── package.json
├── next.config.js
└── README.md
```

---

## ⚠️ Limites API

Le tier gratuit de football-data.org autorise **10 requêtes/minute**.  
L'app charge 2 requêtes par championnat (classement + matchs) = 14 requêtes au total.  
Un délai de 1,5s entre chaque championnat est intégré pour respecter cette limite.  
Temps de chargement total : ~10-12 secondes.
