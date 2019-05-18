/*
Navicat MySQL Data Transfer

Source Server         : mydbs
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : 51902

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-05-18 15:02:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodscar
-- ----------------------------
DROP TABLE IF EXISTS `goodscar`;
CREATE TABLE `goodscar` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodscar
-- ----------------------------
INSERT INTO `goodscar` VALUES ('10', '15501132346', '荣耀Note10 全网通6G+128G幻夜黑 移动联通电信4G全面屏手机 游戏手机', '2599', '../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg');
INSERT INTO `goodscar` VALUES ('1', '15501132346', '荣耀Note10 全网通6G+128G幻夜黑 移动联通电信4G全面屏手机 游戏手机', '2399', '../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg');
SET FOREIGN_KEY_CHECKS=1;
