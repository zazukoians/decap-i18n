---
title: Combien y a-t-il de boîtes aux lettres ? - Un outil pour le marketing,
  l’urbanisme et la logistique
image: https://raw.githubusercontent.com/davidoesch/wo-sind-briefkaesten/refs/heads/master/images/screenshot.png
url: https://wieviele-briefkaesten-gibt-es.streamlit.app/
category:
  - regi
  - soci
type: application
datasets:
  - id: 66708546-e7b7-49e4-9ec4-410a8be2b7b3-geoinformation_kanton_luzern
    label: Landeskarte 1:25'000 (1960)
  - id: ca47a4a1-2f58-46c0-b3ce-d4ef063922d4-geoinformation-kanton-zuerich
    label: Räumliche Gebäudestatistik
---
Cette application interactive permet de calculer facilement le nombre de boîtes aux lettres (adresses de distribution) dans un périmètre géographique de votre choix en Suisse. Utilisant des données géospatiales précises, elle offre un calcul rapide et fiable des adresses de distribution, ce qui en fait un outil utile pour divers secteurs. L'application repose sur des technologies modernes telles que Python, DuckDB et Streamlit, garantissant une expérience fluide et interactive. Les données utilisées proviennent de deux sources majeures :

* **Le registre des bâtiments et des appartements (RegBL)**

   de l’Office fédéral de la statistique (OFS), qui offre des informations actualisées sur les logements en Suisse.
* **La base de données “Places” d’Overture Maps Foundation**

  , qui enrichit ces informations en y ajoutant des points de localisation d'entreprises et d'établissements.

### Cas d'usages concrets

* Marketing :
* Urbanisme et aménagement :
* Recherche scientifique :
* Logistique :

### Accès et conditions d'utilisation

L'application est gratuite et open source. Vous pouvez y accéder directement via ce lien : <https://wieviele-briefkaesten-gibt-es.streamlit.app/>
Le code source est disponible sur GitHub pour les développeurs intéressés : <https://github.com/davidoesch/wo-sind-briefkaesten/>

### Conseils d'utilisation

Pour des zones plus grandes (ex. 100 km²), divisez-les en sous-zones pour réduire les temps de chargement.

Explorez l’application dès maintenant et simplifiez vos analyses géospatiales !
