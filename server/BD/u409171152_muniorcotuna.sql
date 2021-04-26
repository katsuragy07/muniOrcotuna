-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-03-2021 a las 17:02:12
-- Versión del servidor: 10.4.14-MariaDB-cll-lve
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u409171152_muniorcotuna`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `anuncios`
--

CREATE TABLE `anuncios` (
  `idanuncio` int(11) NOT NULL,
  `nombre` varchar(75) COLLATE utf8_spanish_ci DEFAULT NULL,
  `url_img` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inicio` tinyint(1) NOT NULL,
  `fecha` datetime NOT NULL,
  `referencia` varchar(85) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `anuncios`
--

INSERT INTO `anuncios` (`idanuncio`, `nombre`, `url_img`, `inicio`, `fecha`, `referencia`) VALUES
(1, 'Anuncio 1', '5fd3e66bc836a.jpg', 0, '2020-12-30 00:19:47', ''),
(2, 'Anuncio 2', '5fd3e6dc802e0.jpg', 0, '2020-12-30 00:19:45', ''),
(3, 'Anuncio 3', '5fd3e6582e9f8.jpg', 0, '2020-12-30 00:19:43', ''),
(4, 'Anuncio 4', '5fd3e64c65ffe.jpg', 0, '2020-12-30 00:19:40', ''),
(5, 'Anuncio 5', '5fd3ec15b0ea7.jpg', 0, '2020-12-30 00:20:54', ''),
(103, 'Anuncio 6', '5fec0e0909e24.png', 0, '2021-02-26 12:09:26', '/convocatorias');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `areas`
--

