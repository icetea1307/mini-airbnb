// Importation des modules
const express = require('express');
const path = require('path');
const logements = require('./data/logements');

// Création de l'application Express
const app = express();
const PORT = process.env.PORT || 3000;

// Configuration du moteur de template EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route principale - Page d'accueil
app.get('/', (req, res) => {
  res.render('accueil', { 
    logements: logements,
    title: 'Mini-Airbnb - Trouvez votre logement idéal'
  });
});

// Route pour la page de détail d'un logement
app.get('/logement/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const logement = logements.find(l => l.id === id);
  
  if (!logement) {
    return res.status(404).render('404', { 
      title: 'Logement non trouvé' 
    });
  }
  
  res.render('detail', { 
    logement: logement,
    title: `${logement.titre} - Mini-Airbnb`
  });
});

// Route pour l'API (bonus - retourne les données JSON)
app.get('/api/logements', (req, res) => {
  res.json(logements);
});

app.get('/api/logements/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const logement = logements.find(l => l.id === id);
  
  if (!logement) {
    return res.status(404).json({ error: 'Logement non trouvé' });
  }
  
  res.json(logement);
});

// Gestion des erreurs 404
app.use((req, res) => {
res.status(404).render('404', {
    title: 'Page non trouvée'
});
});

// Démarrage du serveur
app.listen(PORT, () => {
console.log(`🏠 Serveur Mini-Airbnb démarré sur http://localhost:${PORT}`);
console.log(`📋 Logements disponibles : ${logements.length}`);
});