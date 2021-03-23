-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: muni_orcotuna
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `anuncios`
--

DROP TABLE IF EXISTS `anuncios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anuncios` (
  `idanuncio` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(75) COLLATE utf8_spanish_ci DEFAULT NULL,
  `url_img` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `inicio` tinyint(1) NOT NULL,
  `fecha` datetime NOT NULL,
  `referencia` varchar(85) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`idanuncio`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `areas`
--

DROP TABLE IF EXISTS `areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `areas` (
  `idarea` int NOT NULL AUTO_INCREMENT,
  `nombre_area` varchar(85) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`idarea`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `convocatorias`
--

DROP TABLE IF EXISTS `convocatorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `convocatorias` (
  `idconvocatoria` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(85) COLLATE utf8_spanish_ci NOT NULL,
  `url_archivo` varchar(75) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`idconvocatoria`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `general`
--

DROP TABLE IF EXISTS `general`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `general` (
  `idgeneral` int NOT NULL AUTO_INCREMENT,
  `fecha` datetime NOT NULL,
  `serial` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `active` varchar(2) COLLATE utf8_spanish_ci DEFAULT NULL,
  `alcalde` varchar(85) COLLATE utf8_spanish_ci DEFAULT NULL,
  `correo` varchar(75) COLLATE utf8_spanish_ci DEFAULT NULL,
  `telefono` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `telefono_1` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `telefono_2` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `telefono_3` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `telefono_4` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `url_img` varchar(75) COLLATE utf8_spanish_ci DEFAULT NULL,
  `telefono_lb1` varchar(65) COLLATE utf8_spanish_ci DEFAULT NULL,
  `telefono_lb2` varchar(65) COLLATE utf8_spanish_ci DEFAULT NULL,
  `telefono_lb3` varchar(65) COLLATE utf8_spanish_ci DEFAULT NULL,
  `telefono_lb4` varchar(65) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`idgeneral`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `historial`
--

DROP TABLE IF EXISTS `historial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historial` (
  `idhistorial` int NOT NULL AUTO_INCREMENT,
  `fecha_mov` datetime NOT NULL,
  `estado_mov` varchar(1) COLLATE utf8_spanish_ci NOT NULL,
  `observaciones` text COLLATE utf8_spanish_ci,
  `tramites_idtramite` int NOT NULL,
  `area_idarea` int NOT NULL,
  PRIMARY KEY (`idhistorial`),
  KEY `fk_tramite_mov_tramites1_idx` (`tramites_idtramite`),
  KEY `fk_tramite_mov_area1_idx` (`area_idarea`),
  CONSTRAINT `fk_tramite_mov_area1` FOREIGN KEY (`area_idarea`) REFERENCES `areas` (`idarea`),
  CONSTRAINT `fk_tramite_mov_tramites1` FOREIGN KEY (`tramites_idtramite`) REFERENCES `tramites` (`idtramite`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `logos`
--

DROP TABLE IF EXISTS `logos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logos` (
  `idlogo` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `url_img` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`idlogo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `noticias`
--

DROP TABLE IF EXISTS `noticias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `noticias` (
  `idnoticia` int NOT NULL AUTO_INCREMENT,
  `fecha` datetime NOT NULL,
  `titulo` varchar(85) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci,
  `url_img` varchar(75) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`idnoticia`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `portadas`
--

DROP TABLE IF EXISTS `portadas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `portadas` (
  `idportada` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `titulo` text COLLATE utf8_spanish_ci,
  `descripcion` text COLLATE utf8_spanish_ci,
  `url_img` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`idportada`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resoluciones`
--

DROP TABLE IF EXISTS `resoluciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resoluciones` (
  `idresolucion` int NOT NULL AUTO_INCREMENT,
  `nombre` text COLLATE utf8_spanish_ci NOT NULL,
  `tipo` varchar(5) COLLATE utf8_spanish_ci NOT NULL,
  `url_archivo` varchar(75) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha` datetime NOT NULL,
  PRIMARY KEY (`idresolucion`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tramites`
--

DROP TABLE IF EXISTS `tramites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tramites` (
  `idtramite` int NOT NULL AUTO_INCREMENT,
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
  `areas_idarea` int NOT NULL,
  PRIMARY KEY (`idtramite`),
  KEY `fk_tramites_areas1_idx` (`areas_idarea`),
  CONSTRAINT `fk_tramites_areas1` FOREIGN KEY (`areas_idarea`) REFERENCES `areas` (`idarea`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `privilegios` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `accesos` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `usuario` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `pass` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(85) COLLATE utf8_spanish_ci DEFAULT NULL,
  `correo` varchar(55) COLLATE utf8_spanish_ci DEFAULT NULL,
  `url_img` varchar(55) COLLATE utf8_spanish_ci DEFAULT NULL,
  `estado` varchar(5) COLLATE utf8_spanish_ci NOT NULL,
  `area_idarea` int NOT NULL,
  PRIMARY KEY (`idusuario`),
  KEY `fk_usuarios_area_idx` (`area_idarea`),
  CONSTRAINT `fk_usuarios_area` FOREIGN KEY (`area_idarea`) REFERENCES `areas` (`idarea`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-24  0:17:11
