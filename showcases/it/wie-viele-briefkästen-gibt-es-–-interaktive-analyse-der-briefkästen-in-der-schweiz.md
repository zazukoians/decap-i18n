---
title: Andamento degli affitti a Berna – Uno strumento per inquilini, urbanisti
  e decisori
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
Questo **quadro di controllo interattivo** consente di visualizzare l'andamento degli **affitti a Berna** tra il 2013 e il 2024, per **quartiere**, **anno** e **dimensione dell'alloggio**. Facilita la comprensione delle dinamiche del mercato locativo e offre una panoramica chiara, utile sia per i **cittadini** che per gli **attori pubblici** e i **professionisti del settore immobiliare**.

Il dashboard è stato sviluppato nell'ambito dei moduli *Data Visualization* e *Dashboard Design* presso la **Fachhochschule Graubünden** da **Lukas Streit**, **Martina Stüssi** e **Gionathan Diani**, con l'obiettivo di rafforzare la **trasparenza immobiliare**.

L'applicazione si basa su tecnologie moderne come **11ty** (Static Site Generator) e **Apache ECharts**, che garantiscono un'esperienza fluida, veloce e reattiva.

## Dati utilizzati

I dati provengono dal servizio statistico della **città di Berna** e coprono i prezzi medi degli affitti per quartiere e tipo di alloggio su base annuale.

Il set di dati è stato rielaborato a causa di un formato iniziale non adatto all'elaborazione automatica. A partire dal 2013 è stata aggiunta una colonna « Insgesamt », rinominata « Total » nel 2015. Contiene la media ponderata in base al numero di alloggi per quartiere, mentre i dati sul numero di alloggi sono forniti in un set di dati separato. Il costo per stanza è stato calcolato separatamente. A causa dell'impossibilità di ricostruire i valori mancanti per «Total», gli anni dal 2010 al 2012 sono stati esclusi dal quadro di controllo.

## Casi d'uso concreti

***Inquilini e persone in cerca di alloggio:***

* Confronta gli affitti tra quartieri
* Segui le tendenze ed evita di pagare troppo
* Argomenta in modo trasparente durante le trattative

***Urbanistica e politiche pubbliche:***

* Supporta le decisioni di pianificazione con dati concreti
* Monitorate gli sviluppi in un'ottica di equità territoriale

***Ricerca e giornalismo:***

* Studiate le dinamiche abitative a livello locale
* Integrate le visualizzazioni direttamente nelle vostre analisi

## Accesso e condizioni d'uso

Lo strumento è gratuito, accessibile a tutti, senza registrazione e si basa esclusivamente su dati aperti. 🔗 Accedi all'applicazione: <https://giodi.github.io/dashboard-wohnungsmietpreise-stadt-bern/> 💻 Codice sorgente: <https://github.com.mcas.ms/giodi/dashboard-wohnungsmietpreise-stadt-bern>

Esplora subito il dashboard e scopri dove si trovano gli affitti più adatti alle tue esigenze
