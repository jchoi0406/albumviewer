-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: albumdatabase
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `albums` (
  `id` varchar(32) NOT NULL,
  `albumName` varchar(100) NOT NULL,
  `albumRating` float DEFAULT NULL,
  `albumReview` varchar(2048) DEFAULT NULL,
  `albumArtist` varchar(45) NOT NULL,
  `albumCover` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES ('0vNBQof86Lv5gLuf26ML7o','Kill \'Em All (Remastered)',7.5,'This is a really fun album to listen to especially when training at the gym. The riffs are incredible, the solos are like lightning, and makes you feel pumped up and energized. The overall sound of the album is very raw, which is expected for a debut album. The only minor issue I have with this album is that it isn\'t versatile with its sound. There isn\'t a lot of experimenting overall which makes the album sound a bit repetitive. But overall, it is a great album and is an incredible feat for a debut album.','Metallica','https://i.scdn.co/image/ab67616d00001e0220292e6cce666a69ba5a86fb'),('1fvWYcbjuycyHpzNPH1Vfk','10,000 Days',4,'efefefef','TOOL','https://i.scdn.co/image/ab67616d00001e02781369aabc39c792cc55604f'),('21xp7NdU1ajmO1CX0w2Egd','Ants From Up There',10,'I usually don\'t get emotional over music, but this album is one of the best albums I\'ve listened to. I think the main reason the album made me feel emotional is because of Isaac\'s singing and his lyricism. \n\nOne of my favourite metaphors he uses is on the third track, \"Concorde\", where Isaac describes himself as a \"gentle hill racer\", climbing every mountain to see a glimpse of a Concorde racing past him. From the point of view of the Concorde (his love interest), the \"gentle hill racer\" is insignificant and almost invisible, and Isaac is just an \"Ant From Up there\". \n\nI like how Isaac uses his unique voice to add texture and context. He sounds frail and tired on some of the earlier tracks as if he\'s had enough of this one-sided relationship. On tracks like \"Snow Globes\", \"The Place Where He Inserted the Blade\", and \"Basketball Shoes\", he sounds like he\'s pulling out all the built-up emotion from this knowingly-failing relationship and finally letting go. \n\nThis album is a work of art, and I cannot begin to explain how beautiful, grand and emotional this is. The album is perfect front-to-back and one of my favourite albums of all time.','Black Country, New Road','https://i.scdn.co/image/ab67616d00001e02af2d88c14cb157d6b851dbb3'),('2k8KgmDp9oHrmu0MIj4XDE','Is This It',NULL,'This is a very casual, fun, album that I listen to when I\'m driving or just want something fun to listen to. Julian Casablancas talks about his daily relationship struggles ','The Strokes','https://i.scdn.co/image/ab67616d00001e0213f2466b83507515291acce4'),('3GH4IiI6jQAIvnHVdb5FB6','Loveless',NULL,NULL,'my bloody valentine','https://i.scdn.co/image/ab67616d00001e020ede770070357575bc050511'),('4YACrpVtdpoFocBPBeLbzO','Symbolic',NULL,NULL,'Death','https://i.scdn.co/image/ab67616d00001e0270b273d5264949f3ca70513e'),('5B4PYA7wNN4WdEXdIJu58a','Ten',9,'This is the album that got me into grunge, and music from the 90\'s. This is highly regarded as one of the best debut albums of all time, and is definitely Pearl Jam\'s best record. This was a great transition from me who at that point in time largely listened to 80\'s music. Unlike 80\'s music, the album feels more relatable and raw, in a good way. A lot of people don\'t like Eddie Vedder\'s vocal style in general but I adore it and I think it fits perfectly to the songs. The instrumentation of this album is excellent, and it ','Pearl Jam','https://i.scdn.co/image/ab67616d00001e02d400d27cba05bb0545533864'),('5EyIDBAqhnlkAHqvPRwdbX','Led Zeppelin IV (Remaster)',0,'','Led Zeppelin','https://i.scdn.co/image/ab67616d00001e024509204d0860cc0cc67e83dc'),('5gzLOflH95LkKYE6XSXE9k','Master of Puppets (Remastered)',10,'aaaaaaaaaaaaaaa','Metallica','https://i.scdn.co/image/ab67616d00001e022127e0afac383fb73d533a7d'),('5vkqYmiPBYLaalcmjujWxK','In Rainbows',0,'','Radiohead','https://i.scdn.co/image/ab67616d00001e02de3c04b5fc750b68899b20a9'),('6CgovAEZi7MSQJ79CDNzEb','I Want to Be There',0,'','Sadness','https://i.scdn.co/image/ab67616d00001e02b43e87fb91979aabf1864c0c'),('6dVIqQ8qmQ5GBnJ9shOYGE','OK Computer',0,'','Radiohead','https://i.scdn.co/image/ab67616d00001e02c8b444df094279e70d0ed856'),('6QaVfG1pHYl1z15ZxkvVDW','Sgt. Pepper\'s Lonely Hearts Club Band (Remastered)',0,'','The Beatles','https://i.scdn.co/image/ab67616d00001e0234ef8f7d06cf2fc2146f420a'),('7wOOA7l306K8HfBKfPoafr','In Utero - 20th Anniversary Remaster',0,'','Nirvana','https://i.scdn.co/image/ab67616d00001e02c4f52ef8782f0e8ede4c1aaf');
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-14 21:35:17
