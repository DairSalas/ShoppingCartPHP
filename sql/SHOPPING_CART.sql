-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 03-02-2021 a las 15:52:35
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `SHOPPING_CART`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Carts`
--

CREATE TABLE `Carts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `url_image` varchar(1000) NOT NULL,
  `price` float NOT NULL,
  `amount` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Products`
--

CREATE TABLE `Products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `url_image` varchar(1000) NOT NULL,
  `price` float NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Products`
--

INSERT INTO `Products` (`id`, `name`, `description`, `url_image`, `price`, `amount`) VALUES
(1, 'chicken', 'it is delicious', 'https://i.blogs.es/8ceb02/pollo_entero/450_1000.jpg', 5000, 20),
(2, 'sugar', 'it is delicious', 'https://www.getldi.com/wp-content/uploads/2017/09/bigstock-Bowl-and-scoop-with-white-sand-180259339.jpg', 800, 130),
(3, 'Rice', 'The rice is white', 'https://themom100.com/wp-content/uploads/2015/08/rice-in-bowl-horiz-with-spoon-copy.jpg', 1500, 490),
(4, 'Banana', 'The banana is yellow', 'https://img2.freepng.es/20180410/azw/kisspng-cooking-banana-fruit-clip-art-green-banana-5acc45b54ab661.273100041523336629306.jpg', 450, 100);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Carts`
--
ALTER TABLE `Carts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Carts`
--
ALTER TABLE `Carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `Products`
--
ALTER TABLE `Products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