CREATE TABLE `areas` (
  `idarea` int(11) NOT NULL,
  `nombre_area` varchar(85) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `areas`
--

INSERT INTO `areas` (`idarea`, `nombre_area`) VALUES
(1, 'Informática'),
(2, 'Mesa de Partes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `convocatorias`
--

CREATE TABLE `convocatorias` (
  `idconvocatoria` int(11) NOT NULL,
  `nombre` varchar(85) COLLATE utf8_spanish_ci NOT NULL,
  `url_archivo` varchar(75) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `convocatorias`
--

INSERT INTO `convocatorias` (`idconvocatoria`, `nombre`, `url_archivo`, `fecha`) VALUES
(7, 'PROCESO DE CONVOCATORIA DE PERSONAL CAS. 001-2021', '5febd08aca846.pdf', '2020-12-29 15:57:47'),
(8, 'ANEXOS DE CONVOCATORIA DE PERSONAL CAS. 001-2021', '5febd468ddaad.docx', '2020-12-29 16:03:16'),
(9, 'FE DE ERRATAS AL PROCESO DE CONVOCATORIA DE PERSONAL CAS. 001-2021 DE FECHA 29 DE DIC', '5ffc70e1b92a6.pdf', '2021-01-11 10:38:09'),
(11, 'RESULTADOS DE EVALUACIÓN CONVOCATORIA DE PERSONAL CAS 001-2021', '600afb0bd8886.pdf', '2021-01-22 11:19:24'),
(12, 'FE DE ERRATAS AL PROCESO DE CONVOCATORIA DE PERSONAL CAS. 001-2021 DE FECHA 29 DE DIC', '600b4efc1490f.pdf', '2021-01-22 17:17:32'),
(13, 'RESULTADO DEL PROCESO DE CONVOCATORIA DE PERSONAL CAS 001-2021', '6011ea5584091.pdf', '2021-01-27 17:33:57'),
(14, 'PROCESO DE CONVOCATORIA DE PERSONAL CAS. 002-2021-A-MDO', '60217a2af41bf.pdf', '2021-02-08 12:51:39'),
(16, 'ANEXOS DE CONVOCATORIA DE PERSONAL CAS. 002-2021-A-MDO', '602bf59130afe.docx', '2021-02-16 11:40:49'),
(17, 'RESULTADOS DE EVALUACIÓN DE LA HOJA DE VIDA DEL PROCESO DE CONVOCATORIA DE PERSONAL C', '60469b1c97178.pdf', '2021-03-12 18:32:49'),
(18, 'RESULTADO DEL PROCESO DE CONVOCATORIA DE PERSONAL CAS 002-2021-A-MDO', '604bfa46179ed.pdf', '2021-03-12 18:33:26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `general`
--

CREATE TABLE `general` (
  `idgeneral` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `serial` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `active` varchar(2) COLLATE utf8_spanish_ci DEFAULT NULL,
  `alcalde` varchar(85) COLLATE utf8_spanish_ci DEFAULT NULL,
  `correo` varchar(75) COLLATE utf8_spanish_ci DEFAULT NULL,
  `telefono` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `url_img` varchar(75) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `general`
--

INSERT INTO `general` (`idgeneral`, `fecha`, `serial`, `active`, `alcalde`, `correo`, `telefono`, `url_img`) VALUES
(1, '2020-12-07 00:00:00', 'WFkZeLn25twPXU3thnyU', '1', 'Alc. Mario Antonio Grande Bueno', 'muniorcotuna@muniorcotuna.gob.pe', '324324234 / 213232', '600d050bf4002.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `idhistorial` int(11) NOT NULL,
  `fecha_mov` datetime NOT NULL,
  `estado_mov` varchar(1) COLLATE utf8_spanish_ci NOT NULL,
  `observaciones` text COLLATE utf8_spanish_ci DEFAULT NULL,
  `tramites_idtramite` int(11) NOT NULL,
  `area_idarea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `historial`
--

INSERT INTO `historial` (`idhistorial`, `fecha_mov`, `estado_mov`, `observaciones`, `tramites_idtramite`, `area_idarea`) VALUES
(4, '2021-03-22 19:22:46', '1', '', 14, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logos`
--

CREATE TABLE `logos` (
  `idlogo` int(11) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `url_img` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE `noticias` (
  `idnoticia` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `titulo` varchar(85) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci DEFAULT NULL,
  `url_img` varchar(75) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`idnoticia`, `fecha`, `titulo`, `descripcion`, `url_img`) VALUES
(2, '2020-12-09 19:41:06', 'Trabajos de Formalización de Asociaciones de Productores Agropecuarios.', 'La Municipalidad Distrital de Orcotuna mediante la Gerencia de Desarrollo Económico y Social, realizó los trabajos de Formalización de Asociaciones de Productores Agropecuarios, en la que participaron: La Asociación de Productores Agropecuarios del Barrio San Marcos y La Asociación Agropecuaria Antinos-San Antonio.<br />El objetivo de la Formalización de Asociaciones de Productores Agropecuarios es mejorar las capacidades de organización, formalización y/o acceso a diversos proyectos que contribuirán en el desarrollo agropecuario del distrito de Orcotuna.', '5fd3e339c22bc.jpg'),
(3, '2020-12-10 16:21:09', 'Asistencia técnica en campos de productores agrícolas', 'La Municipalidad Distrital de Orcotuna en coordinación con la Agencia Agraria de Concepción y especialistas del Instituto Nacional de Innovación Agraria – Junín, realizaron la asistencia técnica en campo a los productores agrícolas con presencia de enfermedades en sus cultivos.', '5fd3e2c511740.jpg'),
(4, '2020-12-11 12:19:31', 'Municipalidad de Orcotuna CLVI Aniversario', 'En el mes del aniversario CLVI de creación política del Distrito de Orcotuna y como parte de los esfuerzos en la búsqueda de cierre de brechas tecnológicas que existen en nuestro distrito, el día 6 de noviembre, en las instalaciones del I.E.S.T.P. “Mario Gutierrez Lopez”, el alcalde Mario Grande Bueno y funcionarios hicieron la entrega de quince (15) equipos de cómputo adquiridos por la Municipalidad Distrital de Orcotuna, al señor Director Ronald Julián Vásquez Sovero y docentes del Instituto de Educación Superior Tecnológico Público “Mario Gutierrez Lopez”.<br />Cabe hacer mención que las computadoras donadas por la Municipalidad Distrital de Orcotuna están equipadas con velocidad de procesamiento y memoria RAM y compatibilidad con todos los programas y aplicativos necesarios para un mejor desarrollo educativo de los estudiantes y docentes.', '5fd3e23a938cc.jpg'),
(5, '2020-12-11 16:19:13', 'La Municipalidad Distrital de Orcotuna mediante la Gerencia de Desarrollo Económico y', 'Se realizaron más de cien (100) pruebas rápidas de descarte de COVID-19, que fue realizado por personal médico y asistencial del Centro Médico de Concepción.<br />Cabe mencionar que a todos aquellos pacientes que resultaron positivos se les entrego un kit de medicinas, además, los médicos de EsSalud indicaron que serán monitoreados constantemente.', '5fd3e1c90e6df.jpg'),
(10, '2021-02-12 17:33:08', 'MDO realiza distribución de protectores faciales', 'La Municipalidad Distrital de Orcotuna a través de la Gerencia de Desarrollo Económico y Social, realizo la distribución de protectores faciales. Este importante instrumento de protección ante el COVID-19 se entregó de manera gratuita a los transeúntes en el sector de expendio de lechón, paradero de Orcotuna y calles principales de nuestro distrito.', '6027022408246.jpg'),
(11, '2021-02-12 17:33:00', 'Llamado a la población orcotuneña', 'Vecino, vecina, no dejes que la covid-19 mate a tus seres queridos, hoy más que nunca debemos estar firmes y luchar juntos en la prevención de la pandemia del coronavirus. La protección y quedarnos en casa es esencial.<br />Es importante reforzar las medidas de protección personal y evitar asistir a reuniones.<br />Recuerda siempre:<br />Eres fuerte, eres amado, no estás solo. Protege a los tuyos. ¡Protégete!', '6027021c57dd0.jpg'),
(12, '2021-02-12 17:30:52', 'Infórmate sobre el coronavirus (COVID-19): vecino, la región Junín se encuentra en el', 'Con el fin de controlar y evitar la propagación del COVID-19 en nuestro distrito, se vienen realizando el patrullaje mixto entre la PNP, Serenazgo y la Subprefectura Distrital de Orcotuna; esto, para hacer cumplir las acciones dispuestas por el Gobierno frente a la lucha contra esta pandemia.', '6027019c7055b.jpg'),
(13, '2021-02-12 17:31:57', 'Junín en alerta extrema ante el Coronavirus', 'Como parte de las acciones emprendidas frente a esta segunda ola del COVID-19, La Municipalidad Distrital de Orcotuna a través de la Gerencia de Gestión Ambiental y Servicios Públicos viene realizando la campaña de desinfección y fumigación gratuita a las bodegas y restaurantes.<br />Recuerda: solo cuidándote cuidas a los tuyos, ellos te necesitan', '602701ddae8b1.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `portadas`
--

CREATE TABLE `portadas` (
  `idportada` int(11) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `titulo` text COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion` text COLLATE utf8_spanish_ci DEFAULT NULL,
  `url_img` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `portadas`
--

INSERT INTO `portadas` (`idportada`, `nombre`, `titulo`, `descripcion`, `url_img`) VALUES
(2, 'Portada 1', '', '', '5ff89cbd7709b.png'),
(4, 'Portada 2', '', '', '5ff89b6336e55.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resoluciones`
--

CREATE TABLE `resoluciones` (
  `idresolucion` int(11) NOT NULL,
  `nombre` text COLLATE utf8_spanish_ci NOT NULL,
  `tipo` varchar(5) COLLATE utf8_spanish_ci NOT NULL,
  `url_archivo` varchar(75) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `resoluciones`
--

INSERT INTO `resoluciones` (`idresolucion`, `nombre`, `tipo`, `url_archivo`, `fecha`) VALUES
(7, 'ORDENANZA MUNICIPAL N° 001-2021-MDO', '3', '60069a93a36f6.pdf', '2021-01-19 03:38:43'),
(8, 'ORDENANZA MUNICIPAL N° 002-2021-MDO', '3', '60069aa5db00c.pdf', '2021-01-19 03:39:01'),
(9, 'ORDENANZA MUNICIPAL N° 003-2021-MDO', '3', '600fac91bb26f.pdf', '2021-01-26 00:46:05'),
(10, 'DECRETO DE ALCALDÍA N° 001-2021-MDO', '4', '600facbc67b4d.pdf', '2021-01-26 00:53:21'),
(11, 'DECRETO DE ALCALDÍA N° 002-2021-MDO', '4', '600facc8271b5.pdf', '2021-01-26 00:53:13'),
(12, 'RESOLUCION DE ALCALDIA N° 001-2021-A/MDO', '1', '6048cff82fead.pdf', '2021-03-10 08:56:08'),
(13, 'RESOLUCION DE ALCALDIA N° 002-2021-A/MDO', '1', '6048d01d2547a.pdf', '2021-03-10 08:56:45'),
(14, 'RESOLUCION DE ALCALDIA N° 003-2021-A/MDO', '1', '6048d02edcfcc.pdf', '2021-03-10 08:57:02'),
(15, 'RESOLUCION DE ALCALDIA N° 004-2021-A/MDO', '1', '6048d03d10c3c.pdf', '2021-03-10 08:57:17'),
(16, 'RESOLUCION DE ALCALDIA N° 005-2021-A/MDO', '1', '6048d04ac1d25.pdf', '2021-03-10 08:57:30'),
(17, 'RESOLUCION DE ALCALDIA N° 006-2021-A/MDO', '1', '6048d059c6602.pdf', '2021-03-10 08:57:45'),
(18, 'RESOLUCION DE ALCALDIA N° 007-2021-A/MDO', '1', '6048d06c9d5c1.pdf', '2021-03-10 08:58:04'),
(19, 'RESOLUCION DE ALCALDIA N° 008-2021-A/MDO', '1', '6048d08045eb7.pdf', '2021-03-10 08:58:24'),
(20, 'RESOLUCION DE ALCALDIA N° 009-2021-A/MDO', '1', '6048d09043003.pdf', '2021-03-10 08:58:40'),
(21, 'RESOLUCION DE ALCALDIA N° 010-2021-A/MDO', '1', '6048d09f48fad.pdf', '2021-03-10 08:58:55'),
(22, 'RESOLUCION DE ALCALDIA N° 011-2021-A/MDO', '1', '6048d0adcc699.pdf', '2021-03-10 08:59:09'),
(23, 'RESOLUCION DE ALCALDIA N° 012-2021-A/MDO', '1', '6048d0bcd960d.pdf', '2021-03-10 08:59:24'),
(24, 'RESOLUCION DE ALCALDIA N° 013-2021-A/MDO', '1', '6048d0ca85e90.pdf', '2021-03-10 08:59:38'),
(25, 'RESOLUCION DE ALCALDIA N° 014-2021-A/MDO', '1', '6048d0d9a5db6.pdf', '2021-03-10 08:59:53'),
(26, 'RESOLUCION DE ALCALDIA N° 015-2021-A/MDO', '1', '6048d0e8a0ce6.pdf', '2021-03-10 09:00:08'),
(27, 'RESOLUCION DE ALCALDIA N° 016-2021-A/MDO', '1', '6048d0f64cbc5.pdf', '2021-03-10 09:00:22'),
(28, 'RESOLUCION DE ALCALDIA N° 017-2021-A/MDO', '1', '6048d103ca9ec.pdf', '2021-03-10 09:00:35'),
(30, 'RESOLUCION DE ALCALDIA N° 018-2021-A/MDO', '1', '6048d1350a02f.pdf', '2021-03-10 09:01:25'),
(31, 'RESOLUCION DE ALCALDIA N° 019-2021-A/MDO', '1', '6048d144ef3a8.pdf', '2021-03-10 09:01:40'),
(32, 'RESOLUCION DE ALCALDIA N° 020-2021-A/MDO', '1', '6048d1e935322.pdf', '2021-03-10 09:04:25'),
(33, 'RESOLUCION DE ALCALDIA N° 020-2022-A/MDO', '1', '6048d1fa0ddc4.pdf', '2021-03-10 09:04:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `telefonos`
--

CREATE TABLE `telefonos` (
  `idtelefono` int(11) NOT NULL,
  `nombre` varchar(55) COLLATE utf8_spanish_ci NOT NULL,
  `numero` varchar(45) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `telefonos`
--

INSERT INTO `telefonos` (`idtelefono`, `nombre`, `numero`) VALUES
(9, 'Bomberos', '(01) 7545646'),
(10, 'Defensa Civil', '(01) 7545646'),
(11, 'Serenazgo', '936856258'),
(12, 'Policía Nacional', '(01) 7545646');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tramites`
--

CREATE TABLE `tramites` (
  `idtramite` int(11) NOT NULL,
  `codigo` varchar(15) COLLATE utf8_spanish_ci DEFAULT NULL,
  `doc_tipo` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `doc_nro` varchar(11) COLLATE utf8_spanish_ci NOT NULL,
  `solicitante` varchar(55) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `asunto` varchar(55) COLLATE utf8_spanish_ci NOT NULL,
  `destinatario` varchar(55) COLLATE utf8_spanish_ci NOT NULL,
  `estado` varchar(1) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` datetime NOT NULL,
  `url_document` varchar(35) COLLATE utf8_spanish_ci DEFAULT NULL,
  `areas_idarea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tramites`
--

INSERT INTO `tramites` (`idtramite`, `codigo`, `doc_tipo`, `doc_nro`, `solicitante`, `telefono`, `email`, `asunto`, `destinatario`, `estado`, `fecha`, `url_document`, `areas_idarea`) VALUES
(14, '3889913127', 'RUC', '20477906461', 'AUTORIDAD NACIONAL DEL SERVICIO CIVIL-SERVIR', '964435410', 'notificaciones@servir.gob.pe', 'NOTIFICACION DE OFICIO CIRCULAR-000001-2021-SERVIR-PE Y', 'OFICINA DE RRHH o la que haga sus veces.', '1', '2021-03-22 19:22:46', '605934d669387.pdf', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuario` int(11) NOT NULL,
  `privilegios` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `accesos` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `usuario` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `pass` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(85) COLLATE utf8_spanish_ci DEFAULT NULL,
  `correo` varchar(55) COLLATE utf8_spanish_ci DEFAULT NULL,
  `url_img` varchar(55) COLLATE utf8_spanish_ci DEFAULT NULL,
  `estado` varchar(5) COLLATE utf8_spanish_ci NOT NULL,
  `area_idarea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `privilegios`, `accesos`, `usuario`, `pass`, `nombre`, `correo`, `url_img`, `estado`, `area_idarea`) VALUES
(1, 'ADMINISTRADOR', '11111', 'admin', '09b5c20385f14087c037f052775cbee0bba0af88', 'Administrador', 'informatica.muniorcotuna@gmail.com', '', '1', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `anuncios`
--
ALTER TABLE `anuncios`
  ADD PRIMARY KEY (`idanuncio`);

--
-- Indices de la tabla `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`idarea`);

--
-- Indices de la tabla `convocatorias`
--
ALTER TABLE `convocatorias`
  ADD PRIMARY KEY (`idconvocatoria`);

--
-- Indices de la tabla `general`
--
ALTER TABLE `general`
  ADD PRIMARY KEY (`idgeneral`);

--
-- Indices de la tabla `historial`
--
ALTER TABLE `historial`
  ADD PRIMARY KEY (`idhistorial`),
  ADD KEY `fk_tramite_mov_tramites1_idx` (`tramites_idtramite`),
  ADD KEY `fk_tramite_mov_area1_idx` (`area_idarea`);

--
-- Indices de la tabla `logos`
--
ALTER TABLE `logos`
  ADD PRIMARY KEY (`idlogo`);

--
-- Indices de la tabla `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`idnoticia`);

--
-- Indices de la tabla `portadas`
--
ALTER TABLE `portadas`
  ADD PRIMARY KEY (`idportada`);

--
-- Indices de la tabla `resoluciones`
--
ALTER TABLE `resoluciones`
  ADD PRIMARY KEY (`idresolucion`);

--
-- Indices de la tabla `telefonos`
--
ALTER TABLE `telefonos`
  ADD PRIMARY KEY (`idtelefono`);

--
-- Indices de la tabla `tramites`
--
ALTER TABLE `tramites`
  ADD PRIMARY KEY (`idtramite`),
  ADD KEY `fk_tramites_areas1_idx` (`areas_idarea`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuario`),
  ADD KEY `fk_usuarios_area_idx` (`area_idarea`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `anuncios`
--
ALTER TABLE `anuncios`
  MODIFY `idanuncio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT de la tabla `areas`
--
ALTER TABLE `areas`
  MODIFY `idarea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `convocatorias`
--
ALTER TABLE `convocatorias`
  MODIFY `idconvocatoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `general`
--
ALTER TABLE `general`
  MODIFY `idgeneral` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `historial`
--
ALTER TABLE `historial`
  MODIFY `idhistorial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `logos`
--
ALTER TABLE `logos`
  MODIFY `idlogo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `noticias`
--
ALTER TABLE `noticias`
  MODIFY `idnoticia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `portadas`
--
ALTER TABLE `portadas`
  MODIFY `idportada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `resoluciones`
--
ALTER TABLE `resoluciones`
  MODIFY `idresolucion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `telefonos`
--
ALTER TABLE `telefonos`
  MODIFY `idtelefono` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `tramites`
--
ALTER TABLE `tramites`
  MODIFY `idtramite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `historial`
--
ALTER TABLE `historial`
  ADD CONSTRAINT `fk_tramite_mov_area1` FOREIGN KEY (`area_idarea`) REFERENCES `areas` (`idarea`),
  ADD CONSTRAINT `fk_tramite_mov_tramites1` FOREIGN KEY (`tramites_idtramite`) REFERENCES `tramites` (`idtramite`);

--
-- Filtros para la tabla `tramites`
--
ALTER TABLE `tramites`
  ADD CONSTRAINT `fk_tramites_areas1` FOREIGN KEY (`areas_idarea`) REFERENCES `areas` (`idarea`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_usuarios_area` FOREIGN KEY (`area_idarea`) REFERENCES `areas` (`idarea`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
