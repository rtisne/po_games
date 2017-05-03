-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Mer 03 Mai 2017 à 15:15
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `po_games`
--

-- --------------------------------------------------------

--
-- Structure de la table `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `mesure` int(11) NOT NULL,
  `min` int(11) NOT NULL,
  `max` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `games`
--

INSERT INTO `games` (`id`, `name`, `mesure`, `min`, `max`) VALUES
(1, 'Just Smile', 1, 0, 7000),
(2, 'Course au château', 1, 0, 7000),
(3, 'Le Questionnaire', 1, 0, 7000);

-- --------------------------------------------------------

--
-- Structure de la table `identifications`
--

CREATE TABLE `identifications` (
  `picture` int(11) NOT NULL,
  `member` int(11) NOT NULL,
  `game` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `members`
--

INSERT INTO `members` (`id`, `firstname`, `lastname`) VALUES
(144, 'JEAN-FELIX', 'GIRARDIN'),
(143, 'BERENICE', 'GERMAIN'),
(142, 'ERIC', 'GAGNIER'),
(141, 'NICOLAS', 'DUBOIS'),
(140, 'MARIELLE', 'DIZIER'),
(139, 'MARC', 'DELIGNY'),
(138, 'LOUIS', 'DEGROU'),
(137, 'ERIC', 'DE QUATREBARBES'),
(136, 'SOPHIE', 'COURAT'),
(135, 'JULIEN', 'CORNE'),
(134, 'GREGORY', 'CLAVE'),
(133, 'REMI', 'CAUDWELL'),
(132, 'SANDRA', 'CARRAUD'),
(131, 'Laetitia', 'BUSNEL'),
(130, 'SEBASTIEN', 'BROUAT'),
(129, 'MYRIAM', 'BRAZZALOTTO'),
(128, 'SERGE', 'BOUTIE'),
(127, 'LAURENT', 'BODART'),
(126, 'THIERRY', 'BIGOT'),
(125, 'JEAN-MARC', 'BIANCHINI'),
(124, 'SEBASTIEN', 'BEYELER'),
(123, 'PETER', 'BETTING'),
(122, 'JEROME', 'BERTHOD'),
(121, 'JACQUES', 'BERCHADSKY'),
(120, 'Lucas', 'BERARDI'),
(119, 'LAURENT', 'BEDOUIN'),
(118, 'MICHEL', 'AUTIN'),
(117, 'JEAN-PHILIPPE', 'ARNALOT'),
(116, 'SOPHY', 'ANDONOFF'),
(115, 'CHRISTOPHE', 'ALQUIER'),
(114, 'THOMAS', 'WESTHEAD'),
(113, 'QUENTIN', 'VILLEGENTE'),
(112, 'Romain', 'TISNE'),
(111, 'OLIVIER', 'TARROUX'),
(110, 'FRANCK', 'TACHOUERES'),
(109, 'ALAIN', 'STREBY'),
(108, 'VERONIQUE', 'SOURBE'),
(107, 'OLY', 'SEPIERE'),
(106, 'JEAN-CLAUDE', 'SEGUIN'),
(105, 'XAVIER', 'SANTOS'),
(104, 'JOHAN', 'SAMPEDRO'),
(103, 'PHILIPPE', 'ROUGIER'),
(102, 'MURIEL', 'RONDA'),
(101, 'REMI', 'ROBERT'),
(100, 'MARYLINE', 'RENAUD'),
(99, 'YANNICK', 'REICHLIN'),
(98, 'PATRICK', 'RAPP'),
(97, 'FREDERIC', 'RADIGOY'),
(96, 'JORDI', 'PUIGSEGUR'),
(95, 'GWENAELLE', 'PLE'),
(94, 'SEBASTIEN', 'PIQUEMAL'),
(93, 'BRUNO', 'PIETTE'),
(92, 'DELPHINE', 'PICAUD'),
(91, 'Margaux', 'PEDRON'),
(90, 'PHILIPPE', 'OLIVETTI'),
(89, 'MAXIMILIEN', 'OBERLIS'),
(88, 'CHANTAL', 'NARBAIS-JAUREGUY'),
(87, 'KATIA', 'MELAB'),
(86, 'CORALIE', 'MAZZOCCHI'),
(85, 'ANGELIQUE', 'MAZIERE'),
(84, 'ALESSANDRA', 'MAS'),
(83, 'FRANCOIS-XAVIER', 'MARTIN'),
(82, 'Paul', 'MARIAGE'),
(81, 'REMI', 'MACH'),
(80, 'FLORIAN', 'LEFEUVRE'),
(79, 'PASCAL', 'LEDROIT'),
(78, 'PIERRE', 'LE ROUX'),
(77, 'SALOME', 'LE MERDY'),
(76, 'THOMAS', 'LE LEPVRIER CUSSOL'),
(75, 'RYAN', 'LAVIE'),
(74, 'YANN', 'LAURELUT'),
(73, 'JEAN-BERNARD', 'LAULHE'),
(72, 'DAMIEN', 'LARZABAL'),
(71, 'ALICE', 'LARTIGAU'),
(70, 'JULIEN', 'LAROCHE'),
(69, 'Francois', 'LARGETEAU'),
(68, 'MARLENE', 'LAPORTE'),
(67, 'BERNARD', 'LAPEYRE'),
(66, 'MARLENE', 'LAFON'),
(65, 'CELINE', 'LAFFARGE'),
(64, 'VINCENT', 'LABATUT'),
(63, 'STEPHANE', 'LABARDIN'),
(62, 'SABINE', 'JOUSON'),
(61, 'ROMUALD', 'JOUBERT'),
(60, 'JEAN-BENOIT', 'HINAULT'),
(59, 'ALAN', 'GUITARD'),
(58, 'JEROME', 'GUICHARD'),
(57, 'DAVID', 'GRENIER'),
(56, 'VINCENT', 'GRANGHON'),
(55, 'BERNARD', 'GOUSSET'),
(54, 'GUILLAUME', 'GOULEAU'),
(53, 'PASCALE', 'GIRON'),
(52, 'ULRICH', 'GIRAUD'),
(51, 'AURELIE', 'GILBERT'),
(50, 'CLAIRE', 'GERMANAUD'),
(49, 'OLIVIER', 'GEORGES'),
(48, 'AMANDINE', 'GEORGES'),
(47, 'XAVE', 'GENEVOIS'),
(46, 'STEPHANE', 'GAURET'),
(45, 'BENOIT', 'GAUDY'),
(44, 'JULIE', 'GABACH'),
(43, 'LOUIS', 'FOUET'),
(42, 'MARC', 'ETOURNEAU'),
(41, 'AMINE', 'EL FOUGHALI'),
(40, 'CORINNE', 'DUPUIS'),
(39, 'MARIE', 'DEXTER'),
(38, 'CHRISTOPHE', 'DELOUME CARPENTRAS'),
(37, 'VALERIE', 'DELAHAYE'),
(36, 'GUILLAUME', 'DEBAT'),
(35, 'MATHIEU', 'DAVAILLE'),
(34, 'LAURENT', 'COUZIN'),
(33, 'BRUNO', 'COURTET'),
(32, 'DOMINIQUE', 'COLONNA'),
(31, 'CHRISTOPHE', 'CLOLUS'),
(30, 'NICOLAS', 'CLERTAN LAPEYRERE'),
(29, 'KAREN', 'CLEDOR'),
(28, 'WILLIAM', 'CISNEROS'),
(27, 'ALEXANDRE', 'CHERAMY'),
(26, 'JULIEN', 'CHALENDARD'),
(25, 'JULIEN', 'CALVEZ'),
(24, 'Aurélien', 'CALLEDE'),
(23, 'ALINE', 'CADIOU'),
(22, 'THOMAS', 'BRO'),
(21, 'THIERRY', 'BOUSQUET'),
(20, 'FLORIAN', 'BOURREILLE'),
(19, 'JEAN PATRICE', 'BOULERT'),
(18, 'FABIEN', 'BOUFFARD'),
(17, 'MOHAMED', 'BOUDABZA'),
(15, 'ALAIN', 'BLOUIN'),
(13, 'SEBASTIEN', 'BERTRAND'),
(12, 'SALWA', 'BENZIDIYA'),
(11, 'IMANE', 'BEN ELMAMOUN'),
(10, 'GUILLAUME', 'BEAUBIS'),
(9, 'CELINE', 'BAUDRY'),
(8, 'BERNADETTE', 'BARBEYRON'),
(7, 'ROMAIN', 'AYMES'),
(5, 'ANOUTCHKA', 'ANGLIONIN'),
(4, 'LAURENT', 'ANDRZEJCZAK'),
(3, 'GUILHEM', 'ALES'),
(2, 'JEAN-PIERRE', 'ALBERT'),
(1, 'KAWTAR', 'AICHANE'),
(145, 'BENOIT', 'HEIB'),
(146, 'GUILLAUME', 'IRIGOYEN'),
(147, 'IRWIN', 'ISSURY'),
(148, 'YANN', 'JAEGLE'),
(149, 'SEBASTIEN', 'JEUFFRAY'),
(150, 'SEBASTIEN', 'LABASLE'),
(151, 'AURORE', 'LACOUR-COULON'),
(152, 'ADRIEN', 'LAFFARGUE'),
(153, 'BAPTISTE', 'LARGANT'),
(154, 'LAURA', 'LARQUEY'),
(155, 'FREDERIQUE', 'LASSERRE'),
(156, 'MIKAEL', 'LE MERCIER'),
(157, 'FLORENCE', 'LE MOIGNE'),
(158, 'NICOLAS', 'LESPIAUCQ'),
(159, 'CAMILLE', 'MARC-DURA'),
(160, 'FLORIAN', 'MARCHIVE'),
(161, 'PATRICK', 'MASSEGLIA'),
(162, 'STEPHANE', 'MASSONNEAU'),
(163, 'ROXANE', 'MAZET'),
(164, 'ALEKSANDRA', 'MAZUREK DELBART'),
(165, 'ALEXANDRE', 'OLIVIER'),
(166, 'THIERRY', 'PASCAL'),
(167, 'CLAIRE', 'PASCAUD'),
(168, 'YANN', 'PHILIPPE'),
(169, 'MATHIEU', 'REGLAIN'),
(170, 'CELINE', 'REITER'),
(171, 'LIONEL', 'RUOZZI'),
(172, 'NATHALIE', 'ROBUCHON'),
(173, 'EMMANUELLE', 'ROCHETTE'),
(174, 'FRANCOIS', 'ROGER'),
(175, 'MANON', 'ROUZEE'),
(176, 'BAPTISTE', 'SABUCO'),
(177, 'FABIEN', 'SENLANNE'),
(178, 'STEPHANE', 'TAUZIA'),
(179, 'SARAH', 'TELLEZ'),
(180, 'Chetra', 'TEA'),
(181, 'ERIC', 'TORTET'),
(182, 'EMILIE', 'URVOAS TORRES'),
(183, 'GERY', 'VANDAMME'),
(184, 'Maxime', 'FARIA');

-- --------------------------------------------------------

--
-- Structure de la table `mesures`
--

CREATE TABLE `mesures` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `mesures`
--

INSERT INTO `mesures` (`id`, `name`) VALUES
(1, 'point'),
(2, 'seconde');

-- --------------------------------------------------------

--
-- Structure de la table `pictures`
--

CREATE TABLE `pictures` (
  `id` int(11) NOT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pictures`
