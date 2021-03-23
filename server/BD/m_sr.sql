-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: muni_sanra
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
-- Table structure for table `logos`
--

DROP TABLE IF EXISTS `logos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logos` (
  `idlogo` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `url_img` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`idlogo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logos`
--

LOCK TABLES `logos` WRITE;
/*!40000 ALTER TABLE `logos` DISABLE KEYS */;
/*!40000 ALTER TABLE `logos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portadas`
--

DROP TABLE IF EXISTS `portadas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `portadas` (
  `idportada` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `titulo` varchar(75) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `descripcion` text CHARACTER SET utf8 COLLATE utf8_spanish_ci,
  `url_img` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`idportada`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portadas`
--

LOCK TABLES `portadas` WRITE;
/*!40000 ALTER TABLE `portadas` DISABLE KEYS */;
INSERT INTO `portadas` VALUES (89,'Portada 1','RENOVACIÓN DEL MURO DE CONTENCIÓN DE LA I.E.I JUAN SANTOS ATAHUALPA',' La Municipalidad Distrital de San Ramón en coordinación con la Gerencia de Desarrollo Urbano y Rural vienen monitoreando los trabajos de la obra por gestión del Alcade Dubal Olano ante el Fondo Para Intervenciones ante la Ocurrencia de Desastres Naturales – FONDES, Renovación del Muro de Contención de la Institución Educativa Juan Santos Atahualpa, la cual tiene un presupuesto de S/. 1, 343, 800.00. ','5f7d5cded81c3.jpg'),(90,'Portada 2','MANTENIMIENTO DE LA AV. SAN GERMÁN - URB. LOS ROSALES',' Como parte de las actividades programadas, la Municipalidad Distrital de San Ramón en coordinación con la Sub Gerencia de Maquinarias viene realizando el mantenimiento de las vías urbanas del distrito, para ello se dispuso maquinaria para esta actividad.\nEste trabajo se está realizando para mejorar la transitabilidad vehicular y peatonal de los vecinos de la Av. San Germán de la Urb. Los Rosales; los cuales se sienten agradecidos por este apoyo al Alcalde Dubal Olano. ','5f7d5d1c0a1ae.jpg'),(91,'Portada 3','MANTENIMIENTO DE VIAS RURALES, ENSANCHAMIENTO Y APERTURA DE CARRETERAS',' Estas semanas se vienen realizando en coordinación con la Sub Gerencia de Maquinarias de la Municipalidad Distrital de San Ramón,los trabajos de mantenimiento de vías, ensanchamiento de las carreteras y aperturas de nuevas carreteras, de la Micro-cuenca de Naranjal en los anexos de Huarango y alto Huarango. ','5f7d5d73b5992.jpg');
/*!40000 ALTER TABLE `portadas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tramites`
--

DROP TABLE IF EXISTS `tramites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tramites` (
  `idtramite` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(15) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `doc_tipo` varchar(10) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `doc_nro` varchar(11) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `solicitante` varchar(55) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(15) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `asunto` varchar(55) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `destinatario` varchar(55) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `estado` varchar(1) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `fecha` datetime NOT NULL,
  `url_document` varchar(35) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`idtramite`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tramites`
--

LOCK TABLES `tramites` WRITE;
/*!40000 ALTER TABLE `tramites` DISABLE KEYS */;
INSERT INTO `tramites` VALUES (1,NULL,'DNI','76310943','Antony Arias de la Cruz','963532608','antony_hbk@hotmail.com','Solicitud de acceso a la informacion publica','Oficina de informatica','1','0000-00-00 00:00:00',NULL),(2,NULL,'DNI','76310943','hbk','865465','antony_hbk@hotmail.com','asdads','of. asdasd','0','0000-00-00 00:00:00',NULL),(3,NULL,'DNI','56465465','asdasd','46545','','asdgsdgdsg','vvxcvx','0','0000-00-00 00:00:00','5f519e6e75eb3.pdf'),(4,NULL,'DNI','345345345','dgdfg','dfgdfg','zlantonyhbklz@gmail.com','dfgfdg','dfgfdg','0','0000-00-00 00:00:00',NULL),(5,NULL,'DNI','345345345','dgdfg','dfgdfg','zlantonyhbklz@gmail.com','dfgfdg','dfgfdg','0','0000-00-00 00:00:00','5f51a148b45cc.pdf'),(6,NULL,'DNI','345345345','dgdfg','dfgdfg','zlantonyhbklz@gmail.com','dfgfdg','dfgfdg','0','0000-00-00 00:00:00',NULL),(7,NULL,'DNI','345345345','dgdfg','dfgdfg','zlantonyhbklz@gmail.com','dfgfdg','dfgfdg','0','0000-00-00 00:00:00','5f51a2a870469.docx'),(8,NULL,'DNI','11111111','1111','111','antony_hbk@hotmail.com','1111','213asf','0','0000-00-00 00:00:00','5f51a420b7344.docx'),(9,NULL,'RUC','55555555','gergerg','egrerger','gerge','rger','gerg','1','0000-00-00 00:00:00','5f51a5535a515.doc'),(10,NULL,'DNI','234324324','sfdfs','sdfsdf','sdfs','fsdf','sdfsd','1','0000-00-00 00:00:00',NULL),(11,NULL,'DNI','6656456456','ertetert','ete','antony_hbk@hotmail.com','twetwet','wtwtewt','1','0000-00-00 00:00:00','5f51a913acd1d.pdf'),(12,NULL,'DNI','23432423','fsf','sdf','sdfs','sd','sdfsdf','1','0000-00-00 00:00:00','5f51aa0bb3750.docx'),(13,NULL,'DNI','dqwdqwdqwdq','qwdwqdqd','qwdqwd','wqdqwd','qwdqwd','qwdqwd','2','0000-00-00 00:00:00','5f51aa9d17c5a.pdf'),(14,NULL,'DNI','1123123132','daasdasd','213123213','zlantonyhbklz@gmail.com','asdasd','asdasd','1','0000-00-00 00:00:00','5f51ab4c4723e.pdf'),(15,'2063664051','DNI','12312323','aqsdas','dasd','asd','asd','asd','0','2020-09-04 00:09:21',NULL),(16,'885902141','DNI','12312323','aqsdas','dasd','asd','asd','asd','0','2020-09-04 00:09:59',NULL),(17,'2037390816','DNI','asdasddasd','asd','asd','asd','asd','asd','0','2020-09-04 00:11:59',NULL),(18,'347628715','DNI','asdasd123','123','1','3123','adsd','3123','0','2020-09-04 00:17:34',NULL),(19,'817137090','DNI','2313123213','ads','asd','asd','asda','sdasd','0','2020-09-04 00:18:12',NULL),(20,'88099422','DNI','123213213','asdasd','adasd','asda','adsd','asdad','2','2020-09-04 00:18:54',NULL),(21,'1857387057','DNI','ereregerber','bere','berbe','rberb','erber','berbre','0','2020-09-04 00:20:15',NULL),(22,'270538093','DNI','32424324','asdasd','asd','asdasd','asdasd','asdasd','1','2020-09-04 00:20:56',NULL);
/*!40000 ALTER TABLE `tramites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `privilegios` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `usuario` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `pass` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(55) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `url_foto` varchar(55) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `estado` varchar(5) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'ADMIN','admin','admin',NULL,NULL,'1');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-07  1:30:35
