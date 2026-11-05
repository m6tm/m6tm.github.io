# Pépites Academy — Captures de l'app mobile (Flutter)

Captures d'écran de l'application mobile **Pépites Academy** prises en mode `debug`
sur un appareil Android réel via ADB.

- **App** : `com.pepite.academy.pepites_academy_mobile` (v1.18.2+19), Flutter
- **Environnement** : `ENV=local` → API locale `http://localhost:5500/v1`
  (joignable depuis le téléphone via `adb reverse tcp:5500 tcp:5500`)
- **Appareil** : 720 × 1640 px (Android 15 / API 35)
- **Comptes utilisés** (mot de passe `Test@123456`) :
  - `supadmin@test.pepites.com` — directeur administratif (côté back-office)
  - `encadreur.chef@test.pepites.com` — encadreur (côté terrain)

Ces fichiers sont l'archive brute. La sélection publiée dans le portfolio se
trouve dans `../../static/projects/pepites-academy/` et est référencée dans la
`gallery` du projet `pepites-academy`
(`src/lib/infrastructure/repositories/StaticProjectRepository.ts`).

## Sélection publiée dans le portfolio

| Fichier source | Nom publié | Écran |
| --- | --- | --- |
| `21..25_onboarding_*` | `onboarding-1..5.png` | Onboarding (5 slides) |
| `01_login_supadmin` | `login.png` | Connexion |
| `02_dashboard_admin` | `dashboard-admin.png` | Tableau de bord administrateur |
| `03_academie_joueurs` | `academie-joueurs.png` | Liste des académiciens |
| `37_inscription_identite` | `inscription-academicien.png` | Inscription — étape identité |
| `39_inscription_identite_remplie` | `inscription-remplie.png` | Inscription — remplie |
| `40_fiche_joueur_identite` | `fiche-joueur.png` | Fiche académicien |
| `41_badge_academicien_qr` | `badge-academicien-qr.png` | Badge académicien (QR) |
| `35_evaluation_joueur` | `evaluation-joueur.png` | Évaluation par atelier (curseurs) |
| `36_annotation_recapitulatif` | `annotation-recapitulatif.png` | Récapitulatif d'annotation |
| `43_bulletin_config` | `bulletin-config.png` | Bulletin — configuration |
| `48_bulletin_historique` | `bulletin-historique.png` | Bulletin — évolution & historique |
| `46_bulletin_aout_radar` | `bulletin-formation.png` | Bulletin de formation (radar Actuel/Précédent) |
| `45_bulletin_pdf_preview` | `bulletin-pdf.png` | Aperçu PDF du bulletin |
| `04_seances_liste` | `seances-admin.png` | Séances (admin) |
| `05_seance_detail` | `seance-detail.png` | Détail d'une séance |
| `27_dashboard_encadreur` | `dashboard-encadreur.png` | Tableau de bord encadreur |
| `28_encadreur_mes_seances` | `mes-seances-encadreur.png` | Mes séances (encadreur) |
| `33_ajout_atelier` | `ajouter-atelier.png` | Ajouter un atelier |
| `30_encadreur_annotations` | `annotations-encadreur.png` | Annotations (encadreur) |
| `08_communication` | `communication-sms.png` | Communication / SMS |
| `09_sms_nouveau` | `sms-nouveau.png` | Nouveau SMS |
| `11_sms_destinataires` | `sms-destinataires.png` | Destinataires |
| `12_sms_destinataires_selection` | `sms-selection.png` | Sélection de destinataires |
| `15_sms_filtres` | `sms-filtres.png` | Filtres de destinataires |
| `13_sms_confirmation` | `sms-confirmation.png` | Confirmation d'envoi |
| `16_parametres` | `parametres.png` | Paramètres |
| `17_gestion_roles` | `gestion-roles.png` | Gestion des rôles |
| `18_referentiels` | `referentiels.png` | Référentiels |
| `19_referentiel_postes` | `referentiel-postes.png` | Référentiel — postes de football |
| `20_securite` | `securite.png` | Sécurité |

## Autres captures (archive, non publiées)

| Fichier | Écran |
| --- | --- |
| `06_seance_ateliers` | Overlay ateliers (doublon partiel de la fiche joueur) |
| `10_sms_message_redige` | SMS en cours de rédaction (clavier ouvert) |
| `26_login_encadreur` | Connexion (compte encadreur) |
| `29_scanner_qr` | Scanner QR — **cadre caméra réel (non publié)** |
| `31_encadreur_profil` | Mon profil (encadreur) |
| `34_fiche_joueur_atelier` | Fiche joueur / atelier |
| `38_inscription_date_picker` | Sélecteur de date |
| `42_menu_fiche_joueur` | Menu d'actions de la fiche joueur |
| `44_bulletin_genere` | Bulletin généré (octobre 2026, période sans données — remplacé par `46`) |
| `47_bulletin_bas` | Bas du bulletin (appréciations / observations / pied de page) |

## Note

Les écrans « Bulletin » ont été générés sur la période **août 2026** (seule période
contenant des séances). Le radar reste plat car les annotations du jeu de données
de développement n'ont pas de notes exploitables — le rendu le plus riche possible
avec ces données est celui publié (`46`).