--

INSERT INTO `pictures` (`id`, `path`) VALUES
(6, 'public\\uploads\\joie_1493309738117.png'),
(11, 'public\\uploads\\peur_3629832983298320.png'),
(5, 'public\\uploads\\colere_1493309439976.png'),
(7, 'public\\uploads\\neutre_1493309738129.png'),
(8, 'public\\uploads\\surprise_1493309738133.png'),
(10, 'public\\uploads\\degout_36283828282882820.png'),
(12, 'public\\uploads\\colere_1493799153001.jpg'),
(13, 'public\\uploads\\joie_1493799153011.jpg'),
(14, 'public\\uploads\\peur_1493799153016.jpg'),
(15, 'public\\uploads\\surprise_1493799153025.jpg'),
(16, 'public\\uploads\\tristesse_1493799153031.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `results`
--

CREATE TABLE `results` (
  `game` int(11) NOT NULL,
  `member` int(11) NOT NULL,
  `score` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `results`
--

INSERT INTO `results` (`game`, `member`, `score`) VALUES
(1, 2, 3034),
(3, 14, 5324),
(2, 18, 4500),
(3, 4, 4300),
(1, 5, 2200),
(1, 6, 450),
(1, 7, 5320),
(1, 11, 6304),
(1, 22, 5400),
(1, 19, 3290),
(1, 18, 3450),
(2, 40, 1000),
(2, 5, 3400),
(2, 6, 4500),
(2, 7, 12),
(1, 23, 4320),
(1, 13, 6000),
(1, 37, 5800),
(3, 9, 4560),
(3, 43, 5200),
(1, 10, 4053),
(3, 7, 4500),
(1, 20, 4500),
(3, 21, 4320),
(1, 8, 6300),
(1, 21, 2000),
(1, 4, 58),
(1, 17, 5890),
(1, 12, 5800),
(3, 12, 2000),
(1, 46, 4000),
(1, 40, 3405),
(1, 42, 2340),
(1, 39, 5670),
(1, 45, 4560),
(2, 4, 7000),
(1, 9, 1942),
(2, 43, 4320),
(3, 23, 1000),
(3, 18, 3450),
(3, 10, 7000),
(3, 2, 6700),
(3, 5, 1300),
(3, 8, 2500),
(2, 16, 6980),
(2, 34, 1478),
(2, 37, 4500),
(2, 15, 5400);

-- --------------------------------------------------------

--
-- Structure de la table `tokens`
--

CREATE TABLE `tokens` (
  `token` varchar(255) NOT NULL,
  `game` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Contenu de la table `tokens`
--

INSERT INTO `tokens` (`token`, `game`) VALUES
('D5B496DBEE4E272F788D9424925C9', 1),
('hepedbvR6F96Uy2eIO631v7Wyd0J0si7', 2),
('Gy2OTo8OCcGHRDAvl1FC8SExlvLgsO6Y', 3);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_mesure_numero` (`mesure`);

--
-- Index pour la table `identifications`
--
ALTER TABLE `identifications`
  ADD PRIMARY KEY (`picture`,`member`),
  ADD KEY `member_id` (`member`),
  ADD KEY `game_id` (`game`);

--
-- Index pour la table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `mesures`
--
ALTER TABLE `mesures`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `pictures`
--
ALTER TABLE `pictures`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`game`,`member`),
  ADD KEY `member_id` (`member`);

--
-- Index pour la table `tokens`
--
ALTER TABLE `tokens`
  ADD KEY `game_id` (`game`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=185;
--
-- AUTO_INCREMENT pour la table `mesures`
--
ALTER TABLE `mesures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `pictures`
--
ALTER TABLE `pictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
