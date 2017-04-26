# PO Games
## Installation
  - git clone https://github.com/rtisne/po_games
  - import de la base sql/po_games.sql
  - modification des informations de connection à la bdd: confi/db.js
  - npm install
  - npm run dev



## Structure de la Base de données

* games
    - id              int auto-increment
    - name         text
    - mesure      external id

* mesures
    - id              int auto-increment
    - name         text                             (second, point ...)

* members
    - id               int auto-increment
    - firstname    text
    - lastname     text
    - email          text

* results
    - id_game     external id
    - id_member external id
    - score          int

* tokens
    - token          text unique
    - id game       external id

* pictures
    - id               int auto-increment
    - path           text

* identifications
    - id_picture   external id
    - id_game     external id facultatif
    - id_member external id

## API

* Requetes
Les exemples de requêtes sont sous le dossier docs/

| url | type | Header | paramètres | retour |
|------|-----|--------|------------|---------|
| /members | GET | token | | liste de tous les membres |
| /members?query={query} | GET | token | | liste des membres repondant à la query |
| /results | POST | token | result - id membre | ok ou fail |
| /pictures | POST | token | photo - (id membre)? | ok ou fail |
