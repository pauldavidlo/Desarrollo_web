-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-11-2017 a las 15:42:03
-- Versión del servidor: 10.1.26-MariaDB
-- Versión de PHP: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `agenda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(45) CHARACTER SET utf8 NOT NULL,
  `pass` varchar(250) CHARACTER SET utf8 NOT NULL,
  `fecha_nacimiento` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `pass`, `fecha_nacimiento`) VALUES
(1, 'michelle betancourt', 'mich@gmail.com', '$2y$10$GV.5KCL4Tqtia13mYn7uduGfKE3aaxPWzDaBCtClul/QLxCwYlS2q', '17/07/1994'),
(2, 'gabriel sanchez', 'gabriel@gmail.com', '$2y$10$pW3MvQx4FQynr4R4tC4VFOrdGkfSBqQozfXVMwyqwFsbOOcvx01E.', '11/09/1990'),
(3, 'Jorge Garcia', 'jorge@gmail.com', '$2y$10$BnBLgFQfpO6TynyehlDmxeeJoJ0a.pdSiv/IyqvVKELFaq92H05yO', '11/04/1980'),
(4, 'Maria Teresa', 'teresa@gmail.com', '$2y$10$.2E7LCOK.xr0GJxg7fGUfeFzoOctFEFXssxjEqo2aF8mb3AELH01q', '11/01/1985');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user` (`fk_user`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=194;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`fk_user`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
