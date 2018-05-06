CREATE TABLE   IF NOT EXISTS  `nowplaying` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `poster` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `rating` varchar(10) DEFAULT 0,
  `info_url` varchar(255) DEFAULT NULL,
  `ticket_url` varchar(255) DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

-- INSERT INTO nowpalying (title, rating) VALUES ('houlaide', '5.9');

INSERT INTO `nowplaying` set title='a', rating='5.9', poster='https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2519994468.webp', info_url='https://movie.douban.com/subject/26683723/?from=playing_poster';
INSERT INTO `nowplaying` set title='b', rating='7.0', poster='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.webp', info_url='https://movie.douban.com/subject/26420932/?from=playing_poster';

-- INSERT INTO nowpalying (poster, title, rating, ticket_url, info_url) VALUES ('https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2519994468.webp', '后来的我们', '5.9', 'https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F343720%3F_v_%3Dyes%26merCode%3D1000011', 'https://movie.douban.com/subject/26683723/?from=playing_poster');

-- INSERT INTO `nowpalying` (`poster`, `title`, `rating`, `ticket_url`, `info_url`) VALUES ('https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.webp', '巴霍巴利王2：终结', '7.0', 'https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F342791%3F_v_%3Dyes%26merCode%3D1000011', 'https://movie.douban.com/subject/26420932/?from=playing_poster');

-- INSERT INTO <表名> [(字段名[,字段名]…)] VALUES (常量[,常量]…);