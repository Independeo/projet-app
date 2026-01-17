-- CreateTable
CREATE TABLE `activites` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `resultat_id` BIGINT NOT NULL,
    `projet_id` BIGINT NOT NULL,
    `titre` VARCHAR(400) NOT NULL,
    `description` VARCHAR(191) NULL,
    `date_debut` DATETIME(3) NULL,
    `date_fin` DATETIME(3) NULL,
    `duree_jours` INTEGER NULL,
    `ordre` INTEGER NULL DEFAULT 0,
    `metadonnees` VARCHAR(191) NULL,
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modifie_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `idx_projet_activite`(`projet_id`, `ordre`),
    INDEX `resultat_id`(`resultat_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `amortissements` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `projet_id` BIGINT NOT NULL,
    `libelle_actif` VARCHAR(255) NOT NULL,
    `date_achat` DATETIME(3) NULL,
    `cout_achat` DECIMAL(20, 4) NULL DEFAULT 0.0000,
    `duree_utilite_mois` INTEGER NULL DEFAULT 0,
    `valeur_residuelle` DECIMAL(20, 4) NULL DEFAULT 0.0000,
    `amortissement_mensuel` DECIMAL(20, 4) NULL,
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `projet_id`(`projet_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `collaborations` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `projet_id` BIGINT NOT NULL,
    `utilisateur_id` BIGINT NOT NULL,
    `role` ENUM('owner', 'editor', 'viewer', 'supervisor') NULL DEFAULT 'editor',
    `invite_par` BIGINT NULL,
    `accepte_le` DATETIME(3) NULL,
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `projet_id`(`projet_id`),
    INDEX `utilisateur_id`(`utilisateur_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commentaires` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `projet_id` BIGINT NOT NULL,
    `utilisateur_id` BIGINT NOT NULL,
    `commentaire_parent_id` BIGINT NULL,
    `contenu` VARCHAR(191) NOT NULL,
    `metadonnees` VARCHAR(191) NULL,
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `fk_commentaire_parent`(`commentaire_parent_id`),
    INDEX `projet_id`(`projet_id`),
    INDEX `utilisateur_id`(`utilisateur_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fichiers` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `projet_id` BIGINT NULL,
    `proprietaire_id` BIGINT NULL,
    `cle_stockage` VARCHAR(1024) NOT NULL,
    `nom_original` VARCHAR(512) NULL,
    `type_mime` VARCHAR(256) NULL,
    `taille_octets` BIGINT NULL DEFAULT 0,
    `usage` ENUM('attachment', 'export', 'template', 'submission') NULL DEFAULT 'attachment',
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `idx_cle_stockage`(`cle_stockage`(255)),
    INDEX `projet_id`(`projet_id`),
    INDEX `proprietaire_id`(`proprietaire_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `flux_tresorerie` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `projet_id` BIGINT NOT NULL,
    `libelle_periode` VARCHAR(100) NULL,
    `date_periode` DATETIME(3) NULL,
    `entree` DECIMAL(20, 4) NULL DEFAULT 0.0000,
    `sortie` DECIMAL(20, 4) NULL DEFAULT 0.0000,
    `net` DECIMAL(20, 4) NULL,
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `idx_projet_periode`(`projet_id`, `date_periode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `indicateurs_financiers` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `projet_id` BIGINT NOT NULL,
    `cle_indicateur` VARCHAR(100) NOT NULL,
    `valeur_indicateur` DECIMAL(30, 10) NULL,
    `calcule_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `calcule_par` BIGINT NULL,

    INDEX `calcule_par`(`calcule_par`),
    INDEX `idx_projet_indicateur`(`projet_id`, `cle_indicateur`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lignes_budget` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `projet_id` BIGINT NOT NULL,
    `activite_id` BIGINT NULL,
    `ressource_id` BIGINT NULL,
    `categorie` VARCHAR(150) NULL,
    `description` VARCHAR(500) NULL,
    `annee_periode` SMALLINT NULL,
    `montant` DECIMAL(20, 4) NULL DEFAULT 0.0000,
    `devise` VARCHAR(8) NULL DEFAULT 'USD',
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modifie_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `activite_id`(`activite_id`),
    INDEX `idx_categorie`(`categorie`),
    INDEX `idx_projet_annee`(`projet_id`, `annee_periode`),
    INDEX `ressource_id`(`ressource_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `modeles` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `identifiant_slug` VARCHAR(200) NOT NULL,
    `nom` VARCHAR(255) NOT NULL,
    `secteur` VARCHAR(120) NULL,
    `description` VARCHAR(191) NULL,
    `structure` VARCHAR(191) NOT NULL,
    `cree_par` BIGINT NULL,
    `est_public` BOOLEAN NULL DEFAULT true,
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modifie_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `identifiant_slug`(`identifiant_slug`),
    INDEX `cree_par`(`cree_par`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `organisations` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(255) NOT NULL,
    `type` VARCHAR(100) NULL,
    `contact_json` VARCHAR(191) NULL,
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modifie_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `projets` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `proprietaire_id` BIGINT NOT NULL,
    `organisation_id` BIGINT NULL,
    `type` ENUM('entreprise', 'developpement', 'mixte') NOT NULL DEFAULT 'entreprise',
    `statut` ENUM('brouillon', 'soumis', 'en cours de révision', 'approuvé', 'rejeté', 'archivé') NULL DEFAULT 'brouillon',
    `titre` VARCHAR(512) NOT NULL,
    `description_courte` VARCHAR(1024) NULL,
    `metadonnees` VARCHAR(191) NULL,
    `progression` INTEGER NULL DEFAULT 0,
    `est_public` BOOLEAN NULL DEFAULT false,
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modifie_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `idx_proprietaire`(`proprietaire_id`),
    INDEX `idx_type_statut`(`type`, `statut`),
    INDEX `organisation_id`(`organisation_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ressources` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `projet_id` BIGINT NOT NULL,
    `activite_id` BIGINT NULL,
    `type_ressource` ENUM('RH', 'RF', 'RMF', 'RMN', 'SERVICE', 'MATERIEL') NULL DEFAULT 'MATERIEL',
    `libelle` VARCHAR(300) NOT NULL,
    `unite` VARCHAR(80) NULL,
    `quantite` DECIMAL(18, 4) NULL DEFAULT 0.0000,
    `cout_unitaire` DECIMAL(18, 4) NULL DEFAULT 0.0000,
    `frequence` ENUM('one_time', 'monthly', 'quarterly', 'annual') NULL DEFAULT 'one_time',
    `cout_total` DECIMAL(20, 4) NULL,
    `notes` VARCHAR(191) NULL,
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modifie_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `activite_id`(`activite_id`),
    INDEX `idx_projet_ressource`(`projet_id`, `type_ressource`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resultats` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `projet_id` BIGINT NOT NULL,
    `titre` VARCHAR(400) NOT NULL,
    `description` VARCHAR(191) NULL,
    `ordre` INTEGER NULL DEFAULT 0,
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modifie_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `idx_projet_ordre`(`projet_id`, `ordre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `utilisateurs` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `organisation_id` BIGINT NULL,
    `role` ENUM('user', 'pro', 'admin', 'superadmin') NOT NULL DEFAULT 'user',
    `email` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NULL,
    `mot_de_passe_hash` VARCHAR(191) NOT NULL,
    `nom_utilisateur` VARCHAR(191) NULL,
    `langue` VARCHAR(191) NULL DEFAULT 'fr',
    `double_auth_active` BOOLEAN NULL DEFAULT false,
    `profil` VARCHAR(191) NULL,
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modifie_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `utilisateurs_email_key`(`email`),
    INDEX `idx_org_role`(`organisation_id`, `role`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `versions_projet` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `projet_id` BIGINT NOT NULL,
    `cree_par` BIGINT NOT NULL,
    `etiquette_version` VARCHAR(191) NULL,
    `capture` VARCHAR(191) NOT NULL,
    `cree_le` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `cree_par`(`cree_par`),
    INDEX `projet_id`(`projet_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
