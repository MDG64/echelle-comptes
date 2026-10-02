# Échelle des comptes

Suivi quotidien de comptes de trading : courbe idéale (gain visé par compte et par jour,
un compte de plus à chaque tranche de capital ÷ comptes gagnée), courbe réelle, écart et
projection sur le gain moyen réel.

L'onglet « Temps de trading » importe `chrono-journal.json`, le journal écrit par le chrono
(widget Windows) : heures d'ouverture et de fermeture, pauses, ligne des trades gagnants et
perdants, temps de trading par jour.

- `page.html` : la source, identique à la version publiée comme artifact Claude.
- `node build.mjs` : régénère `index.html`, la version autonome servie par GitHub Pages.

Hors de Claude, les saisies restent dans le navigateur (localStorage) ; la carte
« Sauvegarde » exporte et importe un fichier JSON.
