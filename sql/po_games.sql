

CREATE DATABASE po_games;
USE po_games;
CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `mesure` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;



CREATE TABLE `identifications` (
  `picture` int(11) NOT NULL,
  `member` int(11) NOT NULL,
  `game` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `members` (`id`, `firstname`, `lastname`, `email`) VALUES
(1, 'Jean', 'Dupond', 'jean.dupond@sogeti.com'),
(2, 'Pierre', 'Safrand', 'pierre.safrand@sogeti.com'),
(3, 'Jacques', 'Dupond', 'jacques.dupond@sogeti.com'),
(4, 'Jean-pierre', 'Raveli', 'jp.raveli@sogeti.com');

CREATE TABLE `mesures` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `mesures` (`id`, `name`) VALUES
(1, 'point'),
(2, 'seconde');

CREATE TABLE `pictures` (
  `id` int(11) NOT NULL,
  `path` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `results` (
  `game` int(11) NOT NULL,
  `member` int(11) NOT NULL,
  `score` FLOAT(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

CREATE TABLE `tokens` (
  `token` varchar(255) NOT NULL,
  `game` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `tokens` (`token`, `game`) VALUES
('D5B496DBEE4E272F788D9424925C9', 1);


ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_mesure_numero` (`mesure`);

ALTER TABLE `identifications`
  ADD PRIMARY KEY (`picture`,`member`),
  ADD KEY `member_id` (`member`),
  ADD KEY `game_id` (`game`);

ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `mesures`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `pictures`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `results`
  ADD PRIMARY KEY (`game`,`member`),
  ADD KEY `member_id` (`member`);

ALTER TABLE `tokens`
  ADD KEY `game_id` (`game`);


ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
ALTER TABLE `mesures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
ALTER TABLE `pictures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `games` ADD `min` INT NOT NULL AFTER `mesure`, ADD `max` INT NOT NULL AFTER `min`;


INSERT INTO `games` (`id`, `name`, `mesure`, `min`, `max`) VALUES
(1, 'Smiley', 1, 0, 6);
