-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-01-2021 a las 05:18:56
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

--
-- Volcado de datos para la tabla `anuncios`
--

INSERT INTO `anuncios` (`idanuncio`, `nombre`, `url_img`, `inicio`, `fecha`, `referencia`) VALUES
(1, 'Anuncio 1', '5fd3e66bc836a.jpg', 0, '2020-12-30 00:19:47', ''),
(2, 'Anuncio 2', '5fd3e6dc802e0.jpg', 0, '2020-12-30 00:19:45', ''),
(3, 'Anuncio 3', '5fd3e6582e9f8.jpg', 0, '2020-12-30 00:19:43', ''),
(4, 'Anuncio 4', '5fd3e64c65ffe.jpg', 0, '2020-12-30 00:19:40', ''),
(5, 'Anuncio 5', '5fd3ec15b0ea7.jpg', 0, '2020-12-30 00:20:54', ''),
(103, 'Anuncio 6', '5fec0e0909e24.png', 1, '2020-12-30 00:23:50', '/convocatorias');

--
-- Volcado de datos para la tabla `areas`
--

INSERT INTO `areas` (`idarea`, `nombre_area`) VALUES
(1, 'Informática'),
(2, 'Mesa de Partes');

--
-- Volcado de datos para la tabla `convocatorias`
--

INSERT INTO `convocatorias` (`idconvocatoria`, `nombre`, `url_archivo`, `fecha`) VALUES
(7, 'PROCESO DE CONVOCATORIA DE PERSONAL CAS. 001-2021', '5febd08aca846.pdf', '2020-12-29 15:57:47'),
(8, 'ANEXOS DE CONVOCATORIA DE PERSONAL CAS. 001-2021', '5febd468ddaad.docx', '2020-12-29 16:03:16'),
(9, 'FE DE ERRATAS AL PROCESO DE CONVOCATORIA DE PERSONAL CAS. 001-2021 DE FECHA 29 DE DIC', '5ffc70e1b92a6.pdf', '2021-01-11 10:38:09'),
(11, 'RESULTADOS DE EVALUACIÓN CONVOCATORIA DE PERSONAL CAS 001-2021', '600afb0bd8886.pdf', '2021-01-22 11:19:24'),
(12, 'FE DE ERRATAS AL PROCESO DE CONVOCATORIA DE PERSONAL CAS. 001-2021 DE FECHA 29 DE DIC', '600b4efc1490f.pdf', '2021-01-22 17:17:32');

--
-- Volcado de datos para la tabla `general`
--

INSERT INTO `general` (`idgeneral`, `fecha`, `serial`, `active`) VALUES
(1, '2020-12-07 00:00:00', 'WFkZeLn25twPXU3thnyU', '1');

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`idnoticia`, `fecha`, `titulo`, `descripcion`, `url_img`) VALUES
(2, '2020-12-09 19:41:06', 'Trabajos de Formalización de Asociaciones de Productores Agropecuarios.', 'La Municipalidad Distrital de Orcotuna mediante la Gerencia de Desarrollo Económico y Social, realizó los trabajos de Formalización de Asociaciones de Productores Agropecuarios, en la que participaron: La Asociación de Productores Agropecuarios del Barrio San Marcos y La Asociación Agropecuaria Antinos-San Antonio.<br />El objetivo de la Formalización de Asociaciones de Productores Agropecuarios es mejorar las capacidades de organización, formalización y/o acceso a diversos proyectos que contribuirán en el desarrollo agropecuario del distrito de Orcotuna.', '5fd3e339c22bc.jpg'),
(3, '2020-12-10 16:21:09', 'Asistencia técnica en campos de productores agrícolas', 'La Municipalidad Distrital de Orcotuna en coordinación con la Agencia Agraria de Concepción y especialistas del Instituto Nacional de Innovación Agraria – Junín, realizaron la asistencia técnica en campo a los productores agrícolas con presencia de enfermedades en sus cultivos.', '5fd3e2c511740.jpg'),
(4, '2020-12-11 12:19:31', 'Municipalidad de Orcotuna CLVI Aniversario', 'En el mes del aniversario CLVI de creación política del Distrito de Orcotuna y como parte de los esfuerzos en la búsqueda de cierre de brechas tecnológicas que existen en nuestro distrito, el día 6 de noviembre, en las instalaciones del I.E.S.T.P. “Mario Gutierrez Lopez”, el alcalde Mario Grande Bueno y funcionarios hicieron la entrega de quince (15) equipos de cómputo adquiridos por la Municipalidad Distrital de Orcotuna, al señor Director Ronald Julián Vásquez Sovero y docentes del Instituto de Educación Superior Tecnológico Público “Mario Gutierrez Lopez”.<br />Cabe hacer mención que las computadoras donadas por la Municipalidad Distrital de Orcotuna están equipadas con velocidad de procesamiento y memoria RAM y compatibilidad con todos los programas y aplicativos necesarios para un mejor desarrollo educativo de los estudiantes y docentes.', '5fd3e23a938cc.jpg'),
(5, '2020-12-11 16:19:13', 'La Municipalidad Distrital de Orcotuna mediante la Gerencia de Desarrollo Económico y', 'Se realizaron más de cien (100) pruebas rápidas de descarte de COVID-19, que fue realizado por personal médico y asistencial del Centro Médico de Concepción.<br />Cabe mencionar que a todos aquellos pacientes que resultaron positivos se les entrego un kit de medicinas, además, los médicos de EsSalud indicaron que serán monitoreados constantemente.', '5fd3e1c90e6df.jpg');

--
-- Volcado de datos para la tabla `portadas`
--

INSERT INTO `portadas` (`idportada`, `nombre`, `titulo`, `descripcion`, `url_img`) VALUES
(2, 'Portada 1', '', '', '5ff89cbd7709b.png'),
(4, 'Portada 2', '', '', '5ff89b6336e55.jpg');

--
-- Volcado de datos para la tabla `resoluciones`
--

INSERT INTO `resoluciones` (`idresolucion`, `nombre`, `tipo`, `url_archivo`, `fecha`) VALUES
(7, 'ORDENANZA MUNICIPAL N° 001-2021-MDO', '3', '60069a93a36f6.pdf', '2021-01-19 03:38:43'),
(8, 'ORDENANZA MUNICIPAL N° 002-2021-MDO', '3', '60069aa5db00c.pdf', '2021-01-19 03:39:01');

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `privilegios`, `accesos`, `usuario`, `pass`, `nombre`, `correo`, `url_img`, `estado`, `area_idarea`) VALUES
(1, 'ADMINISTRADOR', '11111', 'admin', '09b5c20385f14087c037f052775cbee0bba0af88', 'Administrador', 'informatica.muniorcotuna@gmail.com', '', '1', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
