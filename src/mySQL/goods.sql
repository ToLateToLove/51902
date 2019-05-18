/*
Navicat MySQL Data Transfer

Source Server         : mydbs
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : 51902

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-05-18 15:02:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg', '荣耀Note10 全网通6G+128G幻夜黑 移动联通电信4G全面屏手机 游戏手机', '1299');
INSERT INTO `goods` VALUES ('2', '../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg', '华为 HUAWEI P30 8GB+128GB 亮黑色 全网通双4G手机', '4599');
INSERT INTO `goods` VALUES ('3', '../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg', '华为 HUAWEI Mate20 Pro (UD) 8GB+128GB翡冷翠全网通双4G手机', '2688');
INSERT INTO `goods` VALUES ('4', '../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg', '华为 HUAWEI Mate20 Pro 6GB+128GB极光色全网通版双4G手机', '3155');
INSERT INTO `goods` VALUES ('5', '../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg', '华为 HUAWEI Mate20 X 6GB+128GB幻影银全网通版双4G手机', '2399');
INSERT INTO `goods` VALUES ('6', '../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg', '华为 HUAWEI Mate20 X 6GB+128GB幻影银全网通版双4G手机', '2599');
INSERT INTO `goods` VALUES ('7', '../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg', '华为 HUAWEI Mate20 6GB+64GB亮黑色全网通版双4G手机', '2688');
INSERT INTO `goods` VALUES ('8', '../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg', '华为 HUAWEI Mate20 Pro 6GB+128GB亮黑色全网通版双4G手机', '3155');
INSERT INTO `goods` VALUES ('9', '../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg', '荣耀畅玩8C 全网通高配版 4GB+64GB 铂光金 移动联通电信4G全面屏手机 双卡双', '2399');
INSERT INTO `goods` VALUES ('10', '../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg', '荣耀Note10 全网通6G+128G幻夜黑 移动联通电信4G全面屏手机 游戏手机', '2599');
INSERT INTO `goods` VALUES ('11', '../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg', '华为 HUAWEI P30 8GB+128GB 亮黑色 全网通双4G手机', '2688');
INSERT INTO `goods` VALUES ('12', '../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg', '华为 HUAWEI Mate20 Pro (UD) 8GB+128GB翡冷翠全网通双4G手机', '3155');
INSERT INTO `goods` VALUES ('13', '../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg', '华为 HUAWEI Mate20 Pro 6GB+128GB极光色全网通版双4G手机', '4399');
INSERT INTO `goods` VALUES ('14', '../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg', '华为 HUAWEI Mate20 X 6GB+128GB幻影银全网通版双4G手机', '2599');
INSERT INTO `goods` VALUES ('15', '../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg', '华为 HUAWEI Mate20 X 6GB+128GB幻影银全网通版双4G手机', '4688');
INSERT INTO `goods` VALUES ('16', '../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg', '华为 HUAWEI Mate20 6GB+64GB亮黑色全网通版双4G手机', '3155');
INSERT INTO `goods` VALUES ('17', '../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg', '华为 HUAWEI Mate20 Pro 6GB+128GB亮黑色全网通版双4G手机', '2399');
INSERT INTO `goods` VALUES ('18', '../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg', '荣耀畅玩8C 全网通高配版 4GB+64GB 铂光金 移动联通电信4G全面屏手机 双卡双', '2599');
INSERT INTO `goods` VALUES ('19', '../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg', '荣耀Note10 全网通6G+128G幻夜黑 移动联通电信4G全面屏手机 游戏手机', '2688');
INSERT INTO `goods` VALUES ('20', '../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg', '华为 HUAWEI P30 8GB+128GB 亮黑色 全网通双4G手机', '3155');
INSERT INTO `goods` VALUES ('21', '../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg', '华为 HUAWEI Mate20 Pro (UD) 8GB+128GB翡冷翠全网通双4G手机', '3399');
INSERT INTO `goods` VALUES ('22', '../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg', '华为 HUAWEI Mate20 Pro 6GB+128GB极光色全网通版双4G手机', '2599');
INSERT INTO `goods` VALUES ('23', '../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg', '华为 HUAWEI Mate20 X 6GB+128GB幻影银全网通版双4G手机', '2688');
INSERT INTO `goods` VALUES ('24', '../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg', '华为 HUAWEI Mate20 X 6GB+128GB幻影银全网通版双4G手机', '3155');
INSERT INTO `goods` VALUES ('25', '../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg', '华为 HUAWEI Mate20 6GB+64GB亮黑色全网通版双4G手机', '2399');
INSERT INTO `goods` VALUES ('26', '../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg', '华为 HUAWEI Mate20 Pro 6GB+128GB亮黑色全网通版双4G手机', '2599');
INSERT INTO `goods` VALUES ('27', '../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg', '荣耀畅玩8C 全网通高配版 4GB+64GB 铂光金 移动联通电信4G全面屏手机 双卡双', '2688');
INSERT INTO `goods` VALUES ('28', '../img/A28-6RV-888.jpg&../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg', '华为 HUAWEI P30 8GB+128GB 亮黑色 全网通双4G手机', '3155');
INSERT INTO `goods` VALUES ('29', '../img/A28-6RV-889.jpg&../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg', '华为 HUAWEI Mate20 Pro (UD) 8GB+128GB翡冷翠全网通双4G手机', '3499');
INSERT INTO `goods` VALUES ('30', '../img/A28-043-8DC.jpg&../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg', '华为 HUAWEI Mate20 Pro 6GB+128GB极光色全网通版双4G手机', '3788');
INSERT INTO `goods` VALUES ('31', '../img/A28-6RV-86K.jpg&../img/A28-6RV-86L_02.jpg&../img/A28-6RV-86M.jpg&../img/A28-6RV-888.jpg', '华为 HUAWEI Mate20 Pro (UD) 8GB+128GB翡冷翠全网通双4G手机', '3499');
SET FOREIGN_KEY_CHECKS=1;
