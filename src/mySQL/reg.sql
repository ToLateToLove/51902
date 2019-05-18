/*
Navicat MySQL Data Transfer

Source Server         : mydbs
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : 51902

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-05-18 15:03:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for reg
-- ----------------------------
DROP TABLE IF EXISTS `reg`;
CREATE TABLE `reg` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `psw` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reg
-- ----------------------------
INSERT INTO `reg` VALUES ('1', '15501132341', '123456');
INSERT INTO `reg` VALUES ('7', '15501132342', '123456');
INSERT INTO `reg` VALUES ('8', '15501132340', '123456');
INSERT INTO `reg` VALUES ('9', '15501132344', '123456');
INSERT INTO `reg` VALUES ('10', '15501132345', '123456');
INSERT INTO `reg` VALUES ('11', '15501132343', '123456');
INSERT INTO `reg` VALUES ('12', '15501132346', '123456');
INSERT INTO `reg` VALUES ('13', '15501132347', '123456');
INSERT INTO `reg` VALUES ('14', '15501132348', '123456');
INSERT INTO `reg` VALUES ('15', '15501132349', '123456');
SET FOREIGN_KEY_CHECKS=1;
