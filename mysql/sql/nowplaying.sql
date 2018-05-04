CREATE TABLE   IF NOT EXISTS  `nowpalying` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `poster` varchar DEFAULT NULL,
  `title` varchar NOT NULL,
  `rating` varchar DEFAULT 0,
  `info_url` varchar DEFAULT NULL,
  `ticket_url` varchar DEFAULT NULL,
  `create_time` varchar(20) DEFAULT NULL,
  `modified_time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

INSERT INTO `nowpalying` set poster='https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2519994468.webp', title='后来的我们', rating=5.9, ticket_url='https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F343720%3F_v_%3Dyes%26merCode%3D1000011', info_url='https://movie.douban.com/subject/26683723/?from=playing_poster';
INSERT INTO `nowpalying` set poster='https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.webp', title='巴霍巴利王2：终结', rating=7.0, ticket_url='https://movie.douban.com/ticket/redirect/?url=https%3A%2F%2Fm.maoyan.com%2Fcinema%2Fmovie%2F342791%3F_v_%3Dyes%26merCode%3D1000011', info_url='https://movie.douban.com/subject/26420932/?from=playing_poster';