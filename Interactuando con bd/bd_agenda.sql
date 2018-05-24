-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2018 at 04:32 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agenda`
--
CREATE DATABASE IF NOT EXISTS `agenda` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `agenda`;

-- --------------------------------------------------------

--
-- Table structure for table `eventos`
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `fecha_inicio` varchar(45) NOT NULL,
  `hora_inicio` varchar(45) NOT NULL,
  `fecha_finalizacion` varchar(45) NOT NULL,
  `hora_finalizacion` varchar(45) NOT NULL,
  `dia_completo` varchar(10) DEFAULT NULL,
  `fk_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eventos`
--

INSERT INTO `eventos` (`id`, `titulo`, `fecha_inicio`, `hora_inicio`, `fecha_finalizacion`, `hora_finalizacion`, `dia_completo`, `fk_user`) VALUES
(1, 'Entrega de proyecto', '2018-05-22', '', '', '', 'true', 5),
(2, 'tarea de proyecto', '2018-05-21', '07:00', '2018-05-25', '13:00', 'false', 4),
(4, 'llegada de colombia', '2018-05-06', '00:00:00', 'Invalid da', 'e', 'true', 5);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(45) CHARACTER SET utf8 NOT NULL,
  `pass` varchar(250) CHARACTER SET utf8 NOT NULL,
  `fecha_nacimiento` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `pass`, `fecha_nacimiento`) VALUES
(1, 'michelle betancourt', 'mich@gmail.com', '$2y$10$GV.5KCL4Tqtia13mYn7uduGfKE3aaxPWzDaBCtClul/QLxCwYlS2q', '1994-07-17'),
(2, 'gabriel sanchez', 'gabriel@gmail.com', '$2y$10$pW3MvQx4FQynr4R4tC4VFOrdGkfSBqQozfXVMwyqwFsbOOcvx01E.', '1990-11-09'),
(3, 'Jorge Garcia', 'jorge@gmail.com', '$2y$10$BnBLgFQfpO6TynyehlDmxeeJoJ0a.pdSiv/IyqvVKELFaq92H05yO', '1900-10-10'),
(4, 'Maria Teresa', 'teresa@gmail.com', '$2y$10$.2E7LCOK.xr0GJxg7fGUfeFzoOctFEFXssxjEqo2aF8mb3AELH01q', '1985-11-01'),
(5, 'PAUL', 'paul@gmail.com', '$2y$10$EvDU5xziqWlWn65jltK81O2Fk9ixVgadncAGKSgXuEzUMt4cPXi7C', '1990-10-15'),
(6, 'SEBAS', 'sebas@gmail.com', '$2y$10$8hKV02Csv3HEltNEFUfl3uDTMLG5fQAh1xnOaq6TBhiSb8ghg.Pni', '2010-02-26'),
(7, 'DANNA', 'danna@gmail.com', '$2y$10$VHJJxlHT1FkHg1ykDslAruich.xRgyzGqvzQLKG6RMlnCM7ihgBYK', '2017-10-15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user` (`fk_user`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `eventos`
--
ALTER TABLE `eventos`
  ADD CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`fk_user`) REFERENCES `usuarios` (`id`);
