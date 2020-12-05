-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: adidas
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `billdetail`
--

DROP TABLE IF EXISTS `billdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billdetail` (
  `billId` int NOT NULL,
  `productId` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `price` float NOT NULL,
  `keepBox` tinyint(1) NOT NULL DEFAULT '1',
  `link` varchar(255) DEFAULT NULL,
  `code` float DEFAULT '0',
  `webFee` float DEFAULT '0',
  `total` float DEFAULT '0',
  PRIMARY KEY (`billId`,`productId`),
  CONSTRAINT `billdetail_ibfk_1` FOREIGN KEY (`billId`) REFERENCES `bills` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billdetail`
--

LOCK TABLES `billdetail` WRITE;
/*!40000 ALTER TABLE `billdetail` DISABLE KEYS */;
INSERT INTO `billdetail` VALUES (1,'MKF-22.5',1,1000,1,'gmail.com',0.5,1000,1000000);
/*!40000 ALTER TABLE `billdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bills`
--

DROP TABLE IF EXISTS `bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bills` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `reservationId` int DEFAULT NULL,
  `createdDate` datetime NOT NULL,
  `receiveDate` datetime DEFAULT NULL,
  `status` int NOT NULL,
  `deposit` float DEFAULT '0',
  `exchangeRate` float DEFAULT '0',
  `shipFee` float DEFAULT '0',
  `surcharge` float DEFAULT '0',
  `brand` varchar(255) NOT NULL,
  `note` text,
  `weight` float DEFAULT '0',
  `unitPrice` float DEFAULT '0',
  `helpFee` float DEFAULT '0',
  `billName` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `reservationId` (`reservationId`),
  CONSTRAINT `bills_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `bills_ibfk_2` FOREIGN KEY (`reservationId`) REFERENCES `reservations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bills`
--

LOCK TABLES `bills` WRITE;
/*!40000 ALTER TABLE `bills` DISABLE KEYS */;
INSERT INTO `bills` VALUES (1,2,NULL,'2019-10-28 04:34:41',NULL,2,0,100,10000,0,'adidas-jp',NULL,0,0,1,'');
/*!40000 ALTER TABLE `bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exchanges`
--

DROP TABLE IF EXISTS `exchanges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exchanges` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` int NOT NULL,
  `createdDate` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exchanges`
--

LOCK TABLES `exchanges` WRITE;
/*!40000 ALTER TABLE `exchanges` DISABLE KEYS */;
/*!40000 ALTER TABLE `exchanges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservationdetail`
--

DROP TABLE IF EXISTS `reservationdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservationdetail` (
  `reservationId` int NOT NULL,
  `productId` varchar(255) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `quantity` int NOT NULL,
  `keepBox` int NOT NULL,
  `price` float DEFAULT '0',
  `code` float DEFAULT '0',
  `webFee` float DEFAULT '0',
  PRIMARY KEY (`reservationId`,`productId`),
  CONSTRAINT `reservationdetail_ibfk_1` FOREIGN KEY (`reservationId`) REFERENCES `reservations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservationdetail`
--

LOCK TABLES `reservationdetail` WRITE;
/*!40000 ALTER TABLE `reservationdetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservationdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `createdDate` datetime NOT NULL,
  `yenAmount` float DEFAULT '0',
  `wayBillCode` varchar(255) DEFAULT NULL,
  `deposit` float DEFAULT '0',
  `exchangeRate` float DEFAULT '0',
  `status` int NOT NULL,
  `note` text,
  `brand` varchar(255) NOT NULL,
  `finishedDate` datetime DEFAULT NULL,
  `weight` float DEFAULT '0',
  `unitPrice` float DEFAULT '0',
  `orderEmail` varchar(255) DEFAULT NULL,
  `reservationName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stoke`
--

DROP TABLE IF EXISTS `stoke`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stoke` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` varchar(255) NOT NULL,
  `quantity` int NOT NULL DEFAULT '0',
  `stokePrice` float NOT NULL DEFAULT '0',
  `sold` int DEFAULT '0',
  `link` varchar(255) DEFAULT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `retailPrice` float DEFAULT '0',
  `wholesale` float DEFAULT '0',
  `reservationId` int NOT NULL,
  `orderEmail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reservationId` (`reservationId`),
  CONSTRAINT `stoke_ibfk_1` FOREIGN KEY (`reservationId`) REFERENCES `reservations` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stoke`
--

LOCK TABLES `stoke` WRITE;
/*!40000 ALTER TABLE `stoke` DISABLE KEYS */;
/*!40000 ALTER TABLE `stoke` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `surburbship`
--

DROP TABLE IF EXISTS `surburbship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `surburbship` (
  `id` int NOT NULL AUTO_INCREMENT,
  `seperatedCode` varchar(255) DEFAULT NULL,
  `billId` int NOT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `quantity` int NOT NULL DEFAULT '0',
  `weight` float NOT NULL DEFAULT '0',
  `routeType` int DEFAULT '0',
  `remainingMoney` int DEFAULT '0',
  `receiverName` varchar(255) DEFAULT NULL,
  `receiverPhone` varchar(255) DEFAULT NULL,
  `generalAddress` varchar(255) DEFAULT NULL,
  `detailAddress` varchar(255) DEFAULT NULL,
  `isNightShip` int DEFAULT '0',
  `freeShip` int DEFAULT '0',
  `premiumValue` float DEFAULT '0',
  `isGetNight` int DEFAULT '0',
  `note` varchar(255) DEFAULT NULL,
  `createdDate` datetime NOT NULL,
  `status` int NOT NULL DEFAULT '6',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `surburbship`
--

LOCK TABLES `surburbship` WRITE;
/*!40000 ALTER TABLE `surburbship` DISABLE KEYS */;
/*!40000 ALTER TABLE `surburbship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `urbanship`
--

DROP TABLE IF EXISTS `urbanship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `urbanship` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `billId` int NOT NULL,
  `remainingMoney` int NOT NULL,
  `shipFee` int NOT NULL DEFAULT '0',
  `supplementalShip` int DEFAULT '0',
  `note` varchar(255) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `receiverName` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `status` int NOT NULL,
  `createdDate` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `urbanship_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `urbanship`
--

LOCK TABLES `urbanship` WRITE;
/*!40000 ALTER TABLE `urbanship` DISABLE KEYS */;
/*!40000 ALTER TABLE `urbanship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `generalAddress` text,
  `detailAddress` text,
  `role` varchar(255) NOT NULL,
  `fbId` varchar(255) DEFAULT NULL,
  `fbToken` varchar(255) DEFAULT NULL,
  `exchangeOdds` int DEFAULT '0',
  `helpFee` float DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'$2a$13$7S/KtCUzXUoFRQUY2fd8AeUSgrBCsDWfnsmazswSfoyDUHvwdRMpa','admin','0968411655',NULL,NULL,'admin',NULL,NULL,0,1),(2,'$2a$13$u9/0C4qvRR9h3Ne7kCXHdOx.AjHdhhWT/HQ/9fwjdGHNbcuBYnVt.','client1','0944334554','ha noi','ngo 190','client',NULL,NULL,0,1),(3,'anhyeuem','trach1','0981349672','trach1@gmail.com','so93','4',NULL,NULL,0,1),(4,'123456','trach2','0988337223','trach2@gmail.com','so 92','4',NULL,NULL,0,1),(5,'$2a$14$LCb3K.91qarTZ.nWNPxoFeN9oD//Oz9HqBRiMuA9dgX5gPYmklLYS','trachpro','0998774833','trachpro@gmail.com','so 89','admin',NULL,NULL,0,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-05 11:07:31
